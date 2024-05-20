//Reuse of structures
import { Outlet } from "react-router-dom";
import GlobalStyle from "./globalStyles";

//Importing the theme
import { ThemeProvider } from "styled-components";
import theme from "./Theme/main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;