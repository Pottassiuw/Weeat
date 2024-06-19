import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/USER/login";
import UserRegister from "./pages/USER/register";
// import StoreRegister from "./pages/STORE/register";
import StoresPage from "./pages/STORE/page";
import StoreLogin from "./pages/STORE/login";
import Home from "./pages/home";
import ProtectedRoute from "./pages/infra/userProtected";
import UserDash from "./pages/USER/settings";
import StoreRegister from "./pages/STORE/register";
import StoreRegisterAddress from "./pages/STORE/register/storeAddress";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "users/login", element: <Login /> },
      {
        path: "users/dashboard",
        element: (
          <ProtectedRoute>
            <UserDash />
          </ProtectedRoute>
        ),
      },
      { path: "users/register", element: <UserRegister /> },
      // { path: "stores/register", element: <StoreRegister /> },
      { path: "stores/login", element: <StoreLogin /> },
      {
        path: "stores",
        element: (
          <ProtectedRoute>
            <StoresPage />
          </ProtectedRoute>
        ),
      },
      { path: "stores/register", element: <StoreRegister /> },
      {
        path: "stores/register/address",
        element: <StoreRegisterAddress />,
      },
    ],
  },
]);

export default router;
