import styled from "styled-components";
import { Eye, EyeOff } from "lucide-react";

export const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
  height: 100%;
`;
export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: inherit;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
`;

export const FormPreview = styled.div`
  display: flex;
  width: 60%;
  margin: 2% 0;
`;

export const FormPreviewDiv = styled.div`
  border-top: 3px solid ${({ theme }) => theme.colors.primaryDark};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 400px;
  margin: auto;
  height: 100px;
  transition: 200ms;
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.font.text};
    font-weight: 500;
  }
  p {
    font-size: ${({ theme }) => theme.font.text};
  }
`;

export const Form = styled.form`
  display: flex;
  width: 60%;
  height: 70dvh;
  flex-flow: column nowrap;
`;
export const FormTexts = styled.div`
  display: flex;
  flex-flow: column nowrap;
  h1 {
    font-size: ${({ theme }) => theme.font.subtitleG};
  }
  p {
    font-size: ${({ theme }) => theme.font.text};
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin: 1rem 0;
  input {
    width: 100%;
  }
`;
export const InputContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: min-content;
  gap: 3rem;
  :nth-child(2) {
    margin-bottom: 1rem;
  }
`;
export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.text};
`;
export const EyeDiv = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 1%;

  height: 100%;
  width: 50px;
  svg {
    color: #292929;
  }
`;
export const InputIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const Eye_on = styled(Eye)`
  width: 100%;
`;
export const Eye_off = styled(EyeOff)`
  width: 100%;
`;
export const LinesContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10rem;
  position: sticky;
  bottom: 0;
`;

export const Line = styled.div`
  width: 33.33333333333%;
  height: 10px;
  ${({ color }) => `
    background-color: ${color};
  `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.font.text};
  border-radius: ${({ theme }) => theme.border.button};
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
