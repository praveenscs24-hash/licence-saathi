import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ExternalLink, HelpCircle, FileText } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-saathi-navyDark text-slate-300 mt-16 border-t border-slate-800">
      {/* Educational Terminology Primer */}
      <div className="bg-slate-900/80 border-b border-slate-800 px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Important Terms in Plain Words (सरल शब्दार्थ):</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs leading-relaxed">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="font-extrabold text-white block mb-0.5">RTO:</span>
              <p className="text-slate-300">{t('rto_full_meaning')}</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="font-extrabold text-white block mb-0.5">LL (Learner's Licence):</span>
              <p className="text-slate-300">{t('ll_full_meaning')}</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="font-extrabold text-white block mb-0.5">DL (Driving Licence):</span>
              <p className="text-slate-300">{t('dl_full_meaning')}</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <span className="font-extrabold text-white block mb-0.5">Form 1A (Medical Form):</span>
              <p className="text-slate-300">{t('form1a_full_meaning')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Purpose */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-saathi-teal flex items-center justify-center text-white font-bold">
                LS
              </div>
              <span className="text-lg font-extrabold text-white">{t('app_name')}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
              {t('app_tagline')}
            </p>
            <p className="text-xs text-amber-300 bg-amber-950/40 p-3 rounded-xl border border-amber-800/60 leading-normal">
              <strong>Notice:</strong> {t('disclaimer')}
            </p>
          </div>

          {/* Quick Route Links */}
          <div className="text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
              Quick Journey Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/apply" className="hover:text-teal-300 transition-colors">
                  {t('nav_apply')}
                </Link>
              </li>
              <li>
                <Link to="/documents" className="hover:text-teal-300 transition-colors">
                  {t('nav_docs')}
                </Link>
              </li>
              <li>
                <Link to="/learn" className="hover:text-teal-300 transition-colors">
                  {t('nav_learn')}
                </Link>
              </li>
              <li>
                <Link to="/mock-test" className="hover:text-teal-300 transition-colors">
                  {t('nav_mock')}
                </Link>
              </li>
              <li>
                <Link to="/permanent-licence" className="hover:text-teal-300 transition-colors">
                  {t('nav_permanent')}
                </Link>
              </li>
              <li>
                <Link to="/track" className="hover:text-teal-300 transition-colors">
                  {t('nav_track')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Parivahan Link & Safety */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
              Official Resources & Disclaimers
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              {t('official_disclaimer')}
            </p>
            <a
              href="https://parivahan.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors min-h-[44px]"
            >
              <span>Visit Official Sarathi Parivahan</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Licence Saathi. Built for Public Accessibility & Digital Inclusion.</p>
          <div className="flex items-center gap-4">
            <Link to="/chat" className="text-teal-400 hover:underline">
              {t('nav_chat')}
            </Link>
            <Link to="/settings" className="text-slate-400 hover:underline">
              {t('nav_settings')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
