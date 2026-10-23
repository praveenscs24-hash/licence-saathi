import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

export default function StuckHelpBox({ message, title = null }) {
  const { t } = useI18n();

  if (!message) return null;

  return (
    <div
      role="note"
      aria-label="Helpful guidance"
      className="my-4 p-4 rounded-xl border border-amber-300 bg-amber-50 text-amber-950 flex items-start gap-3 shadow-sm"
    >
      <div className="p-1.5 rounded-lg bg-amber-200 text-amber-900 shrink-0 mt-0.5">
        <Info className="w-5 h-5" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-bold text-amber-900 tracking-wide uppercase mb-1">
          {title || t('stuck_help_title')}
        </h4>
        <p className="text-sm font-medium leading-relaxed text-amber-950">
          {message}
        </p>
      </div>
    </div>
  );
}
