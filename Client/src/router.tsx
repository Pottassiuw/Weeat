import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/users/login";
import StoreLogin from "./pages/establishments/login";
import UserRegister from "./pages/users/register";
import StoreRegister from "./pages/establishments/register";
import Home from "./pages/home";
import Error404 from "./pages/error";
import Establishment from "./pages/establishmentExamples/Example1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "users/login", element: <Login /> },
      { path: "users/register", element: <UserRegister /> },
      { path: "stores/register", element: <StoreRegister /> },
      { path: "stores/login", element:  <StoreLogin />},
      { path: "*", element: <Error404 /> },
      { path: "establishment/Example1", element: <Establishment />}
    ],
  },
]);

export default router;
