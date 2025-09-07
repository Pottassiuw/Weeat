import styled from "styled-components";
import { flexCenter } from "../../../../styles/mixins";
import { Trash2 } from "lucide-react";
export const Screen = styled.div``;

export const PromotionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;
  width: 80%;
  height: 20%;
  margin: 1rem auto;
  box-shadow: 1px 1px 3px 5px rgba(0, 0, 0, 0.2);
`;
export const NoProductText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.font.subtitle};
  font-weight: 500;
`;

export const PromotionImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: ${({ theme }) => theme.border.images};
  margin-right: 1rem;
`;
export const PromotionWrapper = styled.div`
  ${flexCenter}
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
export const ButtonWrapper = styled.div`
  ${flexCenter}
  gap: 40px;
`;
export const Button2 = styled.button`
  ${flexCenter}
  border-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.text};
  font-weight: 600;
  padding: 0.6rem;
  width: 200px;
  border-radius: ${({ theme }) => theme.border.button};
  color: ${({ theme }) => theme.colors.primary};
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
export const RemoveButton = styled.button`
  ${flexCenter}
  color: #383838;
  border: 2px dotted currentColor;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.border.button};
  padding: 0.6rem;
  width: 150px;
  font-size: ${({ theme }) => theme.font.text};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #383838;
  }
`;
export const TrashIcon = styled(Trash2)`
  margin-right: 0.3rem;
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
  margin-bottom: 2rem;
  justify-content: center;
  border-bottom: 0.2rem solid black;
`;
