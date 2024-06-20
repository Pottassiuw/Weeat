import styled from "styled-components";

export const Error404Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

export const Title = styled.h1`
  font-size: 28pt;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const ErrorText = styled.p`
  font-size: 12pt;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`;

export const LinesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

export const Line = styled.span`
  width: 33%;
  height: 10px;
  ${({ color }) => `
    background-color: ${color};
  `}
`;
