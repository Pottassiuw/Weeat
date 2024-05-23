import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error/index";
import UserLogin from "./pages/users/login/index";
import UserRegister from "./pages/users/register/index";
import EstablishmentLogin from "./pages/establishments/login/index";
import EstablishmentRegister from "./pages/establishments/register/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user/login",
        element: <UserLogin />,
      },
      {
        path: "/user/register",
        element: <UserRegister />,
      },
      {
        path: "/establishment/login",
        element: <EstablishmentLogin />,
      },
      {
        path: "/establishment/register",
        element: <EstablishmentRegister />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
