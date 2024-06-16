import styled from "styled-components";
import background from "../../../assets/estb_image2.png";
export const Screen = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 10%;
  top: 50%;
  width: 35dvw;
  height: 75dvh;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);

  background-color: #fff;
  border-radius: 1rem;
  padding: 3rem;
  overflow: auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 0rem 1rem;
  margin-top: 1rem;
`;
export const Title = styled.h1`
  font-weight: 600;
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
export const Input = styled.input`
  width: 100%;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  padding: 1rem;
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
`

export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  font-size: 16px;
  color: ${props => props.theme.colors.}; 
  text-decoration: none;
  margin-top: 10px;
  display: block;
  text-align: center;

  &:hover {
    color: ${props => props.theme.colors.}; 
    text-decoration: underline;
  }
`;
