import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Toast = ({ message, duration = 1000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="toast show">
      {message}
      <div
        className="toast__progress"
        style={{ animationDuration: `${duration}ms` }}
      ></div>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
