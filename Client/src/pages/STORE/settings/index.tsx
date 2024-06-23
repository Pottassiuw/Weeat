import styled from "styled-components";
import NavBar from "../../../components/nav";
import { flexCenter } from "../../../styles/mixins";
import { Store } from "lucide-react";
const Section = styled.section`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  margin: 0 auto;
`;
const LinesContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const Line = styled.div`
  width: 33.33333333333%;
  height: 10px;
  ${({ color }) => `
    background-color: ${color};
  `}
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
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
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.primary};
  }
`;
const StoreIcon = styled(Store)`
  width: 90%;
  height: 90%;
`;
export default function storeSettings() {
  return (
    <Section>
      <NavBar sticky="true" />
      <Container>
        <ButtonWrapper>
          <Button>
            <StoreIcon />
            Dados da Loja!
          </Button>
          <Button>Atualizar seus Dados!</Button>
          <Button>Seus Produtos!</Button>
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
