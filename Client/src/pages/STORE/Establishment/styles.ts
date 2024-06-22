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
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  font-size: 20px;
`;

export const RestaurantTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  color: #7e7e7e;
`;

export const DetailsItem = styled.span`
  margin-bottom: 0.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  margin: 0 2rem;
  padding: 0.5rem 1rem;
  border-width: 0.18rem;
  border-color: #ff0000;
  border-radius: 0.25rem;
  color: #ff0000;
  cursor: default;
  width: 200px;
  height: 60px;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const MenuItem = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 15pt;
  border-radius: 0.25rem;
  background-color: #f2f2f2;
  color: #000000;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #e6e6e6;
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
  background-color: #f7f7f7;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  border-bottom: 1px solid #ddd;
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
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  height: 3.3rem;
  border-radius: 0.25rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: background-color 0.3 ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const ContactsButton = styled.button`
  margin: 0 2rem;
  padding: 0.5rem 1rem;
  height: 3.3rem;
  border-radius: 0.25rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: background-color 0.3 ease-in-out;
  width: 150px;
  height: 60px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const FavoritesButton = styled.button`
  margin: 0 2rem;
  padding: 0.5rem 1rem;
  height: 3.3rem;
  border-radius: 0.25rem;
  border-color: #ff0000;
  background-color: #fff;
  color: #ff0000;
  cursor: pointer;
  transition: background-color 0.3 ease-in-out;
  width: 150px;
  height: 60px;

  &:hover {
    background-color: #dcdcdc;
  }
`;
