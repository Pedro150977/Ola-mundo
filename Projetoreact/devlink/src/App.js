import {createBrowserRouter} from "react-router-dom"

import Home from "./pages/Home"
import Log from "./pages/Log"
import Admin from "./pages/Admin"
import Error from "./pages/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/log",
    element: <Log/>
  },
  {
    path: "/admin",
    element: <Admin/> 
  },
  {
    path: "*",
    element: <Error/>
  }
])

export { router };