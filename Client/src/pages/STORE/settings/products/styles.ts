import styled from "styled-components";

export const Screen = styled.div`
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

export const RestaurantName = styled.div`
  display: flex;
  flex-direction: inline;
  align-items: center;
  font-size: 25px;
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