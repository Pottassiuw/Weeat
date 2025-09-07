import { styled } from "styled-components";
import { flexCenter } from "../../../styles/mixins";

//---------------User Data Setter---------------
export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
<<<<<<< HEAD
=======
  overflow: hidden;
>>>>>>> develop
`;
export const DataSection = styled.section`
  display: flex;
  width: 100vw;
<<<<<<< HEAD
  height: 100vh;
=======
  height: 90vh;
>>>>>>> develop
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
<<<<<<< HEAD
export const DataButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 200ms;
=======


export const DataButton = styled.button`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 200ms;
  font-size: 12pt;
  font-weight: 600;
  padding: 0.6rem;
  border-radius: ${(p) => p.theme.border.button};
  border: none;
  width: 250px;
  transition: background-color 0.1s ease-in-out;
>>>>>>> develop

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  height: 4px;
`;
<<<<<<< HEAD

=======
export const LogouButton = styled.button`
  margin-top: 30px;
  border: 2px solid ${({ theme }) => theme.colors.primaryDark};
  background-color: transparent;
  border-radius: ${(p) => p.theme.border.button};
  color: #fe2c2c;
  font-weight: 600;
  font-size: 12pt;
  padding: 0.6rem;
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
  width: 20%;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
>>>>>>> develop
//-----------------User Settings------------------
