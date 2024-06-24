import styled from "styled-components";
import NavBar from "../../../../components/nav";
import { flexCenter } from "../../../../styles/mixins";
import { useStore } from "../../../../context/storeContext";
const StoreDataPage = () => {
  const { store, logoutStore } = useStore();

  return (
    <Container>
      <NavBar sticky="true" />
      <MainContent>
        <HeaderContainer>
          <Header>
            <Logo src={store.logo} alt="Store Logo" />
            <StoreName>{store.name}</StoreName>
          </Header>
        </HeaderContainer>
        <Banner src={store.banner} alt="Store Banner" />
        <InfoContainer>
          <InfoLabel>Email:</InfoLabel>
          <InfoValue>{store.email}</InfoValue>
          <InfoLabel>Address:</InfoLabel>
          <Button onClick={logoutStore}>Logout!</Button>
        </InfoContainer>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
`;

const MainContent = styled.div`
  ${flexCenter}
  border-radius: ${({ theme }) => theme.border.button};
  min-width: 80%;
  min-height: 80dvh;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  gap: 10rem;
`;

const HeaderContainer = styled.div`
  height: 50%;
  width: 50%;

  padding: 20px;
`;

const Header = styled.div`
  ${flexCenter};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
`;

const Logo = styled.img`
  border-radius: ${({ theme }) => theme.border.button};
  width: 400px;
  height: 90%;
  object-fit: cover;
  margin-right: 10px;
`;

const StoreName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Banner = styled.img`
  object-fit: cover;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 50%;
  flex-flow: column wrap;
`;

const InfoLabel = styled.span`
  font-size: ${({ theme }) => theme.font.text};
  font-weight: bold;
  margin-right: 10px;
`;

const InfoValue = styled.span`
  font-size: ${({ theme }) => theme.font.text};
  color: #666;
`;
const Button = styled.button`
  border: 2px solid #fe2c2c;
  background-color: transparent;
  border-radius: ${(p) => p.theme.border.button};
  color: #fe2c2c;
  font-weight: 500;
  font-size: 12pt;
  width: 100%;
  padding: 1rem;
  font-size: ${({ theme }) => theme.font.text};
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: #fe2c2c;
  }
`;
export default StoreDataPage;
