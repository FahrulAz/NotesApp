import { useState } from "react";
import PropTypes from "prop-types";

function useInput(defaultInput = "") {
  const [input, setInput] = useState(defaultInput);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return [input, inputHandler];
}

useInput.propTypes = {
  defaultInput: PropTypes.string,
};

export default useInput;
