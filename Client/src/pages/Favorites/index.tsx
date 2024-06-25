import * as $ from "./styles";
import NavBar from "../../components/nav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Url } from "../../helper/URL";
import { useUser } from "../../context/userContext";
import { OnlyStore } from "../../@types/Entity";

const Favorites = () => {
  const { user } = useUser();
  const [stores, setStores] = useState<OnlyStore[]>([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(Url + `favorites/user/${user.id}`);
        const data = await res.data;
        if (data.favorite.length > 0) {
          data.favorite.forEach((favorite: any) => {
            const store = favorite.store;
            setStores((prevStores) => [...prevStores, store]);
          });
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error: ", error);
        }
      }
    };
    getUser();
  }, []);
  const removeFavorite = async (storeId: number) => {
    try {
      await axios.delete(Url + `favorites/user/${user.id}/store/${storeId}`);
      setStores((prevStores) => prevStores.filter((s) => s.id !== storeId));
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error: ", error);
      }
    }
  };

  return (
    <>
      <NavBar sticky="true" />
      <$.Container>
        <$.FavoritesTitle>
          FAVORITOS
          <$.Star />
        </$.FavoritesTitle>
        <$.FavoritesNav>
          <$.FavoriteItem active>Todos</$.FavoriteItem>
          <$.FavoriteItem>Pizzaria</$.FavoriteItem>
          <$.FavoriteItem>Lanchonete</$.FavoriteItem>
          <$.FavoriteItem>Restaurantes</$.FavoriteItem>
        </$.FavoritesNav>
        <$.FavoritesList>
          {stores.map((store) => (
            <$.FavoriteItemCard key={store.id}>
              <$.FavoriteImage
                src={store.banner}
                alt="Imagem do estabelecimento"
              />
              <$.FavoriteInfo>
                <$.FavoriteTitle>{store.storeName}</$.FavoriteTitle>
                <$.FavoriteDescription>
                  {store.description}
                </$.FavoriteDescription>
                <$.FavoriteCategory>{store.category}</$.FavoriteCategory>
                <div>
                  <$.FavoriteLink to={`/stores/page/${store.id}`}>
                    <$.FavoriteButton>Página</$.FavoriteButton>
                  </$.FavoriteLink>
                  <$.FavoriteButton
                    onClick={() => {
                      if (store.id !== undefined) {
                        removeFavorite(store.id);
                      }
                    }}
                  >
                    Remover
                  </$.FavoriteButton>
                </div>
              </$.FavoriteInfo>
              <$.FavoriteHeart />
            </$.FavoriteItemCard>
          ))}
        </$.FavoritesList>
      </$.Container>
    </>
  );
};

export default Favorites;
