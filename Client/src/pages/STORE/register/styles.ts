import styled from "styled-components";
import { Eye, EyeOff } from "lucide-react";
import { flexCenter } from "../../../styles/mixins";

export const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
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
  margin: 4% 0;
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
