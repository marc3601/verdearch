import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Content from "./Content";
import verde from "public/images/why_verde.jpeg";
const page = () => {
  return (
    <div>
      <Navbar />
      <Banner image={verde} title='Dlaczego VERDE Architektura?' />
      <Content />
    </div>
  );
};

export default page;
