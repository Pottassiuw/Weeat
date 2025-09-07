import { styled } from "styled-components";

<<<<<<< HEAD
type HasError = {
  hasError?: boolean;
};
const Input = styled.input<HasError>`
  border: 2px solid ${(p) => (p.hasError ? "#ff2b2b" : "#D9D9D9")};
=======
const Input = styled.input`
  border: 2px solid #D9D9D9;
>>>>>>> develop
  width: 100%;
  border-radius: ${(p) => p.theme.border.button};
  padding: 13px;
  height: 50px;
  line-height: 50px;
  &::placeholder {
<<<<<<< HEAD
    color: #D9D9D9;
  }

  &:focus {
    outline: 1px solid ${(p) => (p.hasError ? "#ff2b2b" : "#D9D9D9")};
=======
    color: #d9d9d9;
  }

  &:focus {
    outline: 1px solid #D9D9D9;
>>>>>>> develop
  }
`;
export default Input;
