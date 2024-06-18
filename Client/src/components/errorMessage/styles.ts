import styled from "styled-components";


const ErrorMessage = styled.div`
  color: red;
  font-size: ${({ theme }) => theme.font.errorMessage};
  height: 2px;
`;

export default ErrorMessage;