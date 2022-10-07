import { createBrowserRouter } from "react-router-dom";
import Meals from "../Components/Meals/Meals";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/meals",
    element: <Meals></Meals>,
  },
]);
