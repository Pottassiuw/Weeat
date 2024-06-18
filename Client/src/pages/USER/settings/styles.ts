import { styled } from "styled-components";
import { flexCenter } from "../../../styles/mixins";

//---------------User Data Setter---------------
export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;
export const DataSection = styled.section`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
export const DataForm = styled.form`
  border-radius: ${({ theme }) => theme.border.wrappers};
  background-color: #fff;
  width: 80%;
  height: 80%;
  margin: auto auto;
  ${flexCenter}
  flex-flow: column nowrap;
  overflow: hidden;
`;
export const DataTitle = styled.h1`
  font-size: ${({ theme }) => theme.font.title};
`;

export const DataInputWrapper = styled.div`
  width: 20%;
  margin: 20px 0;
`;
export const DataLabel = styled.label`
  font-size: ${({ theme }) => theme.font.text};
  font-weight: 500;
`;

export const DataButtonWrapper = styled.div``;
export const DataButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  height: 4px;
`;

//-----------------User Settings------------------
