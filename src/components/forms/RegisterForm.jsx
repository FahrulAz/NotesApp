import React from "react";
import useInput from "../../hooks/UseInput";
import PropTypes from "prop-types";

function RegisterForm({ register }) {
  const [name, nameInputHandler] = useInput("");
  const [email, emailInputHandler] = useInput("");
  const [password, passwordInputHandler] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    register({ name: name, email: email, password: password });
  };

  return (
    <form onSubmit={submitHandler} className="login-input">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={nameInputHandler}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={emailInputHandler}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={passwordInputHandler}
      />
      <button>Enter</button>
    </form>
  );
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterForm;
