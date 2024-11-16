
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/users",
      element: <Users></Users>
    },
    {
      path: "/products",
      element: <Products></Products>
    },
  ]);
  
   return (
   <>
   <RouterProvider router ={router}></RouterProvider>
   </>
  )
}

export default App
