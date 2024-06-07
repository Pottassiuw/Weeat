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
          <$.Links to="#">Home</$.Links>
          <$.Links to="#">Estabelecimentos</$.Links>
        </$.ItensWrapper>
        <$.ItensWrapper>
          <$.ItensTitle>Usuário</$.ItensTitle>
          <$.Links to="#">Cadastre o seu Usuário!</$.Links>
          <$.Links to="#">Entre com seu Usuário!</$.Links>
        </$.ItensWrapper>
        <$.ItensWrapper>
          <$.ItensTitle>Empresa</$.ItensTitle>
          <$.Links to="#">Cadastre sua Empresa!</$.Links>
          <$.Links to="#">Entre na sua Empersa!</$.Links>
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
