import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-200 flex justify-evenly">
      <div>
        <h1>Cafeteritory</h1>
      </div>
      <div className="flex justify-around">
        <p>Drinks</p>
        <p>Meal</p>
        <p>Products</p>
        <p>Cart</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Header;
