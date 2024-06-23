import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error404 from "./pages/error";
import Login from "./pages/user/login";
import UserRegister from "./pages/user/register";
import StoresPage from "./pages/store/page";
import StoreLogin from "./pages/store/login";
import Home from "./pages/home";
import UserProtected from "./pages/infra/userProtected";
import TokenProtected from "./pages/infra/tokenProtected";
import StoreProtected from "./pages/infra/storeProtected";
import UserDash from "./pages/user/settings";
import StoreRegister from "./pages/store/register";
import FavoriteScreen from "./pages/Favorites";
import EstablishmentPage from "./pages/store/Establishment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "users/login", element: <Login /> },
      {
        path: "stores/page",
        element: (
          <StoreProtected>
            <EstablishmentPage />
          </StoreProtected>
        ),
      },
      {
        path: "users/favorites",
        element: (
          <UserProtected>
            <FavoriteScreen />
          </UserProtected>
        ),
      },
      {
        path: "users/dashboard",
        element: (
          <UserProtected>
            <UserDash />
          </UserProtected>
        ),
      },
      { path: "users/register", element: <UserRegister /> },
      { path: "stores/login", element: <StoreLogin /> },
      {
        path: "stores",
        element: (
          <TokenProtected>
            <StoresPage />
          </TokenProtected>
        ),
      },
      { path: "stores/register", element: <StoreRegister /> },
    ],
  },
]);

export default router;
