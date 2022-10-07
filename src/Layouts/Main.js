import React from "react";
import { Blog } from "../Components/Header_Footer/Blog";
import { Footer } from "../Components/Header_Footer/Footer";
import Header from "../Components/Header_Footer/Header";
import { HeaderContent } from "../Components/Header_Footer/HeaderContent";
import { Statistic } from "../Components/Header_Footer/Statistic";
import { Team } from "../Components/Header_Footer/Team";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <HeaderContent></HeaderContent>
      <Statistic></Statistic>
      <Blog></Blog>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
};

export default Main;
