import React from 'react';
import NavBar from "../../components/nav";
import * as $ from "./styles";

const Favorites = () => {
  const [favorites, setFavorites] = React.useState([
    { id: 1, isChecked: false },
    { id: 2, isChecked: false },
    { id: 3, isChecked: false },
  ]);

  const handleCheckboxChange = (favorite: { id: number, isChecked: boolean }, e: React.ChangeEvent<HTMLInputElement>) => {
    setFavorites(
      favorites.map((fav) => (fav.id === favorite.id ? { ...fav, isChecked: e.target.checked } : fav))
    );
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
          <$.FavoriteItemCard>
            <$.Checkbox
      checked={favorite.isChecked}
      onChange={(e) => handleCheckboxChange(favorite, e)} />
            <$.FavoriteImage
              src="https://www.pexels.com/photo/still-life-photography-of-fruits-2152684/"
              alt="Imagem do estabelecimento"
            />
            <$.FavoriteInfo>
              <$.FavoriteTitle>Nome do estabelecimento</$.FavoriteTitle>
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
          <$.FavoriteItemCard>
            <$.Checkbox
          checked={favorite.isChecked}
          onChange={(e) => handleCheckboxChange(favorite, e)} />
            <$.FavoriteImage
              src="https://www.pexels.com/photo/still-life-photography-of-fruits-2152684/"
              alt="Imagem do estabelecimento"
            />
            <$.FavoriteInfo>
              <$.FavoriteTitle>Nome do estabelecimento</$.FavoriteTitle>
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
          <$.FavoriteItemCard>
            <$.Checkbox
      checked={favorite.isChecked}
      onChange={(e) => handleCheckboxChange(favorite, e)} />
            <$.FavoriteImage
              src="https://www.pexels.com/photo/still-life-photography-of-fruits-2152684/"
              alt="Imagem do estabelecimento"
            />
            <$.FavoriteInfo>
              <$.FavoriteTitle>Nome do estabelecimento</$.FavoriteTitle>
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
        </$.FavoritesList>
      </$.Container>
    </>
  );
};

export default Favorites;
