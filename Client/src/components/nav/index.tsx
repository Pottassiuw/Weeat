import * as $ from "./styles";
import LogoImage from "../../assets/logo weeat.png";
interface NavBarProps {
  sticky?: boolean;
}
export default function NavBar({ sticky }: NavBarProps) {
  return (
    <$.Nav sticky={sticky}>
      <$.LogoWrapper>
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
