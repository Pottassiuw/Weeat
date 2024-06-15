import { useState, ChangeEvent } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../../components/nav';
import * as $ from './styles';

export default function LoginEstablishment() {
  const apiUrl = "https://localhost:4040/";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleRegisterClick = () => {
    navigate('/stores/register');
  };

  const sendLoginData = async () => {
    try {
      const response = await axios.post(`${apiUrl}establishment/login`, { email, password });
      console.log('Login successful!', response.data);
      navigate('/', { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <$.Screen>
      <NavBar />
      <$.Container>
        <$.Wrapper>
          <$.WrapperTitle>
            <$.Title>Login Estabelecimento</$.Title>
            <$.Subtitle>
              Seja um sócio weeat e expanda seu comércio
            </$.Subtitle>
          </$.WrapperTitle>
          <$.Form
            onSubmit={(e) => {
              e.preventDefault();
              sendLoginData();
            }}
          >
            <$.WrapperInput>
              <$.Label>Email</$.Label>
              <$.Input
                type="email"
                name="email"
                value={email}
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
                value={password}
                onChange={handleChanges}
                required
                placeholder="********"
              />
            </$.WrapperInput>
            <$.SubmitButton type="submit">
              Entrar
            </$.SubmitButton>
            <$.Link onClick={handleRegisterClick}>
              Ainda não tem cadastro? Cadastre sua loja
            </$.Link>
          </$.Form>
        </$.Wrapper>
      </$.Container>
    </$.Screen>
  );
};
