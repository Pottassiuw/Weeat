import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 100dvw;
  height: 100dvh;
  position: relative;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 60dvw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
  margin: 0.7rem 0px;

  input {
    &:focus + label,
    &:valid + label {
      transform: translateY(-20px);
      transition: 300ms all ease;
    }
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #d9d9d9;
  width: 100%;
  outline: none;
`;

export const Label = styled.label`
  font-size: ${(p) => p.theme.font.text};
  position: absolute;
  bottom: 20px;
  left: 0;
  pointer-events: none;
  transition: 300ms all ease;
`;

export const WrapperCheckbox = styled.div`
  margin: 10px 0px;
`;
export const Checkbox = styled.input``;

export const Span = styled.span`
  font-size: ${(p) => p.theme.font.text};
`;
export const SubmitButton = styled.button`
  margin-top: 1rem;
  border: none;
  padding: 10px;
  background: #fe2c2c;
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

  ${Title} {
    color: white;
    position: absolute;
    top: 50%;
    right: 5%;
    z-index: 1;
    width: 650px;
    text-align: center;
    transform: translateY(-50%);
  }
`;
export const Image = styled.img`
  object-fit: cover;
  width: 45dvw;
  height: 100dvh;
`;

export const RegisterText = styled.h2`
  font-size: ${p => p.theme.font.text};
  margin-top: 2rem;
`
export const Links = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;

`

export const BottomColor = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #E8E8E8;
  overflow: hidden;
  width: 100%;
  z-index: -1;
  height: 10%;
`