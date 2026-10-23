import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  CheckCircle,
  CheckCircle2,
  Bookmark,
  Volume2,
  Sparkles,
  Shield,
  PhoneOff,
  AlertOctagon,
  Siren,
  Footprints,
  Navigation,
  VolumeX,
  ShieldCheck,
  ArrowLeftRight
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { useUserProgress } from '../context/UserProgressContext';
import { TRAFFIC_SIGNS, ROAD_RULES } from '../data/signs';
import PageHeader from '../components/PageHeader';
import VoiceButton from '../components/VoiceButton';
import StuckHelpBox from '../components/StuckHelpBox';

export default function Learn() {
  const navigate = useNavigate();
  const { t, language } = useI18n();
  const { masteredSigns, toggleMasteredSign } = useUserProgress();

  const [activeTab, setActiveTab] = useState('signs'); // 'signs' | 'rules' | 'flashcards'
  const [signCategory, setSignCategory] = useState('all'); // 'all' | 'mandatory' | 'cautionary' | 'informatory'

  // Flashcard state
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Filter signs
  const filteredSigns = signCategory === 'all'
    ? TRAFFIC_SIGNS
    : TRAFFIC_SIGNS.filter(s => s.category === signCategory);

  const currentFlashcard = TRAFFIC_SIGNS[flashcardIndex] || TRAFFIC_SIGNS[0];
  const isCurrentCardMastered = masteredSigns.includes(currentFlashcard.id);

  const handleNextFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex(prev => (prev + 1) % TRAFFIC_SIGNS.length);
  };

  const handlePrevFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex(prev => (prev - 1 + TRAFFIC_SIGNS.length) % TRAFFIC_SIGNS.length);
  };

  // Map rule icon names to Lucide icon components
  const ruleIcons = {
    ArrowLeftRight,
    Shield,
    ShieldCheck,
    PhoneOff,
    OctagonAlert: AlertOctagon,
    Siren,
    Footprints,
    Navigation,
    VolumeX
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
      <PageHeader
        title={t('learn_title')}
        subtitle={t('learn_subtitle')}
        badge="Stage 3 Prep"
        backTo="/"
      />

      {/* Progress & Quick Stats Banner */}
      <section className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
              {t('learn_progress_badge', { count: masteredSigns.length, total: TRAFFIC_SIGNS.length })}
            </span>
            <span className="text-sm font-extrabold text-slate-900">
              {t('learn_signs_mastered', { percent: Math.round((masteredSigns.length / TRAFFIC_SIGNS.length) * 100) })}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/mock-test')}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-saathi-navy hover:bg-saathi-navyLight text-white text-xs sm:text-sm font-bold rounded-xl transition-colors min-h-[44px]"
        >
          <span>{t('learn_btn_take_mock')}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>

      {/* Mode Tabs */}
      <nav aria-label="Learning Sections" className="flex border-b border-slate-200 mb-6 gap-2 sm:gap-4 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => setActiveTab('signs')}
          className={`px-4 py-3 font-bold text-sm sm:text-base border-b-2 transition-all whitespace-nowrap min-h-[48px] ${
            activeTab === 'signs'
              ? 'border-saathi-teal text-saathi-teal'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
          aria-selected={activeTab === 'signs'}
          role="tab"
        >
          {t('learn_tab_signs')}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('rules')}
          className={`px-4 py-3 font-bold text-sm sm:text-base border-b-2 transition-all whitespace-nowrap min-h-[48px] ${
            activeTab === 'rules'
              ? 'border-saathi-teal text-saathi-teal'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
          aria-selected={activeTab === 'rules'}
          role="tab"
        >
          {t('learn_tab_rules')} (9)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('flashcards')}
          className={`px-4 py-3 font-bold text-sm sm:text-base border-b-2 transition-all whitespace-nowrap min-h-[48px] ${
            activeTab === 'flashcards'
              ? 'border-saathi-teal text-saathi-teal'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
          aria-selected={activeTab === 'flashcards'}
          role="tab"
        >
          {t('learn_tab_flashcards')}
        </button>
      </nav>

      {/* TAB 1: TRAFFIC SIGNS */}
      {activeTab === 'signs' && (
        <section aria-label="Traffic Signs Gallery">
          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 mb-6" role="group" aria-label="Filter traffic signs by category">
            {[
              { id: 'all', label: t('learn_all_signs_label', { count: TRAFFIC_SIGNS.length }) },
              { id: 'mandatory', label: t('learn_cat_mandatory') },
              { id: 'cautionary', label: t('learn_cat_cautionary') },
              { id: 'informatory', label: t('learn_cat_informatory') }
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSignCategory(cat.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all min-h-[40px] ${
                  signCategory === cat.id
                    ? 'bg-saathi-teal text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Signs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSigns.map(sign => {
              const isMastered = masteredSigns.includes(sign.id);
              const signName = t(sign.nameKey);
              const signLesson = t(sign.lessonKey);
              const signDesc = t(sign.descKey);
              const speechText = `${signName}. ${signLesson}`;

              return (
                <article
                  key={sign.id}
                  className={`p-4 sm:p-5 rounded-2xl bg-white border-2 transition-all flex flex-col justify-between ${
                    isMastered ? 'border-teal-400 bg-teal-50/20 shadow-sm' : 'border-slate-200 shadow-sm hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      {/* Inline SVG Sign Render */}
                      <div className="p-2 bg-slate-50 rounded-xl border border-slate-200/60 shrink-0">
                        {sign.renderSvg("w-20 h-20 sm:w-24 sm:h-24")}
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider bg-slate-100 text-slate-600">
                          {sign.code}
                        </span>
                        <VoiceButton text={speechText} />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {signName}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {signLesson}
                    </p>
                    <p className="mt-2 text-[11px] text-slate-400 font-medium">
                      {t('learn_shape_label')}: {signDesc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => toggleMasteredSign(sign.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors min-h-[36px] ${
                        isMastered
                          ? 'bg-teal-100 text-teal-800'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                      aria-pressed={isMastered}
                    >
                      <CheckCircle2 className={`w-4 h-4 ${isMastered ? 'fill-teal-600 text-white' : ''}`} />
                      <span>{isMastered ? t('learn_btn_known') : t('learn_btn_learning')}</span>
                    </button>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase">
                      {sign.category}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* TAB 2: RULES OF THE ROAD */}
      {activeTab === 'rules' && (
        <section aria-label="Rules of the Road" className="space-y-4">
          {ROAD_RULES.map(rule => {
            const Icon = ruleIcons[rule.icon] || Shield;
            const title = t(rule.titleKey);
            const desc = t(rule.descKey);
            const speechText = `${title}. ${desc}`;

            return (
              <article
                key={rule.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4 hover:border-saathi-teal transition-colors"
              >
                <div className="p-3 rounded-xl bg-teal-50 text-teal-700 shrink-0 mt-0.5">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {title}
                    </h3>
                    <VoiceButton text={speechText} />
                  </div>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed font-normal">
                    {desc}
                  </p>
                </div>
              </article>
            );
          })}
        </section>
      )}

      {/* TAB 3: INTERACTIVE FLASHCARDS */}
      {activeTab === 'flashcards' && (
        <section aria-label="Interactive Flashcards" className="max-w-md mx-auto">
          <div className="text-center mb-4">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
              Card {flashcardIndex + 1} of {TRAFFIC_SIGNS.length}
            </span>
            <p className="text-xs text-slate-400 mt-0.5">
              {t('learn_flashcard_hint')}
            </p>
          </div>

          {/* Flashcard container */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full h-80 rounded-3xl bg-white border-2 border-slate-300 hover:border-saathi-teal shadow-lg cursor-pointer p-6 flex flex-col items-center justify-between select-none transition-all duration-200"
            role="button"
            tabIndex={0}
            aria-label={`Flashcard: ${isFlipped ? t(currentFlashcard.nameKey) : t('learn_flashcard_front')}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsFlipped(!isFlipped);
              }
            }}
          >
            <div className="w-full flex justify-between items-center text-xs text-slate-400 font-bold">
              <span>{currentFlashcard.code}</span>
              <span className="text-teal-600 flex items-center gap-1">
                <RotateCw className="w-3.5 h-3.5" />
                <span>{t('learn_flashcard_flip')}</span>
              </span>
            </div>

            {/* Front & Back Content */}
            {!isFlipped ? (
              <div className="flex flex-col items-center justify-center my-auto text-center">
                <div className="mb-4">
                  {currentFlashcard.renderSvg("w-32 h-32 sm:w-36 sm:h-36 drop-shadow-sm")}
                </div>
                <p className="text-sm font-extrabold text-slate-700">
                  {t('learn_flashcard_front')}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center my-auto text-center animate-in fade-in duration-200">
                <h3 className="text-xl font-black text-slate-900 mb-2">
                  {t(currentFlashcard.nameKey)}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium max-w-xs">
                  {t(currentFlashcard.lessonKey)}
                </p>
                <div className="mt-3">
                  <VoiceButton
                    text={`${t(currentFlashcard.nameKey)}. ${t(currentFlashcard.lessonKey)}`}
                  />
                </div>
              </div>
            )}

            {/* Mastered status indicator */}
            <div className="w-full flex justify-center">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMasteredSign(currentFlashcard.id);
                }}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all min-h-[40px] ${
                  isCurrentCardMastered
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                aria-pressed={isCurrentCardMastered}
              >
                <CheckCircle2 className="w-4 h-4 fill-current" />
                <span>{isCurrentCardMastered ? t('learn_btn_known') : t('learn_btn_learning')}</span>
              </button>
            </div>
          </div>

          {/* Flashcard Next / Previous Controls */}
          <div className="flex items-center justify-between gap-4 mt-6">
            <button
              type="button"
              onClick={handlePrevFlashcard}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 font-bold text-slate-800 text-sm shadow-sm min-h-[48px]"
              aria-label="Previous flashcard"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('btn_back')}</span>
            </button>
            <button
              type="button"
              onClick={handleNextFlashcard}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-saathi-teal hover:bg-teal-500 font-bold text-white text-sm shadow-sm min-h-[48px]"
              aria-label="Next flashcard"
            >
              <span>{t('btn_next')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* Helpful Guidance */}
      <div className="mt-8">
        <StuckHelpBox
          message="Remember: Red circles give orders (Mandatory). Red triangles give warnings (Cautionary). Blue squares/circles give information or compulsory directions."
          title={t('stuck_help_title')}
        />
      </div>
    </div>
  );
}
