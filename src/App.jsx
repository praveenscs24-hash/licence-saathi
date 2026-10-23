import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { I18nProvider } from './context/I18nContext';
import { UserProgressProvider } from './context/UserProgressContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OfflineBanner from './components/OfflineBanner';

// All 12 Screens
import Home from './pages/Home';
import CanIApply from './pages/CanIApply';
import Documents from './pages/Documents';
import LLApplication from './pages/LLApplication';
import Learn from './pages/Learn';
import MockTest from './pages/MockTest';
import TestDay from './pages/TestDay';
import PermanentLicence from './pages/PermanentLicence';
import DrivingTest from './pages/DrivingTest';
import TrackApplication from './pages/TrackApplication';
import AskSaathi from './pages/AskSaathi';
import Settings from './pages/Settings';

export default function App() {
  return (
    <I18nProvider>
      <UserProgressProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-500 selection:text-white">
            <OfflineBanner />
            <Navbar />
            <main className="flex-1 w-full pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apply" element={<CanIApply />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/ll-application" element={<LLApplication />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/mock-test" element={<MockTest />} />
                <Route path="/test-day" element={<TestDay />} />
                <Route path="/permanent-licence" element={<PermanentLicence />} />
                <Route path="/driving-test" element={<DrivingTest />} />
                <Route path="/track" element={<TrackApplication />} />
                <Route path="/chat" element={<AskSaathi />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </UserProgressProvider>
    </I18nProvider>
  );
}
