import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("id");
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("rasa-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("rasa-language");
    if (savedLanguage === "id" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
    setIsLanguageLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLanguageLoaded) return;
    document.documentElement.lang = language;
    window.localStorage.setItem("rasa-language", language);
  }, [isLanguageLoaded, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}