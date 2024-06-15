
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthenticatedApp from './component/AuthApp';
import Error from './pages/Error';
import Reel from './pages/Reel';
import AboutUs from './pages/AboutUs';
import Script from './pages/Script';
import PitchDeck from './pages/PitchDeck';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthenticatedApp />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Reel />
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/script',
        element: <Script />
      },
      {
        path: '/pitchdeck',
        element: <PitchDeck />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
