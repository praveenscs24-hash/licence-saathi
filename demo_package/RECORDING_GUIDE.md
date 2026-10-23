# 🎬 Licence Saathi — 3-Minute Demo Video Recording Guide

> **Project:** Licence Saathi (लाइसेंस साथी)  
> **Problem Statement 1:** Making mParivahan and Driving Licence Services Accessible to Everyone  
> **Target Video Length:** Exactly 3:00 (180 seconds)  
> **Format:** 16:9 Landscape (1920x1080 Full HD, 60fps)  
> **Audio:** Clear voiceover narration + subtle ambient background music (-18dB)

---

## 🛠️ Pre-Recording Setup & Equipment Checklist

### 1. Browser & Display Setup
- [ ] **Browser:** Google Chrome (recommended for full PWA and Web Speech API support).
- [ ] **Window Resolution:** 1920x1080 (1080p, 16:9 aspect ratio). Set browser zoom to **110% or 125%** so text is easily readable on mobile and presentation screens.
- [ ] **Clean Profile:** Hide bookmarks bar (`Ctrl+Shift+B`), close unrelated tabs, disable third-party extensions, and clear previous `localStorage` if you want a completely fresh run (`/settings` -> Reset All Local Data).
- [ ] **Servers Running:**
  - Frontend: `http://localhost:5173` (or `http://localhost:4173` production preview)
  - Backend AI server: `http://localhost:3001` (`npm run server`)

### 2. OBS Studio / Screen Recorder Configuration
- [ ] **Canvas Resolution:** `1920x1080`
- [ ] **Output Resolution:** `1920x1080` (60 fps)
- [ ] **Capture Mode:** Window Capture (Google Chrome) or Display Capture.
- [ ] **Cursor:** Enable cursor capture with a subtle highlight circle if available.
- [ ] **Audio Filters:** Add *Noise Suppression* and *Gain* to your microphone in OBS.
- [ ] **Background Music:** Choose a gentle, royalty-free acoustic or lofi instrumental (e.g. YouTube Audio Library). Set music track volume to **-18 dB to -22 dB** so narration is crisp and dominant at **-3 dB to -6 dB**.

### 3. Privacy & Ethics Reminder
- **Never input real personal data:** Use "Ramesh Kumar", Age 19, UP.
- **Never enter real Aadhaar numbers:** The demo tests the Aadhaar refusal filter using sample pattern `9876 5432 1098`.
- **Never claim live government access:** All payment, application numbers, and bookings are simulated locally.

---

## ⏱️ Master 3-Minute Timeline & Shot-by-Shot Guide

```
0:00 ──────────────── 0:15 ─── Shot 1: Problem & Introduction (Home Screen)
0:15 ──────────────── 0:40 ─── Shot 2: Guided Journey (Eligibility & Documents)
0:40 ──────────────── 1:05 ─── Shot 3: Learner Application (8 Steps & Simulated Receipt)
1:05 ──────────────── 1:35 ─── Shot 4: Learn & Practise (22 Signs & Mock Test)
1:35 ──────────────── 1:55 ─── Shot 5: Test Preparation & Permanent Licence
1:55 ──────────────── 2:15 ─── Shot 6: Application Tracking & AI Helper
2:15 ──────────────── 2:35 ─── Shot 7: Phone Accessibility Demonstration (Hindi @ 360px)
2:35 ──────────────── 2:50 ─── Shot 8: Offline Capability (PWA Offline Mode)
2:50 ──────────────── 3:00 ─── Shot 9: Closing (Core Benefits & Disclaimer)
```

---

### Shot 1: Problem and Introduction (0:00 – 0:15 | 15s)
- **URL:** `http://localhost:5173/`
- **Visuals:**
  - Start on the Licence Saathi homepage.
  - Hover over the top prototype disclaimer badge (*"Prototype with sample data. Check rules and fees with your state's RTO."*).
  - Smoothly scroll down across the 4 starting situation cards (*"Just starting out"*, *"Already have learner's licence"*, *"Booked driving test"*, *"Waiting for licence delivery"*).
  - Point the mouse at the **Recommended Next Step** callout banner.
- **On-Screen Action:**
  - Keep cursor deliberate and steady. Highlight the 6-stage roadmap showing 0/6 completed.
- **Spoken Narration (0:00–0:14):**
  > *"Applying for a driving licence can feel confusing, especially for a first-time applicant. Licence Saathi turns the journey into simple, guided steps."*
- **Subtitles:**
  `00:00:01,000 --> 00:00:07,500: Applying for a driving licence can feel confusing, especially for a first-time applicant.`  
  `00:00:08,000 --> 00:00:14,500: Licence Saathi turns the journey into simple, guided steps.`

---

### Shot 2: Guided Journey — Eligibility & Documents (0:15 – 0:40 | 25s)
- **URL:** `http://localhost:5173/apply` -> `http://localhost:5173/documents`
- **Visuals:**
  - Click on the first card: **"Just starting out"** (`/apply`).
  - Enter Age: `19`.
  - Vehicle Class: `Motorcycle with Gear (MCWG)`.
  - State: `Uttar Pradesh (UP)`.
  - Click **"Check Eligibility"**. The green confirmation card animates in: *"Eligible to Apply! Great news! You meet the minimum age requirement of 18 years."*
  - Briefly demonstrate the underage date calculator by typing `17`: shows exact future date in 2027 when applicant becomes eligible! Set back to `19`.
  - Click **"Next: Check Documents"** (`/documents`).
  - Show the tailored document checklist: Proof of Age, Proof of Address, Photo, Signature.
  - Notice that Form 1A (Doctor's Certificate) is marked as *"Only for 40+ or transport"*—not required for Ramesh!
  - Check 3 document checkboxes to show the progress meter reach 75%.
- **Spoken Narration (0:15–0:39):**
  > *"Users can understand eligibility, prepare their documents and see exactly what to do next. The calculator shows exact rules for your vehicle class and age, while the document checklist demystifies official requirements in plain words."*
- **Subtitles:**
  `00:00:15,500 --> 00:00:23,000: Users can understand eligibility, prepare their documents and see exactly what to do next.`  
  `00:00:24,000 --> 00:00:31,000: The calculator shows exact rules for your vehicle class and age,`  
  `00:00:31,500 --> 00:00:39,000: while the document checklist demystifies official requirements in plain words.`

---

### Shot 3: Learner Application — Simulated 8-Step Wizard (0:40 – 1:05 | 25s)
- **URL:** `http://localhost:5173/ll-application`
- **Visuals:**
  - Click **"Continue to Simulated LL Application"**.
  - Show the clean 1-question-per-step layout and the progress bar (*Step 1 of 8*).
  - Fast-forward through state selection, vehicle class (MCWG), applicant details (Ramesh Kumar), contact, address, organ donation preference, and document upload confirmation.
  - Arrive at **Step 8: Review & Simulated Fee Payment**.
  - Point out the edit links allowing the applicant to jump back and fix any field.
  - Point out the official fee breakdown: ₹150 LL Fee + ₹50 Test Fee = **₹200 Total**.
  - Click **"Simulate Demo Payment (No Real Money)"**.
  - Green success receipt card appears with generated simulated number: `DL-2026-90412`.
- **Spoken Narration (0:40–1:04):**
  > *"The guided form saves progress and makes every step easier to understand. The application and payment are simulated, giving first-time applicants complete confidence before they visit the actual portal."*
- **Subtitles:**
  `00:00:40,500 --> 00:00:48,000: The guided form saves progress and makes every step easier to understand.`  
  `00:00:49,000 --> 00:00:56,500: The application and payment are simulated,`  
  `00:00:57,000 --> 00:01:04,500: giving first-time applicants complete confidence before they visit the actual portal.`

---

### Shot 4: Learn & Practise — 22 SVG Signs & Mock Test (1:05 – 1:35 | 30s)
- **URL:** `http://localhost:5173/learn` -> `http://localhost:5173/mock-test`
- **Visuals:**
  - Click **"Go to Learn Traffic Signs"** (`/learn`).
  - Browse Mandatory signs (Stop, Give Way, Speed 50), Cautionary signs (Pedestrian Crossing, School Ahead), and Informatory signs. All 22 signs are crisp inline SVGs.
  - Click the **Listen** voice button on the "Stop" sign to hear speech synthesis.
  - Switch to **Flashcards** tab: Click card to flip 3D card and reveal explanation; click **"I Know This"**.
  - Click **"Take Mock Test"** (`/mock-test`).
  - Highlight the 3-attempt readiness meter.
  - Click **"Start Practice Mode"**: Select an answer to see instant green feedback, checkmark, and full explanation.
  - Briefly open **"Start Timed Test"**: Show the official 15-question format and 30-second countdown timer from `config.js`.
- **Spoken Narration (1:05–1:34):**
  > *"Interactive lessons, traffic signs and practice questions help applicants learn road safety before taking the learner's test. Every sign is an inline SVG, with text-to-speech audio, flip flashcards, and instant explanations for every question."*
- **Subtitles:**
  `00:01:05,500 --> 00:01:14,000: Interactive lessons, traffic signs and practice questions help applicants learn road safety before taking the learner's test.`  
  `00:01:15,000 --> 00:01:23,500: Every sign is an inline SVG, with text-to-speech audio and flip flashcards,`  
  `00:01:24,000 --> 00:01:34,000: along with instant explanations and a 30-second countdown timer matching real RTO exams.`

---

### Shot 5: Test Preparation & Permanent Licence (1:35 – 1:55 | 20s)
- **URL:** `http://localhost:5173/test-day` -> `http://localhost:5173/permanent-licence`
- **Visuals:**
  - Click **"Test Day"** (`/test-day`): Show what to expect at the computer booth. Click **"Try the Test Screen"** to trigger the 3-question government terminal simulator.
  - Navigate to **"Permanent Licence"** (`/permanent-licence`).
  - In the LL Issue Date calculator, enter a sample issue date.
  - Show the calendar-safe result: calculates the exact **30-day minimum waiting period** before permanent DL can be taken, and alerts the applicant of the **180-day expiry deadline**.
  - In the simulated slot booking section, select an available date and time slot at Ghaziabad RTO and click **"Confirm Simulated Appointment"**.
- **Spoken Narration (1:35–1:54):**
  > *"Users can prepare for test day and understand when they may apply for a permanent licence. The calendar-safe calculator tracks the mandatory 30-day waiting rule and 180-day expiry, with simulated RTO slot booking."*
- **Subtitles:**
  `00:01:35,500 --> 00:01:43,500: Users can prepare for test day and understand when they may apply for a permanent licence.`  
  `00:01:44,500 --> 00:01:54,000: The calendar-safe calculator tracks the mandatory 30-day waiting rule and 180-day expiry, with simulated RTO slot booking.`

---

### Shot 6: Application Tracking & AI Helper (1:55 – 2:15 | 20s)
- **URL:** `http://localhost:5173/track` -> `http://localhost:5173/chat`
- **Visuals:**
  - Click **"Track Application"** (`/track`).
  - Click the quick button for `DL-2026-90412 (Ramesh)`.
  - Reveal the 6-stage visual timeline from *Application Submitted* to *Driving Test Passed* and *Dispatched via Speed Post*.
  - Click **"Chat / Ask Saathi"** (`/chat`).
  - Click the quick chip: *"What documents do I need?"* -> Assistant answers concisely in plain words.
  - Test Aadhaar Privacy Filter: Type `My Aadhaar is 9876 5432 1098` and send -> Assistant immediately responds with a red safety warning refusing sensitive numbers.
- **Spoken Narration (1:55–2:14):**
  > *"Sample tracking makes application stages easier to understand. The assistant answers common questions and provides a local fallback, with strict privacy filters that refuse sensitive Aadhaar numbers."*
- **Subtitles:**
  `00:01:55,500 --> 00:02:02,000: Sample tracking makes application stages easier to understand.`  
  `00:02:03,000 --> 00:02:14,000: The assistant answers common questions and provides a local fallback, with strict privacy filters that refuse sensitive Aadhaar numbers.`

---

### Shot 7: Phone Accessibility Demonstration — Hindi @ 360px (2:15 – 2:35 | 20s)
- **URL:** `http://localhost:5173/settings` -> `http://localhost:5173/` (in 360px Mobile View)
- **Visuals:**
  - Open **Settings** (`/settings`).
  - Switch Language to **हिंदी (Hindi)**.
  - Set Text Size to **Large (20px)**.
  - Press `F12` in Chrome -> Toggle Device Toolbar (`Ctrl+Shift+M`) -> Select or type **360 x 740** (Standard budget Indian smartphone dimensions).
  - Navigate to Home (`/`): Show how the Hindi headings, badges, and cards wrap perfectly with zero horizontal scrollbar and 48px touch targets.
  - Open one lesson in `/learn`: Show Devanagari typography rendering cleanly.
- **Spoken Narration (2:15–2:34):**
  > *"Licence Saathi supports Hindi, accessible text sizes and mobile-first navigation for people using basic smartphones. Every element is tested at 360 pixels width with large typography and high contrast for bright sunlight readability."*
- **Subtitles:**
  `00:02:15,500 --> 00:02:24,000: Licence Saathi supports Hindi, accessible text sizes and mobile-first navigation for people using basic smartphones.`  
  `00:02:25,000 --> 00:02:34,500: Every element is tested at 360 pixels width with large typography and high contrast for bright sunlight readability.`

---

### Shot 8: Offline Capability — Caching in Action (2:35 – 2:50 | 15s)
- **URL:** Chrome DevTools -> Network Tab -> Offline Toggle
- **Visuals:**
  - In DevTools Network tab, change Throttling dropdown from *No throttling* to **Offline**.
  - Refresh the page or click between `/learn`, `/mock-test`, and `/apply`.
  - Notice the top **Offline Banner**: *"You are currently offline. Licence Saathi is working from offline cache."*
  - The lesson cards, inline SVG signs, mock test quiz, and 27 FAQs load instantaneously with 0 network latency.
- **Spoken Narration (2:35–2:49):**
  > *"After the first successful load, cached learning and journey features can continue working without an internet connection. The Progressive Web App ensures that unreliable 2G or 3G data never stops an applicant from preparing."*
- **Subtitles:**
  `00:02:35,500 --> 00:02:42,000: After the first successful load, cached learning and journey features can continue working without an internet connection.`  
  `00:02:43,000 --> 00:02:49,500: The Progressive Web App ensures that unreliable 2G or 3G data never stops an applicant from preparing.`

---

### Shot 9: Closing & Summary (2:50 – 3:00 | 10s)
- **URL:** Return to Desktop Full Screen on `http://localhost:5173/`
- **Visuals:**
  - Close DevTools. Home screen smoothly expands back to Full HD landscape.
  - Highlight the core pillars displayed in footer: **Multilingual • Offline-First • Accessible • Broker-Free**.
  - Conclude on the official Sarathi prototype disclaimer banner.
- **Spoken Narration (2:50–3:00):**
  > *"Licence Saathi makes the driving licence journey simpler, clearer and more accessible. It is a prototype using sample data, not an official government service."*
- **Subtitles:**
  `00:02:50,500 --> 00:02:56,000: Licence Saathi makes the driving licence journey simpler, clearer and more accessible.`  
  `00:02:56,500 --> 00:03:00,000: It is a prototype using sample data, not an official government service.`

---

## 🎙️ Audio Mixing & Music Recommendations

1. **Voice Track Level:** Normalize to **-3 dB** peak with a 2:1 mild compressor and high-pass filter (cut below 80 Hz).
2. **Music Track Level:** Keep constant at **-20 dB**; duck to **-24 dB** during speech.
3. **Recommended Royalty-Free Tracks (from YouTube Audio Library / Free Music Archive):**
   - *"Warm Breeze"* by Gunnar Olsen (Acoustic guitar / uplifting, warm)
   - *"Sunday Stroll"* by Huma-Huma (Friendly, optimistic civic feel)
   - *"A Year Ago"* by Aakash Gandhi (Clean piano/acoustic)

---

## 🛡️ Hackathon Submission Checklist

- [x] Tested all 12 routes in browser
- [x] Verified 15-question mock test and 30-second timer
- [x] Verified 3-question test-day demo
- [x] Verified trilingual parity (English, Hindi, Tamil)
- [x] Tested 360px mobile view with Large Text (20px)
- [x] Tested offline mode with service worker cache
- [x] Verified zero API keys or private data exposed
- [x] Subtitles exported to `.srt` and `.vtt` in `demo_package/`
