import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import whatIsProblem from "public/images/problem_banner.jpeg";
import Content from "./Content";
const about = () => {
  return (
    <div>
      <Navbar />
      <Banner image={whatIsProblem} title='W czym problem?' />
      <Content />
    </div>
  );
};

export default about;
