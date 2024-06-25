import styled from "styled-components";
import { flexCenter } from "../../../styles/mixins";
import { Cross } from "lucide-react";

export const Container = styled.div`
  ${flexCenter};
  flex-flow: column nowrap;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.title};
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 55dvw;
  height: 100%;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
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

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.text};
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 2px solid #ccc;
  border-radius: ${({ theme }) => theme.border.button};
  margin-bottom: 1rem;
  font-size: 1rem;

  &:focus {
    outline: 1px solid #aaa;
  }
`;

export const DescriptionInput = styled.textarea`
  border: 2px solid #ccc;
  width: 100%;
  border-radius: ${(p) => p.theme.border.button};
  padding: 1rem;
  margin-bottom: 15px;
  resize: none;
  box-sizing: border-box;
  resize: vertical;
  &:focus {
    outline: 1px solid #aaa;
  }
`;

export const PriceInput = styled.input`
  padding: 0.5rem;
  border: 2px solid #ccc;
  border-radius: ${({ theme }) => theme.border.button};
  margin-bottom: 1rem;
  font-size: 1rem;
  width: 200px;

  &:focus {
    outline: 1px solid #aaa;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: ${({ theme }) => theme.font.text};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
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
  margin: 1rem 0;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    background-color: #f2f2f2;
  }
  &:active {
    border-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const CrossIcon = styled(Cross)`
  width: 30%;
  opacity: contain;
  height: 30%;
  color: inherit;
`;
export const InputFile = styled.input`
  display: none;
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
`;
export const PriceAndImageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImagePreview = styled.img`
  ${flexCenter}
  width: 500px;
  height: 400px;
  border: 2px dotted #ccc;
  border-radius: ${({ theme }) => theme.border.images};
  margin-bottom: 1rem;
`;
