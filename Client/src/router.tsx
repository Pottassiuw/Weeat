import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/usersAuth/login";
import UserRegister from "./pages/usersAuth/register";
import StoreRegister from "./pages/storesAuth/register";
import StoreLogin from "./pages/storesAuth/login";
import StoresPage from "./pages/storesPage";
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
      { path: "stores", element: <StoresPage /> },
    ],
  },
]);

export default router;
