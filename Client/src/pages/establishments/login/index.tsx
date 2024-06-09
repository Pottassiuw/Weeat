import * as $ from "./styles";
import { useState, ChangeEvent } from "react";
import axios from "axios";
import NavBar from "../../../components/nav";

export default function Login() {
  const apiUrl = "https://localhost:4040/";
  const [page, setPage] = useState(1);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handlePages = () => {
    setPage(2);
  };

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const sendLoginData = async () => {
    try {
      const response = await axios.post(`${apiUrl}login`, loginData);
      console.log("Data send successfully!", response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <$.Screen>
      <NavBar />
      {page === 1 ? (
        <$.Container>
          <$.Wrapper>
            <$.WrapperTitle>
              <$.Title>Faça seu login!</$.Title>
              <$.Subtitle>Entre com suas credenciais</$.Subtitle>
            </$.WrapperTitle>
            <$.Form
              onSubmit={(e) => {
                e.preventDefault();
                sendLoginData();
              }}
            >
              <$.WrapperInput>
                <$.Label>E-mail</$.Label>
                <$.Input
                  type="text"
                  name="email"
                  value={loginData.email}
                  onChange={handleChanges}
                  required
                  placeholder="ex: email@email.com"
                />
              </$.WrapperInput>
              <$.WrapperInput>
                <$.Label>Senha</$.Label>
                <$.Input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChanges}
                  required
                  placeholder="Mínimo 6 caracteres"
                />
              </$.WrapperInput>
              <$.SubmitButton type="submit" onClick={handlePages}>
                Entrar
              </$.SubmitButton>
            </$.Form>
          </$.Wrapper>
        </$.Container>
      ) : page === 2 ? (
        <$.Rcontainer></$.Rcontainer>
      ) : null}
    </$.Screen>
  );
}
export default function index() {
  return (
    <>
        <h1>Login estab.</h1>
    
    </>
  )
}
