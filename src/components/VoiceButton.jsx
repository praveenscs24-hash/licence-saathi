import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Square } from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { isSpeechSupported, speakText, stopSpeaking, getVoiceForLanguage } from '../utils/speech';

export default function VoiceButton({ text, className = "", label = null }) {
  const { language, t, readAloud } = useI18n();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    // Check speech support and availability
    if (isSpeechSupported()) {
      // Ensure voices list loaded
      const checkVoice = () => {
        const voice = getVoiceForLanguage(language);
        setSupported(Boolean(voice || window.speechSynthesis.getVoices().length > 0));
      };

      checkVoice();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = checkVoice;
      }
    } else {
      setSupported(false);
    }

    return () => {
      stopSpeaking();
    };
  }, [language]);

  if (!supported) {
    return null; // Prompt requirement: "Hide or disable the Listen button if a suitable voice is unavailable."
  }

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      const started = speakText(text, language, () => {
        setIsSpeaking(false);
      });
      if (!started) {
        setIsSpeaking(false);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isSpeaking ? t('btn_stop_listen') : (label || t('btn_listen'))}
      title={isSpeaking ? t('btn_stop_listen') : (label || t('btn_listen'))}
      className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all focus-visible:ring-2 focus-visible:ring-teal-600 ${
        isSpeaking
          ? 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse'
          : 'bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100'
      } ${className}`}
    >
      {isSpeaking ? (
        <>
          <Square className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
          <span>{t('btn_stop_listen')}</span>
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 text-teal-700" aria-hidden="true" />
          <span>{label || t('btn_listen')}</span>
        </>
      )}
    </button>
  );
}
