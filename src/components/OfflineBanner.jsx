import React from 'react';
import { WifiOff } from 'lucide-react';
import { useNetworkStatus } from '../hooks/useNetworkStatus';
import { useI18n } from '../context/I18nContext';

export default function OfflineBanner() {
  const { isOnline } = useNetworkStatus();
  const { t } = useI18n();

  if (isOnline) return null;

  return (
    <aside
      role="status"
      aria-live="polite"
      className="bg-amber-600 text-white px-4 py-3 shadow-md"
    >
      <div className="max-w-4xl mx-auto flex items-center gap-3 text-xs sm:text-sm font-medium">
        <WifiOff className="w-5 h-5 shrink-0 animate-bounce" aria-hidden="true" />
        <div>
          <span className="font-bold underline mr-1">{t('offline_banner_title')}:</span>
          <span>{t('offline_banner_desc')}</span>
        </div>
      </div>
    </aside>
  );
}
