import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
  isChanging: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app_language');
      return (saved === 'en' || saved === 'bm') ? saved : 'bm';
    }
    return 'bm';
  });
  const [isChanging, setIsChanging] = useState(false);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    setIsChanging(true);
    // Short delay for animation before switching text
    setTimeout(() => {
      setLanguageState(lang);
      localStorage.setItem('app_language', lang);
      // Short delay for animation out
      setTimeout(() => {
        setIsChanging(false);
      }, 100);
    }, 200);
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t: translations[language],
      isChanging
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};