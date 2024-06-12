import * as $ from "./styles";
import LogoImage from "../../assets/logo weeat.png";
import { useNavigate } from "react-router-dom";
interface NavBarProps {
  sticky?: boolean;
}
export default function NavBar({ sticky }: NavBarProps) {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/')
  }
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
        <$.LinkItem>
          <$.Links to="#">Faq</$.Links>
        </$.LinkItem>
      </$.LinksWrapper>
      <$.ButtonsWrapper>
        <$.Links to="stores/login">
          <$.ButtonStore>Login Loja</$.ButtonStore>
        </$.Links>
        <$.Links to="/users/login">
          <$.ButtonUser>Login Usuário</$.ButtonUser>
        </$.Links>
      </$.ButtonsWrapper>
    </$.Nav>
  );
}
