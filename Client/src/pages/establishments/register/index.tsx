import * as $ from "./styles";
import { useState, ChangeEvent } from "react";
import axios from "axios";

export default function Register() {
  const apiUrl = "https://localhost:4040/";
  const [page, setPage] = useState(1);
  const [establishmentData, setEstablishmentData] = useState(() => ({
    name: "",
    email: "",
    password: "",
    ZIP: "",
    neighborhood: "",
    city: "",
    address: "",
    number: "",
    complement: "",
  }));

  const handlePages = () => {
    setPage(2);
  };

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEstablishmentData({
      ...establishmentData,
      [name]: value,
    });
  };

  const sendEstablishmetData = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}establishment`,
        establishmentData
      );
      console.log("Data send successfully!", response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <$.Screen>
      {page === 1 ? (
        <$.Container>
          <$.Wrapper>
            <$.WrapperTitle>
              <$.Title>Cadastre sua loja!</$.Title>
              <$.Subtitle>
                Seja um sócio weeat e expanda seu comércio
              </$.Subtitle>
            </$.WrapperTitle>
            <$.Form
              onSubmit={(e) => {
                e.preventDefault();
                sendEstablishmetData();
              }}
            >
              <$.WrapperInput>
                <$.Label>Nome Completo</$.Label>
                <$.Input
                  type="text"
                  name="name"
                  value={establishmentData.name}
                  onChange={handleChanges}
                  required
                  placeholder="Pedro da Silva"
                />
              </$.WrapperInput>
              <$.WrapperInput>
                <$.Label>E-mail</$.Label>
                <$.Input
                  type="text"
                  name="email"
                  value={establishmentData.email}
                  onChange={handleChanges}
                  required
                  placeholder="ex: email@email.com"
                />
              </$.WrapperInput>
              <$.WrapperInput>
                <$.Label>Celular</$.Label>
                <$.Input
                  type="phone"
                  name="password"
                  value={establishmentData.password}
                  onChange={handleChanges}
                  required
                  placeholder="(00) 00000-0000"
                />
              </$.WrapperInput>
              <$.SubmitButton type="submit" onClick={handlePages}>
                Continuar agora!
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
