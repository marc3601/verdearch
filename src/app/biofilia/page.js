import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Content from "./Content";
import biofil from "public/images/biofil.jpeg";
const page = () => {
  return (
    <div>
      <Navbar />
      <Banner image={biofil} title='Czym jest projekt biofiliczny?' />
      <Content />
    </div>
  );
};

export default page;
