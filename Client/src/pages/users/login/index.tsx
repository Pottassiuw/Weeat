import * as $ from "./styles";
import Image from "../../../assets/login_register.png";
import { FormEvent } from "react";
import { useState } from "react";
import axios from "axios";

function Login() {
  const URL = "http://localhost:4040/users/login";
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [data, setData] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { email, password };

    try {
      const response = await axios.post(URL, data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <$.Container>
      <$.Wrapper>
        <$.WrapperTitle>
          <$.Title>Login</$.Title>
        </$.WrapperTitle>
        <$.Form onSubmit={handleSubmit}>
          <$.WrapperInput>
            <$.Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <$.Label>Email</$.Label>
          </$.WrapperInput>
          <$.WrapperInput>
            <$.Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
      <$.BottomColor></$.BottomColor>
    </$.Container>
  );
}

export default Login;
