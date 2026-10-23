import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../i18n/en.js';
import hi from '../i18n/hi.js';
import ta from '../i18n/ta.js';

const dictionaries = { en, hi, ta };

const I18nContext = createContext(null);

export const STORAGE_KEYS = {
  LANG: 'licence_saathi_lang',
  TEXT_SIZE: 'licence_saathi_text_size',
  HIGH_CONTRAST: 'licence_saathi_high_contrast',
  READ_ALOUD: 'licence_saathi_read_aloud'
};

export function I18nProvider({ children }) {
  // 1. Language state
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LANG);
      if (saved && ['en', 'hi', 'ta'].includes(saved)) return saved;
    } catch (e) {}
    return 'en';
  });

  // 2. Text size state: 'small' | 'medium' (default 16px) | 'large' (20px)
  const [textSize, setTextSize] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TEXT_SIZE);
      if (saved && ['small', 'medium', 'large'].includes(saved)) return saved;
    } catch (e) {}
    return 'medium';
  });

  // 3. High contrast state
  const [highContrast, setHighContrast] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.HIGH_CONTRAST) === 'true';
    } catch (e) {
      return false;
    }
  });

  // 4. Read aloud state
  const [readAloud, setReadAloud] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEYS.READ_ALOUD) === 'true';
    } catch (e) {
      return false;
    }
  });

  // Persist language
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.LANG, language);
      document.documentElement.lang = language;
    } catch (e) {}
  }, [language]);

  // Apply text size class to html/body
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TEXT_SIZE, textSize);
      const root = document.documentElement;
      root.classList.remove('text-size-small', 'text-size-medium', 'text-size-large');
      root.classList.add(`text-size-${textSize}`);
    } catch (e) {}
  }, [textSize]);

  // Apply high contrast class
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.HIGH_CONTRAST, String(highContrast));
      if (highContrast) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    } catch (e) {}
  }, [highContrast]);

  // Persist read aloud
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.READ_ALOUD, String(readAloud));
    } catch (e) {}
  }, [readAloud]);

  // Translation helper function
  const t = (key, params = {}) => {
    const currentDict = dictionaries[language] || dictionaries.en;
    let translation = currentDict[key];

    // Fallback to English if missing in chosen language
    if (!translation && language !== 'en') {
      translation = dictionaries.en[key];
    }

    if (!translation) {
      return key; // return key if not found
    }

    // Replace {params}
    if (params && typeof params === 'object') {
      return Object.keys(params).reduce((str, paramKey) => {
        return str.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(params[paramKey]));
      }, translation);
    }

    return translation;
  };

  const value = {
    language,
    setLanguage,
    textSize,
    setTextSize,
    highContrast,
    setHighContrast,
    readAloud,
    setReadAloud,
    t
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
