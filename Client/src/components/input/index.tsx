import * as S from "./styles";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return <S.Input {...props}></S.Input>;
};

export default Input;
