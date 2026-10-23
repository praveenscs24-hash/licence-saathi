import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, XCircle, AlertCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { useUserProgress } from '../context/UserProgressContext';
import { VEHICLE_CLASSES, checkEligibility } from '../data/config';
import { STATES_AND_UTS } from '../data/rtos';
import PageHeader from '../components/PageHeader';
import StuckHelpBox from '../components/StuckHelpBox';

export default function CanIApply() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const { eligibility, updateEligibility } = useUserProgress();

  const [age, setAge] = useState(eligibility.age || 19);
  const [vehicleClassId, setVehicleClassId] = useState(eligibility.vehicleClassId || 'MCWG');
  const [stateCode, setStateCode] = useState(eligibility.stateCode || 'UP');
  const [hasParentalConsent, setHasParentalConsent] = useState(eligibility.hasParentalConsent || false);
  const [dob, setDob] = useState(eligibility.dob || '');
  const [checked, setChecked] = useState(true);

  // Evaluate eligibility using centralized config logic
  const result = checkEligibility({
    age: Number(age),
    vehicleClassId,
    hasParentalConsent,
    dateOfBirth: dob
  });

  const selectedVehicle = VEHICLE_CLASSES[vehicleClassId] || VEHICLE_CLASSES.MCWG;
  const isUnderage = Number(age) < selectedVehicle.minAge;
  const isMcwogMinor = vehicleClassId === 'MCWOG' && Number(age) >= 16 && Number(age) < 18;

  const handleCheck = (e) => {
    e.preventDefault();
    setChecked(true);
    updateEligibility({
      age: Number(age),
      vehicleClassId,
      stateCode,
      hasParentalConsent,
      dob,
      checked: true,
      eligible: result.eligible
    });
  };

  const handleProceedToDocs = () => {
    updateEligibility({
      age: Number(age),
      vehicleClassId,
      stateCode,
      hasParentalConsent,
      dob,
      checked: true,
      eligible: result.eligible
    });
    navigate('/documents');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
      <PageHeader
        title={t('apply_title')}
        subtitle={t('apply_subtitle')}
        badge="Stage 1"
        backTo="/"
      />

      <form onSubmit={handleCheck} className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm mb-6 space-y-5">
        {/* Input 1: Age */}
        <div>
          <label htmlFor="user_age" className="block text-sm font-bold text-slate-900 mb-1.5">
            {t('apply_age_label')} <span className="text-rose-600">*</span>
          </label>
          <div className="flex items-center gap-3">
            <input
              id="user_age"
              type="number"
              min="14"
              max="90"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="w-full sm:w-48 px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-lg font-bold text-slate-900"
              aria-describedby="age-hint"
            />
            <span id="age-hint" className="text-xs sm:text-sm text-slate-500 font-medium">
              {t('apply_years_old')}
            </span>
          </div>
        </div>

        {/* Input 2: Vehicle Class */}
        <div>
          <label htmlFor="vehicle_class" className="block text-sm font-bold text-slate-900 mb-1.5">
            {t('apply_vehicle_label')} <span className="text-rose-600">*</span>
          </label>
          <select
            id="vehicle_class"
            value={vehicleClassId}
            onChange={(e) => setVehicleClassId(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-sm sm:text-base font-semibold text-slate-900 bg-white"
          >
            {Object.values(VEHICLE_CLASSES).map((v) => (
              <option key={v.id} value={v.id}>
                {t(v.nameKey)} (Min Age: {v.minAge})
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-slate-500">
            {t(selectedVehicle.descKey)}
          </p>
        </div>

        {/* Conditional Parental Consent for 16-17 on MCWOG */}
        {isMcwogMinor && (
          <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-950">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              <span>{t('apply_parental_consent_title') || 'Parental Consent Required'}</span>
            </h4>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={hasParentalConsent}
                onChange={(e) => setHasParentalConsent(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded text-saathi-teal focus:ring-saathi-teal"
              />
              <span className="text-sm font-medium text-teal-900 leading-normal">
                {t('apply_parental_consent')}
              </span>
            </label>
          </div>
        )}

        {/* Conditional Date of Birth if applicant is under minimum age */}
        {isUnderage && (
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
            <label htmlFor="user_dob" className="block text-sm font-bold text-amber-900 mb-1">
              {t('apply_dob_label')}
            </label>
            <p className="text-xs text-amber-800 mb-2">
              {t('apply_dob_subtext')}
            </p>
            <input
              id="user_dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-amber-300 text-sm font-semibold bg-white text-slate-900"
            />
          </div>
        )}

        {/* Input 3: State or UT */}
        <div>
          <label htmlFor="user_state" className="block text-sm font-bold text-slate-900 mb-1.5">
            {t('apply_state_label')} <span className="text-rose-600">*</span>
          </label>
          <select
            id="user_state"
            value={stateCode}
            onChange={(e) => setStateCode(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-sm sm:text-base font-semibold text-slate-900 bg-white"
          >
            {STATES_AND_UTS.map((s) => (
              <option key={s.code} value={s.code}>
                {s.name} ({s.code})
              </option>
            ))}
          </select>
        </div>

        {/* Submit Check button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3.5 bg-saathi-navy hover:bg-saathi-navyLight text-white font-extrabold rounded-xl transition-all shadow-md focus-visible:ring-2 focus-visible:ring-saathi-teal min-h-[48px]"
          >
            {t('apply_btn_check')}
          </button>
        </div>
      </form>

      {/* Result Card: "Explain eligibility in one clear sentence" */}
      {checked && (
        <section
          role="region"
          aria-live="polite"
          className={`p-5 sm:p-6 rounded-2xl border-2 mb-6 shadow-sm transition-all ${
            result.eligible
              ? 'bg-emerald-50/80 border-emerald-400 text-emerald-950'
              : 'bg-rose-50/80 border-rose-300 text-rose-950'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className={`p-2 rounded-xl shrink-0 ${
              result.eligible ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900'
            }`}>
              {result.eligible ? (
                <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
              ) : (
                <XCircle className="w-7 h-7" aria-hidden="true" />
              )}
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-extrabold mb-1">
                {result.eligible ? t('apply_eligible_title') : t('apply_underage_title')}
              </h3>

              {/* Exact one clear sentence */}
              <p className="text-base font-medium leading-relaxed mb-3">
                {result.eligible
                  ? t(result.reasonKey, { minAge: result.minAge })
                  : isUnderage && result.eligibleDate
                  ? `${t('eligibility_underage', { minAge: result.minAge })} ${t('eligibility_underage_dob', { date: result.eligibleDate })}`
                  : t(result.reasonKey, { minAge: result.minAge })}
              </p>

              {result.eligible ? (
                <button
                  type="button"
                  onClick={handleProceedToDocs}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl transition-all shadow min-h-[48px] focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>{t('btn_next')}: {t('apply_check_docs_btn')}</span>
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
              ) : (
                <p className="text-xs text-rose-800 font-medium">
                  {t('apply_underage_tip')}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Helpful Guidance */}
      <StuckHelpBox
        message={t('apply_stuck_tip')}
        title={t('stuck_help_title')}
      />
    </div>
  );
}
