import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import Meals from "../Components/Meals/Meals";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/meals",
        element: <Meals></Meals>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
