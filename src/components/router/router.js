import { createBrowserRouter, NavLink } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>inside home</h1>
        <NavLink to="about" alt="">
          about
        </NavLink>
      </div>
    ),
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
