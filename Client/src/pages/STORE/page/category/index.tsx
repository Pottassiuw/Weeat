import styled from "styled-components";
import NavBar from "../../../../components/nav";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import type { OnlyStore } from "../../../../@types/Entity";
import { Url } from "../../../../helper/URL";
import { flexCenter } from "../../../../styles/mixins";
const CategoryPage = () => {
  const { category } = useParams();
  const [stores, setStores] = useState<OnlyStore[]>([]);
  useEffect(() => {
    const getCategory = async () => {
      try {
        if (category) {
          const response = await axios.get(Url + `stores/category/${category}`);
          const data = await response.data;
          console.log(data);
          if (data.store.length > 0) {
            setStores(data.store);
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching stores:", error.message);
        }
      }
    };
    getCategory();
  }, []);
  return (
    <Container>
      <NavBar sticky="true" />
      <CategoryTitle>Restaurantes</CategoryTitle>
      <CategoryList>
        {stores.map((store) => (
          <StoresCard key={store.id}>
            <StoresCardLogoWrapper>
              <StoresCardLogo src={store.logo} alt={store.name} />
            </StoresCardLogoWrapper>

            <StoresCardNameWrapper>
              <StoresCardName>{store.name}</StoresCardName>

              <StoresCardCategory>{store.category}</StoresCardCategory>
            </StoresCardNameWrapper>
          </StoresCard>
        ))}
      </CategoryList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

const CategoryTitle = styled.h1`
  font-size: 19pt;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const StoresCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border: 4px solid #d9d9d9;
  width: 400px;
  height: 200px;
  border-radius: 12px;
  margin: 2rem auto 0 0;
  overflow: hidden;
  position: relative;
  transition: 200ms ease;

  &:hover {
    cursor: pointer;
    backdrop-filter: blur(10px);
  }
  &::after {
    content: "Ver Estabelecimento";
    border-radius: ${({ theme }) => theme.border.button};
    ${flexCenter}
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 0;
    backdrop-filter: blur(5px);
    font-weight: bold;
    transform: translateX(-50%);
    color: transparent;
    text-align: center;
    transition: 200ms ease-in-out;
    background-color: #fff;
    opacity: 0.9;
  }
  &:hover::after {
    height: 45%;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14pt;
    font-weight: 600;
  }
`;
const CategoryList = styled.div`
  display: flex;
`;
const StoresCardLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
const StoresCardNameWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 50%;
  justify-content: center;
`;
const StoresCardLogo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
`;
const StoresCardName = styled.p`
  font-size: ${(p) => p.theme.font.text};
  font-weight: 600;
`;
const StoresCardCategory = styled.p`
  color: ${(p) => p.theme.colors.secondary};
  font-weight: 500;
  font-size: ${(p) => p.theme.font.text};
`;

const CategoryImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 20px;
`;

const CategoryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex-grow: 1;
`;

const CategoryName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CategoryDescription = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

const CategoryType = styled.p`
  font-size: 14px;
  color: #666;
`;

const CategoryButton = styled.button`
  border: 2px solid #fe2c2c;
  background-color: transparent;
  border-radius: 5px;
  color: #fe2c2c;
  font-weight: 500;
  padding: 0.6rem;
  width: 20%;
  transition: background-color 0.25s ease-in-out, color 0.15s ease-in-out;
  &:hover {
    color: #fff;
    background-color: #fe2c2c;
  }
`;

export default CategoryPage;
