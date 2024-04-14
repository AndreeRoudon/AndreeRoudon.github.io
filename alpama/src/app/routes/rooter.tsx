import {createBrowserRouter} from "react-router-dom";
import RootPublic from "./rootPublic.tsx";
import Home from "../pages/public/Home.tsx";
import Shop from "../pages/public/Shop.tsx";
import Contact from "../pages/public/Contact.tsx";
import About from "../pages/public/About.tsx";
import Admin from "../pages/admin/Admin.tsx";
import SignIn from "../pages/public/SignIn.tsx";
import Collections from "../pages/public/Collections.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPublic/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/collections",
        element: <Collections/>,
      },
      {
        path: "/shop",
        element: <Shop/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/sign-in",
        element: <SignIn/>,
      },
    ]
  },
  {
    path: "/admin",
    element: <Admin/>,
  }
]);

export default router;
