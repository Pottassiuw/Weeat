import * as Styled from "../../styles/Navbar-styles";

const NavBar = () => {
  return (
    <Styled.nav>
      <Styled.logoContainer>
        <Styled.link>
          <h2>W</h2>
        </Styled.link>
      </Styled.logoContainer>
      <Styled.links>
        <li>Home</li>
        <li>Produtos</li>
        <li>Estabelecimentos</li>
        <li>Sobre</li>
      </Styled.links>
      <Styled.buttonWrapper>
        <Styled.userButton>
          <Styled.userIcon />
        </Styled.userButton>
        <Styled.hamburguerWrapper>
          <Styled.span></Styled.span>
          <Styled.span></Styled.span>
          <Styled.span></Styled.span>
        </Styled.hamburguerWrapper>
      </Styled.buttonWrapper>
    </Styled.nav>
  );
};

export default NavBar;
