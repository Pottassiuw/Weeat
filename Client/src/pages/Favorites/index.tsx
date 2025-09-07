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
  const [activeCategory, setActiveCategory] = useState<string>("Todos"); // Estado para categoria ativa

  useEffect(() => {
    const getUserFavorites = async () => {
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
        console.error("Error fetching user favorites: ", error);
      }
    };
    getUserFavorites();
  }, [user.id]);

  const removeFavorite = async (storeId: number) => {
    try {
      await axios.delete(Url + `favorites/user/${user.id}/store/${storeId}`);
      setStores((prevStores) => prevStores.filter((s) => s.id !== storeId));
    } catch (error) {
      console.error("Error removing favorite: ", error);
    }
  };

  const filterByCategory = (category: string) => {
    setActiveCategory(category); // Atualiza a categoria ativa
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
          <$.FavoriteItem
            active={activeCategory === "Todos"}
            onClick={() => filterByCategory("Todos")}
          >
            Todos
          </$.FavoriteItem>
          <$.FavoriteItem
            active={activeCategory === "Pizzaria"}
            onClick={() => filterByCategory("Pizzaria")}
          >
            Pizzaria
          </$.FavoriteItem>
          <$.FavoriteItem
            active={activeCategory === "Lanchonete"}
            onClick={() => filterByCategory("Lanchonete")}
          >
            Lanchonete
          </$.FavoriteItem>
          <$.FavoriteItem
            active={activeCategory === "Restaurante Árabe"}
            onClick={() => filterByCategory("Restaurante Árabe")}
          >
            Restaurante Árabe
          </$.FavoriteItem>
          <$.FavoriteItem
            active={activeCategory === "Restaurante Japonês"}
            onClick={() => filterByCategory("Restaurante Japonês")}
          >
            Restaurante Japonês
          </$.FavoriteItem>
          <$.FavoriteItem
            active={activeCategory === "Sobremesas"}
            onClick={() => filterByCategory("Sobremesas")}
          >
            Sobremesas
          </$.FavoriteItem>
        </$.FavoritesNav>
        <$.FavoritesList>
          {stores.length == 0 ? (
            <$.NoFavoriteText>
              Sem estabelecimentos favoritados!
            </$.NoFavoriteText>
          ) : (
            stores.map((store) => {
              if (
                activeCategory !== "Todos" &&
                store.category !== activeCategory
              ) {
                return null;
              }
              return (
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
                        onClick={() => removeFavorite(store?.id!)}
                      >
                        Remover
                      </$.FavoriteButton>
                    </div>
                  </$.FavoriteInfo>
                  <$.FavoriteHeart />
                </$.FavoriteItemCard>
              );
            })
          )}
        </$.FavoritesList>
      </$.Container>
    </>
  );
};

export default Favorites;
