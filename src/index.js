import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//Router
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

//Pages
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact';
import Establishments from './pages/establishments/Establishments';
import ErrorPage from './pages/errorPage/ErrorPage'
import UserLogin from './pages/userLogin/UserLogin'
import UserRegister from './pages/userRegister/UserRegister';

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
        element: <UserRegister />
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

reportWebVitals();
