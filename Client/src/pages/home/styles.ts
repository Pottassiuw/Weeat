import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  position: relative;
  section {
    padding: 0px 3.5%;
  }
`;
export const HeroSection = styled.section`
  display: flex;
  flex-flow: row nowrap;
  height: 85dvh;
  width: 100%;
  overflow: hidden;
`;
export const ActionWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 50%;
  height: 100%;
  align-items: start;
  justify-content: center;
`;
export const HeroImageWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 50%;
  align-items: center;
  justify-content: flex-end;
`;

export const HeroTitle = styled.h1`
  font-size: ${(p) => p.theme.font.titleG};
  color: #eb4034;
  padding: 1rem 0rem;
`;
export const HeroSubtitle = styled.h2`
  font-size: 20pt;
  padding-bottom: 1rem;
  font-weight: 500;
`;
export const HeroButtonLink = styled(Link)`
  width: 100%;
`
export const HeroButton = styled.button`
  border: 3px solid #fe2c2c;
  width: 40%;
  margin-top: 2rem;
  padding: 1.3rem;
  background: transparent;
  color: #fe2c2c;
  border-radius: ${(p) => p.theme.border.button};
  font-size: 17pt;
  transition: 250ms all ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: #fe2c2c;
  }
`;

export const HeroImage = styled.img`
  width: 500px;
  height: 500px;
`;
// about section

export const AboutSection = styled.section`
  display: flex;
`;
export const AboutImageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  align-items: center;
`;
export const AboutImage = styled.img`
  width: 500;
  height: 500px;
`;
export const AboutContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  flex-flow: column nowrap;
`;
export const AboutTitleContent = styled.h1`
  color: #eb4034;
  font-size: ${(p) => p.theme.font.subtitleG};
  text-align: left;
`;
export const AboutTextContent = styled.p`
  font-size: ${(p) => p.theme.font.text};
  padding: 1rem 0px;
`;
export const AboutTextContentBold = styled.p`
  font-size: ${(p) => p.theme.font.text};
  font-weight: 600;
`;

// Befefits Section

export const BenefitsSection = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  padding: 0px 4%;
  margin-top: 10%;
`;
export const BenefitTitle = styled.h1`
  color: #eb4034;
  text-align: center;
  margin-bottom: 5%;
`;
export const BenefitWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
`;
export const BenefitContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  padding-left: 13%;
  &:nth-child(2) {
    text-align: end;
    padding-right: 13%;
  }

  background-color: #fff;
  margin: 40px 0px;
  border-radius: 3rem;
`;
export const BenfitImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;
export const BenefitText = styled.h1`
  font-size: 22pt;
`;

export const BenefitDecoration = styled.p`
  color: #FB3232;
`;

// Testimonials Section
export const TestimonialsSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  padding: 0px 4%;
  margin-top: 10%;
`;
export const TestimonialTitle = styled.h1`
  text-align: center;
  color: #eb4034;
`;
export const TestimonialWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 10%;
`;
export const TestimonialCardWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
export const TestimonialCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid #d9d9d9;
  border-radius: 1rem;

  height: 500px;
  width: 400px;

  margin: 0px 35px;

  text-align: center;
  font-size: 16pt;
`;
export const TestimonialCardText = styled.p`
  font-weight: 500;
  padding: 20px;
`;
export const TestimonialUsersWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 1rem 35px;
`;
export const TestimonialUserIconWrapper = styled.div``;
export const TestimonialUserIcon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export const TestimonialUserReviewWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-left: 1rem;
`;
export const TestimonialUserName = styled.p`
  font-weight: 600;
`;
export const TestimonialUserReview = styled.span``;

// Feature Section

export const FeaturesSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  padding: 0px 4%;
  margin-top: 10%;
`;
export const FeaturesTitle = styled.h1`
  color: #eb4032;
  text-align: center;
  margin-bottom: 5%;
`;
export const FeaturesWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;
export const FeaturesContentWrapper = styled.div`
  display: flex;
  border-radius: 1rem;
  background-color: #FB3232;
  margin: 25px 40px;
  padding: 1rem;
  width: 40%;
  align-items: center;
  opacity: 0.97;
  justify-content: center;
`;
export const FeaturesContent = styled.div``;
export const FeatureIcon = styled.img``;
export const FeaturesText = styled.h1`
  color: #fff;
  font-size: 18pt;
`;

// Faq Section

export const FaqSection = styled.section`
  display: flex;
  padding: 0px 4%;
  align-items: center;
  margin-top: 10%;
  flex-flow: column nowrap;
  height: 100dvh;
`;
export const FaqTitle = styled.h1`
  color: #eb4032;
  margin-bottom: 5%;
`;
export const FaqWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const FaqDetails = styled.details`
  width: 80%;
`;
export const FaqSummary = styled.summary`
  background-color: #f2f5f7;
  margin: 10px 0px;
  padding: 20px 10px;
  border-radius: 15px;
  font-size: 14pt;
  font-weight: bold;
`;

export const TestimonialCardTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: inline;
  font-size: 20pt;
  color: #ffcc00;
  font-weight: bolder;
`;
export const FaqSummaryContent = styled.div`
  `;


export const FaqSummaryText = styled.p`
  font-size: 13pt;
  font-weight: medium;
`;
