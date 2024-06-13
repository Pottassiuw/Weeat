import React from "react";
import { FormButton } from "./styles";

interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ children, ...props }) => {
  return <FormButton {...props}>{children}</FormButton>;
};

export default FormButton;
