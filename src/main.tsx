import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import Products from './pages/products/Products.tsx';
import Home from './pages/home/Home.tsx';
import Users from './pages/users/Users.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/products",
    element: <Products></Products>
  },
  {
    path: "/users",
    element: <Users></Users>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)
