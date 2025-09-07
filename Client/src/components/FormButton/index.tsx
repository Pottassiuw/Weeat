import React from "react";
import * as $ from "./styles";

interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ children, ...props }) => {
<<<<<<< HEAD
  return <$.FormButton {...props}>{children}</$.FormButton>;
=======
  return (
    <$.FormButton {...props}>
      {children}
    </$.FormButton>
  );
>>>>>>> develop
};

export default FormButton;
