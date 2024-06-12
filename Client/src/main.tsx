import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/authProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Render twice for debugging purposes
  <React.StrictMode>
    <AuthProvider initialSignedIn={false}>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
