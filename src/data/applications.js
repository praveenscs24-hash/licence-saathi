/**
 * Persistent Sample Applications for Application Tracker (Screen 10)
 * 
 * DISCLAIMER: Never claim to track a real government application.
 * These are simulated sample tracking records.
 */

export const APPLICATION_STAGES = [
  { id: 'applied', labelKey: 'track_stage_applied', stepNum: 1 },
  { id: 'docs_checked', labelKey: 'track_stage_docs_checked', stepNum: 2 },
  { id: 'test_booked', labelKey: 'track_stage_test_booked', stepNum: 3 },
  { id: 'test_passed', labelKey: 'track_stage_test_passed', stepNum: 4 },
  { id: 'licence_printed', labelKey: 'track_stage_printed', stepNum: 5 },
  { id: 'sent_post', labelKey: 'track_stage_sent_post', stepNum: 6 }
];

export const SAMPLE_APPLICATIONS = [
  {
    applicationNumber: 'DL-2026-90412',
    applicantName: 'Ramesh Kumar',
    vehicleClass: 'Motorcycle with Gear (MCWG)',
    rto: 'Ghaziabad RTO (UP-14)',
    state: 'Uttar Pradesh',
    currentStageIndex: 5, // All completed
    statusKey: 'track_status_dispatched',
    submittedDate: '2026-09-01',
    timeline: [
      { stageId: 'applied', date: '01 Sep 2026', done: true, remarksKey: 'timeline_applied_rem' },
      { stageId: 'docs_checked', date: '03 Sep 2026', done: true, remarksKey: 'timeline_docs_rem' },
      { stageId: 'test_booked', date: '10 Sep 2026', done: true, remarksKey: 'timeline_slot_rem' },
      { stageId: 'test_passed', date: '15 Sep 2026', done: true, remarksKey: 'timeline_passed_rem' },
      { stageId: 'licence_printed', date: '22 Sep 2026', done: true, remarksKey: 'timeline_printed_rem' },
      { stageId: 'sent_post', date: '25 Sep 2026', done: true, remarksKey: 'timeline_speedpost_rem', trackingId: 'IN948271038UP' }
    ]
  },
  {
    applicationNumber: 'DL-2026-55109',
    applicantName: 'Priya Sharma',
    vehicleClass: 'Light Motor Vehicle (LMV / Car)',
    rto: 'Mall Road RTO (DL-01)',
    state: 'Delhi',
    currentStageIndex: 3, // Test passed, awaiting printing
    statusKey: 'track_status_test_passed',
    submittedDate: '2026-09-20',
    timeline: [
      { stageId: 'applied', date: '20 Sep 2026', done: true, remarksKey: 'timeline_applied_rem' },
      { stageId: 'docs_checked', date: '24 Sep 2026', done: true, remarksKey: 'timeline_docs_rem' },
      { stageId: 'test_booked', date: '02 Oct 2026', done: true, remarksKey: 'timeline_slot_rem' },
      { stageId: 'test_passed', date: '08 Oct 2026', done: true, remarksKey: 'timeline_passed_rem' },
      { stageId: 'licence_printed', date: 'Expected: 28 Oct 2026', done: false, remarksKey: 'timeline_queue_print' },
      { stageId: 'sent_post', date: 'Pending', done: false, remarksKey: 'timeline_pending_post' }
    ]
  },
  {
    applicationNumber: 'DL-2026-11823',
    applicantName: 'Murugan S.',
    vehicleClass: 'Motorcycle with Gear (MCWG)',
    rto: 'Chennai Central RTO (TN-01)',
    state: 'Tamil Nadu',
    currentStageIndex: 1, // Documents verified, slot booking pending
    statusKey: 'track_status_docs_verified',
    submittedDate: '2026-10-12',
    timeline: [
      { stageId: 'applied', date: '12 Oct 2026', done: true, remarksKey: 'timeline_applied_rem' },
      { stageId: 'docs_checked', date: '15 Oct 2026', done: true, remarksKey: 'timeline_docs_rem' },
      { stageId: 'test_booked', date: 'Pending', done: false, remarksKey: 'timeline_need_slot' },
      { stageId: 'test_passed', date: 'Pending', done: false, remarksKey: 'timeline_pending_test' },
      { stageId: 'licence_printed', date: 'Pending', done: false, remarksKey: 'timeline_pending_print' },
      { stageId: 'sent_post', date: 'Pending', done: false, remarksKey: 'timeline_pending_post' }
    ]
  }
];

/**
 * Searches for an application by number (including dynamically generated user application)
 */
export function findApplication(appNumber, userApplication = null) {
  if (!appNumber || typeof appNumber !== 'string') return null;
  const clean = appNumber.trim().toUpperCase();

  // Check sample applications
  const sampleMatch = SAMPLE_APPLICATIONS.find(a => a.applicationNumber.toUpperCase() === clean);
  if (sampleMatch) return sampleMatch;

  // Check user submitted simulated application
  if (userApplication && userApplication.applicationNumber && userApplication.applicationNumber.toUpperCase() === clean) {
    return {
      applicationNumber: userApplication.applicationNumber,
      applicantName: userApplication.fullName || 'You (Applicant)',
      vehicleClass: userApplication.vehicleClass || 'Motorcycle with Gear (MCWG)',
      rto: userApplication.rtoName || 'Local RTO',
      state: userApplication.stateName || 'India',
      currentStageIndex: 0,
      statusKey: 'track_status_applied_online',
      submittedDate: userApplication.submittedDate || 'Today',
      timeline: [
        { stageId: 'applied', date: userApplication.submittedDate || 'Today', done: true, remarksKey: 'timeline_applied_rem' },
        { stageId: 'docs_checked', date: 'In scrutiny', done: false, remarksKey: 'timeline_docs_scrutiny' },
        { stageId: 'test_booked', date: 'Pending', done: false, remarksKey: 'timeline_need_slot' },
        { stageId: 'test_passed', date: 'Pending', done: false, remarksKey: 'timeline_pending_test' },
        { stageId: 'licence_printed', date: 'Pending', done: false, remarksKey: 'timeline_pending_print' },
        { stageId: 'sent_post', date: 'Pending', done: false, remarksKey: 'timeline_pending_post' }
      ]
    };
  }

  return null;
}
