import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import VoiceButton from './VoiceButton';

export default function PageHeader({
  title,
  subtitle = null,
  badge = null,
  backTo = '/',
  showBack = true
}) {
  const navigate = useNavigate();
  const { t } = useI18n();

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate(backTo);
    }
  };

  const textToSpeak = `${title}. ${subtitle || ''}`;

  return (
    <header className="mb-6">
      <div className="flex items-center justify-between gap-3 mb-2">
        {showBack ? (
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-teal-600"
            aria-label={t('btn_back')}
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>{t('btn_back')}</span>
          </button>
        ) : <div />}

        <div className="flex items-center gap-2">
          {badge && (
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-teal-100 text-teal-800 border border-teal-200">
              {badge}
            </span>
          )}
          <VoiceButton text={textToSpeak} />
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </header>
  );
}
