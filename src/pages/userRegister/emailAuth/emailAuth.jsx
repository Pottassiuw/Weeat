import {
  Container,
  FormRegister,
  Logo,
  RouterLinks,
  InputField,
  LabelInput,
  InputWrapper,
  RegisterButton,
} from "./emailAuth.styles.js";
import { WrapperBox } from "../UserRegister.styles";
import { useState } from "react";

const EmailAuth = () => {
  const [inputFocus, setInputFocus] = useState({
    user: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleFocus = (inputName, isFocused) => {
    setInputFocus({
      ...inputFocus,
      [inputName]: isFocused,
    });
  };

  return (
    <Container>
      <header>
        <RouterLinks to="/">
          <Logo>Weeat</Logo>
        </RouterLinks>
      </header>
      <WrapperBox>
        <div>
          <h1>Crie sua conta</h1>
          <h2>Aproveite seu tempo...</h2>
        </div>
        <FormRegister>
          <InputWrapper>
            <LabelInput htmlFor="user" focused={inputFocus.user}>
              Usuario
            </LabelInput>
            <InputField
              onFocus={() => handleFocus("user", true)}
              onBlur={() => handleFocus("user", false)}
              required
              type="text"
              id="user"
            />
          </InputWrapper>
          <InputWrapper>
            <LabelInput htmlFor="email" focused={inputFocus.email}>
              Email
            </LabelInput>
            <InputField
              onFocus={() => handleFocus("email", true)}
              onBlur={() => handleFocus("email", false)}
              required
              type="email"
              id="email"
            />
          </InputWrapper>
          <InputWrapper>
            <LabelInput htmlFor="password" focused={inputFocus.password}>
              Senha
            </LabelInput>
            <InputField
              onFocus={() => handleFocus("password", true)}
              onBlur={() => handleFocus("password", false)}
              type="password"
            />
          </InputWrapper>
          <InputWrapper>
            <LabelInput
              htmlFor="confirmPassword"
              focused={inputFocus.confirmPassword}
            >
              Confirmar senha
            </LabelInput>
            <InputField
              onFocus={() => handleFocus("confirmPassword", true)}
              onBlur={() => handleFocus("confirmPassword", false)}
              type="password"
              required
              id="ConfirmPassword"
            />
          </InputWrapper>
          <RegisterButton type="submit">Registrar</RegisterButton>
        </FormRegister>
      </WrapperBox>
    </Container>
  );
};

export default EmailAuth;
