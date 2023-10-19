import Image from "next/image";
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
import GalleryImage from "../components/GalleryImage";
const Content = () => {
  return (
    <div className='relative min-h-screen sm:min-h-[calc(100vh-177px)] bg-gray-800 overflow-hidden	'>
      <div>
        <h1 className='p-4 text-4xl text-center text-white uppercase bg-gray-600'>
          Projekty
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-10'>
        <GalleryImage image={img1} />
        <GalleryImage image={img2} />
        <GalleryImage image={img3} />
        <GalleryImage image={img4} />
        <GalleryImage image={img5} />
        <GalleryImage image={img6} />
        <GalleryImage image={img7} />
        <GalleryImage image={img8} />
        <GalleryImage image={img9} />
        <GalleryImage image={img10} />
        <GalleryImage image={img11} />
      </div>
    </div>
  );
};

export default Content;
