import Footer from "../../components/Footer";
import NavBar from "../../components/nav";
import * as $ from "./styles";
export default function StorePage() {
  return (
    <$.Container>
      <NavBar />
      <$.CategoriesSection>
        <$.WeeatTitleWrapper>
          <$.WeeatTitle>Weeat</$.WeeatTitle>
        </$.WeeatTitleWrapper>
        <$.Divisor></$.Divisor>
        <$.CategoriesWrapper>
          <$.SearchWrapper>
            <$.SearchIcon />
            <$.SearchBar />
            <$.BellIcon />
          </$.SearchWrapper>
          <$.GreetingsWrapper>
            <$.Greetings>Hello My (Nigga)!</$.Greetings>
          </$.GreetingsWrapper>
          <$.CategoryWrapper>
            <$.CategoryButtonWrapper>
              <$.CategoryButton>Category 1</$.CategoryButton>
              <$.CategoryButton>Category 2</$.CategoryButton>
              <$.CategoryButton>Category 3</$.CategoryButton>
              <$.CategoryButton>Category 4</$.CategoryButton>
              <$.CategoryButton>Category 5</$.CategoryButton>
            </$.CategoryButtonWrapper>
            <$.CategoryFavorites>
              <$.CategoryButton>Goto Fav</$.CategoryButton>
              <$.ArrowIcon />
            </$.CategoryFavorites>
          </$.CategoryWrapper>
        </$.CategoriesWrapper>
        <$.StoresCategoryWrapper>
          <$.StoresCategoryButton>Arab</$.StoresCategoryButton>
          <$.StoresCategoryButton>Thai</$.StoresCategoryButton>
          <$.StoresCategoryButton>Corean</$.StoresCategoryButton>
          <$.StoresCategoryButton>Japanese</$.StoresCategoryButton>
          <$.StoresCategoryButton>+</$.StoresCategoryButton>
        </$.StoresCategoryWrapper>
      </$.CategoriesSection>
      <$.DiscountSection>
        <$.DiscountTitleWrapper>
          <$.DiscountTitle>Produtos com discontão!</$.DiscountTitle>
        </$.DiscountTitleWrapper>
        <$.DiscountCardWrapper>
          <$.DiscountCard>
            <$.DiscountCardIconWrapper>
              <$.DiscountCardIcon src="#" />
            </$.DiscountCardIconWrapper>
            <$.DiscountCardImage src="#" />
            <$.DiscountCardNameWrapper>
              <$.DiscountCardName></$.DiscountCardName>
            </$.DiscountCardNameWrapper>
            <$.DiscountCardPriceWrapper>
              <$.DiscountCardOldPrice></$.DiscountCardOldPrice>
              <$.DiscountCardNewPrice></$.DiscountCardNewPrice>
            </$.DiscountCardPriceWrapper>
          </$.DiscountCard>
          <$.DiscountCard>
            <$.DiscountCardIconWrapper>
              <$.DiscountCardIcon src="#" />
            </$.DiscountCardIconWrapper>
            <$.DiscountCardImage src="#" />
            <$.DiscountCardNameWrapper>
              <$.DiscountCardName></$.DiscountCardName>
            </$.DiscountCardNameWrapper>
            <$.DiscountCardPriceWrapper>
              <$.DiscountCardOldPrice></$.DiscountCardOldPrice>
              <$.DiscountCardNewPrice></$.DiscountCardNewPrice>
            </$.DiscountCardPriceWrapper>
          </$.DiscountCard>
          <$.DiscountCard>
            <$.DiscountCardIconWrapper>
              <$.DiscountCardIcon src="#" />
            </$.DiscountCardIconWrapper>
            <$.DiscountCardImage src="#" />
            <$.DiscountCardNameWrapper>
              <$.DiscountCardName></$.DiscountCardName>
            </$.DiscountCardNameWrapper>
            <$.DiscountCardPriceWrapper>
              <$.DiscountCardOldPrice></$.DiscountCardOldPrice>
              <$.DiscountCardNewPrice></$.DiscountCardNewPrice>
            </$.DiscountCardPriceWrapper>
          </$.DiscountCard>
        </$.DiscountCardWrapper>
      </$.DiscountSection>
      <$.Divisor></$.Divisor>
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
            <$.DiscountCardImage src="#" />
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
