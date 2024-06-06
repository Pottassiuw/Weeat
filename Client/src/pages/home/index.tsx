import NavBar from "../../components/nav";
import * as $ from "./styles";
import heroImage from "../../assets/heroImage.svg";
export default function Home() {
  return (
    <$.Container>
      <NavBar />
      <$.HeroSection>
        <$.ActionWrapper>
          <$.HeroTitle>Os Melhores Estabelecimentos Em Sua Região</$.HeroTitle>
          <$.HeroSubtitle>
            A weeat provê aos usuarios uma grande variedade de estabelecimentos.
          </$.HeroSubtitle>
          <$.HeroButton>Busque Aqui!</$.HeroButton>
        </$.ActionWrapper>
        <$.HeroImageWrapper>
          <$.HeroImage src={heroImage} />
        </$.HeroImageWrapper>
      </$.HeroSection>
      
    </$.Container>
  );
}
