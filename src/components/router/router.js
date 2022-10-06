import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Drinks from "../Drinks/Drinks";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/drinks",
        element: <Drinks></Drinks>,
      },
    ],
  },
  {
    path: "/*",
    element: <h1>Error page 404 not found</h1>,
  },
]);
