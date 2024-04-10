//Reuse of structures
import { Outlet } from "react-router-dom";
import GlobalStyle from "./index.styles";

function App() {
  return (
    <section id="container_all">
      <GlobalStyle />
      <Outlet />
    </section>
  );
}

export default App;
