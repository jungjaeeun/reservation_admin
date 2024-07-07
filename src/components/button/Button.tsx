import React, { ButtonHTMLAttributes } from "react";
import "@styles/css/button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  block?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  block = false,
  ...props
}) => {
  let classNames = [];

  classNames.push(variant);
  if (block) {
    classNames.push("block");
  }

  if (props.className) {
    classNames.push(props.className);
  }

  return (
    <button className={`button ${classNames.join(" ")}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
