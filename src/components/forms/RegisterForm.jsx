import React from "react";
import useInput from "../../hooks/UseInput";
import PropTypes from "prop-types";

function RegisterForm({ register }) {
  const [name, nameInputHandler] = useInput("");
  const [email, emailInputHandler] = useInput("");
  const [password, passwordInputHandler] = useInput("");
  const [confirmPassword, confirmPasswordInputHandler] = useInput("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }
    setErrorMessage("");
    register({ name: name, email: email, password: password });
  };

  return (
    <form onSubmit={submitHandler} className="login-input">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={nameInputHandler}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={emailInputHandler}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={passwordInputHandler}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={confirmPasswordInputHandler}
        required
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button>Enter</button>
    </form>
  );
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterForm;
