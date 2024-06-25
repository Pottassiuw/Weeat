import * as $ from "./styles";
import LogoImage from "../../assets/logo weeat.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

interface NavBarProps {
  sticky: string;
}

export default function NavBar({ sticky }: NavBarProps) {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  const user = localStorage.getItem("user");
  const store = localStorage.getItem("store");

  const gotoHome = () => {
    navigate("/");
  };

  const gotoDashboard = () => {
    navigate("/users/dashboard");
  };

  const gotoFavorites = () => {
    navigate("/users/favorites");
  };

  return (
    <$.Nav sticky={sticky}>
      <$.LogoWrapper onClick={gotoHome}>
        <$.Logo src={LogoImage} />
        <$.LogoFont>Weeat</$.LogoFont>
      </$.LogoWrapper>
      <$.LinksWrapper>
        <$.LinkItem>
          <$.Links to="/">Home</$.Links>
        </$.LinkItem>
        <$.LinkItem>
          <$.Links to="/stores">Estabelecimentos</$.Links>
        </$.LinkItem>
      </$.LinksWrapper>
      {isSignedIn && user ? (
        <$.ButtonsWrapper>
          <$.Links to="/users/dashboard">
            <$.ButtonUser onClick={gotoDashboard}>
              <$.UserIcon />
              Usuário
            </$.ButtonUser>
          </$.Links>
          <$.ButtonFavorite onClick={gotoFavorites}>
            <$.FavoriteIcon />
            Favoritos
          </$.ButtonFavorite>
        </$.ButtonsWrapper>
      ) : isSignedIn && store ? (
        <$.ButtonsWrapper>
          <$.Links to="/stores/dashboard">
            <$.ButtonStore>
              <$.StoreIcon />
              Minha Loja!
            </$.ButtonStore>
          </$.Links>
          <$.Links to="/stores/products">
            <$.ButtonStore>
              <$.ProductIcon />
              Cadastrar Produtos!
            </$.ButtonStore>
          </$.Links>
        </$.ButtonsWrapper>
      ) : (
        <$.ButtonsWrapper>
          <$.Links to="/stores/login">
            <$.ButtonUser>Login loja</$.ButtonUser>
          </$.Links>
          <$.Links to="/users/login">
            <$.ButtonUser>Login Usuário</$.ButtonUser>
          </$.Links>
        </$.ButtonsWrapper>
      )}
    </$.Nav>
  );
}
