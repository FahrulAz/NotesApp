import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../components/forms/RegisterForm";
import { register } from "../utils/network-data";
import LanguageContext from "../contexts/LanguageContext";

function RegisterPage() {
  const navigate = useNavigate();
  const { language } = React.useContext(LanguageContext);

  async function registerHandler({ name, email, password }) {
    const { error } = await register({ name, email, password });
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>{language === "EN" ? "Register Account" : "Daftar Akun"}</h2>
      <RegisterForm register={registerHandler} />
      <p className="not_found">
        {language === "EN" ? "Already have an account?" : "Sudah punya akun?"}{" "}
        <Link to="/" className="back_home">
          {language === "EN" ? "Login" : "Masuk"}
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
