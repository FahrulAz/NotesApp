import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

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

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageContext;
