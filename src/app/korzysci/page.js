import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Content from "./Content";
import korzysci from "public/images/korzyscib.jpeg";
const page = () => {
  return (
    <div>
      <Navbar />
      <Banner image={korzysci} title='Korzyści dla różnych sektorów' />
      <Content />
    </div>
  );
};

export default page;
