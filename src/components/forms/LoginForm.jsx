import React from "react";
import useInput from "../../hooks/UseInput";
import PropTypes from "prop-types";

function LoginForm({ login }) {
  const [email, onEmailInputHandler] = useInput("");
  const [password, onPasswordInputHandler] = useInput("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login({ email: email, password: password });
  };

  return (
    <form onSubmit={onSubmitHandler} className="login-input">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailInputHandler}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordInputHandler}
      />
      <button>Enter</button>
    </form>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
