"use client";
import React, { createContext, useContext } from 'react';

const TranslationContext = createContext({});

export const TranslationProvider = ({ translations, children }: { translations: any; children: React.ReactNode }) => (
  <TranslationContext.Provider value={translations}>
    {children}
  </TranslationContext.Provider>
);

export const useTranslation = () => {
  const translations = useContext(TranslationContext);
  if (!translations) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  
  // Simple deep-access helper: t('section.key')
  const t = (key: string) => key.split('.').reduce((acc: any, part: string) => acc && acc[part], translations) || key;
  
  return { t };
};