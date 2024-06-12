import styled from "styled-components";
import { Link } from "react-router-dom";

interface HasError {
  hasError?: boolean;
  enableButton?: boolean;
}
export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 50dvw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const WrapperTitle = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: ${(p) => p.theme.font.title};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
  position: relative;
  width: 550px;
  margin: 0.3rem 0px;
`;

export const Input = styled.input<HasError>`
  border: 2px solid ${(p) => (p.hasError ? "#ff2b2b" : "#D9D9D9")};
  width: 100%;
  border-radius: ${(p) => p.theme.border.button};
  padding: 13px;

  &:focus {
    outline: 1px solid ${(p) => (p.hasError ? "#ff2b2b" : "#D9D9D9")};
  }
`;

export const Label = styled.label`
  font-size: ${(p) => p.theme.font.text};
  pointer-events: none;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  height: 4px;
`;

export const WrapperCheckbox = styled.div`
  margin: 10px 0px;
`;

export const Checkbox = styled.input``;

export const Span = styled.span`
  font-size: ${(p) => p.theme.font.text};
`;

export const SubmitButton = styled.button<HasError>`
  margin-top: 1rem;
  border: none;
<<<<<<< HEAD
  padding: 10px;
  background: ${(p) => (p.enableButton ? "#8f4f4f" : "#ff2b2b")};
=======
  padding: 1rem;
  background: #fe2c2c;
>>>>>>> master
  color: white;
  border-radius: ${(p) => p.theme.border.button};
  font-size: ${(p) => p.theme.font.text};
  cursor: pointer;
`;

export const WrapperImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  overflow: hidden;

  ${Title} {
    color: white;
    position: absolute;
    top: 50%;
    right: 5%;
    z-index: 1;
    font-size: 50pt;
    text-align: center;
    transform: translate(7%, -60%);
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 45vw;
  height: 100vh;
`;

export const RegisterText = styled.h2`
  font-size: ${(p) => p.theme.font.text};
  margin-top: 2rem;
  font-weight: 400;
  color: #1c1c1c;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
`;

export const BottomColor = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #e8e8e8;
  overflow: hidden;
  width: 100%;
  z-index: -1;
  height: 10%;
`;
