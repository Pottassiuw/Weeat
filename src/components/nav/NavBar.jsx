import * as S from "./styles";
import { useState } from "react";

const NavBar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <S.nav>
      <S.logoContainer>
        <S.link to="/">
          <h2>W</h2>
        </S.link>
      </S.logoContainer>
      <S.links>
        <S.link to="/">
          <li>Home</li>
        </S.link>
        <S.link to="/">
          <li>Produtos</li>
        </S.link>
        <S.link to="/Estabelecimentos">
          <li>Estabelecimentos</li>
        </S.link>
        <S.link to="/Sobre">
          <li>Sobre</li>
        </S.link>
      </S.links>
      <S.buttonsWrapper>
        <S.userButton isToggled={isUserMenuOpen} onClick={handleUserMenuToggle}>
          <S.userIcon />
          {isUserMenuOpen && (
            <S.userMenu>
              <S.link to="/LoginUsuario">Login</S.link>
              <S.link>Registro</S.link>
            </S.userMenu>
          )}
        </S.userButton>

        <S.hamburguerWrapper>
          <S.span></S.span>
          <S.span></S.span>
          <S.span></S.span>
        </S.hamburguerWrapper>
      </S.buttonsWrapper>
    </S.nav>
  );
};

export default NavBar;
