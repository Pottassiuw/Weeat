import {
  Container,
  FormRegister,
  Logo,
  RouterLinks,
  InputField,
  LabelInput,
  InputWrapper,
  RegisterButton,
  TextWrapper,
  WrapperBox
} from "../../../styles/Common-styles.js";

const EmailAuth = () => {
  return (
    <Container>
      <header>
        <RouterLinks to="/">
          <Logo>Weeat</Logo>
        </RouterLinks>
      </header>
      <WrapperBox>
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
          </InputWrapper>
          <RegisterButton type="submit">Registrar</RegisterButton>
        </FormRegister>
      </WrapperBox>
    </Container>
  );
};

export default EmailAuth;
