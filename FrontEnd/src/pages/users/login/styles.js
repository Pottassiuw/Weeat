import styled from "styled-components";

export const Container = styled.div`
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
  padding: 1rem;
  position: relative;
  width: 550px;
  input {
    &:focus + label,
    &:valid + label {
      transform: translateY(-20px);
    }
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #d9d9d9;
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${(p) => p.theme.font.text};
  position: absolute;
  bottom: 20px;
  left: 1;
  pointer-events: none;
`;
export const WrapperCheckbox = styled.div``;
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
