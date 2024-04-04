import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


//Router
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

//Pages
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact';
import Establishments from './pages/establishments/Establishments';
import ErrorPage from './pages/errorPage/ErrorPage'
import UserLogin from './pages/userLogin/UserLogin'
//User register
import UserRegister from './pages/userRegister/UserRegister';
import EmailAuth from './pages/userRegister/emailAuth/emailAuth';


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
        path: 'Contato',
        element: <Contact />
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
        element: <UserRegister />,
      },
      {
        path: 'RegistroUsuario/RegistroEmail',
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

