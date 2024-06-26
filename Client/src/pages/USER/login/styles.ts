import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100dvw;
  height: 100dvh;
  align-items: center;
`;
export const Wrapper = styled.div`
  display: flex;
  width: 50dvw;
  height: 85dvh;
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
  margin: 0.7rem 0px;
`;

export const Label = styled.label`
  font-size: ${(p) => p.theme.font.text};
  pointer-events: none;
  padding-bottom: 10px;
`;

export const WrapperCheckbox = styled.div`
  margin: 10px 0px;
`;
export const Checkbox = styled.input``;

export const Span = styled.span`
  font-size: ${(p) => p.theme.font.text};
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
  width: 45dvw;
  height: 100dvh;
`;

export const RegisterText = styled.h2`
  font-size: ${({ theme }) => theme.font.text};
  font-weight: 500;
  margin-top: 2rem;
  color: #1c1c1c;
`;
export const Links = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
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

