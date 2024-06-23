import styled from "styled-components";
import { Eye, EyeOff, Cross, ArrowLeft, ArrowRight } from "lucide-react";
import { flexCenter } from "../../../styles/mixins";

export const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  width: 100%;
  height: max-content;
`;
export const Container = styled.div`
  display: flex;

  width: inherit;
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
  height: 100%;
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
export const DescriptionInput = styled.textarea`
  border: 2px solid #d9d9d9;
  width: 100%;
  height: 100px;
  border-radius: ${(p) => p.theme.border.button};
  padding: 10px;
  margin-bottom: 15px;
  resize: none;
  box-sizing: border-box;
  &:focus {
    outline: 1px solid #d9d9d9;
  }
  &::placeholder {
    color: #d9d9d9;
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
  margin-bottom: 1rem;
  span {
    font-size: 11pt;
    color: #8c8c8c;
    padding-left: 5px;
  }
  p {
    font-size: 12pt;
    color: ${({ theme }) => theme.colors.secondary};
    padding: 0.2rem 0;
  }
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
  margin-top: 7rem;
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
  width: 100%;
`;

export const Button = styled.button`
  ${flexCenter}
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
export const CrossIcon = styled(Cross)`
  width: 30%;
  opacity: contain;
  height: 30%;
  color: inherit;
`;
export const LabelFile = styled.label`
  ${flexCenter}
  width: 200px;
  height: 200px;
  color: ${({ theme }) => theme.colors.primary};
  border: 3px dashed currentColor;
  border-radius: ${(p) => p.theme.border.button};
  cursor: pointer;
  border-style: dotted currentColor;
  transition: color 200ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    background-color: #f2f2f2;
  }
  &:active {
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const InputFile = styled.input`
  display: none;
`;

export const FileInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${InputWrapper} {
    p {
      font-size: ${({ theme }) => theme.font.text};
      padding-bottom: 1rem;
    }
    width: auto;
    &:nth-child(2) {
      ${LabelFile} {
        width: 600px;
      }
    }
  }
`;
export const ContactInputWrapper = styled.fieldset`
  border: none;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
`;

export const ContactSelect = styled.input`
  cursor: pointer;
  width: 10%;
  height: 50px;
`;
export const ContactLabel = styled.label`
  display: inline-block;

  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  &:hover {
    color: #666;
  }
`;
export const ArrowLeftIcon = styled(ArrowLeft)`
  width: 100%;
  height: 100%;
`;
export const ArrowRightIcon = styled(ArrowRight)`
  width: 100%;
  height: 100%;
`;
