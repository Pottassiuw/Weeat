import { GlobalStyle } from "./global-style";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  console.log("App rendered");
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="bottom-right"
          autoClose={6000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
