import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Settings, MessageSquareText, HelpCircle, AlertCircle } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

export default function Navbar() {
  const { language, setLanguage, t } = useI18n();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: t('nav_home') },
    { path: '/apply', label: t('nav_apply') },
    { path: '/documents', label: t('nav_docs') },
    { path: '/ll-application', label: t('nav_ll_form') },
    { path: '/learn', label: t('nav_learn') },
    { path: '/mock-test', label: t('nav_mock') },
    { path: '/test-day', label: t('nav_test_day') },
    { path: '/permanent-licence', label: t('nav_permanent') },
    { path: '/driving-test', label: t('nav_driving_test') },
    { path: '/track', label: t('nav_track') },
    { path: '/chat', label: t('nav_chat'), highlight: true },
    { path: '/settings', label: t('nav_settings') }
  ];

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिंदी' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-saathi-navy text-white shadow-lg">
      {/* Top Warning Banner (Mandatory Prototype Notice) */}
      <div className="bg-amber-500 text-slate-950 text-xs px-3 py-1.5 font-bold text-center tracking-wide flex items-center justify-center gap-1.5 shadow-inner">
        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span>{t('disclaimer')}</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1"
            aria-label={`${t('app_name')} - Home`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-saathi-teal flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
              {/* Steering wheel & road mark */}
              <svg viewBox="0 0 40 40" className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="20" cy="20" r="16" />
                <circle cx="20" cy="20" r="4" fill="currentColor" />
                <path d="M4 20h12" />
                <path d="M24 20h12" />
                <path d="M20 24v12" />
              </svg>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white block leading-tight">
                {t('app_name')}
              </span>
              <span className="text-[11px] sm:text-xs text-teal-200 font-medium hidden sm:block">
                mParivahan Helper
              </span>
            </div>
          </Link>

          {/* Center / Right Language Switcher (Prominent for Ramesh) */}
          <div className="flex items-center gap-2">
            <div
              role="group"
              aria-label="Language selection"
              className="flex bg-saathi-navyDark p-1 rounded-xl border border-slate-700/60"
            >
              {languages.map(l => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLanguage(l.code)}
                  aria-pressed={language === l.code}
                  className={`px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all min-h-[36px] sm:min-h-[40px] ${
                    language === l.code
                      ? 'bg-saathi-teal text-white shadow'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {l.native}
                </button>
              ))}
            </div>

            {/* Quick Ask AI Link button */}
            <Link
              to="/chat"
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-bold bg-teal-500 hover:bg-teal-400 text-saathi-navyDark rounded-xl transition-colors shadow focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Ask Licence Saathi AI Chat"
            >
              <MessageSquareText className="w-4 h-4" aria-hidden="true" />
              <span>{t('nav_chat')}</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-white"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" aria-hidden="true" />
              ) : (
                <Menu className="w-7 h-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Full Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <nav
          aria-label="Main Navigation Menu"
          className="bg-saathi-navyDark border-t border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors min-h-[48px] ${
                    isActive
                      ? 'bg-saathi-teal text-white shadow font-bold'
                      : link.highlight
                      ? 'bg-teal-900/40 text-teal-200 border border-teal-500/30 hover:bg-teal-800/40'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <span>{t('rto_full_meaning')}</span>
            <Link
              to="/settings"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 text-teal-300 font-medium hover:underline p-1"
            >
              <Settings className="w-4 h-4" />
              <span>{t('nav_settings')}</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
