import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import ContentEN from "./ContentEN";
import verde from "public/images/why_verde.jpeg";
const page = () => {
  return (
    <div>
      <Navbar localeEN />
      <Banner image={verde} title='Why VERDE Architektura?' />
      <ContentEN />
    </div>
  );
};

export default page;
