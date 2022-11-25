import {createBrowserRouter} from "react-router-dom"

import Home from "./pages/Home"
import Log from "./pages/Log"
import Admin from "./pages/Admin"
import Error from "./pages/Error"
import Private from "./routes/private"

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
    element: <Private> <Admin/> </Private> 
  },
  {
    path: "*",
    element: <Error/>
  }
])

export { router };