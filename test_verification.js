import assert from 'assert';
import fs from 'fs';
import path from 'path';
import en from './src/i18n/en.js';
import hi from './src/i18n/hi.js';
import ta from './src/i18n/ta.js';
import { VEHICLE_CLASSES, checkEligibility, calculateLearnerFee, evaluateTestResult, TEST_CONFIG } from './src/data/config.js';
import { QUESTIONS, getTestQuestions, getDemoQuestions } from './src/data/questions.js';
import { TRAFFIC_SIGNS, ROAD_RULES } from './src/data/signs.js';
import { FAQS, matchFaq } from './src/data/faq.js';
import { SAMPLE_APPLICATIONS, findApplication } from './src/data/applications.js';
import { calculateLicenceDates } from './src/utils/dateCalculations.js';

async function runAllTests() {
  console.log("=== LICENCE SAATHI COMPREHENSIVE AUTOMATED VERIFICATION ===");
  let passed = 0;
  let total = 0;

  async function test(name, fn) {
    total++;
    try {
      await fn();
      console.log(`[PASS] ${name}`);
      passed++;
    } catch (err) {
      console.error(`[FAIL] ${name}:`, err.message);
    }
  }

  // 1. i18n Key Parity Check
  await test("1. i18n Translation Parity across English, Hindi, and Tamil", () => {
    const enKeys = Object.keys(en);
    const hiKeys = new Set(Object.keys(hi));
    const taKeys = new Set(Object.keys(ta));

    assert(enKeys.length > 100, `Expected > 100 translation keys, got ${enKeys.length}`);
    const missingInHi = enKeys.filter(k => !hiKeys.has(k));
    const missingInTa = enKeys.filter(k => !taKeys.has(k));

    assert.strictEqual(missingInHi.length, 0, `Missing keys in Hindi: ${missingInHi.join(', ')}`);
    assert.strictEqual(missingInTa.length, 0, `Missing keys in Tamil: ${missingInTa.join(', ')}`);
  });

  // 2. Rules & Eligibility in config.js
  await test("2. Eligibility Logic for Ramesh (Age 19, MCWG)", () => {
    const ramesh = checkEligibility({ age: 19, vehicleClassId: 'MCWG' });
    assert.strictEqual(ramesh.eligible, true);
    assert.strictEqual(ramesh.minAge, 18);
  });

  await test("3. Underage Calculation with exact DOB (Age 17, MCWG)", () => {
    const underage = checkEligibility({
      age: 17,
      vehicleClassId: 'MCWG',
      dateOfBirth: '2009-08-15'
    });
    assert.strictEqual(underage.eligible, false);
    assert.strictEqual(underage.eligibleDate, '2027-08-15');
  });

  await test("4. Parental Consent for 16-17 Gearless Two-Wheeler (MCWOG)", () => {
    const minorNoConsent = checkEligibility({ age: 16, vehicleClassId: 'MCWOG', hasParentalConsent: false });
    assert.strictEqual(minorNoConsent.eligible, false);
    assert.strictEqual(minorNoConsent.needsParentalConsent, true);

    const minorWithConsent = checkEligibility({ age: 16, vehicleClassId: 'MCWOG', hasParentalConsent: true });
    assert.strictEqual(minorWithConsent.eligible, true);
  });

  await test("5. Sample Fee Calculation (₹150 LL + ₹50 Test = ₹200)", () => {
    const fee = calculateLearnerFee(1);
    assert.strictEqual(fee.llFee, 150);
    assert.strictEqual(fee.testFee, 50);
    assert.strictEqual(fee.totalFee, 200);
  });

  await test("6. Test Result Pass/Fail from config.js (15 questions, Pass Mark = 9, Timer = 30s)", () => {
    assert.strictEqual(TEST_CONFIG.questionCount, 15);
    assert.strictEqual(TEST_CONFIG.passMark, 9);
    assert.strictEqual(TEST_CONFIG.timePerQuestionSeconds, 30);

    const failResult = evaluateTestResult(8, 15);
    assert.strictEqual(failResult.passed, false);
    assert.strictEqual(failResult.percentage, 53);

    const passResult = evaluateTestResult(9, 15);
    assert.strictEqual(passResult.passed, true);
    assert.strictEqual(passResult.percentage, 60);

    const testSlice = getTestQuestions(15);
    assert.strictEqual(testSlice.length, 15);
  });

  await test("7. Three-Question Test-Day Demo (getDemoQuestions)", () => {
    assert.strictEqual(TEST_CONFIG.demoQuestionCount, 3);
    const demo = getDemoQuestions();
    assert.strictEqual(demo.length, 3, "Demo must have exactly 3 questions");
    demo.forEach((q, idx) => {
      assert(q.en?.question, `Demo question ${idx} missing question text`);
      assert.strictEqual(q.en.options.length, 4, `Demo question ${idx} must have 4 choices`);
      assert(q.correctAnswer >= 0 && q.correctAnswer < 4, `Demo question ${idx} invalid answer`);
    });
  });

  // 3. Question Bank >= 40 Questions
  await test("8. Question Bank has >= 40 questions in English, Hindi, and Tamil", () => {
    assert(QUESTIONS.length >= 40, `Expected >= 40 questions, got ${QUESTIONS.length}`);
    QUESTIONS.forEach((q, idx) => {
      assert(q.en?.question, `Question ${idx} missing English question`);
      assert(q.hi?.question, `Question ${idx} missing Hindi question`);
      assert(q.ta?.question, `Question ${idx} missing Tamil question`);
      assert.strictEqual(q.en.options.length, 4, `Question ${idx} must have 4 options`);
      assert(q.correctAnswer >= 0 && q.correctAnswer < 4, `Question ${idx} invalid correctAnswer index`);
    });
  });

  // 4. Traffic Signs >= 18 Inline SVGs
  await test("9. Traffic Signs has >= 18 inline SVG signs in 3 categories", () => {
    assert(TRAFFIC_SIGNS.length >= 18, `Expected >= 18 signs, got ${TRAFFIC_SIGNS.length}`);
    const mandatory = TRAFFIC_SIGNS.filter(s => s.category === 'mandatory');
    const cautionary = TRAFFIC_SIGNS.filter(s => s.category === 'cautionary');
    const informatory = TRAFFIC_SIGNS.filter(s => s.category === 'informatory');

    assert(mandatory.length >= 6, `Expected >= 6 mandatory, got ${mandatory.length}`);
    assert(cautionary.length >= 6, `Expected >= 6 cautionary, got ${cautionary.length}`);
    assert(informatory.length >= 5, `Expected >= 5 informatory, got ${informatory.length}`);

    TRAFFIC_SIGNS.forEach(s => {
      assert(typeof s.renderSvg === 'function', `Sign ${s.id} missing renderSvg function`);
    });

    assert.strictEqual(ROAD_RULES.length, 9, "Expected 9 core road rules");
  });

  // 5. FAQs >= 25 & Keyword Fallback Matching
  await test("10. FAQs has >= 25 entries with multilingual answers & keyword matching", () => {
    assert(FAQS.length >= 25, `Expected >= 25 FAQs, got ${FAQS.length}`);

    const feeMatch = matchFaq('what is the fee', 'en');
    assert(feeMatch, "Expected match for 'fee'");
    assert(feeMatch.answer.includes('150'), "Expected fee answer to mention ₹150");

    const hindiAgeMatch = matchFaq('न्यूनतम उम्र', 'hi');
    assert(hindiAgeMatch, "Expected Hindi match for 'उम्र'");

    const tamilMatch = matchFaq('பழகுநர் உரிமம்', 'ta');
    assert(tamilMatch, "Expected Tamil match for 'பழகுநர் உரிமம்'");

    const unknown = matchFaq('supercalifragilistic', 'en');
    assert.strictEqual(unknown, null, "Unknown string should return null for fallback");
  });

  // 6. Application Tracking
  await test("11. Application Tracking: 3 persistent samples + error on unknown numbers", () => {
    assert.strictEqual(SAMPLE_APPLICATIONS.length, 3);
    const ramesh = findApplication('DL-2026-90412');
    assert(ramesh, "Should find Ramesh Kumar's application");
    assert.strictEqual(ramesh.applicantName, 'Ramesh Kumar');
    assert.strictEqual(ramesh.timeline.length, 6);

    const unknown = findApplication('UNKNOWN9999');
    assert.strictEqual(unknown, null, "Unknown number should return null rather than fabricated record");
  });

  // 7. Calendar-Safe Date Calculations (Leap Year & Month-End Tests)
  await test("12. Permanent Licence Calendar-Safe Dates (Aug 31 leap year boundary)", () => {
    const dates = calculateLicenceDates('2024-08-31');
    assert(dates, "Dates calculation should succeed");
    // Earliest DL: exactly +30 days -> 2024-09-30
    assert.strictEqual(dates.earliestDateStr, '2024-09-30');
    // Expiry: 6 months later -> Feb 2025 has 28 days -> must be 2025-02-28 (not March!)
    assert.strictEqual(dates.expiryDateStr, '2025-02-28');
  });

  // 8. Exercise All 12 Routes on Frontend
  await test("13. Exercise All 12 Routes on Frontend Dev Server", async () => {
    const routes = [
      '/',
      '/apply',
      '/documents',
      '/ll-application',
      '/learn',
      '/mock-test',
      '/test-day',
      '/permanent-licence',
      '/driving-test',
      '/track',
      '/chat',
      '/settings'
    ];

    for (const route of routes) {
      const res = await fetch(`http://localhost:5173${route}`);
      assert.strictEqual(res.status, 200, `Route ${route} returned status ${res.status}`);
      const text = await res.text();
      assert(text.includes('id="root"'), `Route ${route} missing root div`);
    }
  });

  // 9. HTTP Server Health Endpoint on port 3001
  await test("14. HTTP Server Health Endpoint on port 3001", async () => {
    const res = await fetch('http://localhost:3001/api/health');
    assert.strictEqual(res.status, 200);
    const data = await res.json();
    assert.strictEqual(data.status, 'ok');
  });

  // 10. AI Chat Server: Aadhaar Privacy Safety Filter
  await test("15. AI Chat Server: Aadhaar Privacy Safety Filter", async () => {
    const res = await fetch('http://localhost:3001/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: 'My Aadhaar number is 9876 5432 1098, please check my status'
      })
    });
    assert.strictEqual(res.status, 200);
    const data = await res.json();
    assert.strictEqual(data.isSafetyIntervention, true);
    assert(data.reply.includes('Aadhaar') || data.reply.includes('आधार'));
  });

  // 11. Security Audit: Gemini API Key Never Bundled into Frontend Code
  await test("16. Security Audit: Gemini API Key Never Reaches Frontend Bundle", () => {
    const distAssetsDir = path.resolve('dist/assets');
    assert(fs.existsSync(distAssetsDir), "dist/assets must exist");
    const files = fs.readdirSync(distAssetsDir);
    const jsFiles = files.filter(f => f.endsWith('.js'));
    assert(jsFiles.length > 0, "Expected at least one compiled JS bundle");

    for (const jsFile of jsFiles) {
      const content = fs.readFileSync(path.join(distAssetsDir, jsFile), 'utf-8');
      assert(!content.includes('AIzaSy'), `Found potential Google API key in ${jsFile}`);
      assert(!content.includes('GEMINI_API_KEY'), `Found GEMINI_API_KEY identifier in ${jsFile}`);
    }
  });

  // 12. Deployment & PWA Configuration Verification
  await test("17. Deployment & PWA Configuration Verification", () => {
    // Vercel rewrites
    assert(fs.existsSync('vercel.json'), "vercel.json must exist");
    const vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf-8'));
    assert(vercelConfig.rewrites && vercelConfig.rewrites.length > 0, "vercel.json must define rewrites");

    // Netlify / Cloudflare redirects
    assert(fs.existsSync('public/_redirects'), "public/_redirects must exist");
    assert(fs.existsSync('dist/_redirects'), "dist/_redirects must exist in production output");

    // Service Worker & Manifest
    assert(fs.existsSync('dist/sw.js'), "dist/sw.js must be generated");
    assert(fs.existsSync('dist/manifest.webmanifest'), "dist/manifest.webmanifest must be generated");
  });

  console.log(`\n========================================`);
  console.log(`TEST SUMMARY: ${passed} / ${total} TESTS PASSED`);
  console.log(`========================================\n`);

  if (passed !== total) {
    process.exit(1);
  }
}

runAllTests().catch(e => {
  console.error("Test execution failed:", e);
  process.exit(1);
});
