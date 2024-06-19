import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppContextProvider from "./context/appContextProvider"; // Adjust path if necessary
import router from "./router"; // Ensure this is correctly set up

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
