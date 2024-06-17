import { styled } from "styled-components";

type HasError = {
  hasError?: boolean;
};
const Input = styled.input<HasError>`
  border: 2px solid ${(p) => (p.hasError ? "#ff2b2b" : "#D9D9D9")};
  width: 100%;
  border-radius: ${(p) => p.theme.border.button};
  padding: 13px;
  height: 50px;
  line-height: 50px;

  &:focus {
    outline: 1px solid ${(p) => (p.hasError ? "#ff2b2b" : "#D9D9D9")};
  }
`;
export default Input;
