import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


//Router
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

//Pages
import Home from './pages/home/Home'
import About from './pages/About/About';
import Establishments from './pages/establishments/Establishments';
import ErrorPage from './pages/errorPage/ErrorPage'
import UserLogin from './pages/userLogin/UserLogin'
import EmailAuth from './pages/userRegister/UserRegister';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'Sobre',
        element: <About />
      },
      {
        path: 'Estabelecimentos',
        element: <Establishments />
      },
      {
        path: 'LoginUsuario',
        element: <UserLogin />
      },
      {
        path: 'RegistroUsuario',
        element: <EmailAuth />
    }
    ]
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

