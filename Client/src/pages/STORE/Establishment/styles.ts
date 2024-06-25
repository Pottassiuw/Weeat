import styled from "styled-components";

export const RestaurantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperImage = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 0.8rem;

  img {
    width: 100%;
    height: 550px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RestaurantName = styled.div`
  display: flex;
  flex-direction: inline;
  align-items: center;
  font-size: 25px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const Star = styled.div`
  display: inline-block;
  width: 1.5rem;
  font-size: 2.2rem;
  color: #ebff00;
`;

export const RatingNumber = styled.span`
  margin-left: 8.5rem;
  align-items: center;
`;

export const RestaurantDistance = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

export const RestaurantTime = styled.div`
  margin-bottom: 1rem;
  color: #7e7e7e;
`;

export const DetailsItem = styled.span`
  font-size: 17pt;
  margin-bottom: 0.5rem;
  margin-right: 100rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;

export const MoreButtons = styled.div`
  display: flex;
  justify-content: inline;
  margin-bottom: 1rem;
  margin-left: 45rem;
`;


export const Button = styled.button`
  margin: 0 2rem;
  font-size: 16pt;
  border-color: #ff0000;
  border-radius: 0.25rem;
  color: #ff0000;
  background-color: #fff;
  cursor: default;
  width: 200px;
  height: 60px;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;


export const MenuItem = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1.5rem;
  border: none;
  font-size: 15pt;
  border-radius: 0.4rem;
  background-color: #fff;
  cursor: pointer;
  font-weight: bold;
  transition: border 0.15s ease-in-out, border-color 0.15s ease-in-out, color 0.15s ease-in-out, scale 0.15s ease-in-out;

  &:hover {
    border: solid 1px;
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    scale: 1.02;
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const PromotionsContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  width: 100%;
  background-color: #fff;
`;

export const PromotionTitle = styled.h2`
  display: flex;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  justify-content: center;
`;

export const PromotionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const PromotionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 2rem;
  border-bottom: 4px solid #ddd;
`;

export const PromotionImage = styled.img`
  width: 15.2rem;
  height: 15rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
`;

export const PromotionInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PromotionName = styled.span`
  font-size: 2.7rem;
  font-weight: bold;
`;

export const PromotionDescription = styled.span`
  font-size: 1.2rem;
  color: #666;
`;

export const PromotionPrice = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

export const Button2 = styled.button`
  position: sticky;
  left: 100%;
  border-color: ${({ theme }) => theme.colors.primary};
  font-size: 16pt;
  font-weight: 600;
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  height: 4rem;
  width: 10rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.primary};
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContactsButton = styled.button`
  margin: 0 2rem;
  padding: 0.5rem 1rem;
  height: 3.3rem;
  font-size: 16pt;
  font-weight: 600;
  border-color: #ff0000;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.primary};
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3 ease-in-out;
  width: 150px;
  height: 60px;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FavoritesButton = styled.button`
  margin: 0 2rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 16pt;
  height: 3.3rem;
  border-radius: 0.25rem;
  border-color: #ff0000;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  width: 150px;
  height: 60px;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
