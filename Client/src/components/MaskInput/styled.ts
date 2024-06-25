import { styled } from "styled-components";
import InputMask from "react-input-mask";

const InputWithMask = styled(InputMask)`
  border: 2px solid #d9d9d9;
  width: 100%;
  border-radius: ${(p) => p.theme.border.button};
  padding: 13px;
  height: 50px;
  line-height: 50px;
  &::placeholder {
    color: #d9d9d9;
  }

  &:focus {
    outline: 1px solid #d9d9d9;
  }
`;
export default InputWithMask;
