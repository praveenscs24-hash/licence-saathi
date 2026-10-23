import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Edit2,
  CreditCard,
  Printer,
  ShieldCheck,
  AlertTriangle,
  Receipt
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { useUserProgress } from '../context/UserProgressContext';
import { VEHICLE_CLASSES, FEE_CONFIG, calculateLearnerFee } from '../data/config';
import { STATES_AND_UTS, getRtosByState } from '../data/rtos';
import PageHeader from '../components/PageHeader';
import StuckHelpBox from '../components/StuckHelpBox';

export default function LLApplication() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const { eligibility, llApplication, saveLLApplication } = useUserProgress();

  // Load existing saved application if already completed, else default form state
  const [step, setStep] = useState(1);
  const [receiptNumber, setReceiptNumber] = useState(llApplication?.applicationNumber || null);
  const [validationError, setValidationError] = useState('');

  const [formData, setFormData] = useState(() => {
    if (llApplication) return llApplication;
    return {
      stateCode: eligibility?.stateCode || 'UP',
      rtoId: 'UP-14',
      vehicleClass: eligibility?.vehicleClassId || 'MCWG',
      fullName: 'Ramesh Kumar',
      fatherName: 'Suresh Kumar',
      gender: 'Male',
      dob: '2007-04-15',
      mobile: '9876543210',
      education: '10th Standard Pass (मैट्रिक)',
      bloodGroup: 'B+',
      address: 'House 42, Gali No. 3, Model Town',
      district: 'Ghaziabad',
      pincode: '201001',
      organDonation: 'yes',
      docsConfirmed: true
    };
  });

  // Calculate dynamic fees
  const feeInfo = calculateLearnerFee(1);
  const stateRtos = getRtosByState(formData.stateCode);

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setValidationError('');
  };

  const validateStep = (currentStep) => {
    if (currentStep === 1) {
      if (!formData.stateCode || !formData.rtoId) {
        setValidationError(t('ll_val_state_rto'));
        return false;
      }
    } else if (currentStep === 2) {
      if (!formData.vehicleClass) {
        setValidationError(t('ll_val_vehicle'));
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.fullName.trim() || !formData.fatherName.trim()) {
        setValidationError(t('ll_val_name'));
        return false;
      }
    } else if (currentStep === 4) {
      if (!formData.mobile.trim() || formData.mobile.length < 10) {
        setValidationError(t('ll_val_mobile'));
        return false;
      }
    } else if (currentStep === 5) {
      if (!formData.address.trim() || !formData.district.trim() || !formData.pincode.trim()) {
        setValidationError(t('ll_val_address'));
        return false;
      }
    } else if (currentStep === 7) {
      if (!formData.docsConfirmed) {
        setValidationError(t('ll_val_docs'));
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;
    setValidationError('');
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setValidationError('');
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleJumpToStep = (targetStep) => {
    setValidationError('');
    setStep(targetStep);
  };

  const handleSimulatePayment = () => {
    const generatedReceipt = saveLLApplication(formData);
    setReceiptNumber(generatedReceipt);
  };

  // If already completed or just submitted, show persistent receipt view
  if (receiptNumber) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
        <PageHeader
          title={t('ll_receipt_title')}
          subtitle={t('ll_receipt_success')}
          badge="Stage 2 Completed"
          backTo="/"
        />

        <div className="bg-white rounded-2xl border-2 border-emerald-500 shadow-md p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-3 text-emerald-700 font-extrabold text-xl mb-4 pb-4 border-b border-slate-100">
            <CheckCircle2 className="w-8 h-8 fill-emerald-100 text-emerald-600 shrink-0" aria-hidden="true" />
            <div>
              <h2>{t('ll_receipt_demo_title')}</h2>
              <p className="text-xs font-normal text-slate-500">{t('ll_receipt_portal_sub')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
            <div className="p-3 bg-teal-50 rounded-xl border border-teal-200">
              <span className="text-xs font-bold text-teal-800 uppercase block">{t('ll_app_num_label')}:</span>
              <span className="text-lg font-black text-slate-900">{receiptNumber}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-600 uppercase block">{t('ll_field_fullname')}:</span>
              <span className="text-base font-bold text-slate-900">{formData.fullName}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-600 uppercase block">{t('apply_vehicle_label')}:</span>
              <span className="text-sm font-semibold text-slate-900">{formData.vehicleClass}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-600 uppercase block">{t('ll_fee_total')}:</span>
              <span className="text-base font-bold text-emerald-700">₹{feeInfo.totalFee}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm mb-6">
            <h3 className="font-extrabold text-slate-900 mb-2">{t('ll_next_steps_title')}</h3>
            <ul className="space-y-1.5 list-disc list-inside text-slate-700 font-medium">
              <li>{t('ll_next_step_1', { appNum: receiptNumber })}</li>
              <li>{t('ll_next_step_2')}</li>
              <li>{t('ll_next_step_3')}</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={() => navigate('/learn')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-saathi-teal hover:bg-teal-500 text-white font-extrabold rounded-xl transition-all shadow min-h-[48px]"
            >
              <span>{t('ll_btn_go_learn')}</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => navigate('/track')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors min-h-[48px]"
            >
              <Receipt className="w-4 h-4" />
              <span>{t('ll_btn_track_app')}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-8">
      <PageHeader
        title={t('ll_title')}
        subtitle="Simulated multi-step application. No real payment or personal Aadhaar required."
        badge={t('ll_step_counter', { step })}
        backTo="/documents"
      />

      {/* Progress Bar (Prompt: "Progress bar and step count") */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6">
        <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-700 mb-2">
          <span>{t(`ll_step_${step}`)}</span>
          <span className="text-saathi-teal">{t('ll_step_counter', { step })}</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-saathi-teal h-full rounded-full transition-all duration-300"
            style={{ width: `${(step / 8) * 100}%` }}
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={8}
          />
        </div>
      </div>

      {/* Validation Error Banner */}
      {validationError && (
        <div role="alert" className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-300 text-rose-900 text-sm font-bold flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" aria-hidden="true" />
          <span>{validationError}</span>
        </div>
      )}

      {/* Step Container (One question/topic per screen) */}
      <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-sm mb-6 min-h-[300px]">
        {/* STEP 1: State & RTO Selection */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">
              1. {t('ll_step_1')}
            </h2>
            <div>
              <label htmlFor="form_state" className="block text-sm font-bold text-slate-800 mb-1">
                {t('ll_field_state')} <span className="text-rose-600">*</span>
              </label>
              <select
                id="form_state"
                value={formData.stateCode}
                onChange={(e) => {
                  handleFieldChange('stateCode', e.target.value);
                  const newRtos = getRtosByState(e.target.value);
                  if (newRtos.length > 0) {
                    handleFieldChange('rtoId', newRtos[0].id);
                  }
                }}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900"
              >
                {STATES_AND_UTS.map(s => (
                  <option key={s.code} value={s.code}>{s.name} ({s.code})</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="form_rto" className="block text-sm font-bold text-slate-800 mb-1">
                {t('ll_field_rto')} <span className="text-rose-600">*</span>
              </label>
              <select
                id="form_rto"
                value={formData.rtoId}
                onChange={(e) => handleFieldChange('rtoId', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900"
              >
                {stateRtos.map(r => (
                  <option key={r.id} value={r.id}>{r.name} ({r.code})</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* STEP 2: Vehicle Class */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">
              2. {t('ll_step_2')}
            </h2>
            <div className="space-y-3">
              {Object.values(VEHICLE_CLASSES).map(v => (
                <label
                  key={v.id}
                  className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.vehicleClass === v.id
                      ? 'border-saathi-teal bg-teal-50/50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="vehicle_class_select"
                    value={v.id}
                    checked={formData.vehicleClass === v.id}
                    onChange={(e) => handleFieldChange('vehicleClass', e.target.value)}
                    className="w-5 h-5 text-saathi-teal mt-0.5 focus:ring-saathi-teal"
                  />
                  <div>
                    <span className="font-bold text-slate-900 block text-base">{t(v.nameKey)}</span>
                    <span className="text-xs text-slate-600">{t(v.descKey)}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Applicant Details */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">
              3. {t('ll_step_3')}
            </h2>
            <div>
              <label htmlFor="form_name" className="block text-sm font-bold text-slate-800 mb-1">
                {t('ll_field_fullname')} <span className="text-rose-600">*</span>
              </label>
              <input
                id="form_name"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleFieldChange('fullName', e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900 font-semibold"
              />
            </div>
            <div>
              <label htmlFor="form_father" className="block text-sm font-bold text-slate-800 mb-1">
                {t('ll_field_fathername')} <span className="text-rose-600">*</span>
              </label>
              <input
                id="form_father"
                type="text"
                value={formData.fatherName}
                onChange={(e) => handleFieldChange('fatherName', e.target.value)}
                placeholder="e.g. Suresh Kumar"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="form_gender" className="block text-sm font-bold text-slate-800 mb-1">
                  {t('ll_field_gender')}
                </label>
                <select
                  id="form_gender"
                  value={formData.gender}
                  onChange={(e) => handleFieldChange('gender', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900"
                >
                  <option value="Male">{t('ll_field_gender_male')}</option>
                  <option value="Female">{t('ll_field_gender_female')}</option>
                  <option value="Transgender">{t('ll_field_gender_trans')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="form_dob" className="block text-sm font-bold text-slate-800 mb-1">
                  {t('ll_field_dob')}
                </label>
                <input
                  id="form_dob"
                  type="date"
                  value={formData.dob}
                  onChange={(e) => handleFieldChange('dob', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Contact & Education */}
        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">
              4. {t('ll_step_4')}
            </h2>
            <div>
              <label htmlFor="form_mobile" className="block text-sm font-bold text-slate-800 mb-1">
                {t('ll_field_mobile')} <span className="text-rose-600">*</span>
              </label>
              <input
                id="form_mobile"
                type="tel"
                maxLength={10}
                value={formData.mobile}
                onChange={(e) => handleFieldChange('mobile', e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900 font-semibold"
              />
              <span className="text-xs text-slate-500 mt-1 block">
                {t('ll_mobile_note')}
              </span>
            </div>
            <div>
              <label htmlFor="form_edu" className="block text-sm font-bold text-slate-800 mb-1">
                {t('ll_field_education')}
              </label>
              <input
                id="form_edu"
                type="text"
                value={formData.education}
                onChange={(e) => handleFieldChange('education', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900"
              />
            </div>
            <div>
              <label htmlFor="form_blood" className="block text-sm font-bold text-slate-800 mb-1">
                {t('ll_field_blood')}
              </label>
              <select
                id="form_blood"
                value={formData.bloodGroup}
                onChange={(e) => handleFieldChange('bloodGroup', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>
          </div>
        )}

        {/* STEP 5: Address Details */}
        {step === 5 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">
              5. {t('ll_step_5')}
            </h2>
            <div>
              <label htmlFor="form_address" className="block text-sm font-bold text-slate-800 mb-1">
                {t('ll_field_address')} <span className="text-rose-600">*</span>
              </label>
              <input
                id="form_address"
                type="text"
                value={formData.address}
                onChange={(e) => handleFieldChange('address', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="form_district" className="block text-sm font-bold text-slate-800 mb-1">
                  {t('ll_field_district')} <span className="text-rose-600">*</span>
                </label>
                <input
                  id="form_district"
                  type="text"
                  value={formData.district}
                  onChange={(e) => handleFieldChange('district', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900"
                />
              </div>
              <div>
                <label htmlFor="form_pin" className="block text-sm font-bold text-slate-800 mb-1">
                  {t('ll_field_pincode')} <span className="text-rose-600">*</span>
                </label>
                <input
                  id="form_pin"
                  type="text"
                  maxLength={6}
                  value={formData.pincode}
                  onChange={(e) => handleFieldChange('pincode', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-saathi-teal focus:ring-0 text-slate-900 font-semibold"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: Emergency & Organ Donation */}
        {step === 6 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">
              6. {t('ll_step_6')}
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {t('ll_field_organ')}
            </p>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3.5 rounded-xl border-2 border-slate-200 hover:border-saathi-teal cursor-pointer">
                <input
                  type="radio"
                  name="organ_pref"
                  value="yes"
                  checked={formData.organDonation === 'yes'}
                  onChange={(e) => handleFieldChange('organDonation', e.target.value)}
                  className="w-5 h-5 text-saathi-teal"
                />
                <span className="font-bold text-slate-900 text-sm">{t('ll_organ_yes')}</span>
              </label>
              <label className="flex items-center gap-3 p-3.5 rounded-xl border-2 border-slate-200 hover:border-saathi-teal cursor-pointer">
                <input
                  type="radio"
                  name="organ_pref"
                  value="no"
                  checked={formData.organDonation === 'no'}
                  onChange={(e) => handleFieldChange('organDonation', e.target.value)}
                  className="w-5 h-5 text-saathi-teal"
                />
                <span className="font-semibold text-slate-800 text-sm">{t('ll_organ_no')}</span>
              </label>
            </div>
          </div>
        )}

        {/* STEP 7: Document Upload Simulation */}
        {step === 7 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900">
              7. {t('ll_step_7')}
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
              <p>{t('ll_upload_info')}</p>
              <ul className="list-disc list-inside space-y-1 font-semibold text-slate-900">
                <li>Proof of Age (Marksheet / Aadhaar / Birth Certificate)</li>
                <li>Proof of Address (Aadhaar / Voter ID / Rent Agreement)</li>
                <li>Passport-size Photograph (White background)</li>
                <li>Clear Signature</li>
              </ul>
            </div>
            <label className="flex items-start gap-3 p-4 rounded-xl bg-teal-50 border border-teal-200 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.docsConfirmed}
                onChange={(e) => handleFieldChange('docsConfirmed', e.target.checked)}
                className="w-5 h-5 text-saathi-teal mt-0.5 rounded"
              />
              <span className="text-sm font-bold text-teal-950 leading-relaxed">
                {t('ll_docs_confirmed')}
              </span>
            </label>
          </div>
        )}

        {/* STEP 8: Review & Simulated Fee Payment */}
        {step === 8 && (
          <div className="space-y-5">
            <h2 className="text-lg font-bold text-slate-900">
              8. {t('ll_step_8')}
            </h2>
            <p className="text-xs text-slate-500">{t('ll_review_notice')}</p>

            {/* Answer Review Grid with Edit Action for Every Answer (Prompt Requirement!) */}
            <div className="divide-y divide-slate-200 border rounded-xl overflow-hidden">
              <div className="p-3 bg-slate-50 flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-slate-600 block">State & RTO:</span>
                  <span className="font-extrabold text-slate-900">{formData.stateCode} - {formData.rtoId}</span>
                </div>
                <button type="button" onClick={() => handleJumpToStep(1)} className="text-saathi-teal font-bold hover:underline flex items-center gap-1 p-2">
                  <Edit2 className="w-3.5 h-3.5" /> {t('btn_edit')}
                </button>
              </div>

              <div className="p-3 bg-white flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-slate-600 block">Vehicle Class:</span>
                  <span className="font-extrabold text-slate-900">{formData.vehicleClass}</span>
                </div>
                <button type="button" onClick={() => handleJumpToStep(2)} className="text-saathi-teal font-bold hover:underline flex items-center gap-1 p-2">
                  <Edit2 className="w-3.5 h-3.5" /> {t('btn_edit')}
                </button>
              </div>

              <div className="p-3 bg-slate-50 flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-slate-600 block">Applicant & Father's Name:</span>
                  <span className="font-extrabold text-slate-900">{formData.fullName} (S/O {formData.fatherName})</span>
                </div>
                <button type="button" onClick={() => handleJumpToStep(3)} className="text-saathi-teal font-bold hover:underline flex items-center gap-1 p-2">
                  <Edit2 className="w-3.5 h-3.5" /> {t('btn_edit')}
                </button>
              </div>

              <div className="p-3 bg-white flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-slate-600 block">Mobile & Education:</span>
                  <span className="font-extrabold text-slate-900">{formData.mobile} | {formData.education}</span>
                </div>
                <button type="button" onClick={() => handleJumpToStep(4)} className="text-saathi-teal font-bold hover:underline flex items-center gap-1 p-2">
                  <Edit2 className="w-3.5 h-3.5" /> {t('btn_edit')}
                </button>
              </div>

              <div className="p-3 bg-slate-50 flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-slate-600 block">Address & District:</span>
                  <span className="font-extrabold text-slate-900">{formData.address}, {formData.district} - {formData.pincode}</span>
                </div>
                <button type="button" onClick={() => handleJumpToStep(5)} className="text-saathi-teal font-bold hover:underline flex items-center gap-1 p-2">
                  <Edit2 className="w-3.5 h-3.5" /> {t('btn_edit')}
                </button>
              </div>

              <div className="p-3 bg-white flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-slate-600 block">Organ Donation Preference:</span>
                  <span className="font-extrabold text-slate-900 uppercase">{formData.organDonation}</span>
                </div>
                <button type="button" onClick={() => handleJumpToStep(6)} className="text-saathi-teal font-bold hover:underline flex items-center gap-1 p-2">
                  <Edit2 className="w-3.5 h-3.5" /> {t('btn_edit')}
                </button>
              </div>
            </div>

            {/* Fee Breakdown (Prompt Requirement!) */}
            <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-950">
              <h3 className="font-extrabold text-teal-900 mb-2 flex items-center justify-between">
                <span>{t('ll_fee_breakdown')}</span>
                <span className="text-xs bg-teal-200 text-teal-900 px-2 py-0.5 rounded">Central Sample Rates</span>
              </h3>
              <div className="space-y-1 text-sm border-t border-teal-200 pt-2">
                <div className="flex justify-between">
                  <span>{t('ll_fee_licence', { classes: 1 })}:</span>
                  <span className="font-bold">₹{feeInfo.llFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('ll_fee_test')}:</span>
                  <span className="font-bold">₹{feeInfo.testFee}</span>
                </div>
                <div className="flex justify-between text-base font-black text-teal-900 border-t border-teal-300 pt-1.5 mt-1.5">
                  <span>{t('ll_fee_total')}:</span>
                  <span>₹{feeInfo.totalFee}</span>
                </div>
              </div>
            </div>

            {/* Clearly labelled simulated payment action (Prompt Requirement!) */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleSimulatePayment}
                className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base sm:text-lg rounded-2xl shadow-lg transition-all min-h-[52px] flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <CreditCard className="w-5 h-5" />
                <span>{t('ll_btn_pay')}</span>
              </button>
            </div>
          </div>
        )}

        {/* Step Navigation Controls */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-sm min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('btn_back')}</span>
            </button>
          ) : <div />}

          {step < 8 && (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-saathi-teal hover:bg-teal-500 text-white font-extrabold text-sm rounded-xl transition-all shadow min-h-[44px]"
            >
              <span>{t('btn_next')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Helpful Guidance */}
      <StuckHelpBox
        message={t('ll_stuck_tip')}
        title={t('stuck_help_title')}
      />
    </div>
  );
}
