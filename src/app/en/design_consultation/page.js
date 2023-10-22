import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import banner from "public/images/projekt_banner.jpg";
import ContentEN from "./ContentEN";

const page = () => {
  return (
    <div>
      <Navbar localeEN />
      <Banner image={banner} title='Design & Consultation ' />
      <ContentEN />
    </div>
  );
};

export default page;
