import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`
export const HeroSection = styled.section`
    display: flex;
    flex-flow: row nowrap;
    width: 100dvw;
    height: 100dvh;
`
export const ActionWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 50%;
    height: 100%;
    padding-left: 7%;
    align-items: start;
    justify-content: center;
`
export const HeroImageWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 50%;
    align-items: center;
    justify-content: center;
`

export const HeroTitle = styled.h1`
    font-size: ${p => p.theme.font.titleG};
    color: #EB4034;
    padding: 1rem 0rem;
`
export const HeroSubtitle = styled.h2`
    font-size: ${p => p.theme.font.text};
    padding-bottom:1rem ;
`
export const HeroButton = styled.button`
  width: 40%;
  margin-top: 2rem;
  border: none;
  padding: 1rem;
  background: #EB4034;
  color: white;
  border-radius: ${(p) => p.theme.border.button};
  font-size: ${(p) => p.theme.font.text};
  cursor: pointer;
`

export const HeroImage = styled.img`
    width: 500px;
    height: 500px;
`

// about section 

export const AboutSection = styled.section`
    display: flex;
`
export const AboutImageWrapper = styled.div``
export const AboutImage = styled.img``
export const AboutContentWrapper = styled.div``
export const AboutTitleContent = styled.h1``
export const AboutTextContent = styled.p``

// Befefits Section

export const BenefitsSection = styled.section``
export const BenefitWrapper = styled.div``
export const BenfitImage = styled.img``
export const BenefitText = styled.h1``

// Testimonials Section
export const TestimonialsSection = styled.section``
export const TestimonialTitle = styled.h1``
export const TestimonialCard = styled.div``
export const TestimonialCardText = styled.p``
export const TestimonialUsersWrapper = styled.div``
export const TestimonialUserIconWrapper = styled.div``
export const TestimonialUserIcon = styled.img``
export const TestimonialUserReviewWrapper = styled.div``
export const TestimonialUserName = styled.p``
export const TestimonialUserReview = styled.span``

// Feature Section

export const FeaturesSection = styled.section``
export const FeaturesTitle = styled.h1``
export const FeaturesWrapper = styled.div``
export const FeaturesText = styled.h1``

// Faq Section

export const FaqSection = styled.section``
export const FaqDetails = styled.details``
export const FaqSummary = styled.summary``
export const FaqSummaryContent = styled.div``
export const FaqSummaryText = styled.p``
