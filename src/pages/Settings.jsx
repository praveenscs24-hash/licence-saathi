import React, { useState } from 'react';
import {
  Languages,
  Type,
  SunMoon,
  Volume2,
  Download,
  RotateCcw,
  Check,
  AlertTriangle,
  Sparkles
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { useUserProgress } from '../context/UserProgressContext';
import { usePwaInstall } from '../hooks/usePwaInstall';
import PageHeader from '../components/PageHeader';
import StuckHelpBox from '../components/StuckHelpBox';

export default function Settings() {
  const {
    language,
    setLanguage,
    textSize,
    setTextSize,
    highContrast,
    setHighContrast,
    readAloud,
    setReadAloud,
    t
  } = useI18n();

  const { resetAllProgress } = useUserProgress();
  const { isInstallable, isInstalled, triggerInstall } = usePwaInstall();

  const [confirmResetOpen, setConfirmResetOpen] = useState(false);
  const [resetDoneMessage, setResetDoneMessage] = useState(false);

  const languages = [
    { code: 'en', label: 'English', script: 'English' },
    { code: 'hi', label: 'Hindi', script: 'हिंदी' },
    { code: 'ta', label: 'Tamil', script: 'தமிழ்' }
  ];

  const fontSizes = [
    { id: 'small', labelKey: 'settings_font_small', sizeClass: 'text-sm' },
    { id: 'medium', labelKey: 'settings_font_medium', sizeClass: 'text-base' },
    { id: 'large', labelKey: 'settings_font_large', sizeClass: 'text-lg' }
  ];

  const handleExecuteReset = () => {
    resetAllProgress();
    setConfirmResetOpen(false);
    setResetDoneMessage(true);
    setTimeout(() => setResetDoneMessage(false), 4000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
      <PageHeader
        title={t('settings_title')}
        subtitle={t('settings_subtitle')}
        badge="Preferences"
        backTo="/"
      />

      {resetDoneMessage && (
        <div role="status" className="mb-6 p-4 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-sm flex items-center gap-2">
          <Check className="w-5 h-5 text-emerald-700" />
          <span>{t('settings_reset_success')}</span>
        </div>
      )}

      <div className="space-y-6 mb-8">
        {/* 1. Language Selection (In native script) */}
        <section aria-label="Language Preferences" className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
            <Languages className="w-5 h-5 text-saathi-teal" />
            <span>{t('settings_lang_label')}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLanguage(l.code)}
                className={`p-4 rounded-xl border-2 font-bold text-left transition-all min-h-[56px] flex items-center justify-between ${
                  language === l.code
                    ? 'border-saathi-teal bg-teal-50 text-teal-950 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 text-slate-800 bg-white'
                }`}
                aria-pressed={language === l.code}
              >
                <div>
                  <span className="text-lg block leading-tight font-extrabold">{l.script}</span>
                  <span className="text-xs text-slate-500 font-medium">{l.label}</span>
                </div>
                {language === l.code && <Check className="w-5 h-5 text-teal-700" />}
              </button>
            ))}
          </div>
        </section>

        {/* 2. Text Size (Font Scaling) */}
        <section aria-label="Font Size Preferences" className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
            <Type className="w-5 h-5 text-saathi-teal" />
            <span>{t('settings_font_label')}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {fontSizes.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setTextSize(f.id)}
                className={`p-4 rounded-xl border-2 font-bold text-left transition-all min-h-[56px] flex items-center justify-between ${
                  textSize === f.id
                    ? 'border-saathi-teal bg-teal-50 text-teal-950 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 text-slate-800 bg-white'
                }`}
                aria-pressed={textSize === f.id}
              >
                <span className={f.sizeClass}>{t(f.labelKey)}</span>
                {textSize === f.id && <Check className="w-5 h-5 text-teal-700" />}
              </button>
            ))}
          </div>
        </section>

        {/* 3. Accessibility Toggles (High Contrast & Read Aloud) */}
        <section aria-label="Accessibility toggles" className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          {/* High Contrast */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <SunMoon className="w-5 h-5 text-saathi-teal" />
                <span>{t('settings_contrast_label')}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {t('settings_contrast_desc')}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setHighContrast(!highContrast)}
              role="switch"
              aria-checked={highContrast}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors min-h-[32px] focus-visible:ring-2 focus-visible:ring-teal-600 ${
                highContrast ? 'bg-saathi-teal justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <span className="w-6 h-6 rounded-full bg-white shadow-md transform transition-transform" />
            </button>
          </div>

          <hr className="border-slate-100" />

          {/* Read Aloud */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-saathi-teal" />
                <span>{t('settings_readaloud_label')}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {t('settings_readaloud_desc')}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setReadAloud(!readAloud)}
              role="switch"
              aria-checked={readAloud}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors min-h-[32px] focus-visible:ring-2 focus-visible:ring-teal-600 ${
                readAloud ? 'bg-saathi-teal justify-end' : 'bg-slate-300 justify-start'
              }`}
            >
              <span className="w-6 h-6 rounded-full bg-white shadow-md transform transition-transform" />
            </button>
          </div>
        </section>

        {/* 4. PWA Installation (Displayed only when prompt is available or already installed) */}
        {isInstallable && (
          <section aria-label="Install App" className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-saathi-navy to-saathi-navyLight text-white shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-extrabold text-white mb-1">
                  {t('settings_install_title')}
                </h2>
                <p className="text-xs sm:text-sm text-slate-200">
                  {t('settings_install_desc')}
                </p>
              </div>
              <button
                type="button"
                onClick={triggerInstall}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-saathi-teal hover:bg-teal-400 text-white font-extrabold rounded-xl transition-all shadow min-h-[48px] shrink-0"
              >
                <Download className="w-5 h-5" />
                <span>{t('settings_btn_install')}</span>
              </button>
            </div>
          </section>
        )}

        {isInstalled && (
          <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold flex items-center gap-2">
            <Check className="w-4 h-4 text-teal-700" />
            <span>{t('settings_installed_badge')}</span>
          </div>
        )}

        {/* 5. Reset Demo Data with Confirmation */}
        <section aria-label="Reset Data" className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                {t('settings_reset_title')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {t('settings_reset_desc')}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setConfirmResetOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-300 font-extrabold text-xs sm:text-sm rounded-xl transition-colors min-h-[44px] shrink-0"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{t('settings_btn_reset')}</span>
            </button>
          </div>

          {confirmResetOpen && (
            <div role="dialog" aria-modal="true" className="mt-4 p-4 rounded-xl bg-rose-50 border-2 border-rose-400 text-rose-950">
              <h3 className="text-sm font-extrabold text-rose-900 mb-1 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <span>{t('settings_confirm_heading')}:</span>
              </h3>
              <p className="text-xs sm:text-sm mb-4 leading-relaxed">
                {t('settings_reset_confirm')}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleExecuteReset}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-lg min-h-[36px]"
                >
                  {t('settings_btn_confirm_reset')}
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmResetOpen(false)}
                  className="px-4 py-2 bg-white border border-slate-300 text-slate-700 font-semibold text-xs rounded-lg min-h-[36px]"
                >
                  {t('settings_btn_cancel')}
                </button>
              </div>
            </div>
          )}
        </section>
      </div>

      <StuckHelpBox
        message="Switching your language will immediately translate every lesson, road sign, quiz question, error message, and chatbot answer without losing your saved progress."
        title={t('stuck_help_title')}
      />
    </div>
  );
}
