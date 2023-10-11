import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import banner from "public/images/projekt_banner.jpg";
import Content from "./Content";

const page = () => {
  return (
    <div>
      <Navbar />
      <Banner image={banner} title='Projekt i konsultacja' />
      <Content />
    </div>
  );
};

export default page;
