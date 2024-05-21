import * as $ from "./styles";

export default function Register() {
  return (
    <$.Screen>
      <$.Container>
        <$.Wrapper>
          <$.WrapperTitle>
            <$.Title>Cadastre sua loja!</$.Title>
            <$.Subtitle>Seja um sócio weeat e expanda seu comércio</$.Subtitle>
          </$.WrapperTitle>
          <$.Form>
            <$.WrapperInput>
              <$.Label>Nome Completo</$.Label>
              <$.Input type="text" required placeholder="Pedro da Silva" />
            </$.WrapperInput>
            <$.WrapperInput>
              <$.Label>E-mail</$.Label>
              <$.Input type="text" required placeholder="ex: email@email.com" />
            </$.WrapperInput>
            <$.WrapperInput>
              <$.Label>Celular</$.Label>
              <$.Input type="phone" required placeholder="(00) 00000-0000" />
            </$.WrapperInput>
            <$.SubmitButton>Continuar agora!</$.SubmitButton>
          </$.Form>
        </$.Wrapper>
      </$.Container>
    </$.Screen>
  );
}
