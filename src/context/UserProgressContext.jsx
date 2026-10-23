import React, { createContext, useContext, useState, useEffect } from 'react';

const UserProgressContext = createContext(null);

const STORAGE_KEY_PROGRESS = 'licence_saathi_user_progress_v1';

const INITIAL_STATE = {
  // Screen 2: Eligibility
  eligibility: {
    age: 19,
    vehicleClassId: 'MCWG',
    stateCode: 'UP',
    hasParentalConsent: false,
    dob: '',
    checked: false,
    eligible: true
  },
  // Screen 3: Documents
  documentChecklist: {
    doc_age: false,
    doc_address: false,
    doc_photo: false,
    doc_signature: false,
    doc_fitness: false,
    doc_doctor: false
  },
  // Screen 4: Simulated LL Application
  llApplication: null,
  // Screen 5: Learn & Flashcards
  masteredSigns: [],
  // Screen 6: Mock Test History
  testHistory: [],
  // Screen 8: Permanent Licence & Slot Booking
  llIssueDate: '',
  testBooking: null,
  // Completed Journey Stages [1, 2, 3, 4, 5, 6]
  completedStages: [],
  // Screen 10: Selected Tracking Number
  activeTrackingNumber: 'DL-2026-90412'
};

export function UserProgressProvider({ children }) {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...INITIAL_STATE, ...parsed };
      }
    } catch (e) {
      console.warn('Failed to load saved progress:', e);
    }
    return INITIAL_STATE;
  });

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to persist progress:', e);
    }
  }, [state]);

  // Update Eligibility
  const updateEligibility = (updates) => {
    setState(prev => {
      const updated = { ...prev.eligibility, ...updates };
      // Stage 1 complete if checked and eligible
      const stages = new Set(prev.completedStages);
      if (updated.checked && updated.eligible) {
        stages.add(1);
      }
      return {
        ...prev,
        eligibility: updated,
        completedStages: Array.from(stages)
      };
    });
  };

  // Toggle Document item
  const toggleDocument = (docId) => {
    setState(prev => {
      const updatedChecklist = {
        ...prev.documentChecklist,
        [docId]: !prev.documentChecklist[docId]
      };
      return {
        ...prev,
        documentChecklist: updatedChecklist
      };
    });
  };

  // Submit LL Application (Generates simulated persistent application number)
  const saveLLApplication = (formData) => {
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const receiptNumber = `DL-2026-${randomSuffix}`;
    const today = new Date().toISOString().split('T')[0];

    const newApp = {
      ...formData,
      applicationNumber: receiptNumber,
      submittedDate: today,
      status: 'SUBMITTED'
    };

    setState(prev => {
      const stages = new Set(prev.completedStages);
      stages.add(1);
      stages.add(2); // Stage 2 complete
      return {
        ...prev,
        llApplication: newApp,
        completedStages: Array.from(stages),
        activeTrackingNumber: receiptNumber
      };
    });

    return receiptNumber;
  };

  // Toggle Mastered Sign
  const toggleMasteredSign = (signId) => {
    setState(prev => {
      const isMastered = prev.masteredSigns.includes(signId);
      const updated = isMastered
        ? prev.masteredSigns.filter(id => id !== signId)
        : [...prev.masteredSigns, signId];
      return { ...prev, masteredSigns: updated };
    });
  };

  // Record Mock Test Result
  const recordTestAttempt = (result) => {
    const attemptRecord = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      score: result.score,
      total: result.totalQuestions,
      percentage: result.percentage,
      passed: result.passed,
      mode: result.mode || 'timed'
    };

    setState(prev => {
      const updatedHistory = [attemptRecord, ...prev.testHistory].slice(0, 20);
      const stages = new Set(prev.completedStages);
      if (result.passed) {
        stages.add(3); // Stage 3: Pass learner test
      }
      return {
        ...prev,
        testHistory: updatedHistory,
        completedStages: Array.from(stages)
      };
    });
  };

  // Save LL Issue Date
  const saveLLIssueDate = (dateStr) => {
    setState(prev => {
      const stages = new Set(prev.completedStages);
      stages.add(3);
      stages.add(4); // Stage 4: 30 days wait & permanent DL
      return {
        ...prev,
        llIssueDate: dateStr,
        completedStages: Array.from(stages)
      };
    });
  };

  // Save Driving Test Slot Booking
  const saveTestBooking = (bookingData) => {
    setState(prev => {
      const stages = new Set(prev.completedStages);
      stages.add(4);
      stages.add(5); // Stage 5: Driving test booked
      return {
        ...prev,
        testBooking: bookingData,
        completedStages: Array.from(stages)
      };
    });
  };

  // Set Active Tracking Number
  const setActiveTrackingNumber = (appNum) => {
    setState(prev => ({ ...prev, activeTrackingNumber: appNum }));
  };

  // Reset all local demo data
  const resetAllProgress = () => {
    try {
      localStorage.removeItem(STORAGE_KEY_PROGRESS);
    } catch (e) {}
    setState(INITIAL_STATE);
  };

  // Calculate Readiness Meter based on last 3 timed attempts
  const calculateReadiness = () => {
    const timedAttempts = state.testHistory.filter(h => h.mode === 'timed').slice(0, 3);
    if (timedAttempts.length === 0) {
      return { count: 0, avgPercentage: 0, passCount: 0, isReady: false };
    }
    const sumPercentage = timedAttempts.reduce((acc, curr) => acc + curr.percentage, 0);
    const avgPercentage = Math.round(sumPercentage / timedAttempts.length);
    const passCount = timedAttempts.filter(h => h.passed).length;
    const isReady = timedAttempts.length >= 3 && avgPercentage >= 60 && passCount >= 2;

    return {
      count: timedAttempts.length,
      avgPercentage,
      passCount,
      isReady
    };
  };

  // Calculate exactly ONE recommended next step based on saved progress
  const getRecommendedNextStep = () => {
    if (!state.completedStages.includes(1)) {
      return {
        stageNum: 1,
        titleKey: 'journey_stage_1',
        descKey: 'journey_stage_1_desc',
        path: '/apply',
        badgeKey: 'nav_apply'
      };
    }
    if (!state.completedStages.includes(2)) {
      return {
        stageNum: 2,
        titleKey: 'journey_stage_2',
        descKey: 'journey_stage_2_desc',
        path: '/ll-application',
        badgeKey: 'nav_ll_form'
      };
    }
    if (!state.completedStages.includes(3)) {
      return {
        stageNum: 3,
        titleKey: 'journey_stage_3',
        descKey: 'journey_stage_3_desc',
        path: '/mock-test',
        badgeKey: 'nav_mock'
      };
    }
    if (!state.completedStages.includes(4)) {
      return {
        stageNum: 4,
        titleKey: 'journey_stage_4',
        descKey: 'journey_stage_4_desc',
        path: '/permanent-licence',
        badgeKey: 'nav_permanent'
      };
    }
    if (!state.completedStages.includes(5)) {
      return {
        stageNum: 5,
        titleKey: 'journey_stage_5',
        descKey: 'journey_stage_5_desc',
        path: '/driving-test',
        badgeKey: 'nav_driving_test'
      };
    }
    return {
      stageNum: 6,
      titleKey: 'journey_stage_6',
      descKey: 'journey_stage_6_desc',
      path: '/track',
      badgeKey: 'nav_track'
    };
  };

  return (
    <UserProgressContext.Provider
      value={{
        ...state,
        updateEligibility,
        toggleDocument,
        saveLLApplication,
        toggleMasteredSign,
        recordTestAttempt,
        saveLLIssueDate,
        saveTestBooking,
        setActiveTrackingNumber,
        resetAllProgress,
        calculateReadiness,
        getRecommendedNextStep
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
}

export function useUserProgress() {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
}
