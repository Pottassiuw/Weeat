import * as $ from "./styles";
import NavBar from "../../../components/nav";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { Store } from "../../../@types/Entity";
import { Url } from "../../../helper/URL";
export default function RestaurantPage() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Store>({});
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const response = await axios.get(`${Url}stores/${id}`);
        const { data } = await response;
        setRestaurant(data.store);
      } catch (error) {
        console.error("Error fetching restaurant", error);
      }
    };
    getProducts();
    getRestaurant();
  }, []);
  const getProducts = useCallback(async () => {
    try {
      const response = await axios.get(`${Url}products/store/${id}`);
      const { data } = await response;
      setProducts(data.product);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }, [products]);

  return (
    <$.RestaurantContainer>
      <NavBar sticky="true" />
      <$.WrapperImage>
        <$.Banner src={restaurant.banner} alt="banner restaurante" />
      </$.WrapperImage>
      <$.InfoContainer>
        <$.RestaurantName>
          <h1>{restaurant.storeName}</h1>
          <$.Rating>
            <$.Star> ☆☆☆☆☆ </$.Star>
            <$.RatingNumber>(4,7)</$.RatingNumber>
          </$.Rating>
          <$.MoreButtons>
            <$.ContactsButton type="button">Contato</$.ContactsButton>
            <$.FavoritesButton type="button">Favoritos</$.FavoritesButton>
          </$.MoreButtons>
        </$.RestaurantName>
        <$.RestaurantDistance>
          <$.DetailsItem>Lanches - 2,0 km</$.DetailsItem>
        </$.RestaurantDistance>
        <$.RestaurantTime>
          <$.DetailsItem>Prazo estimado: 20 a 30 minutos</$.DetailsItem>
        </$.RestaurantTime>
        <$.ButtonsContainer>
          <$.Button type="button">Próximo de você</$.Button>
          <$.Button type="button">Próximo de você</$.Button>
          <$.Button type="button">Próximo de você</$.Button>
          <$.Button type="button">Próximo de você</$.Button>
          <$.Button type="button">Próximo de você</$.Button>
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
            {products.map((product) => (
              <$.PromotionItem key={product.id}>
                <$.PromotionImage src={product.photo} alt="promotion image" />
                <$.PromotionInfo>
                  <$.PromotionName>{product.name}</$.PromotionName>
                  <$.PromotionDescription>
                    {product.description}
                  </$.PromotionDescription>
                  <$.PromotionPrice>R$: {product.price}</$.PromotionPrice>
                </$.PromotionInfo>
                <$.Button2 type="button">Saiba mais</$.Button2>
              </$.PromotionItem>
            ))}
          </$.PromotionList>
        </$.PromotionsContainer>
      </$.InfoContainer>
    </$.RestaurantContainer>
  );
}
