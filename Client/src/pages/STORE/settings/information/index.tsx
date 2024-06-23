import styled from "styled-components";
import NavBar from "../../../../components/nav";

const StoreDataPage = () => {
  const storeData = {
    name: "My Store",
    email: "my@store.com",
    address: "123 Main St, Anytown, USA",
    logo: "https://example.com/logo.png",
    banner: "https://example.com/banner.jpg",
  };

  return (
    <Container>
      <NavBar sticky="true" />
      <MainContent>
        <HeaderContainer>
          <Header>
            <Logo src={storeData.logo} alt="Store Logo" />
            <StoreName>{storeData.name}</StoreName>
          </Header>
        </HeaderContainer>
        <Banner src={storeData.banner} alt="Store Banner" />
        <InfoContainer>
          <InfoLabel>Email:</InfoLabel>
          <InfoValue>{storeData.email}</InfoValue>
          <InfoLabel>Address:</InfoLabel>
          <InfoValue>{storeData.address}</InfoValue>
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
  display: flex;
  border-radius: ${({ theme }) => theme.border.button};
  min-width: 80%;
  min-height: 80dvh;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  display: flex;
  background-color: #f7f7f7;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const StoreName = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Banner = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const InfoLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const InfoValue = styled.span`
  font-size: 16px;
  color: #666;
`;

export default StoreDataPage;
