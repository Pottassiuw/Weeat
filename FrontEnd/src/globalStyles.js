import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
    font-weight: 400;

    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    scroll-snap-align: start;
}

`

export default GlobalStyle;