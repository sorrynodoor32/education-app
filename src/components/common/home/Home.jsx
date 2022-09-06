import React from "react";
import AboutCard from "../../about/AboutCard";
import HAbout from "./HAbout";
import HBlog from "./HBlog";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Test from "./testiomonal/Test";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <HBlog />
      <Hprice />
    </>
  );
};

export default Home;
