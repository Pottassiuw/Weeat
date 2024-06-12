import * as $ from "./styles";
import { useState, ChangeEvent } from "react";
import axios from "axios";
import NavBar from "../../../components/nav";

export default function Register() {

  const [page, setPage] = useState(1);
  
  

  return (
    <$.Screen>
      <NavBar />
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
