import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home'
import Root from './Components/Root/Root'
import Services from './Components/Pages/Services/Services';
import Tickets from './Components/Pages/Tickets/Tickets';
import Details from './Components/Pages/Tickets/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
