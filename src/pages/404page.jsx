import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

function ErrorPage() {
  const { language } = useContext(Language);

  return (
    <div className="errorpage">
      <h1>404 error</h1>
      <p>
        {language === "EN"
          ? "this page was not found"
          : "halaman ini tidak ditemukan"}
      </p>
    </div>
  );
}

export default ErrorPage;
