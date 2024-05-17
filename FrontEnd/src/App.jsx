import { ThemeProvider } from "styled-components";
import Home from "./pages/home/Home"
import NavBar from './components/nav/NavBar';
import theme from './styles/Theme/main'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
