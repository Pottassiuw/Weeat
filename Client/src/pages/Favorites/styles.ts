import { Link } from "react-router-dom";
import styled from "styled-components";

interface FavoriteItemProps {
  active?: boolean;
}

interface CheckboxProps {
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const NoFavoriteText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.font.subtitle};
  font-weight: 600;
  border: 2px dotted currentColor;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.border.button};
`;

export const FavoritesTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.title};
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Star = styled.span`
  color: #ffcc00;
  margin-left: 10px;
  font-size: 20px;
`;

export const FavoritesNav = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const FavoriteItem = styled.button<FavoriteItemProps>`
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#ffcc00" : "#000")};
  border-bottom: ${(props) => (props.active ? "3px solid #ffcc00" : "none")};
`;

export const Checkbox = styled.input<CheckboxProps>`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
  &:checked {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Zm0 18C6.62 20 2 15.38 2 12C2 8.62 6.62 4 12 4C17.38 4 22 8.62 22 12C22 15.38 17.38 20 12 20Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 20px 20px;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const FavoritesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const FavoriteItemCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FavoriteImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 20px;
`;

export const FavoriteInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-grow: 1;
`;

export const FavoriteTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const FavoriteDescription = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const FavoriteCategory = styled.p`
  font-size: ${({ theme }) => theme.font.text};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const FavoriteButton = styled.button`
  border: 2px solid #fe2c2c;
  background-color: transparent;
  border-radius: ${(p) => p.theme.border.button};
  color: #fe2c2c;
  font-weight: 500;
  padding: 0.6rem;
  width: 20%;
  color: #fe2c2c;
  font-size: 12pt;
  margin: 0 1rem 0 0;
  transition: background-color 0.25s ease-in-out, color 0.15s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: #fe2c2c;
  }
`;
export const FavoriteLink = styled(Link)``;
export const FavoriteDisclaimer = styled.p`
  font-size: 12px;
  color: #666;
`;

export const FavoriteHeart = styled.span`
  display: flex;
  align-items: center;
  color: #ffcc00;
  font-size: 20px;
  margin-left: 20px;
  cursor: pointer;
`;
