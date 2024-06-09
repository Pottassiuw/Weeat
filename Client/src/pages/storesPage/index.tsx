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
      <$.Divisor></$.Divisor>
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
              <$.DiscountCardName>CHAO1</$.DiscountCardName>
            </$.DiscountCardNameWrapper>
            <$.DiscountCardPriceWrapper>
              <$.DiscountCardOldPrice>R$ 10.22</$.DiscountCardOldPrice>
              <$.DiscountCardNewPrice>R$ 7.22</$.DiscountCardNewPrice>
            </$.DiscountCardPriceWrapper>
          </$.DiscountCard>
          <$.DiscountCard>
            <$.DiscountCardIconWrapper>
              <$.DiscountCardIcon src="#" />
            </$.DiscountCardIconWrapper>
            <$.DiscountCardImage src="#" />
            <$.DiscountCardNameWrapper>
              <$.DiscountCardName>CHAO2</$.DiscountCardName>
            </$.DiscountCardNameWrapper>
            <$.DiscountCardPriceWrapper>
              <$.DiscountCardOldPrice>R$ 20.52</$.DiscountCardOldPrice>
              <$.DiscountCardNewPrice>R$ 15.02</$.DiscountCardNewPrice>
            </$.DiscountCardPriceWrapper>
          </$.DiscountCard>
          <$.DiscountCard>
            <$.DiscountCardIconWrapper>
              <$.DiscountCardIcon src="#" />
            </$.DiscountCardIconWrapper>
            <$.DiscountCardImage src="#" />
            <$.DiscountCardNameWrapper>
              <$.DiscountCardName>CHAO3</$.DiscountCardName>
            </$.DiscountCardNameWrapper>
            <$.DiscountCardPriceWrapper>
              <$.DiscountCardOldPrice>R$ 4001.00</$.DiscountCardOldPrice>
              <$.DiscountCardNewPrice>R$ 3999.99</$.DiscountCardNewPrice>
            </$.DiscountCardPriceWrapper>
          </$.DiscountCard>
        </$.DiscountCardWrapper>
      </$.DiscountSection>
      <$.Divisor></$.Divisor>
      <$.StoresSection>
        <$.StoresTitleWrapper>
          <$.StoresTitleContent>
            <$.StoresTitle>Melhores restaurantes da sua região</$.StoresTitle>
            <$.StoresMapIcon />
          </$.StoresTitleContent>
          <$.StoresSubtitle>
            Os restaurantes mais bem avaliados perto de você.
          </$.StoresSubtitle>
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
          <$.StoresCard>
            <$.StoresCardLogoWrapper>
              <$.StoresCardLogo src="#" />
            </$.StoresCardLogoWrapper>
            <$.StoresCardNameWrapper>
              <$.StoresCardName></$.StoresCardName>
              <$.StoresCardCategory></$.StoresCardCategory>
            </$.StoresCardNameWrapper>
          </$.StoresCard>
          <$.StoresCard>
            <$.StoresCardLogoWrapper>
              <$.StoresCardLogo src="#" />
            </$.StoresCardLogoWrapper>
            <$.StoresCardNameWrapper>
              <$.StoresCardName></$.StoresCardName>
              <$.StoresCardCategory></$.StoresCardCategory>
            </$.StoresCardNameWrapper>
          </$.StoresCard>
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
        <$.StoresTitleWrapper>
          <$.StoresTitleContent>
            <$.StoresTitle>Mais pedidos</$.StoresTitle>
            <$.StoresStarIcon />
          </$.StoresTitleContent>
          <$.StoresSubtitle>
            Os restaurantes mais pedidos recentemente próximos de você{" "}
          </$.StoresSubtitle>
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
          <$.StoresCard>
            <$.StoresCardLogoWrapper>
              <$.StoresCardLogo src="#" />
            </$.StoresCardLogoWrapper>
            <$.StoresCardNameWrapper>
              <$.StoresCardName></$.StoresCardName>
              <$.StoresCardCategory></$.StoresCardCategory>
            </$.StoresCardNameWrapper>
          </$.StoresCard>
          <$.StoresCard>
            <$.StoresCardLogoWrapper>
              <$.StoresCardLogo src="#" />
            </$.StoresCardLogoWrapper>
            <$.StoresCardNameWrapper>
              <$.StoresCardName></$.StoresCardName>
              <$.StoresCardCategory></$.StoresCardCategory>
            </$.StoresCardNameWrapper>
          </$.StoresCard>
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
      <$.Divisor></$.Divisor>
      <Footer />
    </$.Container>
  );
}
