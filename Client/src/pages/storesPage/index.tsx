import Footer from "../../components/Footer";
import * as $ from "./styles";
export default function StorePage() {
  return (
    <$.Container>
      <$.CategoriesSection>
        <$.WeeatTitle>Weeat</$.WeeatTitle>
        <$.SearchContainer>
          <$.SearchBar></$.SearchBar>
          <$.Bell></$.Bell>
        </$.SearchContainer>
        <$.GreetingsWrapper>
          <$.Greetings></$.Greetings>
        </$.GreetingsWrapper>
        <$.CategoryWrapper>
          <$.CategoryButton></$.CategoryButton>
        </$.CategoryWrapper>
        <$.StoresCategoryWrapper>
          <$.StoresCategoryButton></$.StoresCategoryButton>
        </$.StoresCategoryWrapper>
      </$.CategoriesSection>
      <$.DiscountSection>
        <$.DiscountTitleWrapper>
          <$.DiscountTitle></$.DiscountTitle>
        </$.DiscountTitleWrapper>
        <$.DiscountCardWrapper>
          <$.DiscountCard>
            <$.DiscountCardIconWrapper>
              <$.DiscountCardIcon src="#" />
            </$.DiscountCardIconWrapper>
            <$.DiscountCardNameWrapper>
              <$.DiscountCardName>OMGOMGOMGOMGOMGOMGOMGOGM</$.DiscountCardName>
            </$.DiscountCardNameWrapper>
            <$.DiscountCardPriceWrapper>
              <$.DiscountCardOldPrice></$.DiscountCardOldPrice>
              <$.DiscountCardNewPrice></$.DiscountCardNewPrice>
            </$.DiscountCardPriceWrapper>
          </$.DiscountCard>
        </$.DiscountCardWrapper>
      </$.DiscountSection>
      <$.StoresSection>
        <$.StoresTitleWrapper>
          <$.StoresTitle></$.StoresTitle>
          <$.StoresSubtitle></$.StoresSubtitle>
        </$.StoresTitleWrapper>
        <$.StoresCardWrapper>
          <$.StoresCard>
            <$.StoresCardLogoWrapper>
              <$.StoresCardLogo src="#" />
            </$.StoresCardLogoWrapper>
            <$.StoresCardNameWrapper>
              <$.StoresCardName></$.StoresCardName>
              <$.StoresCardCategory></$.StoresCardCategory>
            </$.StoresCardNameWrapper>
          </$.StoresCard>
        </$.StoresCardWrapper>
      </$.StoresSection>
      <Footer />
    </$.Container>
  );
}
