import NavBar from "../../components/nav";
import * as $ from "./styles";
import heroImage from "../../assets/heroImage.svg";
import AboutImage from "../../assets/AboutImage.png";
import Feature1 from "../../assets/Feature1.png";
import Feature2 from "../../assets/Feature2.png";
import Feature3 from "../../assets/Feature3.png";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <$.Container>
      <NavBar />

      {/*Hero Section*/}

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

      {/*About Section*/}

      <$.AboutSection>
        <$.AboutImageWrapper>
          <$.AboutImage src={AboutImage} />
        </$.AboutImageWrapper>
        <$.AboutContentWrapper>
          <$.AboutTitleContent>
            Porque encontrar os estabelecimentos próximos de você sempre foi uma
            dificuldade ?
          </$.AboutTitleContent>
          <$.AboutTextContentBold>
            spa Ao longo dos anos, percebemos uma grande crescente de grandes
            estabelecimentos .
          </$.AboutTextContentBold>
          <$.AboutTextContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam
            neque, congue et ornare maximus, molestie quis metus. Nulla non
            feugiat orci. Quisque interdum viverra nunc. Nunc ipsum ante,
            scelerisque quis tortor vel, maximus lobortis orci. Nam nisl ipsum,
            dictum eu neque sit amet, lobortis faucibus quam. Quisque nec mi eu
            dui porttitor pulvinar.
          </$.AboutTextContent>
          <$.AboutTextContentBold>
            De acordo com todos estes problemas, viemos com nossa solução.
          </$.AboutTextContentBold>
          <$.AboutTextContent>
            Quisque interdum viverra nunc. Nunc ipsum ante, scelerisque quis
            tortor vel, maximus lobortis orci. Nam nisl ipsum, dictum eu neque
            sit amet, lobortis faucibus quam. Quisque nec mi eu dui porttitor
            pulvinar. Nullam efficitur finibus diam vel gravida. Sed placerat
            ante et augue ultricies pulvinar.
          </$.AboutTextContent>
        </$.AboutContentWrapper>
      </$.AboutSection>

      {/*Benefits Section*/}

      <$.BenefitsSection>
        <$.BenefitTitle>Quando você usa a Weeat!</$.BenefitTitle>
        <$.BenefitWrapper>
          <$.BenefitContentWrapper>
            <$.BenfitImage src={Feature1} />
            <$.BenefitText>
              Cadastrar o seu estabelecimento nunca se tornou mais facil!
            </$.BenefitText>
          </$.BenefitContentWrapper>
          <$.BenefitContentWrapper>
            <$.BenefitText>
              Encontre estabelecimentos próximos de você!{" "}
            </$.BenefitText>
            <$.BenfitImage src={Feature2} />
          </$.BenefitContentWrapper>
          <$.BenefitContentWrapper>
            <$.BenfitImage src={Feature3} />
            <$.BenefitText>
              Tenha a oportunidade de Divulgar sua empresa!
            </$.BenefitText>
          </$.BenefitContentWrapper>
        </$.BenefitWrapper>
      </$.BenefitsSection>

      {/*Testimonial Section*/}

      <$.TestimonialsSection>
        <$.TestimonialTitle>Depoimento de que usa Weeat!</$.TestimonialTitle>
        <$.TestimonialWrapper>
          <$.TestimonialCardWrapper>
            <$.TestimonialCard>
              <$.TestimonialCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lorem lacus, interdum sed euismod eu, blandit ut urna. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
                sem eget lectus porta dictum. Nulla tristique, ex vel congue
                ultrices, mauris ante ultricies leo, eu egestas diam velit
                efficitur lacus. 
              </$.TestimonialCardText>
            </$.TestimonialCard>
            <$.TestimonialUsersWrapper>
              <$.TestimonialUserIconWrapper>
                <$.TestimonialUserIcon src="#" />
              </$.TestimonialUserIconWrapper>
              <$.TestimonialUserReviewWrapper>
                <$.TestimonialUserName>Thiago Batista</$.TestimonialUserName>
                <$.TestimonialUserReview>GENIAL!</$.TestimonialUserReview>
              </$.TestimonialUserReviewWrapper>
            </$.TestimonialUsersWrapper>
          </$.TestimonialCardWrapper>
          <$.TestimonialCardWrapper>
            <$.TestimonialCard>
              <$.TestimonialCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lorem lacus, interdum sed euismod eu, blandit ut urna. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
                sem eget lectus porta dictum. Nulla tristique, ex vel congue
                ultrices, mauris ante ultricies leo, eu egestas diam velit
                efficitur lacus. 
              </$.TestimonialCardText>
            </$.TestimonialCard>
            <$.TestimonialUsersWrapper>
              <$.TestimonialUserIconWrapper>
                <$.TestimonialUserIcon src="#" />
              </$.TestimonialUserIconWrapper>
              <$.TestimonialUserReviewWrapper>
                <$.TestimonialUserName>Raphael Curini</$.TestimonialUserName>
                <$.TestimonialUserReview>PARFAIT!</$.TestimonialUserReview>
              </$.TestimonialUserReviewWrapper>
            </$.TestimonialUsersWrapper>
          </$.TestimonialCardWrapper>
          <$.TestimonialCardWrapper>
            <$.TestimonialCard>
              <$.TestimonialCardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lorem lacus, interdum sed euismod eu, blandit ut urna. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
                sem eget lectus porta dictum. Nulla tristique, ex vel congue
                ultrices, mauris ante ultricies leo, eu egestas diam velit
                efficitur lacus. 
              </$.TestimonialCardText>
            </$.TestimonialCard>
            <$.TestimonialUsersWrapper>
              <$.TestimonialUserIconWrapper>
                <$.TestimonialUserIcon src="#" />
              </$.TestimonialUserIconWrapper>
              <$.TestimonialUserReviewWrapper>
                <$.TestimonialUserName>Matheus Reis</$.TestimonialUserName>
                <$.TestimonialUserReview>INSANO!</$.TestimonialUserReview>
              </$.TestimonialUserReviewWrapper>
            </$.TestimonialUsersWrapper>
          </$.TestimonialCardWrapper>
        </$.TestimonialWrapper>
      </$.TestimonialsSection>

      {/*Features Section*/}

      <$.FeaturesSection>
        <$.FeaturesTitle>Nossas funcionalidades</$.FeaturesTitle>
        <$.FeaturesWrapper>
          <$.FeaturesContentWrapper>
            <$.FeaturesText>
              Cadastro de Estabelecimentos facilitado!
            </$.FeaturesText>
          </$.FeaturesContentWrapper>
          <$.FeaturesContentWrapper>
            <$.FeaturesText>Divulgação de estabelecimentos</$.FeaturesText>
          </$.FeaturesContentWrapper>
          <$.FeaturesContentWrapper>
            <$.FeaturesText>
              Encontrar estabelecimentos próximos a você
            </$.FeaturesText>
          </$.FeaturesContentWrapper>
          <$.FeaturesContentWrapper>
            <$.FeaturesText>Divulgação entre redes sociais!</$.FeaturesText>
          </$.FeaturesContentWrapper>
          <$.FeaturesContentWrapper>
            <$.FeaturesText>
              Favoritar seus estabelecimentos favoritos!
            </$.FeaturesText>
          </$.FeaturesContentWrapper>
          <$.FeaturesContentWrapper>
            <$.FeaturesText>EM PROCESSO...</$.FeaturesText>
          </$.FeaturesContentWrapper>
        </$.FeaturesWrapper>
      </$.FeaturesSection>

      {/*Faq Section*/}

      <$.FaqSection>
        <$.FaqTitle>FAQ</$.FaqTitle>
        <$.FaqWrapper>
          <$.FaqDetails>
            <$.FaqSummary>Doubt 1</$.FaqSummary>
            <$.FaqSummaryContent>
              <$.FaqSummaryText>TEXT EXAMPLE1...</$.FaqSummaryText>
            </$.FaqSummaryContent>
          </$.FaqDetails>
          <$.FaqDetails>
            <$.FaqSummary>Doubt 2</$.FaqSummary>
            <$.FaqSummaryContent>
              <$.FaqSummaryText>TEXT EXAMPLE2...</$.FaqSummaryText>
            </$.FaqSummaryContent>
          </$.FaqDetails>
          <$.FaqDetails>
            <$.FaqSummary>Doubt 3</$.FaqSummary>
            <$.FaqSummaryContent>
              <$.FaqSummaryText>TEXT EXAMPLE3...</$.FaqSummaryText>
            </$.FaqSummaryContent>
          </$.FaqDetails>
          <$.FaqDetails>
            <$.FaqSummary>Doubt 4</$.FaqSummary>
            <$.FaqSummaryContent>
              <$.FaqSummaryText>TEXT EXAMPLE4...</$.FaqSummaryText>
            </$.FaqSummaryContent>
          </$.FaqDetails>
          <$.FaqDetails>
            <$.FaqSummary>Doubt 5</$.FaqSummary>
            <$.FaqSummaryContent>
              <$.FaqSummaryText>TEXT EXAMPLE5...</$.FaqSummaryText>
            </$.FaqSummaryContent>
          </$.FaqDetails>
        </$.FaqWrapper>
      </$.FaqSection>

      {/*Footer*/}
      <Footer />
    </$.Container>
  );
}
