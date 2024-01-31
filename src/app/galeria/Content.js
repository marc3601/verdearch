"use client";
import React from "react";
import img1 from "public/slides/1.jpg";
import img2 from "public/slides/2.jpg";
import img3 from "public/slides/3.jpg";
import img4 from "public/slides/4.jpg";
import img5 from "public/slides/5.jpeg";
import img6 from "public/slides/6.jpeg";
import img7 from "public/slides/7.jpeg";
import img8 from "public/slides/8.jpeg";
import img9 from "public/slides/9.jpeg";
import img10 from "public/slides/10.jpg";
import img11 from "public/slides/11.jpg";
import img12 from "public/slides/12.jpg";
import img13 from "public/slides/13.jpg";
import img14 from "public/slides/14.jpg";
import img15 from "public/slides/15.jpg";
import img16 from "public/slides/16.jpg";
import img17 from "public/slides/17.jpg";
import img18 from "public/slides/18.jpg";
import img19 from "public/slides/19.jpg";
import img20 from "public/slides/20.jpg";
import img21 from "public/slides/21.jpg";
import GalleryImage from "../components/GalleryImage";
const Content = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
  ];
  return (
    <div className='relative min-h-screen sm:min-h-[calc(100vh-177px)] bg-gray-800 overflow-hidden	'>
      <div>
        <h1 className='p-4 text-4xl text-center text-white uppercase bg-gray-600'>
          Galeria
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-10'>
        {images.map((image, id) => {
          return <GalleryImage key={id} image={image} />;
        })}
      </div>
    </div>
  );
};

export default Content;
