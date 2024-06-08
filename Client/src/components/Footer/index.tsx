import * as $ from "./styles";
import Logo from "../../assets/logo weeat.png";
export default function () {
  return (
    <$.Footer>
      <$.AllWrapper>
        <$.LogoContainer>
          <$.LogoWrapper>
            <$.Logo src={Logo} />
            <$.LogoTitle>Weeat</$.LogoTitle>
          </$.LogoWrapper>
          <$.LogoSubtitle>
            Seus restaurantes favoritos e seus pratos favoritos apenas aqui!
          </$.LogoSubtitle>
        </$.LogoContainer>
        <$.ItensWrapper>
          <$.ItensTitle>Páginas</$.ItensTitle>
          <$.Links to="/">Home</$.Links>
          <$.Links to="/stores">Estabelecimentos</$.Links>
        </$.ItensWrapper>
        <$.ItensWrapper>
          <$.ItensTitle>Usuário</$.ItensTitle>
          <$.Links to="/users/register">Cadastre o seu Usuário!</$.Links>
          <$.Links to="/users/login">Entre com seu Usuário!</$.Links>
        </$.ItensWrapper>
        <$.ItensWrapper>
          <$.ItensTitle>Empresa</$.ItensTitle>
          <$.Links to="/stores/register">Cadastre sua Empresa!</$.Links>
          <$.Links to="/stores/login">Entre na sua Empersa!</$.Links>
        </$.ItensWrapper>
      </$.AllWrapper>
      <$.Copyright>
        <$.CopyrightText>
          © Weeat enterprises, All rights reserved 2024
        </$.CopyrightText>
      </$.Copyright>
    </$.Footer>
  );
}
