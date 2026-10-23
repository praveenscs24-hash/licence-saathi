import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Award,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  HelpCircle,
  BookOpen
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { useUserProgress } from '../context/UserProgressContext';
import { QUESTIONS, getTestQuestions } from '../data/questions';
import { TRAFFIC_SIGNS } from '../data/signs';
import { TEST_CONFIG, evaluateTestResult } from '../data/config';
import PageHeader from '../components/PageHeader';
import VoiceButton from '../components/VoiceButton';
import StuckHelpBox from '../components/StuckHelpBox';

export default function MockTest() {
  const { t, language } = useI18n();
  const { testHistory, recordTestAttempt, calculateReadiness } = useUserProgress();

  // Mode: 'menu' | 'practice' | 'test' | 'result'
  const [mode, setMode] = useState('menu');

  // Test session state
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { [qIndex]: selectedOptionIndex }
  const [timerSeconds, setTimerSeconds] = useState(TEST_CONFIG.timePerQuestionSeconds);

  // Practice session state
  const [selectedPracticeOption, setSelectedPracticeOption] = useState(null);
  const [hasRevealedPractice, setHasRevealedPractice] = useState(false);

  // Timer reference for cleanup
  const timerRef = useRef(null);

  // Readiness stats
  const readiness = calculateReadiness();

  // Start Practice Mode
  const startPractice = () => {
    setQuestions(getTestQuestions(20));
    setCurrentIndex(0);
    setSelectedPracticeOption(null);
    setHasRevealedPractice(false);
    setMode('practice');
  };

  // Start Timed Test Mode
  const startTest = () => {
    setQuestions(getTestQuestions(TEST_CONFIG.questionCount));
    setCurrentIndex(0);
    setUserAnswers({});
    setTimerSeconds(TEST_CONFIG.timePerQuestionSeconds);
    setMode('test');
  };

  // Timed Test Per-Question Countdown (30 seconds per question from config.js)
  useEffect(() => {
    if (mode !== 'test') return;

    timerRef.current = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          // Time expired for this question: record as unanswered (-1) and advance
          handleAdvanceTimedQuestion(-1);
          return TEST_CONFIG.timePerQuestionSeconds;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [mode, currentIndex, questions]);

  const handleAdvanceTimedQuestion = (chosenOption) => {
    const nextAnswers = { ...userAnswers, [currentIndex]: chosenOption };
    setUserAnswers(nextAnswers);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setTimerSeconds(TEST_CONFIG.timePerQuestionSeconds);
    } else {
      // Test finished! Calculate result reliably from config.js
      finishTest(nextAnswers);
    }
  };

  const handleSelectTimedOption = (optionIndex) => {
    if (userAnswers[currentIndex] !== undefined) return; // Prevent duplicate answers
    handleAdvanceTimedQuestion(optionIndex);
  };

  const finishTest = (finalAnswers) => {
    if (timerRef.current) clearInterval(timerRef.current);

    let score = 0;
    questions.forEach((q, idx) => {
      if (finalAnswers[idx] === q.correctAnswer) {
        score += 1;
      }
    });

    const evaluated = evaluateTestResult(score, questions.length);

    recordTestAttempt({
      score: evaluated.score,
      totalQuestions: evaluated.totalQuestions,
      percentage: evaluated.percentage,
      passed: evaluated.passed,
      mode: 'timed'
    });

    if (evaluated.passed) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }

    setMode('result');
  };

  // Practice mode answer handler
  const handleSelectPracticeOption = (optionIndex) => {
    if (hasRevealedPractice) return;
    setSelectedPracticeOption(optionIndex);
    setHasRevealedPractice(true);
  };

  const handleNextPracticeQuestion = () => {
    setSelectedPracticeOption(null);
    setHasRevealedPractice(false);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Loop or restart
      setQuestions(getTestQuestions(20));
      setCurrentIndex(0);
    }
  };

  // Current question data in selected language
  const currentQ = questions[currentIndex];
  const langData = currentQ ? (currentQ[language] || currentQ.en) : null;
  const signMatch = currentQ?.signId ? TRAFFIC_SIGNS.find(s => s.id === currentQ.signId) : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
      {/* MENU MODE */}
      {mode === 'menu' && (
        <>
          <PageHeader
            title={t('mock_title')}
            subtitle={t('mock_subtitle')}
            badge="Stage 3 Exam"
            backTo="/"
          />

          {/* Readiness Meter Card */}
          <section aria-label={t('mock_readiness_title')} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 flex items-center gap-1.5 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  {t('mock_readiness_title')}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  {readiness.isReady ? t('mock_status_ready') : t('mock_status_not_ready')}
                </h2>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-2xl sm:text-3xl font-black text-saathi-teal">
                  {readiness.avgPercentage}%
                </span>
                <span className="text-xs text-slate-500 block">
                  {t('mock_avg_score_label', { count: readiness.count })}
                </span>
              </div>
            </div>

            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden mb-3">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  readiness.isReady ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
                style={{ width: `${Math.min(100, readiness.avgPercentage)}%` }}
              />
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>{t('mock_how_calc_label')} </strong>
              {t('mock_readiness_desc')}
            </p>
          </section>

          {/* Mode Selection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* Practice Mode */}
            <div className="p-5 rounded-2xl bg-white border-2 border-slate-200 hover:border-saathi-teal shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-teal-100 text-teal-800 text-xs font-extrabold mb-2">
                  {t('mock_practice_badge')}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {t('mock_mode_practice')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {t('mock_mode_practice_desc')}
                </p>
              </div>
              <button
                type="button"
                onClick={startPractice}
                className="mt-6 w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-colors min-h-[48px]"
              >
                {t('mock_btn_start_practice')}
              </button>
            </div>

            {/* Timed Test Mode */}
            <div className="p-5 rounded-2xl bg-white border-2 border-slate-200 hover:border-blue-600 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-extrabold mb-2">
                  {t('mock_test_badge')}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {t('mock_mode_test')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {t('mock_mode_test_desc')}
                </p>
              </div>
              <button
                type="button"
                onClick={startTest}
                className="mt-6 w-full py-3 px-4 bg-saathi-navy hover:bg-saathi-navyLight text-white font-extrabold rounded-xl transition-colors min-h-[48px]"
              >
                {t('mock_btn_start_test')}
              </button>
            </div>
          </div>

          {/* Attempt History */}
          <section aria-label="Recent Attempts" className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm mb-6">
            <h3 className="text-sm font-extrabold text-slate-800 mb-3 uppercase tracking-wider">
              {t('mock_history_title')}
            </h3>
            {testHistory.length === 0 ? (
              <p className="text-xs text-slate-500 py-2">{t('mock_no_history')}</p>
            ) : (
              <div className="divide-y divide-slate-100">
                {testHistory.slice(0, 5).map((att) => (
                  <div key={att.id} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-slate-900 block">
                        {att.score} / {att.total} ({att.percentage}%)
                      </span>
                      <span className="text-slate-400 text-[11px]">
                        {att.date} at {att.time} • {att.mode}
                      </span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full font-bold text-xs ${
                      att.passed ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {att.passed ? 'PASS' : 'FAIL'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          <StuckHelpBox
            message="Remember: You need 9 correct answers out of 15 to pass the RTO exam. Practicing all 22 signs in the Learn section ensures you never get stuck."
          />
        </>
      )}

      {/* PRACTICE MODE */}
      {mode === 'practice' && currentQ && langData && (
        <section aria-label="Practice Mode Question" className="space-y-6">
          <div className="flex items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200">
            <span className="text-sm font-bold text-slate-600">
              {t('mock_practice_counter', { current: currentIndex + 1, total: questions.length })}
            </span>
            <button
              type="button"
              onClick={() => setMode('menu')}
              className="text-xs font-bold text-rose-600 hover:underline p-1"
            >
              {t('mock_btn_exit_practice')}
            </button>
          </div>

          <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
            {/* Optional Traffic Sign Image */}
            {signMatch && (
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
                  {signMatch.renderSvg("w-28 h-28")}
                </div>
              </div>
            )}

            <div className="flex items-start justify-between gap-3 mb-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {currentIndex + 1}. {langData.question}
              </h2>
              <VoiceButton text={langData.question} />
            </div>

            {/* Answer Options */}
            <div className="space-y-3">
              {langData.options.map((opt, oIdx) => {
                const isSelected = selectedPracticeOption === oIdx;
                const isCorrect = oIdx === currentQ.correctAnswer;

                let btnStyle = "border-slate-200 hover:border-saathi-teal bg-white text-slate-900";
                if (hasRevealedPractice) {
                  if (isCorrect) {
                    btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                  } else if (isSelected) {
                    btnStyle = "border-rose-400 bg-rose-50 text-rose-950 font-medium";
                  }
                }

                return (
                  <button
                    key={oIdx}
                    type="button"
                    disabled={hasRevealedPractice}
                    onClick={() => handleSelectPracticeOption(oIdx)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-3 min-h-[52px] ${btnStyle}`}
                  >
                    <span className="text-sm sm:text-base leading-snug">{opt}</span>
                    {hasRevealedPractice && isCorrect && (
                      <span className="flex items-center gap-1 text-emerald-700 text-xs font-extrabold shrink-0">
                        <CheckCircle2 className="w-5 h-5 fill-emerald-600 text-white" aria-hidden="true" />
                        <span>{t('mock_label_correct')}</span>
                      </span>
                    )}
                    {hasRevealedPractice && isSelected && !isCorrect && (
                      <span className="flex items-center gap-1 text-rose-700 text-xs font-extrabold shrink-0">
                        <XCircle className="w-5 h-5 fill-rose-600 text-white" aria-hidden="true" />
                        <span>{t('mock_label_incorrect')}</span>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation when revealed */}
            {hasRevealedPractice && (
              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                <span className="font-extrabold text-slate-900 block mb-1">
                  {t('mock_explanation_heading')}:
                </span>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {langData.explanation}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPracticeOption(null);
                      setHasRevealedPractice(false);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-slate-900 p-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t('btn_retry')}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextPracticeQuestion}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-saathi-teal hover:bg-teal-500 text-white font-extrabold text-sm rounded-xl min-h-[44px]"
                  >
                    <span>{t('btn_next')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* TIMED TEST MODE */}
      {mode === 'test' && currentQ && langData && (
        <section aria-label="Timed Test Screen" className="space-y-4">
          {/* Header with 30-Second Countdown & Progress */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-3">
            <span className="text-xs sm:text-sm font-extrabold text-slate-700">
              {t('mock_question_counter', { current: currentIndex + 1, total: questions.length })}
            </span>

            {/* Timer (Config 30s) */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-black text-sm ${
              timerSeconds <= 5
                ? 'bg-rose-100 text-rose-700 border border-rose-300 animate-pulse'
                : timerSeconds <= 10
                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                : 'bg-teal-50 text-teal-800 border border-teal-200'
            }`}>
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>{timerSeconds}s</span>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
            {/* Traffic Sign Image if present */}
            {signMatch && (
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
                  {signMatch.renderSvg("w-28 h-28")}
                </div>
              </div>
            )}

            <div className="flex items-start justify-between gap-3 mb-5">
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                {currentIndex + 1}. {langData.question}
              </h2>
              <VoiceButton text={langData.question} />
            </div>

            {/* Answer Options (Do NOT reveal correctness before test ends) */}
            <div className="space-y-3">
              {langData.options.map((opt, oIdx) => (
                <button
                  key={oIdx}
                  type="button"
                  onClick={() => handleSelectTimedOption(oIdx)}
                  className="w-full text-left p-4 rounded-xl border-2 border-slate-200 hover:border-saathi-teal hover:bg-slate-50 text-slate-900 text-sm sm:text-base font-semibold transition-all min-h-[52px] flex items-center justify-between"
                >
                  <span>{opt}</span>
                  <span className="w-5 h-5 rounded-full border-2 border-slate-300 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RESULT MODE */}
      {mode === 'result' && (
        <section aria-label="Test Results Summary" className="space-y-6">
          {(() => {
            let score = 0;
            const incorrectOrUnanswered = [];

            questions.forEach((q, idx) => {
              const userAns = userAnswers[idx];
              const isCorrect = userAns === q.correctAnswer;
              if (isCorrect) {
                score += 1;
              } else {
                incorrectOrUnanswered.push({
                  q,
                  userAns,
                  correctAnswer: q.correctAnswer,
                  index: idx
                });
              }
            });

            const evaluated = evaluateTestResult(score, questions.length);

            return (
              <>
                <div className={`p-6 sm:p-8 rounded-2xl border-2 text-center shadow-md ${
                  evaluated.passed
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                    : 'bg-rose-50 border-rose-300 text-rose-950'
                }`}>
                  <div className="inline-flex p-3 rounded-full mb-3 bg-white shadow-sm">
                    {evaluated.passed ? (
                      <Award className="w-10 h-10 text-emerald-600" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="w-10 h-10 text-rose-600" aria-hidden="true" />
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black mb-1">
                    {evaluated.passed ? t('mock_result_passed') : t('mock_result_failed')}
                  </h2>
                  <p className="text-base sm:text-lg font-bold mb-2">
                    {t('mock_score_summary', {
                      score: evaluated.score,
                      total: evaluated.totalQuestions,
                      percentage: evaluated.percentage
                    })}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 max-w-md mx-auto">
                    {t('mock_pass_mark_info', { passMark: TEST_CONFIG.passMark })}
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={startTest}
                      className="px-6 py-3 bg-saathi-navy hover:bg-saathi-navyLight text-white font-extrabold text-sm rounded-xl transition-all shadow min-h-[48px]"
                    >
                      {t('btn_retry')} Timed Test
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode('menu')}
                      className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 rounded-xl transition-colors min-h-[48px]"
                    >
                      {t('mock_btn_return_menu')}
                    </button>
                  </div>
                </div>

                {/* Incorrect & Unanswered Review (Prompt Requirement!) */}
                {incorrectOrUnanswered.length > 0 && (
                  <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-base font-extrabold text-slate-900 mb-4 pb-2 border-b">
                      {t('mock_review_incorrect')} ({incorrectOrUnanswered.length})
                    </h3>

                    <div className="space-y-6">
                      {incorrectOrUnanswered.map(({ q, userAns, correctAnswer, index }) => {
                        const qLang = q[language] || q.en;
                        const userText = (userAns !== undefined && userAns >= 0)
                          ? qLang.options[userAns]
                          : t('mock_unanswered');
                        const correctText = qLang.options[correctAnswer];

                        return (
                          <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2">
                            <span className="font-extrabold text-slate-900 block">
                              Question {index + 1}: {qLang.question}
                            </span>
                            <div className="p-2 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 flex items-center gap-2">
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                              <span><strong>{t('mock_your_answer')}</strong> {userText}</span>
                            </div>
                            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span><strong>{t('mock_correct_label')}</strong> {correctText}</span>
                            </div>
                            <p className="text-slate-600 italic pt-1">
                              <strong>Why: </strong>{qLang.explanation}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </>
            );
          })()}
        </section>
      )}
    </div>
  );
}
