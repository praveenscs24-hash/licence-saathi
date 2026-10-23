import React, { useState } from 'react';
import {
  Bike,
  Car,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  Info
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import PageHeader from '../components/PageHeader';
import VoiceButton from '../components/VoiceButton';
import StuckHelpBox from '../components/StuckHelpBox';

export default function DrivingTest() {
  const { t } = useI18n();
  const [vehicleTab, setVehicleTab] = useState('2w'); // '2w' | '4w'

  const failureTips = [
    {
      reasonKey: 'fail_reason_1',
      tipKey: 'fail_tip_1'
    },
    {
      reasonKey: 'fail_reason_2',
      tipKey: 'fail_tip_2'
    },
    {
      reasonKey: 'fail_reason_3',
      tipKey: 'fail_tip_3'
    },
    {
      reasonKey: 'fail_reason_4',
      tipKey: 'fail_tip_4'
    },
    {
      reasonKey: 'fail_reason_5',
      tipKey: 'fail_tip_5'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
      <PageHeader
        title={t('drive_title')}
        subtitle={t('drive_subtitle')}
        badge="Stage 5 Practical"
        backTo="/"
      />

      {/* State Variation Disclaimer (Prompt Requirement!) */}
      <div className="mb-6 p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" aria-hidden="true" />
        <p className="leading-relaxed">
          <strong>Notice: </strong>{t('drive_variation_notice')}
        </p>
      </div>

      {/* Vehicle Type Tabs */}
      <div className="flex bg-slate-200/80 p-1 rounded-2xl mb-6 gap-1" role="tablist" aria-label="Vehicle track selection">
        <button
          type="button"
          onClick={() => setVehicleTab('2w')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all min-h-[48px] ${
            vehicleTab === '2w'
              ? 'bg-white text-saathi-navy shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          role="tab"
          aria-selected={vehicleTab === '2w'}
        >
          <Bike className="w-5 h-5" />
          <span>{t('drive_tab_2w')}</span>
        </button>

        <button
          type="button"
          onClick={() => setVehicleTab('4w')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all min-h-[48px] ${
            vehicleTab === '4w'
              ? 'bg-white text-saathi-navy shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          role="tab"
          aria-selected={vehicleTab === '4w'}
        >
          <Car className="w-5 h-5" />
          <span>{t('drive_tab_4w')}</span>
        </button>
      </div>

      {/* TAB 1: TWO-WHEELER TEST STEPS & TRACK */}
      {vehicleTab === '2w' && (
        <section aria-label="Two-Wheeler Test Track Guide" className="space-y-6 mb-8">
          {/* Illustrated SVG Track (Figure-8) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <h3 className="text-sm font-extrabold text-slate-700 uppercase tracking-wider mb-2">
              {t('drive_2w_layout_title')}
            </h3>
            <svg
              viewBox="0 0 320 180"
              className="w-full max-w-sm mx-auto h-40"
              role="img"
              aria-label="Figure of 8 Motorcycle Test Track Diagram"
            >
              <rect width="320" height="180" rx="16" fill="#f8fafc" />
              {/* Outer track boundaries */}
              <circle cx="110" cy="90" r="54" fill="none" stroke="#cbd5e1" strokeWidth="24" />
              <circle cx="210" cy="90" r="54" fill="none" stroke="#cbd5e1" strokeWidth="24" />
              {/* Driving Center Line */}
              <circle cx="110" cy="90" r="54" fill="none" stroke="#0d9488" strokeWidth="3" strokeDasharray="6 4" />
              <circle cx="210" cy="90" r="54" fill="none" stroke="#0d9488" strokeWidth="3" strokeDasharray="6 4" />
              {/* Start & Exit arrows */}
              <path d="M40 90 L80 90" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
              <polygon points="84,90 74,84 74,96" fill="#f59e0b" />
              <text x="44" y="80" fill="#92400e" fontSize="10" fontWeight="bold">START</text>
              <text x="160" y="24" fill="#0f2b5c" fontSize="11" fontWeight="extrabold" textAnchor="middle">
                Continuous '8' loop without foot down
              </text>
            </svg>
          </div>

          {/* Illustrated Steps */}
          <div className="space-y-3">
            {[
              { t: t('drive_2w_step1_title'), d: t('drive_2w_step1_desc') },
              { t: t('drive_2w_step2_title'), d: t('drive_2w_step2_desc') },
              { t: t('drive_2w_step3_title'), d: t('drive_2w_step3_desc') },
              { t: t('drive_2w_step4_title'), d: t('drive_2w_step4_desc') }
            ].map((step, idx) => (
              <article key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-800 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">{step.t}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed font-normal">{step.d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* TAB 2: FOUR-WHEELER (CAR) TEST STEPS & TRACK */}
      {vehicleTab === '4w' && (
        <section aria-label="Four-Wheeler Test Track Guide" className="space-y-6 mb-8">
          {/* Illustrated SVG Track (H-Track) */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center">
            <h3 className="text-sm font-extrabold text-slate-700 uppercase tracking-wider mb-2">
              {t('drive_4w_layout_title')}
            </h3>
            <svg
              viewBox="0 0 320 180"
              className="w-full max-w-sm mx-auto h-40"
              role="img"
              aria-label="H-track and Ramp Test Diagram for Car"
            >
              <rect width="320" height="180" rx="16" fill="#f8fafc" />
              {/* H Track lines */}
              <rect x="50" y="30" width="220" height="120" rx="8" fill="none" stroke="#cbd5e1" strokeWidth="3" />
              <line x1="120" y1="30" x2="120" y2="150" stroke="#0f2b5c" strokeWidth="8" />
              <line x1="200" y1="30" x2="200" y2="150" stroke="#0f2b5c" strokeWidth="8" />
              <line x1="120" y1="90" x2="200" y2="90" stroke="#0f2b5c" strokeWidth="8" />
              <path d="M70 140 L70 40 L160 40" stroke="#0d9488" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />
              <text x="160" y="22" fill="#0f2b5c" fontSize="11" fontWeight="extrabold" textAnchor="middle">
                'H' Track Forward & Reverse Maneuver
              </text>
            </svg>
          </div>

          {/* Illustrated Steps */}
          <div className="space-y-3">
            {[
              { t: t('drive_4w_step1_title'), d: t('drive_4w_step1_desc') },
              { t: t('drive_4w_step2_title'), d: t('drive_4w_step2_desc') },
              { t: t('drive_4w_step3_title'), d: t('drive_4w_step3_desc') }
            ].map((step, idx) => (
              <article key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">{step.t}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed font-normal">{step.d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* 5 Common Reasons for Failing & 1 Practical Prevention Tip Each (Prompt Requirement!) */}
      <section aria-label="Common Failures and Prevention" className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm mb-6">
        <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mb-4 pb-2 border-b border-slate-100">
          {t('drive_fail_reasons_title')}
        </h2>

        <div className="space-y-4">
          {failureTips.map((tip, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1.5">
              <span className="font-extrabold text-rose-900 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" aria-hidden="true" />
                <span>{t(tip.reasonKey)}</span>
              </span>
              <p className="text-emerald-900 font-semibold pl-5 leading-relaxed">
                {t(tip.tipKey)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Helpful Guidance */}
      <StuckHelpBox
        message="Wear proper closed shoes on test day. Many candidates get disqualified at the registration desk for wearing flip-flops or slippers."
        title={t('stuck_help_title')}
      />
    </div>
  );
}
