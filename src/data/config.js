/**
 * Licence Saathi - Central Prototype Configuration & Sample Rules
 * 
 * DISCLAIMER: Prototype with sample data. Check rules and fees with your state's RTO.
 * These are prototype sample rules, not guaranteed current legal requirements.
 */

export const SAMPLE_DATA_WARNING = "Prototype with sample data. Check rules and fees with your state's RTO.";

export const VEHICLE_CLASSES = {
  MCWOG: {
    id: 'MCWOG',
    code: 'MCWOG',
    nameKey: 'vehicle_mcwog',
    descKey: 'vehicle_mcwog_desc',
    minAge: 16,
    requiresParentalConsentUnder18: true,
    requiresCommercialExperience: false,
    feePerClass: 150
  },
  MCWG: {
    id: 'MCWG',
    code: 'MCWG',
    nameKey: 'vehicle_mcwg',
    descKey: 'vehicle_mcwg_desc',
    minAge: 18,
    requiresParentalConsentUnder18: false,
    requiresCommercialExperience: false,
    feePerClass: 150
  },
  LMV: {
    id: 'LMV',
    code: 'LMV',
    nameKey: 'vehicle_lmv',
    descKey: 'vehicle_lmv_desc',
    minAge: 18,
    requiresParentalConsentUnder18: false,
    requiresCommercialExperience: false,
    feePerClass: 150
  },
  COMMERCIAL: {
    id: 'COMMERCIAL',
    code: 'TRANS',
    nameKey: 'vehicle_commercial',
    descKey: 'vehicle_commercial_desc',
    minAge: 20,
    requiresParentalConsentUnder18: false,
    requiresCommercialExperience: true,
    feePerClass: 150
  }
};

export const FEE_CONFIG = {
  learnerLicencePerClass: 150, // ₹150 per vehicle class
  learnerTestFee: 50,          // ₹50 test fee
  drivingTestFee: 300,         // ₹300 driving test fee
  licenceIssueFee: 200,        // ₹200 permanent DL issue fee
  currency: '₹'
};

export const TEST_CONFIG = {
  questionCount: 15,          // Learner's test: 15 questions
  passMark: 9,                 // Pass mark: 9 correct answers
  timePerQuestionSeconds: 30,  // Time per question: 30 seconds
  demoQuestionCount: 3,        // Try the test screen: exactly 3 questions
  passPercentage: Math.round((9 / 15) * 100) // 60%
};

export const TIMELINE_CONFIG = {
  learnerLicenceValidityMonths: 6,      // LL validity: 6 months (approx 180 days)
  learnerLicenceValidityDays: 180,
  minDaysBeforePermanentApply: 30      // Earliest DL application: 30 days after LL issuance
};

export const MEDICAL_CONFIG = {
  doctorCertificateRequiredAge: 40     // Form 1A signed by doctor required if age >= 40 or commercial
};

/**
 * Checks eligibility based on age and vehicle class
 */
export function checkEligibility({ age, vehicleClassId, hasParentalConsent = false, dateOfBirth = null }) {
  const vehicle = VEHICLE_CLASSES[vehicleClassId] || VEHICLE_CLASSES.MCWG;
  const numAge = Number(age);

  if (isNaN(numAge) || numAge <= 0) {
    return {
      eligible: false,
      reasonKey: 'eligibility_enter_valid_age',
      minAge: vehicle.minAge,
      eligibleDate: null,
      needsParentalConsent: false
    };
  }

  // Under minimum age
  if (numAge < vehicle.minAge) {
    let eligibleDate = null;
    if (dateOfBirth) {
      const dob = new Date(dateOfBirth);
      if (!isNaN(dob.getTime())) {
        const targetYear = dob.getFullYear() + vehicle.minAge;
        const targetDate = new Date(dob);
        targetDate.setFullYear(targetYear);
        eligibleDate = targetDate.toISOString().split('T')[0];
      }
    }

    return {
      eligible: false,
      reasonKey: 'eligibility_underage',
      minAge: vehicle.minAge,
      eligibleDate,
      needsParentalConsent: false
    };
  }

  // 16 to 18 for MCWOG requires parental consent
  if (vehicleClassId === 'MCWOG' && numAge >= 16 && numAge < 18) {
    return {
      eligible: hasParentalConsent,
      reasonKey: hasParentalConsent ? 'eligibility_eligible_with_consent' : 'eligibility_needs_consent',
      minAge: vehicle.minAge,
      eligibleDate: null,
      needsParentalConsent: true
    };
  }

  // Eligible
  return {
    eligible: true,
    reasonKey: 'eligibility_eligible',
    minAge: vehicle.minAge,
    eligibleDate: null,
    needsParentalConsent: false
  };
}

/**
 * Calculates Learner's Licence fee
 */
export function calculateLearnerFee(vehicleClassCount = 1) {
  const llFee = vehicleClassCount * FEE_CONFIG.learnerLicencePerClass;
  const testFee = FEE_CONFIG.learnerTestFee;
  return {
    llFee,
    testFee,
    totalFee: llFee + testFee
  };
}

/**
 * Calculates test score result dynamically based on config
 */
export function evaluateTestResult(score, totalQuestions = TEST_CONFIG.questionCount) {
  const passed = score >= TEST_CONFIG.passMark;
  const percentage = Math.round((score / totalQuestions) * 100);
  return {
    score,
    totalQuestions,
    passMark: TEST_CONFIG.passMark,
    passed,
    percentage
  };
}
