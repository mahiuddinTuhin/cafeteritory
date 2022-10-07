import { createBrowserRouter } from "react-router-dom";
import Drinks from "../Components/Drinks/Drinks";
import Meals from "../Components/Meals/Meals";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // children: [
    //   {
    //     path: "/meals",
    //     element: <Meals></Meals>,
    //   },
    // ],
  },
  {
    path: "/drinks",
    element: <Drinks></Drinks>,
  },
]);
