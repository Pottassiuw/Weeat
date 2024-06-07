import * as $ from "./styles";
import Logo from "../../assets/logo weeat.png";
export default function () {
  return (
    <$.Footer>
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
        <$.ItensTitle>Item Title</$.ItensTitle>
        <$.Links to="#">Link</$.Links>
      </$.ItensWrapper>
      <$.ItensWrapper>
        <$.ItensTitle>Item Title</$.ItensTitle>
        <$.Links to="#">Link</$.Links>
      </$.ItensWrapper>
      <$.ItensWrapper>
        <$.ItensTitle>Serviços</$.ItensTitle>
        <$.Links to="#">Cadastre sua Empresa!</$.Links>
        <$.Links to="#">Cadastre seu Usuário!</$.Links>
      </$.ItensWrapper>
      <$.Copyright>
        <$.CopyrightText>
          © Weeat enterprises, All rights reserved 2024
        </$.CopyrightText>
      </$.Copyright>
    </$.Footer>
  );
}
