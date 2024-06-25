import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppContextProvider from "./context/appContextProvider";
import router from "./router"; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppContextProvider>
    <RouterProvider router={router} />
  </AppContextProvider>
);
