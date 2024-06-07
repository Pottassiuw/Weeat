import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/users/login";
import UserRegister from "./pages/users/register";
import StoreRegister from "./pages/establishments/register";
import Home from "./pages/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "users/login", element: <Login /> },
      { path: "users/register", element: <UserRegister /> },
      { path: "stores/register", element: <StoreRegister /> },
    ],
  },
]);

export default router;
