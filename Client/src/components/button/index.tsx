import React from "react";
import * as $ from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <$.Button {...props}>{children}</$.Button>;
};

export default Button;
