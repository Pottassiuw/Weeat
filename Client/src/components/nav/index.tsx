import * as $ from "./styles";
import LogoImage from "../../assets/logo weeat.png";
export default function NavBar() {
  return (
    <$.Nav>
      <$.LogoWrapper>
        <$.Logo src={LogoImage} />
        <$.LogoFont>Weeat</$.LogoFont>
      </$.LogoWrapper>
      <$.LinksWrapper>
        <$.LinkItem>
          <$.Links to="/">Home</$.Links>
        </$.LinkItem>
        <$.LinkItem>
          <$.Links to="establishment/Example1">Teste</$.Links>
        </$.LinkItem>
        <$.LinkItem>
          <$.Links to="#">Estabelecimentos</$.Links>
        </$.LinkItem>
        <$.LinkItem>
          <$.Links to="#">Faq</$.Links>
        </$.LinkItem>
      </$.LinksWrapper>
      <$.ButtonsWrapper>
        <$.Links to="/stores/login">
          <$.ButtonStore>Login Loja</$.ButtonStore>
        </$.Links>
        <$.Links to="/users/login">
          <$.ButtonUser>Login Usuário</$.ButtonUser>
        </$.Links>
      </$.ButtonsWrapper>
    </$.Nav>
  );
}
