import { Navigation, LogoContainer, StdLink, LinkWrapper, ButtonWrapper, UserButton, MenuButton, UserIcon } from "../styles/Navbar-styles";

const NavBar = () => {
  return (
    <Navigation>
      <LogoContainer>
        <StdLink>
          <h2>W</h2>
        </StdLink>
      </LogoContainer>
      <LinkWrapper>
        <li>Home</li>
        <li>Produtos</li>
        <li>Estabelecimentos</li>
        <li>Sobre</li>
      </LinkWrapper>
      <ButtonWrapper>
        <UserButton>
          <UserIcon />
        </UserButton>
        <MenuButton>

        </MenuButton>
      </ButtonWrapper>
    </Navigation>
  );
};

export default NavBar;
