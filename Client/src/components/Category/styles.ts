import styled from "styled-components";

const SelectCategory = styled.select`
  padding: 1rem 1.5rem;
  border: 1px solid #d9d9d9;
  border-radius: ${({ theme }) => theme.border.button};
  cursor: pointer;
  transition: 200ms;
  &:focus {
    outline: none;
  }
  option {
    padding: 0.5rem;
    font-size: 13pt;
    cursor: pointer;
  }
`;

export default SelectCategory;
