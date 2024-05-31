import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f8f9fa;
    color: #333;
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
  }
`;
