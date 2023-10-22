import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import ContentEN from "./ContentEN";
import biofil from "public/images/biofil.jpeg";
const page = () => {
  return (
    <div>
      <Navbar localeEN />
      <Banner image={biofil} title='What is biophilic design?' />
      <ContentEN />
    </div>
  );
};

export default page;
