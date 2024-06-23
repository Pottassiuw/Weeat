import * as $ from "./styles";
import LogoImage from "../../assets/logo weeat.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useUser } from "../../context/userContext";

interface NavBarProps {
  sticky: string;
}

export default function NavBar({ sticky }: NavBarProps) {
  const navigate = useNavigate();
  const { isSignedIn, setIsSignedIn } = useAuth();
  const { logoutUser } = useUser();

  const gotoHome = () => {
    navigate("/");
  };

  const gotoDashboard = () => {
    navigate("/users/dashboard");
  };

  const handleLogout = () => {
    logoutUser();
    setIsSignedIn(false);
    navigate("/");
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
        {isSignedIn ? (
          <$.LinkItem>
            <$.Links to="/pages/favorites">Favorites</$.Links>
          </$.LinkItem>
        ) : null}
      </$.LinksWrapper>
      {isSignedIn ? (
        <$.ButtonsWrapper>
          <$.Links to="/users/dashboard">
            <$.ButtonUser onClick={gotoDashboard}>
              <$.UserIcon />
              Usuário
            </$.ButtonUser>
          </$.Links>
          <$.ButtonUser onClick={handleLogout}>Logout</$.ButtonUser>
        </$.ButtonsWrapper>
      ) : (
        <$.ButtonsWrapper>
          <$.Links to="/stores/login">
            <$.ButtonStore>Login Loja</$.ButtonStore>
          </$.Links>
          <$.Links to="/users/login">
            <$.ButtonUser>Login Usuário</$.ButtonUser>
          </$.Links>
        </$.ButtonsWrapper>
      )}
    </$.Nav>
  );
}
