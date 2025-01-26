import React, { useContext } from "react";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import LanguageContext from "../contexts/LanguageContext";
import { IoLogOut } from "react-icons/io5";
import PropTypes from "prop-types";

function Header({ userName, onButtonClick }) {
  const { language } = useContext(LanguageContext);

  return (
    <div className="contact-app_header">
      <div className="contact-app_logo">
        <img
          src="../public/logo.svg"
          alt="Logo"
          width={"64px"}
          height={"64px"}
        />
        <h1>{language === "EN" ? "FNotes-Apps" : "FCatatan-Aplikasi"}</h1>
      </div>
      <div className="contact-app_actions">
        <Navigation />
        <ThemeToggle />
        <LanguageToggle />
        {userName && (
          <div className="user-info">
            <span>
              {language === "EN" ? "Hi!!!" : "Halo!!"} {userName}
            </span>
            <button onClick={onButtonClick} className="logout-button">
              <IoLogOut />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  userName: PropTypes.string,
  onButtonClick: PropTypes.func,
};

export default Header;
