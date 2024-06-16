import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const Error404Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const ErrorText = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`;

export const LinesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

export const Line = styled.div`
  width: 683px;
  height: 10px;
  ${({ color }) => `
    background-color: ${color};
  `}
`;