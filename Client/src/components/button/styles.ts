import styled from "styled-components";

export const Button = styled.button`
  padding: ${({ theme }) => theme.paddings.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.border.button};
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.text};
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
