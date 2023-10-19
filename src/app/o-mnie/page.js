import React from "react";
import Navbar from "../components/Navbar";
import aboutme from "public/images/aboutme.jpg";
import Banner from "../components/Banner";
import Content from "./Content";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner image={aboutme} title='O mnie' />
      <Content />
    </div>
  );
};

export default page;
