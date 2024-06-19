import React from "react";
import * as $ from "./styles";

interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ children, ...props }) => {
  return (
    <$.FormButton type="submit" {...props}>
      {children}
    </$.FormButton>
  );
};

export default FormButton;
