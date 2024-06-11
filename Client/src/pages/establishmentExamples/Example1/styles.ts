import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Stars = styled.div`
  font-size: 16px;
  color: #ffc107;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Menu = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
`;

export const PopularItemsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const PopularItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PopularItemImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
`;
