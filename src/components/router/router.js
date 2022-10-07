import { createBrowserRouter, NavLink } from "react-router-dom";
import Main from "../Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "about",
    element: (
      <div>
        <h1>inside about</h1>
        <NavLink to="yoyoyu" alt="">
          yoyoyu
        </NavLink>
      </div>
    ),
  },
  {
    path: "*",
    element: <h1>error 404</h1>,
  },
]);

export { router };
