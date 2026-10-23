import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  Truck,
  FileText,
  User,
  MapPin,
  Car,
  Package
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { useUserProgress } from '../context/UserProgressContext';
import { SAMPLE_APPLICATIONS, findApplication } from '../data/applications';
import PageHeader from '../components/PageHeader';
import StuckHelpBox from '../components/StuckHelpBox';

export default function TrackApplication() {
  const { t } = useI18n();
  const { llApplication, activeTrackingNumber, setActiveTrackingNumber } = useUserProgress();

  const [query, setQuery] = useState(activeTrackingNumber || 'DL-2026-90412');
  const [searchedRecord, setSearchedRecord] = useState(() => {
    return findApplication(query, llApplication);
  });
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const clean = query.trim();
    if (!clean) return;

    setActiveTrackingNumber(clean);
    const result = findApplication(clean, llApplication);
    setSearchedRecord(result);
    setHasSearched(true);
  };

  const handleSelectSample = (sampleNum) => {
    setQuery(sampleNum);
    setActiveTrackingNumber(sampleNum);
    const result = findApplication(sampleNum, llApplication);
    setSearchedRecord(result);
    setHasSearched(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
      <PageHeader
        title={t('track_title')}
        subtitle={t('track_subtitle')}
        badge="Stage 6 Tracking"
        backTo="/"
      />

      {/* Input Search Form */}
      <section aria-label="Search application" className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm mb-6">
        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label htmlFor="app_search_input" className="block text-sm font-bold text-slate-800 mb-1.5">
              {t('track_input_label')}
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  id="app_search_input"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('track_input_placeholder')}
                  className="w-full px-4 py-3 pl-10 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900 font-bold uppercase tracking-wider"
                  required
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" aria-hidden="true" />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 bg-saathi-navy hover:bg-saathi-navyLight text-white font-extrabold text-sm rounded-xl transition-all shadow min-h-[48px]"
              >
                {t('track_btn_search')}
              </button>
            </div>
          </div>

          {/* Persistent Sample Buttons (Prompt Requirement!) */}
          <div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
              {t('track_sample_btn_label')}
            </span>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_APPLICATIONS.map((sample) => (
                <button
                  key={sample.applicationNumber}
                  type="button"
                  onClick={() => handleSelectSample(sample.applicationNumber)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[36px] ${
                    query === sample.applicationNumber
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {sample.applicationNumber} ({sample.applicantName.split(' ')[0]})
                </button>
              ))}

              {llApplication && llApplication.applicationNumber && (
                <button
                  type="button"
                  onClick={() => handleSelectSample(llApplication.applicationNumber)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[36px] ${
                    query === llApplication.applicationNumber
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                  }`}
                >
                  {llApplication.applicationNumber} ({t('track_your_receipt')})
                </button>
              )}
            </div>
          </div>
        </form>
      </section>

      {/* TRACKING TIMELINE RESULT */}
      {hasSearched && searchedRecord ? (
        <section aria-label="Tracking Results" className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm mb-6">
          {/* Header Card Info */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-200">
              <div>
                <span className="text-xs text-slate-500 font-bold uppercase block">Application Number:</span>
                <span className="text-xl font-black text-slate-900">{searchedRecord.applicationNumber}</span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-teal-100 text-teal-900 border border-teal-300">
                {searchedRecord.timeline[searchedRecord.currentStageIndex]?.date || 'In Progress'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div>
                <span className="text-slate-500 font-bold block">{t('track_applicant')}</span>
                <span className="font-extrabold text-slate-900">{searchedRecord.applicantName}</span>
              </div>
              <div>
                <span className="text-slate-500 font-bold block">{t('track_vehicle')}</span>
                <span className="font-semibold text-slate-900">{searchedRecord.vehicleClass}</span>
              </div>
              <div>
                <span className="text-slate-500 font-bold block">{t('track_rto')}</span>
                <span className="font-semibold text-slate-900">{searchedRecord.rto}</span>
              </div>
            </div>
          </div>

          {/* 6-Stage Timeline (Prompt Requirement!) */}
          <h3 className="text-base font-extrabold text-slate-900 mb-4 pb-2 border-b border-slate-100">
            {t('track_timeline_title')}
          </h3>

          <ol className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200 before:z-0">
            {searchedRecord.timeline.map((step, idx) => {
              const isDone = step.done;
              const isCurrent = idx === searchedRecord.currentStageIndex;

              return (
                <li key={step.stageId} className="relative z-10 flex items-start gap-4">
                  {/* Circle indicator */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-sm ${
                      isDone
                        ? 'bg-teal-600 text-white'
                        : isCurrent
                        ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-100'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4 fill-current" aria-hidden="true" />
                    ) : (
                      <span>{idx + 1}</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">
                        {t(`track_stage_${step.stageId}`)}
                      </h4>
                      <span className={`text-xs font-semibold ${
                        isDone ? 'text-teal-700' : 'text-slate-400'
                      }`}>
                        {step.date}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 mt-0.5">
                      {t(step.remarksKey, { trackingId: step.trackingId || 'IN948271038UP' })}
                    </p>

                    {step.trackingId && (
                      <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-200 text-xs text-teal-900 font-bold">
                        <Package className="w-3.5 h-3.5 text-teal-700" />
                        <span>India Post Consignment: {step.trackingId}</span>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ) : hasSearched ? (
        /* Unknown Number Error (Prompt Requirement: "Unknown numbers must produce a helpful error rather than a fabricated status.") */
        <section
          role="alert"
          className="p-6 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 mb-6"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-bold text-rose-900 mb-1">
                {t('track_not_found_title')}
              </h3>
              <p className="text-sm text-rose-800 leading-relaxed">
                {t('track_not_found_msg', { query })}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {/* Helpful Guidance */}
      <StuckHelpBox
        message="Speed Post delivery usually takes 7-14 business days after printing. Make sure an adult is present at the address to sign the postal delivery slip."
        title={t('stuck_help_title')}
      />
    </div>
  );
}
