import * as $ from "./styles";
export default function NavBar() {
  return (
    <$.Nav>
      <$.LogoWrapper>
        <$.LogoFont>Weeat</$.LogoFont>
      </$.LogoWrapper>
      <$.LinksWrapper>
        <$.LinkItem>
          <$.Links to="/">Home</$.Links>
        </$.LinkItem>
        <$.LinkItem>
          <$.Links to="#">Estabelecimentos</$.Links>
        </$.LinkItem>
        <$.LinkItem>
          <$.Links to="#">Faq</$.Links>
        </$.LinkItem>
      </$.LinksWrapper>
      <$.ButtonsWrapper>
        <$.ButtonStore>
          <$.Links to="stores/login">Login Loja</$.Links>
        </$.ButtonStore>
        <$.ButtonUser>
          <$.Links to="/users/login">Login Usuário</$.Links>
        </$.ButtonUser>
      </$.ButtonsWrapper>
    </$.Nav>
  );
}
