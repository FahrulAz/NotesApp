import React, { createContext, useState, useMemo } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "EN"
  );

  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "ID" : "EN";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const contextValue = useMemo(
    () => ({
      language,
      toggleLanguage,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
