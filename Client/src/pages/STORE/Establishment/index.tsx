import NavBar from "../../../components/nav";
import * as $ from "./styles";

export default function RestaurantPage() {
  return (
    <$.RestaurantPage>
      <NavBar sticky="true" />
      <$.ImageBanner></$.ImageBanner>
      <$.Infotext>
        <$.RestaurantName>Mcdonald's - Vale Sul</$.RestaurantName>
        <$.Rating>
          <span>(4.7)</span>
        </$.Rating>
        <$.Details>
          <p>Lanches - 2,0 km</p>
          <p>Prazo estimado: 20 a 30 minutos</p>
        </$.Details>
        <$.ButtonsContainer>
          <$.ContactButton>Contato</$.ContactButton>
          <$.ContactButton>Favoritos</$.ContactButton>
          <$.ContactButton></$.ContactButton>
        </$.ButtonsContainer>
      </$.Infotext>
    </$.RestaurantPage>
  );
}
