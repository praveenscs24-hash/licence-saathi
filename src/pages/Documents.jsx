import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckSquare, Square, FileText, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { useUserProgress } from '../context/UserProgressContext';
import { MEDICAL_CONFIG } from '../data/config';
import PageHeader from '../components/PageHeader';
import StuckHelpBox from '../components/StuckHelpBox';

export default function Documents() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const { eligibility, documentChecklist, toggleDocument } = useUserProgress();

  const userAge = Number(eligibility?.age || 19);
  const isCommercial = eligibility?.vehicleClassId === 'COMMERCIAL';
  const requiresDoctorCert = userAge >= MEDICAL_CONFIG.doctorCertificateRequiredAge || isCommercial;

  // Checklist items tailored to applicant answers
  const items = [
    {
      id: 'doc_age',
      titleKey: 'doc_age_title',
      descKey: 'doc_age_desc',
      examplesKey: 'doc_age_examples'
    },
    {
      id: 'doc_address',
      titleKey: 'doc_address_title',
      descKey: 'doc_address_desc',
      examplesKey: 'doc_address_examples'
    },
    {
      id: 'doc_photo',
      titleKey: 'doc_photo_title',
      descKey: 'doc_photo_desc',
      examplesKey: 'doc_photo_examples'
    },
    {
      id: 'doc_signature',
      titleKey: 'doc_signature_title',
      descKey: 'doc_signature_desc',
      examplesKey: 'doc_signature_examples'
    },
    {
      id: 'doc_fitness',
      titleKey: 'doc_fitness_title',
      descKey: 'doc_fitness_desc',
      examplesKey: 'doc_fitness_examples'
    }
  ];

  if (requiresDoctorCert) {
    items.push({
      id: 'doc_doctor',
      titleKey: 'doc_doctor_title',
      descKey: 'doc_doctor_desc',
      examplesKey: 'doc_doctor_examples',
      highlight: true
    });
  }

  const checkedCount = items.filter(i => Boolean(documentChecklist[i.id])).length;
  const totalCount = items.length;
  const percentComplete = Math.round((checkedCount / totalCount) * 100);
  const allReady = checkedCount === totalCount;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
      <PageHeader
        title={t('docs_title')}
        subtitle={t('docs_subtitle')}
        badge="Stage 2 Preparation"
        backTo="/apply"
      />

      {/* Progress Card */}
      <section className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm mb-6">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="text-sm font-bold text-slate-800">
            {t('docs_progress_label')}
          </span>
          <span className="text-sm font-extrabold text-saathi-teal">
            {checkedCount} / {totalCount} ({percentComplete}%)
          </span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
          <div
            className="bg-saathi-teal h-full rounded-full transition-all duration-300"
            style={{ width: `${percentComplete}%` }}
            role="progressbar"
            aria-valuenow={percentComplete}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
        {allReady && (
          <p className="mt-3 text-xs sm:text-sm font-bold text-emerald-700 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            <span>{t('docs_all_ready')}</span>
          </p>
        )}
      </section>

      {/* State Accepted Documents Notice */}
      <div className="mb-4 text-xs text-slate-600 bg-slate-100 p-3 rounded-xl flex items-center gap-2">
        <AlertCircle className="w-4 h-4 text-slate-500 shrink-0" aria-hidden="true" />
        <span>{t('docs_state_notice')}</span>
      </div>

      {/* Interactive Checklist */}
      <section aria-label="Checklist items" className="space-y-4 mb-8">
        {items.map((item) => {
          const isChecked = Boolean(documentChecklist[item.id]);

          return (
            <div
              key={item.id}
              onClick={() => toggleDocument(item.id)}
              className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 select-none ${
                isChecked
                  ? 'bg-teal-50/70 border-teal-500 shadow-sm'
                  : item.highlight
                  ? 'bg-amber-50/60 border-amber-300'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDocument(item.id);
                }}
                className={`mt-0.5 p-1 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-teal-600 ${
                  isChecked ? 'text-teal-700' : 'text-slate-400'
                }`}
                aria-label={`Toggle ${t(item.titleKey)}`}
                aria-pressed={isChecked}
              >
                {isChecked ? (
                  <CheckSquare className="w-6 h-6 fill-teal-100" aria-hidden="true" />
                ) : (
                  <Square className="w-6 h-6" aria-hidden="true" />
                )}
              </button>

              <div className="flex-1">
                <h3 className={`text-base font-bold ${
                  isChecked ? 'text-teal-950 line-through' : 'text-slate-900'
                }`}>
                  {t(item.titleKey)}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {t(item.descKey)}
                </p>
                <div className="mt-2 text-xs font-medium text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                  <span className="font-semibold text-slate-700">{t('docs_examples_label')}: </span>
                  {t(item.examplesKey)}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Primary Action Button */}
      <div className="mb-8">
        <button
          type="button"
          onClick={() => navigate('/ll-application')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-saathi-teal hover:bg-teal-500 text-white font-extrabold rounded-2xl transition-all shadow-md text-base min-h-[52px] focus-visible:ring-2 focus-visible:ring-saathi-navy"
        >
          <span>{t('docs_continue_app')}</span>
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Helpful Guidance */}
      <StuckHelpBox
        message={t('docs_stuck_tip')}
        title={t('stuck_help_title')}
      />
    </div>
  );
}
