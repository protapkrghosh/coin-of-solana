import Main from "@/Layouts/Main";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import PreSale from "@/pages/PreSale/PreSale";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'presale',
        element: <PreSale />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]);
