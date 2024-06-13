import styled from "styled-components";
import { Button } from "../button/styles";

export const FormButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.subtitle};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
