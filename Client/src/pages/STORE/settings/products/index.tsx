import NavBar from "../../../../components/nav";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import * as $ from "./styles";
import { Url } from "../../../../helper/URL";
import { useStore } from "../../../../context/storeContext";

export default function RestaurantPage() {
  const { store } = useStore();
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = useCallback(async () => {
    const id = store.id;
    try {
      const response = await axios.get(`${Url}products/store/${id}`);
      const { data } = await response;
      setProducts(data.product);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }, [products]);

  const deleteProduct = useCallback(
    async (productId: number) => {
      try {
        await axios.delete(
          `${Url}products/store/${store.id}/product/${productId}`
        );
        setProducts((prevProducts) =>
          prevProducts.filter((p) => p.id !== productId)
        );
      } catch (error) {
        console.error("Error deleting product", error);
      }
    },
    [products]
  );

  return (
    <$.Screen>
      <NavBar sticky="true" />
      <$.PromotionsContainer>
        <$.PromotionTitle>Seus Produtos</$.PromotionTitle>
        {products.map((product) => (
          <$.PromotionItem key={product.id}>
            <$.PromotionWrapper>
              <$.PromotionImage src={product.photo} alt="promotion image" />
              <$.PromotionInfo>
                <$.PromotionName>{product.name}</$.PromotionName>
                <$.PromotionDescription>
                  {product.description}
                </$.PromotionDescription>
                <$.PromotionPrice>R$: {product.price}</$.PromotionPrice>
              </$.PromotionInfo>
            </$.PromotionWrapper>
            <$.ButtonWrapper>
              <$.RemoveButton
                onClick={() => {
                  if (store.id !== undefined) {
                    deleteProduct(product.id);
                  }
                }}
              >
                <$.TrashIcon />
                Remover
              </$.RemoveButton>
            </$.ButtonWrapper>
          </$.PromotionItem>
        ))}
      </$.PromotionsContainer>
    </$.Screen>
  );
}
