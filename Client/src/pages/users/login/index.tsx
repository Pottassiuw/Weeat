import * as $ from "./styles";
import Image from "../../../assets/login_register.png";
import { FormEvent } from "react";

function Login() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <$.Container>
      <$.Wrapper>
        <$.WrapperTitle>
          <$.Title>Login</$.Title>
        </$.WrapperTitle>
        <$.Form onSubmit={handleSubmit}>
          <$.WrapperInput>
            <$.Input type="text" required />
            <$.Label>Email</$.Label>
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Input type="password" required />
            <$.Label>Senha</$.Label>
          </$.WrapperInput>
          <$.WrapperCheckbox>
            <$.Checkbox type="checkbox" /> <$.Span>Lembrar de mim</$.Span>
          </$.WrapperCheckbox>
          <$.SubmitButton>Entrar</$.SubmitButton>
          <$.RegisterText>
            Ainda não é cadastrado?{" "}
            <$.Links to="/users/register">registre</$.Links>
          </$.RegisterText>
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
