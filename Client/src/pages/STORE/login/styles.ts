import styled from "styled-components";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import background from "../../../assets/estb_image2.png";
import { flexCenter } from "../../../styles/mixins";
export const Screen = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const Container = styled.div`
  ${flexCenter}
  flex-direction: column;
  position: absolute;
  right: 10%;
  top: 50%;
  width: 700px;
  height: 650px;
  transform: translateY(-45%);
  background-color: #fff;
  border-radius: 1rem;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;
  overflow: hidden;

`;
export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 0rem 1rem;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: ${(p) => p.theme.font.title};
`;
export const Subtitle = styled.h2`
  font-size: ${(p) => p.theme.font.subtitle};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.7rem 0rem;
`;
export const Label = styled.label`
  padding: 2px 5px;
  font-size: ${(p) => p.theme.font.text};
`;
export const SubmitButton = styled.button`
  padding: 1rem;
  margin-top: 1.5rem;
  border: none;
  background: #fe2c2c;
  color: white;
  border-radius: ${(p) => p.theme.border.button};
  font-size: ${(p) => p.theme.font.text};
  cursor: pointer;
`;

export const Rcontainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  height: 2px;
`;

export const Links = styled(Link)`
  font-size: ${({ theme }) => theme.font.text};
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  transition: 200ms;
  padding-left: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export const PolicyText = styled.span`
  font-size: ${({ theme }) => theme.font.text};
  font-weight: 500;
  margin-top: 15px;
`;

export const PolicyText2 = styled.span`
  font-size: ${({ theme }) => theme.font.text};
  font-weight: 500;
`;

export const encapsular = styled.div`
  ${flexCenter}
  border-top: 1px solid #d9d9d9;
  width: 100%;
  height: 20%;
`;

export const EyeDiv = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 1%;

  height: 100%;
  width: 50px;
  svg {
    color: #292929
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
