import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Components/Header_Footer/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      {/* <HeaderContent></HeaderContent>
      <Statistic></Statistic>
      <Blog></Blog>
      <Team></Team>
      <Footer></Footer> */}
    </div>
  );
};

export default Main;
