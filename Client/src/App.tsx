import { GlobalStyle } from "./global-style";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./Theme/main";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
