import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";

const Main = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
