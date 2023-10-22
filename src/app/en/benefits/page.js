import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Content from "./Content";
import korzysci from "public/images/korzyscib.jpeg";
const page = () => {
  return (
    <div>
      <Navbar localeEN />
      <Banner
        image={korzysci}
        title='What does it mean for different sectors?'
      />
      <Content />
    </div>
  );
};

export default page;
