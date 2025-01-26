import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import { login } from "../utils/network-data";
import LanguageContext from "../contexts/LanguageContext";

function LoginPage({ loginSuccess }) {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  async function onLoginHandler({ email, password }) {
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
      navigate("/");
    }
  }

  return (
    <section className="login-page">
      <h2>
        {language === "EN"
          ? "Login to continue..."
          : "Masuk untuk melanjutkan..."}
      </h2>
      <LoginForm login={onLoginHandler} />
      <p className="not_found">
        {language === "EN" ? "Don't have an account?" : "Belum punya akun?"}{" "}
        <Link to="/register" className="back_home">
          {language === "EN" ? "Register" : "Daftar"}
        </Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
