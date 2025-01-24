import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

function LanguageToggle() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button className="language-toggle" onClick={toggleLanguage}>
      {language === "EN" ? "ID" : "EN"}
    </button>
  );
}

export default LanguageToggle;
