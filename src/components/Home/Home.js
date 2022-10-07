import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl p-36 bg-rose-300">This is home section</h1>
      <NavLink to="drinks" alt="">
        drinks
      </NavLink>
    </div>
  );
};

export default Home;
