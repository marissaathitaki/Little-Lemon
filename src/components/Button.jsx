import React from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css";

function Button({ to, children, className = "" }) {
  return (
    <Link to={to}>
      <button className={`button ${className}`}>{children}</button>
    </Link>
  );
}

export default Button;
