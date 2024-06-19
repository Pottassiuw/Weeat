import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/userContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
