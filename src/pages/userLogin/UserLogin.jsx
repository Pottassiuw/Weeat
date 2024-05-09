import * as S from "../../styles/styles";

export default function UserLogin() {
  return (
    <S.Container>
      <header>
        <S.RouterLinks to="/">
          <S.Logo>Weeat</S.Logo>
        </S.RouterLinks>
      </header>
      <S.WrapperBox>
        <S.TextWrapper>
          <h1>REGISTRAR</h1>
          <h2>Aproveite seu tempo...</h2>
        </S.TextWrapper>
        <S.FormRegister>
          <S.InputWrapper>
            <S.InputField required type="text" id="user" />
            <S.LabelInput htmlFor="user">Usuario</S.LabelInput>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputField required type="text" id="email" />
            <S.LabelInput htmlFor="email">Email</S.LabelInput>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputField required type="password" id="password" />
            <S.LabelInput htmlFor="password">Senha</S.LabelInput>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputField required type="password" id="ConfirmPassword" />
            <S.LabelInput htmlFor="confirmPassword">Confirmar Senha</S.LabelInput>
          </S.InputWrapper>
          <S.RegisterButton type="submit">Registrar</S.RegisterButton>
        </S.FormRegister>
      </S.WrapperBox>
    </S.Container>
  );
}
