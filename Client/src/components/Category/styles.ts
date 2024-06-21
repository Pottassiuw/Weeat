import styled from "styled-components";

const SelectCategory = styled.select`
  padding: 0.6rem 1.5rem;
  border: 2px solid #d9d9d9;
  background-color: transparent;
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
