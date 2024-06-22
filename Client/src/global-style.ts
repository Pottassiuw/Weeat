import { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'poppins', sans-serif;
    background-color: #F5F5F5;
    color: #333;
    font-weight: normal;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    ${css`
      -webkit-font-smoothing: antialized;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    `}
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
  }

  button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }

  input, textarea {
    font-family: 'Poppins', sans-serif;
    background-color: transparent;
  }
`;
