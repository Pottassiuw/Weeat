import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/authProvider.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  //renderiza 2 vezes por motivos de Debbugging
  <React.StrictMode>
    <AuthProvider isSignedIn={false}>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
