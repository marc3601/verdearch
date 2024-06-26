"use client";
import React from "react";
import Navbar from "../components/Navbar";
import portfolio from "public/pdf/portfolio.pdf";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className='h-screen	'>
        <embed
          src={portfolio}
          type='application/pdf'
          width='100%'
          height='100%'
          title='Embedded PDF Viewer'
          className='h-screen'
        />
      </div>
    </div>
  );
};

export default page;
