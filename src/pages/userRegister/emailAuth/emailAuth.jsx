import {
  Container,
  FormRegister,
  Logo,
  RouterLinks,
  InputField,
  LabelInput,
  InputWrapper,
  RegisterButton,
<<<<<<< HEAD
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

=======
  TextWrapper,
  WrapperBox
} from "../../../components/styles/Common-styles.js";

const EmailAuth = () => {
>>>>>>> master
  return (
    <Container>
      <header>
        <RouterLinks to="/">
          <Logo>Weeat</Logo>
        </RouterLinks>
      </header>
      <WrapperBox>
<<<<<<< HEAD
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
=======
        <TextWrapper>
          <h1>REGISTRAR</h1>
          <h2>Aproveite seu tempo...</h2>
        </TextWrapper>
        <FormRegister>
          <InputWrapper>
            <InputField required type="text" id="user" />
            <LabelInput htmlFor="user">Usuario</LabelInput>
          </InputWrapper>
          <InputWrapper>
            <InputField required type="text" id="email" />
            <LabelInput htmlFor="email">Email</LabelInput>
          </InputWrapper>
          <InputWrapper>
            <InputField required type="password" id="password" />
            <LabelInput htmlFor="password">Senha</LabelInput>
          </InputWrapper>
          <InputWrapper>
            <InputField required type="password" id="ConfirmPassword" />
            <LabelInput htmlFor="confirmPassword">Confirmar Senha</LabelInput>
>>>>>>> master
          </InputWrapper>
          <RegisterButton type="submit">Registrar</RegisterButton>
        </FormRegister>
      </WrapperBox>
    </Container>
  );
};

export default EmailAuth;
