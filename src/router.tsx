import Home from "./pages/Home/Home"
import Livro from "./pages/Livro/Livro"
import Login from "./pages/Login/Login"
import Cart from "./pages/Cart/Cart"
import Categoria from "./pages/Categoria/Categoria"
import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./RootLayout"
import Promo_Page from "./pages/Promo_Page/Promo_Page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/livro/:id",
        element: <Livro />
      },
      {
        path: "/categoria/:genero",
        element: <Categoria />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/autor/:nome",
        element: <Promo_Page />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
])

export default router;