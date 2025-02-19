import React from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css";

function Button({
  to,
  children,
  className = "button",
  onClick,
  type = "button",
  disabled,
}) {
  if (to) {
    return (
      <Link to={to} className={`button ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
