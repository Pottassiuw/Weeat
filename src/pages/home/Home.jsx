import NavBar from "../../components/nav/NavBar";
import * as S from "../../styles/Home-styles";

const Home = () => {
  return (
    <S.Container>
      <NavBar />
      <S.HeroSection>
        <S.Box__Section>
          <S.Text__div>
            <h1>
              Os melhores restaurantes a um <span>clique</span> de distância!
            </h1>
            <h2>
              Venha conhecer os restaurantes mais próximos de você em sua{" "}
              <span>região!</span>
            </h2>
          </S.Text__div>
          
        </S.Box__Section>
      </S.HeroSection>
    </S.Container>
  );
};

export default Home;
