import { createBrowserRouter } from "react-router-dom";
import Drinks from "../Drinks/Drinks";
import Home from "../Home/Home";
import Main from "./../../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "drinks",
        element: <Drinks></Drinks>,
      },
    ],
  },

  {
    path: "*",
    element: <h1>Error page 404 not found</h1>,
  },
]);
