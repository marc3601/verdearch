import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import whatIsProblem from "public/images/problem_banner.jpeg";
import ContentEN from "./ContentEN";
const about = () => {
  return (
    <div>
      <Navbar localeEN />
      <Banner image={whatIsProblem} title='WHAT IS THE PROBLEM?' />
      <ContentEN />
    </div>
  );
};

export default about;
