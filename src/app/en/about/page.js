import React from "react";
import aboutme from "public/images/aboutme.jpg";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Content from "./Content";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner image={aboutme} title='About me' />
      <Content />
    </div>
  );
};

export default page;
