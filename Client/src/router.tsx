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
import StoreSettings from "./pages/store/settings";
import UpdateStore from "./pages/store/settings/update";
import StoreData from "./pages/store/settings/information";
import ProductsRegister from "./pages/store/products";
import ProductsPage from "./pages/store/settings/products";
import StoreCategoryPage from "./pages/store/page/category";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      // *Users Pages*
      { path: "users/login", element: <Login /> },
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

      // *Stores Pages*

      {
        path: "stores",
        element: (
          <TokenProtected>
            <StoresPage />
          </TokenProtected>
        ),
      },
      { path: "stores/login", element: <StoreLogin /> },
      {
        path: "stores/page/:id",
        element: (
          <TokenProtected>
            <EstablishmentPage />
          </TokenProtected>
        ),
      },
      { path: "stores/register", element: <StoreRegister /> },
      {
        path: "stores/dashboard",
        element: (
          <StoreProtected>
            <StoreSettings />
          </StoreProtected>
        ),
      },
      {
        path: "stores/category/:category",
        element: (
          <TokenProtected>
            <StoreCategoryPage />
          </TokenProtected>
        ),
      },
      {
        path: "stores/dashboard/update",
        element: (
          <StoreProtected>
            <UpdateStore />
          </StoreProtected>
        ),
      },
      {
        path: "stores/dashboard/data",
        element: (
          <StoreProtected>
            <StoreData />
          </StoreProtected>
        ),
      },
      {
        path: "stores/products",
        element: (
          <StoreProtected>
            <ProductsRegister />
          </StoreProtected>
        ),
      },
      {
        path: "stores/dashboard/products",
        element: (
          <StoreProtected>
            <ProductsPage />
          </StoreProtected>
        ),
      },
    ],
  },
]);

export default router;
