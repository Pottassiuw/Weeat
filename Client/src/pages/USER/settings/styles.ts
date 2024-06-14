import { styled } from "styled-components";
import { flexCenter } from "../../../styles/mixins";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
export const Form = styled.form`
  ${flexCenter}
  border-radius: ${({ theme }) => theme.border.wrappers};
  background-color: #fff;
`;
export const InputWrapper = styled.div``;
export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.text};
  font-weight: 500;
`;
