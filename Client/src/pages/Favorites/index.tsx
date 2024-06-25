import * as $ from "./styles";
import NavBar from "../../components/nav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Url } from "../../helper/URL";
import { useUser } from "../../context/userContext";
import { Store } from "../../@types/Entity";

const Favorites = () => {
  const { user } = useUser();
  const [stores, setStores] = useState<any>([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(Url + `favorites/user/${user.id}`);
        const data = await res.data;
        setStores(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error: ", error);
        }
      }
    };
    getUser();
  }, []);
  

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
          {stores.favorite.map((store: any) => (
            <$.FavoriteItemCard key={store.id}>
              <$.FavoriteImage
                src="https://www.pexels.com/photo/still-life-photography-of-fruits-2152684/"
                alt="Imagem do estabelecimento"
              />
              <$.FavoriteInfo>
                <$.FavoriteTitle>{store}</$.FavoriteTitle>
                <$.FavoriteDescription>
                  Descrição do estabelecimento
                </$.FavoriteDescription>
                <$.FavoriteRating>★★★★★ (4,7)</$.FavoriteRating>
                <$.FavoriteButton>Contato</$.FavoriteButton>
                <$.FavoriteButton>Ver mais</$.FavoriteButton>
                <$.FavoriteDisclaimer>
                  (Todas as fotos são meramente ilustrativas)
                </$.FavoriteDisclaimer>
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
