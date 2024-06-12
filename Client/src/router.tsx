import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/usersAuth/login";
import UserRegister from "./pages/usersAuth/register";
import StoreRegister from "./pages/storesAuth/register";
import StoresPage from "./pages/storesPage";
import Home from "./pages/home";
import ProtectedRoute from "./pages/infra/userProtected";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "users/login", element: <Login /> },
      { path: "users/register", element: <UserRegister /> },
      { path: "stores/register", element: <StoreRegister /> },
      {
        path: "stores",
        element: (
          <ProtectedRoute>
            <StoresPage/>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
