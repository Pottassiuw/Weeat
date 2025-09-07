import styled from "styled-components";
import NavBar from "../../../components/nav";
import { flexCenter } from "../../../styles/mixins";
import { Store, FolderSync, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Section = styled.section`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80vh;
  margin: 0 auto;
`;
const LinesContainer = styled.div`
  display: flex;
  height: 10px;
  width: 100%;
  align-items: center;
`;

const Line = styled.div`
  width: 33.33333333333%;
  height: 100%;
  ${({ color }) => `
    background-color: ${color};
  `}
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  gap: 10%;
  margin-top: 10%;
`;
const Button = styled.button`
  ${flexCenter}
  flex-flow: column nowrap;
  color: #fff;
  padding: 10px 20px;
  height: 300px;
  width: 250px;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border-radius: ${(p) => p.theme.border.button};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.subtitle};
  cursor: pointer;
  transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
  
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
const StoreIcon = styled(Store)`
  width: 90%;
  height: 90%;
`;
const RefreshIcon = styled(FolderSync)`
  width: 90%;
  height: 90%;
`;
const ProductsIcon = styled(ShoppingBag)`
  width: 90%;
  height: 90%;
`;
export default function storeSettings() {
  const navigate = useNavigate();
  const gotoStoreData = () => navigate("/stores/dashboard/data");
  const gotoStoreUpdate = () => navigate("/stores/dashboard/update");
  const gotoStoreProducts = () => navigate("/stores/dashboard/products");
  return (
    <Section>
      <NavBar sticky="true" />
      <Container>
        <ButtonWrapper>
          <Button onClick={gotoStoreData}>
            <StoreIcon />
            Dados da Loja!
          </Button>
          <Button onClick={gotoStoreUpdate}>
            <RefreshIcon />
            Atualizar seus Dados!
          </Button>
          <Button onClick={gotoStoreProducts}>
            <ProductsIcon />
            Seus Produtos!
          </Button>
        </ButtonWrapper>
      </Container>
      <LinesContainer>
        <Line color="#FF0000"></Line>
        <Line color="#FFA07A"></Line>
        <Line color="#FFFF00"></Line>
      </LinesContainer>
    </Section>
  );
}
