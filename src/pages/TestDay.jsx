import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Monitor,
  CheckCircle,
  Clock,
  ShieldAlert,
  ArrowRight,
  HelpCircle,
  FileCheck2,
  User,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { getDemoQuestions } from '../data/questions';
import { TRAFFIC_SIGNS } from '../data/signs';
import PageHeader from '../components/PageHeader';
import VoiceButton from '../components/VoiceButton';
import StuckHelpBox from '../components/StuckHelpBox';

export default function TestDay() {
  const navigate = useNavigate();
  const { t, language } = useI18n();

  // Test Simulator state
  const [simulatorActive, setSimulatorActive] = useState(false);
  const [demoQuestions] = useState(() => getDemoQuestions()); // Exactly 3 questions
  const [demoIndex, setDemoIndex] = useState(0);
  const [demoSelected, setDemoSelected] = useState(null);
  const [demoScore, setDemoScore] = useState(0);
  const [demoFinished, setDemoFinished] = useState(false);

  const startDemoRun = () => {
    setDemoIndex(0);
    setDemoSelected(null);
    setDemoScore(0);
    setDemoFinished(false);
    setSimulatorActive(true);
  };

  const handleConfirmAnswer = () => {
    if (demoSelected === null) return;

    const isCorrect = demoSelected === demoQuestions[demoIndex].correctAnswer;
    if (isCorrect) {
      setDemoScore(prev => prev + 1);
    }

    if (demoIndex + 1 < demoQuestions.length) {
      setDemoIndex(prev => prev + 1);
      setDemoSelected(null);
    } else {
      setDemoFinished(true);
    }
  };

  const currentQ = demoQuestions[demoIndex];
  const langData = currentQ ? (currentQ[language] || currentQ.en) : null;
  const signMatch = currentQ?.signId ? TRAFFIC_SIGNS.find(s => s.id === currentQ.signId) : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
      <PageHeader
        title={t('testday_title')}
        subtitle={t('testday_subtitle')}
        badge="Test Guide"
        backTo="/"
      />

      {/* Simulator Modal or Full Container */}
      {simulatorActive ? (
        <section
          role="region"
          aria-label="Official Test Screen Simulator"
          className="bg-white rounded-2xl border-4 border-slate-700 shadow-2xl overflow-hidden mb-8"
        >
          {/* Government Style Blue Header */}
          <div className="bg-saathi-navy text-white p-4 flex items-center justify-between border-b-2 border-amber-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white text-saathi-navy font-black flex items-center justify-center text-sm shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-teal-300 font-bold block">
                  Candidate Simulator (Ramesh Kumar)
                </span>
                <span className="text-sm font-bold">Roll No: 2026-UP-9481</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-amber-300 font-extrabold block">
                {t('testday_demo_title')}
              </span>
              <span className="text-xs font-semibold text-slate-300">
                Trial Question {demoIndex + 1} of 3
              </span>
            </div>
          </div>

          {/* Simulator Body */}
          <div className="p-5 sm:p-7">
            {/* Clear Simulation Notice (Prompt Requirement!) */}
            <div className="mb-4 p-2.5 rounded-lg bg-amber-50 border border-amber-300 text-amber-950 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" aria-hidden="true" />
              <span>{t('testday_demo_disclaimer')}</span>
            </div>

            {!demoFinished && currentQ && langData ? (
              <div className="space-y-4">
                {signMatch && (
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-slate-50 border rounded-xl">
                      {signMatch.renderSvg("w-24 h-24")}
                    </div>
                  </div>
                )}

                <div className="p-3 bg-slate-100 rounded-xl border border-slate-200">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Question {demoIndex + 1}: {langData.question}
                  </h3>
                </div>

                {/* 4 Choices */}
                <div className="space-y-2.5">
                  {langData.options.map((opt, oIdx) => (
                    <label
                      key={oIdx}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                        demoSelected === oIdx
                          ? 'border-saathi-teal bg-teal-50'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="demo_option"
                        value={oIdx}
                        checked={demoSelected === oIdx}
                        onChange={() => setDemoSelected(oIdx)}
                        className="w-5 h-5 text-saathi-teal focus:ring-saathi-teal"
                      />
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setSimulatorActive(false)}
                    className="text-xs text-rose-600 font-bold hover:underline p-2"
                  >
                    Cancel Trial
                  </button>

                  <button
                    type="button"
                    disabled={demoSelected === null}
                    onClick={handleConfirmAnswer}
                    className="px-6 py-2.5 bg-saathi-navy hover:bg-saathi-navyLight disabled:opacity-50 text-white font-extrabold text-sm rounded-xl min-h-[44px] transition-all"
                  >
                    Confirm & Proceed
                  </button>
                </div>
              </div>
            ) : (
              /* Demo Completion Screen */
              <div className="text-center py-6">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {t('testday_demo_finished')}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  You answered {demoScore} out of 3 questions correctly in this demonstration trial run.
                </p>
                <button
                  type="button"
                  onClick={() => setSimulatorActive(false)}
                  className="px-6 py-3 bg-saathi-teal text-white font-bold rounded-xl text-sm min-h-[44px]"
                >
                  Close Test Simulator
                </button>
              </div>
            )}
          </div>
        </section>
      ) : null}

      {/* Guide Cards */}
      <section aria-label="Step-by-step guidance" className="space-y-4 mb-8">
        <article className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 rounded-xl bg-teal-50 text-teal-700 shrink-0">
            <Monitor className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1">
              {t('testday_guide_1_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t('testday_guide_1_desc')}
            </p>
          </div>
        </article>

        <article className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 rounded-xl bg-blue-50 text-blue-700 shrink-0">
            <FileCheck2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1">
              {t('testday_guide_2_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t('testday_guide_2_desc')}
            </p>
          </div>
        </article>

        <article className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 rounded-xl bg-amber-50 text-amber-700 shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1">
              {t('testday_guide_3_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t('testday_guide_3_desc')}
            </p>
          </div>
        </article>

        <article className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
          <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 mb-1">
              {t('testday_guide_4_title')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {t('testday_guide_4_desc')}
            </p>
          </div>
        </article>
      </section>

      {/* Simulator Launcher Button (Prompt Requirement: "Try the test screen") */}
      {!simulatorActive && (
        <div className="p-6 rounded-2xl bg-gradient-to-r from-saathi-navy to-slate-800 text-white shadow-md mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Familiarize yourself with the computer layout
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Experience how official online questions look before attending the real test.
              </p>
            </div>
            <button
              type="button"
              onClick={startDemoRun}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-saathi-teal hover:bg-teal-400 text-white font-extrabold rounded-xl transition-all shadow min-h-[48px] shrink-0"
            >
              <Monitor className="w-5 h-5" />
              <span>{t('testday_demo_btn')}</span>
            </button>
          </div>
        </div>
      )}

      {/* Helpful Guidance */}
      <StuckHelpBox
        message="Never press browser Refresh (F5) or Back during the online test. Doing so immediately cancels your session."
        title={t('stuck_help_title')}
      />
    </div>
  );
}
