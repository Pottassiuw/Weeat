import { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/nav";
import * as $ from "./styles";
import axios from "axios";
import { URL } from "../../../helper/URL";
import { useUser } from "../../../context/userContext";
import type { Store } from "../../../@types/Entity";

export default function StorePage() {
  const { user } = useUser();
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    const getStores = async () => {
      try {
        if (user) {
          const response = await axios.get(`${URL}stores`);
          if (response.data && Array.isArray(response.data)) {
            setStores(response.data);
          } else {
            console.error("Unexpected response data format:", response.data);
          }
        }
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };
    getStores();
  }, [user]);
  return (
    <$.Container>
      <NavBar sticky="true" />
      <$.CategoriesSection>
        <$.WeeatTitleWrapper>
          <$.WeeatTitle>Weeat</$.WeeatTitle>
        </$.WeeatTitleWrapper>

        <$.Divisor></$.Divisor>

        <$.CategoriesWrapper>
          <$.GreetingsWrapper>
            <$.Greetings>
              Olá{" "}
              {user?.name ||
                "Usuário não existente neste WebApp maravilhoso feito em React Ts"}
              !
            </$.Greetings>
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
          <$.StoresCategoryButton>Lanchonete</$.StoresCategoryButton>
          <$.StoresCategoryButton>Pizzaria</$.StoresCategoryButton>
          <$.StoresCategoryButton>Japonês</$.StoresCategoryButton>
          <$.StoresCategoryButton>Árabe</$.StoresCategoryButton>
          <$.StoresCategoryButton>Açaíteria</$.StoresCategoryButton>
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

      <$.Divisor>{/* NEWSLETTER */}</$.Divisor>

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
          {stores.map((store) => (
            <$.StoresCard key={store.id}>
              <$.StoresCardLogoWrapper>
                <$.StoresCardLogo src={store.logo || "#"} alt={store.name} />
              </$.StoresCardLogoWrapper>
              <$.StoresCardNameWrapper>
                <$.StoresCardName>{store.name}</$.StoresCardName>
                <$.StoresCardCategory>{store.category}</$.StoresCardCategory>
              </$.StoresCardNameWrapper>
            </$.StoresCard>
          ))}
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
          {stores.map((store) => (
            <$.StoresCard key={store.id}>
              <$.StoresCardLogoWrapper>
                <$.StoresCardLogo src={store.logo || "#"} alt={store.name} />
              </$.StoresCardLogoWrapper>
              <$.StoresCardNameWrapper>
                <$.StoresCardName>{store.name}</$.StoresCardName>
                <$.StoresCardCategory>{store.category}</$.StoresCardCategory>
              </$.StoresCardNameWrapper>
            </$.StoresCard>
          ))}
        </$.StoresCardWrapper>
      </$.StoresSection>
      <$.Divisor>{/* NEWSLETTER */}</$.Divisor>
      <Footer />
    </$.Container>
  );
}
