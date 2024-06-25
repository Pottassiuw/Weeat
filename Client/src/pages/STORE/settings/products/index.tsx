import React from 'react';
import NavBar from "../../../../components/nav";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import * as $ from "./styles";
import type { Store } from "../../../../@types/Entity";
import { Url } from "../../../../helper/URL";

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
    <$.Screen>
        <NavBar sticky="true" />
        <$.RestaurantName>
        <h1>{restaurant.storeName}</h1>
        </$.RestaurantName>
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
    </$.Screen>
  )
}
