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
      <$.AboutSection>
        <$.AboutImageWrapper></$.AboutImageWrapper>
        <$.AboutContentWrapper>
          <$.AboutTitleContent></$.AboutTitleContent>
          <$.AboutTextContent></$.AboutTextContent>
        </$.AboutContentWrapper>
      </$.AboutSection>
      <$.BenefitsSection>
        <$.BenefitWrapper>
          <$.BenfitImage></$.BenfitImage>
          <$.BenefitText></$.BenefitText>
        </$.BenefitWrapper>
        <$.BenefitWrapper>
          <$.BenfitImage></$.BenfitImage>
          <$.BenefitText></$.BenefitText>
        </$.BenefitWrapper>
      </$.BenefitsSection>
      <$.TestimonialsSection>
        <$.TestimonialTitle></$.TestimonialTitle>
        <$.TestimonialCard>
          <$.TestimonialCardText></$.TestimonialCardText>
        </$.TestimonialCard>
        <$.TestimonialCard>
          <$.TestimonialCardText></$.TestimonialCardText>
        </$.TestimonialCard>
        <$.TestimonialCard>
          <$.TestimonialCardText></$.TestimonialCardText>
        </$.TestimonialCard>
        <$.TestimonialUsersWrapper>
          <$.TestimonialUserIconWrapper>
            <$.TestimonialUserIcon></$.TestimonialUserIcon>
          </$.TestimonialUserIconWrapper>
          <$.TestimonialUserReviewWrapper>
            <$.TestimonialUserName></$.TestimonialUserName>
            <$.TestimonialUserReview></$.TestimonialUserReview>
          </$.TestimonialUserReviewWrapper>
        </$.TestimonialUsersWrapper>
      </$.TestimonialsSection>
      <$.FeaturesSection>
        <$.FeaturesTitle></$.FeaturesTitle>
        <$.FeaturesWrapper>
          <$.FeaturesText></$.FeaturesText>
        </$.FeaturesWrapper>
      </$.FeaturesSection>
      <$.FaqSection>
        <$.FaqDetails>
          <$.FaqSummary>
            <$.FaqSummaryContent>
              <$.FaqSummaryText></$.FaqSummaryText>
            </$.FaqSummaryContent>
          </$.FaqSummary>
        </$.FaqDetails>
      </$.FaqSection>
    </$.Container>
  );
}
