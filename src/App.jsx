//Reuse of structures
import { Outlet } from "react-router-dom";
import GlobalStyle from "./Global-styles";

//Importing the theme
import { ThemeProvider } from "styled-components";
import theme from "./Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
