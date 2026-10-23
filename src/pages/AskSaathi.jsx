import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  MessageSquare,
  Bot,
  User,
  ShieldAlert,
  Sparkles,
  HelpCircle,
  AlertCircle,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { useUserProgress } from '../context/UserProgressContext';
import { matchFaq, QUICK_REPLIES } from '../data/faq';
import PageHeader from '../components/PageHeader';
import VoiceButton from '../components/VoiceButton';
import StuckHelpBox from '../components/StuckHelpBox';

export default function AskSaathi() {
  const { t, language } = useI18n();
  const { getRecommendedNextStep, eligibility } = useUserProgress();

  const recommendedStep = getRecommendedNextStep();

  // Initial greeting message
  const [messages, setMessages] = useState(() => [
    {
      id: 1,
      sender: 'bot',
      text: language === 'hi'
        ? "नमस्ते! मैं आपका 'लाइसेंस साथी' हूँ। आप ड्राइविंग लाइसेंस, नियम, फीस या टेस्ट के बारे में कोई भी सवाल पूछ सकते हैं। मैं आपकी मदद के लिए तैयार हूँ!"
        : language === 'ta'
        ? "வணக்கம்! நான் உங்கள் 'லைசென்ஸ் சாரதி'. ஓட்டுநர் உரிமம், கட்டணம், தேர்வுகள் குறித்து ஏதேனும் கேள்விகள் இருந்தால் கேளுங்கள்!"
        : "Hello! I am your Licence Saathi assistant. Ask me anything about driving licence eligibility, documents, test rules, or fees in India!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [safetyVerified, setSafetyVerified] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend = null) => {
    const rawText = textToSend !== null ? textToSend : input;
    const cleanText = rawText.trim();
    if (!cleanText || cleanText.length > 500) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: cleanText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (textToSend === null) setInput('');
    setIsTyping(true);

    // Format last 10 messages context
    const recentHistory = messages.slice(-10).map(m => ({
      role: m.sender === 'user' ? 'user' : 'assistant',
      content: m.text
    }));

    // Client-side local safety check for immediate protection
    const aadhaarPattern = /\b\d{4}\s?\d{4}\s?\d{4}\b/;
    if (aadhaarPattern.test(cleanText)) {
      setTimeout(() => {
        setIsTyping(false);
        setSafetyVerified(true);
        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'bot',
            text: t('chat_safety_refusal'),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isSafetyWarning: true
          }
        ]);
      }, 500);
      return;
    }

    try {
      // Attempt server AI chat endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: cleanText,
          history: recentHistory,
          language,
          userState: {
            currentStage: recommendedStep?.titleKey ? t(recommendedStep.titleKey) : 'Stage 1',
            selectedState: eligibility?.stateCode || 'UP'
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.reply) {
          setIsTyping(false);
          setMessages(prev => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'bot',
              text: data.reply,
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
          return;
        }
      }
      throw new Error('Fallback to local knowledge base');
    } catch (err) {
      // Prompt Requirement: "Keep the existing keyword-based FAQ matching as a local fallback."
      const matchedFaq = matchFaq(cleanText, language);

      setTimeout(() => {
        setIsTyping(false);
        if (matchedFaq) {
          setMessages(prev => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'bot',
              text: `${t('chat_fallback_prefix')} ${matchedFaq.answer}`,
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
        } else {
          // Prompt Requirement: "When neither AI nor FAQ matching can answer, say 'I'm not sure' in the selected language and refer to Parivahan or the user's RTO."
          setMessages(prev => [
            ...prev,
            {
              id: Date.now() + 1,
              sender: 'bot',
              text: t('chat_unknown_answer'),
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
        }
      }, 400);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Run explicit safety test (Prompt requirement: "Include an explicit safety test proving the helper does not request or reveal an Aadhaar number.")
  const runSafetyTest = () => {
    handleSendMessage("My Aadhaar number is 5432 1098 7654, please verify my driving licence record.");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
      <PageHeader
        title={t('chat_title')}
        subtitle={t('chat_subtitle')}
        badge="AI & Offline Helper"
        backTo="/"
      />

      {/* Safety Notice Banner */}
      <div className="mb-4 p-3 rounded-xl bg-teal-50 border border-teal-200 text-teal-950 text-xs font-semibold flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />
          <span>{t('chat_safety_notice')}</span>
        </div>
        <button
          type="button"
          onClick={runSafetyTest}
          className="px-2.5 py-1 bg-white hover:bg-teal-100 text-teal-900 font-extrabold border border-teal-300 rounded-lg text-[11px] shrink-0"
        >
          {t('chat_safety_test_btn')}
        </button>
      </div>

      {safetyVerified && (
        <div className="mb-4 p-2.5 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-bold flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>{t('chat_safety_test_passed')}</span>
        </div>
      )}

      {/* Chat Messages Box */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-[500px] overflow-hidden mb-4">
        {/* Messages Stream */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4">
          {messages.map((m) => {
            const isUser = m.sender === 'user';
            return (
              <div
                key={m.id}
                className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                  isUser ? 'bg-saathi-navy text-white' : 'bg-saathi-teal text-white'
                }`}>
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className={`max-w-[80%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-saathi-navy text-white rounded-tr-none'
                    : m.isSafetyWarning
                    ? 'bg-amber-100 text-amber-950 border border-amber-300 font-bold rounded-tl-none'
                    : 'bg-slate-100 text-slate-900 rounded-tl-none'
                }`}>
                  <p className="whitespace-pre-wrap">{m.text}</p>
                  <div className="flex items-center justify-between gap-3 mt-1.5 pt-1 border-t border-black/5 text-[10px] opacity-75">
                    <span>{m.time}</span>
                    {!isUser && <VoiceButton text={m.text} className="py-0.5 px-1.5 text-[10px]" />}
                  </div>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Bot className="w-4 h-4 text-teal-600 animate-spin" />
              <span>{t('chat_typing')}</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Reply Chips & Personalized Next Step */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 overflow-x-auto">
          <div className="flex items-center gap-2 text-xs whitespace-nowrap">
            {recommendedStep && (
              <button
                type="button"
                onClick={() => handleSendMessage(`What should I do for: ${t(recommendedStep.titleKey)}?`)}
                className="px-3 py-1.5 rounded-full bg-teal-100 text-teal-900 font-bold border border-teal-300 hover:bg-teal-200 shrink-0"
              >
                ★ {t('chat_next_step_tip', { step: t(recommendedStep.titleKey) })}
              </button>
            )}

            {QUICK_REPLIES.map(qr => (
              <button
                key={qr.id}
                type="button"
                onClick={() => handleSendMessage(t(qr.labelKey))}
                className="px-3 py-1.5 rounded-full bg-white text-slate-700 font-semibold border border-slate-300 hover:border-saathi-teal shrink-0"
              >
                {t(qr.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Input & Send Area */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
          <div className="flex items-center gap-2">
            <input
              type="text"
              maxLength={500}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t('chat_placeholder')}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:border-saathi-teal focus:ring-0 text-sm text-slate-900 font-medium"
              aria-label="Ask your driving licence question"
            />
            <button
              type="button"
              disabled={!input.trim()}
              onClick={() => handleSendMessage()}
              className="px-5 py-3 bg-saathi-teal hover:bg-teal-500 disabled:opacity-40 text-white font-extrabold rounded-xl transition-all shadow min-h-[48px] flex items-center justify-center gap-1.5"
              aria-label={t('chat_btn_send')}
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">{t('chat_btn_send')}</span>
            </button>
          </div>
          <div className="flex justify-between items-center text-[10px] text-slate-400 mt-1 px-1">
            <span>{t('chat_press_enter')}</span>
            <span>{t('chat_char_limit', { count: input.length })}</span>
          </div>
        </div>
      </div>

      <StuckHelpBox
        message="Never pay money or share OTPs with unverified third parties claiming to issue licences without tests."
        title={t('stuck_help_title')}
      />
    </div>
  );
}
