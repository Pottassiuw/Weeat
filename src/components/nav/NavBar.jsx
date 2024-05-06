import * as S from "../../styles/Navbar-styles";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  }

  return (
    <S.nav>
      <S.logoContainer>
        <S.link>
          <h2>W</h2>
        </S.link>
      </S.logoContainer>
      <S.links>
        <li>Home</li>
        <li>Produtos</li>
        <li>Estabelecimentos</li>
        <li>Sobre</li>
      </S.links>
      <S.buttonWrapper>
        <S.userButton>
          <S.userIcon />
        </S.userButton>
        <S.hamburguerWrapper isOpen={isOpen} onClick={toggleMenu}>
          <S.span></S.span>
          <S.span></S.span>
          <S.span></S.span>
        </S.hamburguerWrapper>
      </S.buttonWrapper>
    </S.nav>
  );
};

export default NavBar;
