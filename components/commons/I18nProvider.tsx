"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Locale, MESSAGES, SUPPORTED_LOCALES, isSupportedLocale } from '@/lib/i18n';

type TFunc = (key: string) => string;

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: TFunc;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr');

  useEffect(() => {
    try {
      // Try to read saved locale from localStorage
      const saved = typeof window !== 'undefined' ? window.localStorage.getItem('yowyob_locale') : null;
      if (saved && isSupportedLocale(saved)) {
        setLocaleState(saved);
        return;
      }

      // Fallback to browser language
      const nav = typeof navigator !== 'undefined' ? navigator.language : 'fr';
      const short = nav.split('-')[0];
      if (isSupportedLocale(short)) setLocaleState(short as Locale);
    } catch (e) {
      // ignore
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem('yowyob_locale', l);
    } catch (e) {
      // ignore
    }
  };

  const t: TFunc = (key) => {
    const parts = key.split('.');
    let cur: any = MESSAGES[locale];
    for (const p of parts) {
      if (!cur) return key;
      cur = cur[p];
    }
    return typeof cur === 'string' ? cur : key;
  };

  const value = useMemo(() => ({ locale, setLocale, t }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used within I18nProvider');
  return { t: ctx.t, locale: ctx.locale, setLocale: ctx.setLocale, supported: SUPPORTED_LOCALES };
}
