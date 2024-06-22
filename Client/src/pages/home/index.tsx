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
      <NavBar sticky="true" />

      {/*Hero Section*/}

      <$.HeroSection>
        <$.ActionWrapper>
          <$.HeroTitle>Os Melhores Estabelecimentos Em Sua Região</$.HeroTitle>
          <$.HeroSubtitle>
            A weeat provê aos usuarios uma grande variedade de estabelecimentos.
          </$.HeroSubtitle>
          <$.HeroButtonLink to="/stores">
            <$.HeroButton>Busque Aqui!</$.HeroButton>
          </$.HeroButtonLink>
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
            A resposta está na falta de uma plataforma eficiente e intuitiva que
            facilite essa busca.
          </$.AboutTextContentBold>
          <$.AboutTextContent>
            Nosso objetivo é resolver esse problema, proporcionando uma
            ferramenta que conecta você aos melhores estabelecimentos da sua
            região de maneira rápida e prática. Com nossa plataforma, você pode
            descobrir restaurantes, lojas, serviços e muito mais, tudo ao
            alcance de um clique.
          </$.AboutTextContent>
          <$.AboutTextContentBold>
            De acordo com todos estes problemas, viemos com nossa solução.
          </$.AboutTextContentBold>
          <$.AboutTextContent>
            Estamos empenhados em simplificar sua vida, oferecendo informações
            detalhadas, avaliações de outros usuários e uma experiência de busca
            personalizada. Acreditamos que encontrar o que você precisa perto de
            você não deve ser complicado, e estamos aqui para tornar isso
            possível.
          </$.AboutTextContent>
          <$.AboutTextContent>
            Junte-se a nós e descubra como podemos facilitar sua rotina,
            conectando você ao que há de melhor em sua região.
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
              Encontrar estabelecimentos próximos de você se torna uma tarefa
              simples!{" "}
            </$.BenefitText>
            <$.BenfitImage src={Feature2} />
          </$.BenefitContentWrapper>
          <$.BenefitContentWrapper>
            <$.BenfitImage src={Feature3} />
            <$.BenefitText>
              Você terá oportunidade de Divulgar sua empresa!
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
              <$.TestimonialCardTitle>Avaliação ★</$.TestimonialCardTitle> 
              <$.TestimonialCardText>
              "Eu descobri essa joia escondida, 'Pizzaria Bella Vita', através desse aplicativo e estou muito feliz por isso! A pizza deles é incrível e o proprietário,
               Marco, é super amigável. As direções do aplicativo me levaram direto à porta deles e eu pude pegar uma pizza fresca para levar para casa. 
               Altamente recomendado!"
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
              <$.TestimonialCardTitle>Avaliação ★</$.TestimonialCardTitle>
              <$.TestimonialCardText>
              "Eu estava procurando um lugar para comprar doces artesanais e encontrei 'Doce Delícia' através desse aplicativo. 
              Os doces deles são incríveis e a proprietária, Ana, é super atenciosa. O único motivo pelo qual não dei 5 estrelas é porque o aplicativo não mencionou que eles têm uma loja física também. 
              Ainda assim, eu definitivamente recomendaria essa loja charmosa!"
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
              <$.TestimonialCardTitle>Avaliação ★</$.TestimonialCardTitle>
              <$.TestimonialCardText>
              "Eu sou um conhecedor de café e estava animado para experimentar 'Café com Arte' após vê-lo nesse aplicativo.
               O café deles é incrível e o barista, João, sabe do que está falando.
               O único motivo pelo qual não dei 5 estrelas é porque o aplicativo não mencionou que eles têm uma área para sentar e relaxar. 
               Ainda assim, é um ótimo lugar para pegar um copo e fazer algum trabalho."
              </$.TestimonialCardText>
            </$.TestimonialCard>
            <$.TestimonialUsersWrapper>
              <$.TestimonialUserIconWrapper>
                <$.TestimonialUserIcon src="#" />
              </$.TestimonialUserIconWrapper>
              <$.TestimonialUserReviewWrapper>
                <$.TestimonialUserName>Matheus Reis</$.TestimonialUserName>
                <$.TestimonialUserReview>ÓTIMO!</$.TestimonialUserReview>
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

      <$.FaqSection id="FaqSection">
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
          <$.FaqDetails>
            <$.FaqSummary>Doubt 6</$.FaqSummary>
            <$.FaqSummaryContent>
              <$.FaqSummaryText>TEXT EXAMPLE5...</$.FaqSummaryText>
            </$.FaqSummaryContent>
          </$.FaqDetails>
          <$.FaqDetails>
            <$.FaqSummary>Doubt 7</$.FaqSummary>
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
