import { useEffect } from "react";
import Footer from "../../../components/Footer";
import NavBar from "../../../components/nav";
import * as $ from "./styles";
import { usePage } from "./usePage";
import { useNavigate } from "react-router-dom";
export default function StorePage() {
  const {
    token,
    user,
    getStores,
    Allstores,
    handleSearch,
    filteredStores,
    searchQuery,
    gotoStorePage,
  } = usePage();
  useEffect(() => {
    getStores();
  }, [token, user]);
  const navigate = useNavigate();

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

          {/*//!  */}
          <$.SearchWrapper>
            <$.SearchContentText>
              Procure por Estabelecimentos!
            </$.SearchContentText>

            <$.SearchContentWrapper>
              <$.SearchContentContainer>
                <$.SearchIcon />
                <$.SearchBar
                  value={searchQuery}
                  onChange={(event) => handleSearch(event.target.value)}
                />
              </$.SearchContentContainer>
              <$.SearchContentButton>Pesquisar!</$.SearchContentButton>
            </$.SearchContentWrapper>
            <$.SearchResultsWrapper>
              {filteredStores.length > 0
                ? filteredStores.map((store) => (
                    <$.StoreCard key={store.id}>
                      <$.StoreLogo src={store.logo} />
                      <$.StoreInfo>
                        <$.StoreName>{store.storeName}</$.StoreName>
                        <$.StoreDescription>
                          {store.description}
                        </$.StoreDescription>
                        <div>
                          <$.StoreRating>estrelas</$.StoreRating>
                          <$.StoreCategory>{store.category}</$.StoreCategory>
                          <$.StoreLink to={`/stores/page/${store.id}`}>
                            <$.StoreLinkButton>Ver Loja</$.StoreLinkButton>
                          </$.StoreLink>
                        </div>
                      </$.StoreInfo>
                    </$.StoreCard>
                  ))
                : searchQuery.trim() !== "" && (
                    <$.NoStoresMessage>
                      Nenhum resultado encontrado.
                    </$.NoStoresMessage>
                  )}
            </$.SearchResultsWrapper>
          </$.SearchWrapper>
          {/*//! */}
        </$.CategoriesWrapper>
        <$.StoresCategoryWrapper>
          <$.StoresCategoryButton
            onClick={() => {
              navigate("category/Lanchonete");
            }}
          >
            Lanchonete
          </$.StoresCategoryButton>
          <$.StoresCategoryButton
            onClick={() => {
              navigate("category/Pizzaria");
            }}
          >
            Pizzaria
          </$.StoresCategoryButton>
          <$.StoresCategoryButton
            onClick={() => {
              navigate("category/Restaurante Japonês");
            }}
          >
            Japonês
          </$.StoresCategoryButton>
          <$.StoresCategoryButton
            onClick={() => {
              navigate("category/Restaurante Árabe");
            }}
          >
            Árabe
          </$.StoresCategoryButton>
          <$.StoresCategoryButton
            onClick={() => {
              navigate("category/Sobremesas");
            }}
          >
            Sobremesas
          </$.StoresCategoryButton>
        </$.StoresCategoryWrapper>
      </$.CategoriesSection>

      <$.Divisor>{/* DISCOUNT */}</$.Divisor>

      {/* <$.DiscountSection>
        <$.DiscountTitleWrapper>
          <$.DiscountTitle>Produtos com DESCONTÃO!</$.DiscountTitle>
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
      </$.DiscountSection> */}

      <$.Divisor>{/* NEWSLETTER */}</$.Divisor>

      <$.StoresSection>
        <$.StoresTitleWrapper>
          <$.StoresTitleContent>
            <$.StoresTitle>Nossos Restaurantes</$.StoresTitle>
            <$.StoresMapIcon />
          </$.StoresTitleContent>
          <$.StoresSubtitle>
            Os melhores restaurantes parceiros weeat!
          </$.StoresSubtitle>
        </$.StoresTitleWrapper>
        <$.StoresCardWrapper>
          {Allstores.map((store) => (
            <$.StoresCard
              key={store.id}
              onClick={() => {
                if (store.id !== undefined) gotoStorePage(store.id!);
              }}
            >
              <$.StoresCardLogoWrapper>
                <$.StoresCardLogo
                  src={store.logo || "#"}
                  alt={`${store.storeName} Logo`}
                />
              </$.StoresCardLogoWrapper>
              <$.StoresCardNameWrapper>
                <$.StoresCardName>{store.storeName}</$.StoresCardName>
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
