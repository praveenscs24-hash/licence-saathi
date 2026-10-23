import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Compass,
  FileCheck,
  Calendar,
  Truck,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  BookOpen,
  Car
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { useUserProgress } from '../context/UserProgressContext';
import VoiceButton from '../components/VoiceButton';
import StuckHelpBox from '../components/StuckHelpBox';

export default function Home() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const { completedStages, getRecommendedNextStep } = useUserProgress();

  const recommendedStep = getRecommendedNextStep();

  // 4 Starting situation cards
  const startingOptions = [
    {
      id: 'opt_starting',
      title: t('home_opt_starting'),
      desc: t('home_opt_starting_desc'),
      path: '/apply',
      icon: Compass,
      color: 'bg-teal-500'
    },
    {
      id: 'opt_have_ll',
      title: t('home_opt_have_ll'),
      desc: t('home_opt_have_ll_desc'),
      path: '/permanent-licence',
      icon: Calendar,
      color: 'bg-blue-600'
    },
    {
      id: 'opt_booked_test',
      title: t('home_opt_booked_test'),
      desc: t('home_opt_booked_test_desc'),
      path: '/driving-test',
      icon: Car,
      color: 'bg-emerald-600'
    },
    {
      id: 'opt_waiting',
      title: t('home_opt_waiting'),
      desc: t('home_opt_waiting_desc'),
      path: '/track',
      icon: Clock,
      color: 'bg-amber-600'
    }
  ];

  // 6-stage journey definitions
  const stages = [
    {
      num: 1,
      title: t('journey_stage_1'),
      desc: t('journey_stage_1_desc'),
      path: '/apply'
    },
    {
      num: 2,
      title: t('journey_stage_2'),
      desc: t('journey_stage_2_desc'),
      path: '/ll-application'
    },
    {
      num: 3,
      title: t('journey_stage_3'),
      desc: t('journey_stage_3_desc'),
      path: '/mock-test'
    },
    {
      num: 4,
      title: t('journey_stage_4'),
      desc: t('journey_stage_4_desc'),
      path: '/permanent-licence'
    },
    {
      num: 5,
      title: t('journey_stage_5'),
      desc: t('journey_stage_5_desc'),
      path: '/driving-test'
    },
    {
      num: 6,
      title: t('journey_stage_6'),
      desc: t('journey_stage_6_desc'),
      path: '/track'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
      {/* Hero Heading */}
      <section className="text-center sm:text-left mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100 text-teal-900 text-xs font-bold mb-3">
          <Sparkles className="w-4 h-4 text-teal-700" aria-hidden="true" />
          <span>mParivahan Public Service Prototype</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('home_heading')}
          </h1>
          <VoiceButton
            text={`${t('home_heading')}. ${t('home_subheading')}`}
            className="self-center sm:self-auto"
          />
        </div>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          {t('home_subheading')}
        </p>
      </section>

      {/* Recommended Next Step Callout (Prompt: "exactly one recommended next step based on saved progress") */}
      {recommendedStep && (
        <section aria-label={t('label_recommended')} className="mb-8">
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-saathi-navy to-saathi-navyLight text-white shadow-lg border border-teal-500/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-400 text-saathi-navyDark text-xs font-extrabold tracking-wide uppercase mb-2">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  {t('label_recommended')}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {t(recommendedStep.titleKey)}
                </h2>
                <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
                  {t(recommendedStep.descKey)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate(recommendedStep.path)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-saathi-teal hover:bg-teal-400 text-white hover:text-slate-900 font-extrabold rounded-xl transition-all shadow-md min-h-[48px] shrink-0 focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{t('btn_continue')}</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 4 Starting Question Options (Large accessible buttons) */}
      <section aria-label="Starting options" className="mb-10">
        <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-500 mb-3">
          {t('home_choose_start')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {startingOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => navigate(opt.path)}
                className="group p-4 sm:p-5 rounded-2xl bg-white border-2 border-slate-200 hover:border-saathi-teal text-left transition-all shadow-sm hover:shadow-md min-h-[96px] flex items-start gap-4 focus-visible:ring-3 focus-visible:ring-teal-600"
              >
                <div className={`p-3 rounded-xl text-white ${opt.color} shrink-0 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-saathi-teal transition-colors">
                      {opt.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-saathi-teal group-hover:translate-x-1 transition-all" aria-hidden="true" />
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-snug">
                    {opt.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 6-Stage Journey Roadmap */}
      <section aria-label={t('home_journey_title')} className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm mb-8">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              {t('home_journey_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {t('home_journey_subtitle')}
            </p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
            {completedStages.length} / 6 {t('label_completed')}
          </span>
        </div>

        <ol className="space-y-4 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-slate-200 before:z-0">
          {stages.map((stage) => {
            const isCompleted = completedStages.includes(stage.num);
            const isCurrent = recommendedStep?.stageNum === stage.num;

            return (
              <li
                key={stage.num}
                className={`relative z-10 p-4 rounded-xl border transition-all flex items-start gap-4 ${
                  isCompleted
                    ? 'bg-teal-50/50 border-teal-200'
                    : isCurrent
                    ? 'bg-amber-50/80 border-amber-300 ring-2 ring-amber-400/40'
                    : 'bg-white border-slate-200 opacity-90'
                }`}
              >
                {/* Stage number or checkmark */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-sm ${
                    isCompleted
                      ? 'bg-teal-600 text-white'
                      : isCurrent
                      ? 'bg-amber-500 text-slate-950 font-extrabold'
                      : 'bg-slate-200 text-slate-700'
                  }`}
                  aria-label={`Stage ${stage.num} ${isCompleted ? 'Completed' : isCurrent ? 'Current' : 'Pending'}`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 fill-current" aria-hidden="true" />
                  ) : (
                    <span>{stage.num}</span>
                  )}
                </div>

                {/* Stage Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-900">
                      {stage.title}
                    </h3>
                    {isCompleted ? (
                      <span className="text-xs font-bold text-teal-700 bg-teal-100 px-2.5 py-0.5 rounded-full">
                        {t('label_completed')}
                      </span>
                    ) : isCurrent ? (
                      <span className="text-xs font-bold text-amber-900 bg-amber-200 px-2.5 py-0.5 rounded-full">
                        {t('label_current_stage')}
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-slate-500">
                        {t('label_pending')}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {stage.desc}
                  </p>
                  <div className="mt-3">
                    <Link
                      to={stage.path}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-saathi-teal hover:text-saathi-navy transition-colors min-h-[36px]"
                    >
                      <span>{t('home_explore_stage', { num: stage.num })}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Helpful Guidance */}
      <StuckHelpBox
        message={t('apply_stuck_tip')}
        title={t('stuck_help_title')}
      />
    </div>
  );
}
