import React, { useContext } from "react";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import LanguageContext from "../contexts/LanguageContext";

function Header() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="contact-app_header">
      <div className="contact-app_logo">
        <img src="../public/logo.svg" alt="" width={"64px"} height={"64px"} />
        <h1>{language === "EN" ? "FNotes-Apps" : "FCatatan-Aplikasi"}</h1>
      </div>
      <div className="contact-app_actions">
        <Navigation />
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </div>
  );
}

export default Header;
