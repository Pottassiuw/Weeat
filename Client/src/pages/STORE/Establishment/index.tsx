import * as $ from "./styles";
import NavBar from "../../../components/nav";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import type { Product, Store } from "../../../@types/Entity";
import { Url } from "../../../helper/URL";
import { useUser } from "../../../context/userContext";
import { useStore } from "../../../context/storeContext";
import { toast } from "react-toastify";
export default function RestaurantPage() {
  const { id } = useParams();
  const { user } = useUser();
  const { store } = useStore();
  const [restaurant, setRestaurant] = useState<Store>({});
  const [products, setProducts] = useState<Product[]>([]);
  const [showContact, setShowContact] = useState(false);
  console.log(store);
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

  const addFavorite = async () => {
    const storeId = id;
    try {
      if (storeId) {
        const newStoreId = parseInt(storeId);
        if (!id && !user) return;
        await axios.post(Url + "favorites/add", {
          userId: user.id,
          storeId: newStoreId,
        });
        toast.success("Restaurante adicionado aos favoritos!");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error", error);
      }
    }
  };

  return (
    <$.RestaurantContainer>
      <NavBar sticky="true" />
      <$.WrapperImage>
        <$.Banner src={restaurant.banner} alt="banner restaurante" />
      </$.WrapperImage>

      <$.InfoContainer>
        <$.ContentWrapper>
          <$.RestaurantName>
            <h1>{restaurant.storeName}</h1>
            <$.Rating>
              <$.Star> ☆☆☆☆☆ </$.Star>
              <$.RatingNumber>(4,7)</$.RatingNumber>
            </$.Rating>
            <$.MoreButtons>
              <div>
                <$.ContactsButton
                  onClick={() => {
                    setShowContact(!showContact);
                  }}
                >
                  {restaurant.contact}
                </$.ContactsButton>
                {showContact && (
                  <$.Contact>{restaurant.commercialNumber}</$.Contact>
                )}
              </div>
              {Object.keys(store).length === 0 ? (
                <$.FavoritesButton onClick={addFavorite}>
                  Favoritar
                </$.FavoritesButton>
              ) : null}
            </$.MoreButtons>
          </$.RestaurantName>
        </$.ContentWrapper>
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
              </$.PromotionItem>
            ))}
          </$.PromotionList>
        </$.PromotionsContainer>
      </$.InfoContainer>
    </$.RestaurantContainer>
  );
}
