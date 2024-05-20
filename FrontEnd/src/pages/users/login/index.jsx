import * as $ from "./styles";
import Image from "../../../assets/login_register.png";

function Login() {
  return (
    <$.Container>
      <$.Wrapper>
        <$.WrapperTitle>
          <$.Title>Login</$.Title>
        </$.WrapperTitle>
        <$.Form>
          <$.WrapperInput>
            <$.Input />
            <$.Label>Usuário</$.Label>
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Input />
            <$.Label>Senha</$.Label>
          </$.WrapperInput>
          <$.WrapperCheckbox>
            <$.Checkbox type="checkbox" /> <$.Span>Lembrar de mim</$.Span>
          </$.WrapperCheckbox>
          <$.SubmitButton>Entrar</$.SubmitButton>
        </$.Form>
      </$.Wrapper>

      <$.WrapperImage>
        <$.Title>Busque os melhores restaurantes</$.Title>
        <$.Image src={Image} />
      </$.WrapperImage>
    </$.Container>
  );
}

export default Login;
