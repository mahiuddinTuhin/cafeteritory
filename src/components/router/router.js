import { createBrowserRouter, NavLink } from "react-router-dom";
import Main from "../Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "about",
        element: (
          <div className="block h-48 bg-rose-100">
            <h1>inside about</h1>
            <NavLink to="yoyoyu" alt="">
              yoyoyu
            </NavLink>
          </div>
        ),
      },
      {
        path: "Meal",
        element: (
          <div className="block h-48 bg-green-100">
            <h1>Meal inside</h1>
            <NavLink to="/" alt="">
              Home
            </NavLink>
          </div>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <h1>error 404</h1>,
  },
]);

export { router };
