import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  CheckSquare,
  Square,
  ShieldCheck,
  ArrowRight,
  Info
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { useUserProgress } from '../context/UserProgressContext';
import { RTOS, getRtosByState } from '../data/rtos';
import { TIMELINE_CONFIG } from '../data/config';
import { calculateLicenceDates } from '../utils/dateCalculations';
import PageHeader from '../components/PageHeader';
import StuckHelpBox from '../components/StuckHelpBox';

export default function PermanentLicence() {
  const { t } = useI18n();
  const {
    llIssueDate,
    saveLLIssueDate,
    testBooking,
    saveTestBooking,
    eligibility
  } = useUserProgress();

  // Issue date input (default to 40 days ago if empty so Ramesh is eligible)
  const [inputDate, setInputDate] = useState(() => {
    if (llIssueDate) return llIssueDate;
    const d = new Date();
    d.setDate(d.getDate() - 40);
    return d.toISOString().split('T')[0];
  });

  const [dateInfo, setDateInfo] = useState(() => calculateLicenceDates(inputDate));

  // Simulated Slot Booking Form
  const userRtos = getRtosByState(eligibility?.stateCode || 'UP');
  const [selectedRtoId, setSelectedRtoId] = useState(userRtos[0]?.id || 'UP-14');

  // Next business days for booking
  const sampleDates = [
    (() => { const d = new Date(); d.setDate(d.getDate() + 3); return d.toISOString().split('T')[0]; })(),
    (() => { const d = new Date(); d.setDate(d.getDate() + 5); return d.toISOString().split('T')[0]; })(),
    (() => { const d = new Date(); d.setDate(d.getDate() + 8); return d.toISOString().split('T')[0]; })()
  ];

  const [selectedDate, setSelectedDate] = useState(sampleDates[0]);
  const activeRto = RTOS.find(r => r.id === selectedRtoId) || userRtos[0];
  const [selectedSlot, setSelectedSlot] = useState(activeRto.slots[0]);
  const [bookingSuccess, setBookingSuccess] = useState(Boolean(testBooking));

  // Test Day Checklist State
  const [checklist, setChecklist] = useState({
    c1: true,
    c2: true,
    c3: false,
    c4: false
  });

  const handleCalculateDates = (e) => {
    if (e) e.preventDefault();
    const info = calculateLicenceDates(inputDate);
    setDateInfo(info);
    saveLLIssueDate(inputDate);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const bookingData = {
      rtoId: activeRto.id,
      rtoName: activeRto.name,
      rtoAddress: activeRto.address,
      date: selectedDate,
      slot: selectedSlot,
      confirmedAt: new Date().toISOString()
    };
    saveTestBooking(bookingData);
    setBookingSuccess(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
      <PageHeader
        title={t('perm_title')}
        subtitle={t('perm_subtitle')}
        badge="Stage 4 & 5"
        backTo="/"
      />

      {/* SECTION 1: LL Date Calculator */}
      <section aria-label="Learner Licence Validity Calculator" className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm mb-6">
        <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-saathi-teal" />
          <span>{t('perm_validity_rule_title')}</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mb-4 font-normal">
          {t('perm_validity_rule_desc')}
        </p>

        <form onSubmit={handleCalculateDates} className="flex flex-col sm:flex-row items-end gap-3 mb-6">
          <div className="flex-1 w-full">
            <label htmlFor="ll_issue_date" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
              {t('perm_enter_ll_date')}
            </label>
            <input
              id="ll_issue_date"
              type="date"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900 font-semibold"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3.5 bg-saathi-navy hover:bg-saathi-navyLight text-white font-extrabold text-sm rounded-xl transition-all shadow min-h-[48px]"
          >
            {t('perm_calc_btn')}
          </button>
        </form>

        {/* Calculated Result Statistics */}
        {dateInfo && (
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border-2 font-bold text-sm flex items-start gap-3 ${
              dateInfo.isExpired
                ? 'bg-rose-50 border-rose-400 text-rose-950'
                : dateInfo.isEligibleNow
                ? 'bg-emerald-50 border-emerald-400 text-emerald-950'
                : 'bg-amber-50 border-amber-300 text-amber-950'
            }`}>
              {dateInfo.isExpired ? (
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              )}
              <div>
                <span className="block text-base font-black">
                  {dateInfo.isExpired
                    ? t('perm_status_expired')
                    : dateInfo.isEligibleNow
                    ? t('perm_status_eligible_now')
                    : t('perm_status_waiting', { days: dateInfo.daysUntilEligible })}
                </span>
                {!dateInfo.isExpired && (
                  <span className="text-xs font-semibold text-slate-600 mt-0.5 block">
                    {t('perm_days_left_expiry', { days: dateInfo.daysLeftBeforeExpiry })}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-500 font-bold block mb-0.5">{t('perm_stat_earliest')}:</span>
                <span className="text-base font-extrabold text-slate-900">{dateInfo.earliestDateStr}</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-slate-500 font-bold block mb-0.5">{t('perm_stat_expiry')}:</span>
                <span className="text-base font-extrabold text-slate-900">{dateInfo.expiryDateStr}</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* SECTION 2: Simulated Slot Booking (Prompt Requirement!) */}
      <section aria-label={t('perm_booking_title')} className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm mb-6">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-saathi-teal" />
            <span>{t('perm_booking_title')}</span>
          </h2>
          <span className="text-[11px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
            SIMULATED
          </span>
        </div>
        <p className="text-xs text-slate-500 mb-5">
          {t('perm_booking_subtitle')}
        </p>

        <form onSubmit={handleConfirmBooking} className="space-y-4">
          <div>
            <label htmlFor="slot_rto" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
              {t('perm_booking_rto')}
            </label>
            <select
              id="slot_rto"
              value={selectedRtoId}
              onChange={(e) => {
                setSelectedRtoId(e.target.value);
                const rto = RTOS.find(r => r.id === e.target.value);
                if (rto && rto.slots.length > 0) {
                  setSelectedSlot(rto.slots[0]);
                }
              }}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900 text-sm font-semibold"
            >
              {userRtos.map(r => (
                <option key={r.id} value={r.id}>{r.name} ({r.code})</option>
              ))}
            </select>
            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{activeRto.address}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="slot_date" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                {t('perm_booking_date')}
              </label>
              <select
                id="slot_date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900 text-sm font-semibold"
              >
                {sampleDates.map(d => (
                  <option key={d} value={d}>{d} (Available Slot)</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="slot_time" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                {t('perm_booking_slot')}
              </label>
              <select
                id="slot_time"
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900 text-sm font-semibold"
              >
                {activeRto.slots.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 bg-saathi-teal hover:bg-teal-500 text-white font-extrabold text-sm rounded-xl transition-all shadow min-h-[48px]"
            >
              {t('perm_btn_book')}
            </button>
          </div>
        </form>

        {/* Booking Confirmation Box */}
        {bookingSuccess && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950">
            <h3 className="font-extrabold text-emerald-900 flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>{t('perm_booked_success')}</span>
            </h3>
            <p className="text-xs sm:text-sm font-medium">
              {t('perm_booked_details', {
                rto: activeRto.name,
                date: testBooking?.date || selectedDate,
                slot: testBooking?.slot || selectedSlot
              })}
            </p>
          </div>
        )}
      </section>

      {/* SECTION 3: Test-Day Preparation Checklist (Prompt Requirement!) */}
      <section aria-label={t('perm_checklist_title')} className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm mb-6">
        <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
          {t('perm_checklist_title')}
        </h2>
        <div className="space-y-3">
          {[
            { id: 'c1', text: t('perm_check_1') },
            { id: 'c2', text: t('perm_check_2') },
            { id: 'c3', text: t('perm_check_3') },
            { id: 'c4', text: t('perm_check_4') }
          ].map(item => (
            <label
              key={item.id}
              className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={checklist[item.id]}
                onChange={() => setChecklist(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                className="w-5 h-5 text-saathi-teal mt-0.5 rounded"
              />
              <span className={`text-xs sm:text-sm font-semibold leading-normal ${
                checklist[item.id] ? 'text-slate-900' : 'text-slate-600'
              }`}>
                {item.text}
              </span>
            </label>
          ))}
        </div>
      </section>

      {/* Helpful Guidance */}
      <StuckHelpBox
        message={t('perm_stuck_tip')}
        title={t('stuck_help_title')}
      />
    </div>
  );
}
