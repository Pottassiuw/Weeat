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
export const LogouButton = styled.button`
  margin-top: 20px;
  border: 2px solid #fe2c2c;
  background-color: transparent;
  border-radius: ${(p) => p.theme.border.button};
  color: #fe2c2c;
  font-weight: 500;
  font-size: 12pt;
  padding: 0.6rem;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
  width: 20%;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: #fe2c2c;
  }
`;
//-----------------User Settings------------------
