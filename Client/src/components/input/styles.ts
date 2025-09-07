import { styled } from "styled-components";

const Input = styled.input`
  border: 2px solid #D9D9D9;
  width: 100%;
  border-radius: ${(p) => p.theme.border.button};
  padding: 13px;
  height: 50px;
  line-height: 50px;
  &::placeholder {
    color: #d9d9d9;
  }

  &:focus {
    outline: 1px solid #D9D9D9;
  }
`;
export default Input;
