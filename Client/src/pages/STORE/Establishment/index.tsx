import * as $ from "./styles";
import NavBar from "../../../components/nav";
// import Image1 from "../../../assets/Banner.jpg";
// import Image2 from "../../../assets/bigmac.webp";
// import Image3 from "../../../assets/McDonalds-lanca-novo-McFlurry-Espetaculo-Kopenhagen.jpg";

export default function RestaurantPage() {
  return (
    <$.RestaurantContainer>
      <NavBar sticky="true" />
      <$.WrapperImage>
        <$.Banner src={""} alt="banner restaurante" />
      </$.WrapperImage>
      <$.InfoContainer>
        <$.RestaurantName>
          <h1>Mcdonald's - Vale Sul</h1>
          <$.Rating>
            <$.Star> ☆☆☆☆☆ </$.Star>
            <$.RatingNumber>(4,7)</$.RatingNumber>
          </$.Rating>
        </$.RestaurantName>
        <$.RestaurantDistance>
          <$.DetailsItem>Lanches - 2,0 km</$.DetailsItem>
        </$.RestaurantDistance>
        <$.RestaurantTime>
          <$.DetailsItem>Prazo estimado: 20 a 30 minutos</$.DetailsItem>
        </$.RestaurantTime>
        <$.ButtonsContainer>
          <$.Button type="button">Próximo de você</$.Button>
          <$.ContactsButton type="button">Contato</$.ContactsButton>
          <$.FavoritesButton type="button">Favoritos</$.FavoritesButton>
        </$.ButtonsContainer>
        <$.MenuContainer>
          <$.MenuItem type="button">Lanches</$.MenuItem>
          <$.MenuItem type="button">Combos</$.MenuItem>
          <$.MenuItem type="button">Fritos</$.MenuItem>
          <$.MenuItem type="button">Tortas</$.MenuItem>
          <$.MenuItem type="button">Refrigerantes</$.MenuItem>
          <$.MenuItem type="button">Sobremesas</$.MenuItem>
        </$.MenuContainer>
        <$.PromotionsContainer>
          <$.PromotionTitle>Lanches</$.PromotionTitle>
          <$.PromotionList>
            <$.PromotionItem>
              <$.PromotionImage src={""} alt="promotion image" />
              <$.PromotionInfo>
                <$.PromotionName>McFlurry</$.PromotionName>
                <$.PromotionDescription>
                  McFlurry de chocolate com nozes
                </$.PromotionDescription>
                <$.PromotionPrice>R$ 15,90</$.PromotionPrice>
              </$.PromotionInfo>
              <$.Button2 type="button">Saiba mais</$.Button2>
            </$.PromotionItem>
            <$.PromotionItem>
              <$.PromotionImage src={""} alt="promotion image" />
              <$.PromotionInfo>
                <$.PromotionName>Big Mac</$.PromotionName>
                <$.PromotionDescription>
                  Big Mac com queijo e bacon
                </$.PromotionDescription>
                <$.PromotionPrice>R$ 24,90</$.PromotionPrice>
              </$.PromotionInfo>
              <$.Button2 type="button">Saiba mais</$.Button2>
            </$.PromotionItem>
            <$.PromotionItem>
              <$.PromotionImage src={""} alt="promotion image" />
              <$.PromotionInfo>
                <$.PromotionName>Batata frita</$.PromotionName>
                <$.PromotionDescription>
                  Batata frita grande
                </$.PromotionDescription>
                <$.PromotionPrice>R$ 12,90</$.PromotionPrice>
              </$.PromotionInfo>
              <$.Button2 type="button">Saiba mais</$.Button2>
            </$.PromotionItem>
            <$.PromotionItem>
              <$.PromotionImage src={""} alt="promotion image" />
              <$.PromotionInfo>
                <$.PromotionName>Coca-Cola</$.PromotionName>
                <$.PromotionDescription>
                  Coca-Cola grande com gelo
                </$.PromotionDescription>
                <$.PromotionPrice>R$ 10,90</$.PromotionPrice>
              </$.PromotionInfo>
              <$.Button2 type="button">Saiba mais</$.Button2>
            </$.PromotionItem>
            <$.PromotionItem>
              <$.PromotionImage src={""} alt="promotion image" />
              <$.PromotionInfo>
                <$.PromotionName>Casquinha</$.PromotionName>
                <$.PromotionDescription>
                  Casquinha de sorvete
                </$.PromotionDescription>
                <$.PromotionPrice>R$ 24,90</$.PromotionPrice>
              </$.PromotionInfo>
              <$.Button2 type="button">Saiba mais</$.Button2>
            </$.PromotionItem>
          </$.PromotionList>
        </$.PromotionsContainer>
      </$.InfoContainer>
    </$.RestaurantContainer>
  );
}
