import React from "react";
import * as S from "./styles";

interface FormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const FormButton: React.FC<FormButtonProps> = ({ children, ...props }) => {
  return <S.FormButton {...props}>{children}</S.FormButton>;
};

export default FormButton;
