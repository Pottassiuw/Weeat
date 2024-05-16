<<<<<<< HEAD
//Reuse of structures
import { Outlet } from "react-router-dom";
import GlobalStyle from "./Global-styles";

//Importing the theme
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme/main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
=======
import './App.css';
import LoginScreen from './components/pages/loginScreen';
import NavBar from './components/layout/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar />
      <LoginScreen />
      <p>pinto</p>
    </div>
>>>>>>> origin/main
  );
}

export default App;
