import React, { InputHTMLAttributes } from "react";
import "@styles/css/input.css";
import "@styles/css/common.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: "primary" | "secondary";
};

const Input: React.FC<InputProps> = ({ variant = "primary", ...props }) => {
  const classNames = ["input", variant];
  const className = classNames.join(" ");
  return <input className={`m_b_12 ${className}`} {...props} />;
};

export default Input;
