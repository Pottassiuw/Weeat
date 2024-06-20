import styled from "styled-components";


const ErrorMessage = styled.div`
  color: red;
  font-weight: 500;
  font-size: ${({ theme }) => theme.font.errorMessage};
  height: 2px;
`;

export default ErrorMessage;