import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="contact-app_header">
      <div className="contact-app_logo">
        <img src="../public/logo.svg" alt="" width={"64px"} height={"64px"} />
        <h1>FNotes-Apps</h1>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
