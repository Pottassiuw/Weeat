import { useEffect } from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/nav";
import * as $ from "./styles";
import axios from "axios";
import { URL } from "../../helper/URL";
export default function StorePage() {
  useEffect(() => {
    const getStores = async () => {
      const request = await axios.get(`${URL}/stores/`);
      const json = await request.data.json();
      console.log(json);
    };
    getStores();
  }, []);

  return (
    <$.Container>
      <NavBar sticky />
      <$.CategoriesSection>
        <$.WeeatTitleWrapper>
          <$.WeeatTitle>Weeat</$.WeeatTitle>
        </$.WeeatTitleWrapper>

        <$.Divisor></$.Divisor>

        <$.CategoriesWrapper>
          <$.GreetingsWrapper>
            <$.Greetings>Olá (User)!</$.Greetings>
          </$.GreetingsWrapper>

          <$.SearchWrapper>
            <$.SearchContentText>
              Procure por Estabelecimentos!
            </$.SearchContentText>
            <$.SearchContentWrapper>
              <$.SearchContentContainer>
                <$.SearchIcon />
                <$.SearchBar />
              </$.SearchContentContainer>
              <$.SearchContentButton>Pesquisar!</$.SearchContentButton>
            </$.SearchContentWrapper>
          </$.SearchWrapper>

          <$.CategoryWrapper></$.CategoryWrapper>
        </$.CategoriesWrapper>
        <$.StoresCategoryWrapper>
          <$.StoresCategoryButton>Arabe</$.StoresCategoryButton>
          <$.StoresCategoryButton>Talandês</$.StoresCategoryButton>
          <$.StoresCategoryButton>Coreano</$.StoresCategoryButton>
          <$.StoresCategoryButton>Japonês</$.StoresCategoryButton>
          <$.StoresCategoryButton>+</$.StoresCategoryButton>
        </$.StoresCategoryWrapper>
      </$.CategoriesSection>

      <$.Divisor>{/* DISCOUNT */}</$.Divisor>

      <$.DiscountSection>
        <$.DiscountTitleWrapper>
          <$.DiscountTitle>Produtos com discontão!</$.DiscountTitle>
          <$.DiscountTitleIcon />
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

      <$.Divisor>{/* STORES */}</$.Divisor>

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
