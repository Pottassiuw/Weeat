import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  position: absolute;
  width: 100%;
  background-color: #fff; 
  top: 0;
  left: 0;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: space-around;
  height: 12dvh;
  border-bottom: 2px solid #d9d9d9;
  z-index: 999;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoFont = styled.div`
  font-size: ${(p) => p.theme.font.title};
  font-weight: 600;
`;

export const LinksWrapper = styled.ul`
  display: flex;
  gap: 60px;
  text-decoration: none;
  align-items: center;
`;
export const LinkItem = styled.li``;
export const Links = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: ${(p) => p.theme.font.text};

  &:hover {
    text-underline-position: below;
    text-underline-offset: 10px;
    text-decoration-color: #d9d9d9;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const ButtonStore = styled.button`
  padding: 10px;
  border: 3px solid #fe2c2c;
  background-color: transparent;
  border-radius: ${(p) => p.theme.border.button};
  color: #fe2c2c;
  font-weight: 500;

  ${Links} {
    color: #fe2c2c;
    font-size: 12pt;
  }
`;

export const ButtonUser = styled.button`
  padding: 10px;
  border: none;
  background-color: #fe2c2c;
  border-radius: ${(p) => p.theme.border.button};
  color: white;
  font-weight: 500;

  ${Links} {
    color: white;
    font-size: 12pt;
  }
`;
