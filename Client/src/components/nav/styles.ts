import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { User } from "lucide-react";
import { ShoppingBasket, PackageSearch, Star } from "lucide-react";
interface NavProps {
  sticky: string;
}
export const Nav = styled.nav<NavProps>`
  display: flex;
  position: ${(p) =>
    p.sticky === "true" ? "sticky" : p.sticky === "false" ? "absolute" : null};
  width: 100%;
  background-color: #fff;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  height: 12dvh;
  border-bottom: 1px solid #d9d9d9;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  z-index: 999;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5dvw;
  cursor: pointer;
  padding: 0.5rem 0;
`;
export const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  transition: opacity 0.1s ease-in-out, scale 0.1s ease-in-out;

&:hover {
  opacity: 0.9;
  scale: 0.98;
}
`;
export const LogoFont = styled.div`
  font-size: ${(p) => p.theme.font.title};
  font-weight: 600;
  transition: opacity 0.1s ease-in-out, scale 0.1s ease-in-out;

  &:hover {
    opacity: 0.9;
    scale: 0.98;
  }
`;

export const LinksWrapper = styled.ul`
  display: flex;
  gap: 60px;
  text-decoration: none;
  align-items: center;
`;
export const LinkItem = styled.li`
  position: relative;
  color: black;
  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    left: 50%;
    transform: translate(-50%, 100%);
    bottom: 0;
    background-color: #eb4032;
    transition: 300ms all ease-in-out;
  }
  &:hover {
    color: #eb4032;

    &::before {
      width: 100%;
    }
  }
`;
export const Links = styled(Link)`
  text-decoration: none;
  font-size: 18pt;
  transition: 100 all ease;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 15px;
  button {
    display: flex;
    padding: 0.6rem;
    align-items: center;
    justify-content: center;
  }
  align-items: center;
  margin-right: 2rem;
`;

export const ButtonStore = styled.button`
  border: 2px solid #fe2c2c;
  background-color: transparent;
  border-radius: ${(p) => p.theme.border.button};
  color: #fe2c2c;
  font-weight: 500;
  color: #fe2c2c;
  font-size: 12pt;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: #fe2c2c;
  }
`;

export const ButtonUser = styled.button`
  border: 2px solid #fe2c2c;
  background-color: transparent;
  border-radius: ${(p) => p.theme.border.button};
  color: #fe2c2c;
  font-weight: 500;
  font-size: 12pt;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: #fe2c2c;
  }
`;
export const ButtonFavorite = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  background-color: transparent;
  border-radius: ${(p) => p.theme.border.button};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500;
  font-size: 12pt;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const FavoriteIcon = styled(Star)`
  margin-right: 5px;
`;
export const UserIcon = styled(User)`
  margin-right: 5px;
`;
export const StoreIcon = styled(ShoppingBasket)`
  margin-right: 5px;
`;
export const ProductIcon = styled(PackageSearch)`
  margin-right: 5px;
`;
