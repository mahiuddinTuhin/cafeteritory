import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 items-center mt-2">
      <div className="flex justify-evenly">
        <Link
          className="px-10 py-3  bg-slate-300  rounded-md"
          to="about"
          alt=""
        >
          about
        </Link>
        <Link
          className="px-10 py-3 bg-slate-300  rounded-md"
          to="Contact"
          alt=""
        >
          Contact
        </Link>
        <Link className="px-10 py-3 bg-slate-300 rounded-md" to="Meal" alt="">
          Meal
        </Link>
        <Link className="px-10 py-3  bg-slate-300  rounded-md" to="/" alt="">
          Home
        </Link>
      </div>
      <h1 className="text-3xl">Mealdb</h1>
    </div>
  );
};

export default Footer;
