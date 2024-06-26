"use client";
import React from "react";
import img1 from "public/slides/biophilic/im1.jpg";
import img2 from "public/slides/biophilic/im2.jpg";
import img3 from "public/slides/biophilic/im3.jpg";
import img4 from "public/slides/biophilic/im4.jpg";
import img5 from "public/slides/biophilic/im5.jpg";
import img6 from "public/slides/biophilic/im6.jpg";
import img7 from "public/slides/biophilic/im7.jpg";
import img8 from "public/slides/biophilic/im8.jpg";
import img9 from "public/slides/biophilic/im9.jpg";
import img10 from "public/slides/biophilic/im10.jpg";
import img11 from "public/slides/biophilic/im11.jpg";
import img12 from "public/slides/biophilic/im12.jpg";
import img13 from "public/slides/biophilic/im13.jpg";
import img14 from "public/slides/biophilic/im14.jpg";
import img15 from "public/slides/biophilic/im15.jpg";
import img16 from "public/slides/biophilic/im16.jpg";
import img17 from "public/slides/biophilic/im17.jpg";
import img18 from "public/slides/biophilic/im18.jpg";
import img19 from "public/slides/biophilic/im19.jpg";
import img20 from "public/slides/biophilic/im20.jpg";
import img21 from "public/slides/biophilic/im21.jpg";
import img22 from "public/slides/biophilic/im22.jpg";
import img23 from "public/slides/biophilic/im23.jpg";
import img24 from "public/slides/biophilic/im24.jpg";
import img25 from "public/slides/biophilic/im25.jpg";
import img26 from "public/slides/biophilic/im26.jpg";
import in1 from "public/slides/interiors/in1.jpg";
import in2 from "public/slides/interiors/in2.jpg";
import in3 from "public/slides/interiors/in3.jpg";
import in4 from "public/slides/interiors/in4.jpg";
import in5 from "public/slides/interiors/in5.jpg";
import in6 from "public/slides/interiors/in6.jpg";
import in7 from "public/slides/interiors/in7.jpg";
import in8 from "public/slides/interiors/in8.jpg";
import in9 from "public/slides/interiors/in9.jpg";
import in10 from "public/slides/interiors/in10.jpg";
import in11 from "public/slides/interiors/in11.jpg";
import in12 from "public/slides/interiors/in12.jpg";
import in13 from "public/slides/interiors/in13.jpg";
import in14 from "public/slides/interiors/in14.jpg";
import in15 from "public/slides/interiors/in15.jpg";
import in16 from "public/slides/interiors/in16.jpg";
import in17 from "public/slides/interiors/in17.jpg";
import in18 from "public/slides/interiors/in18.jpg";
import in19 from "public/slides/interiors/in19.jpg";
import in20 from "public/slides/interiors/in20.jpg";
import in21 from "public/slides/interiors/in21.jpg";
import in22 from "public/slides/interiors/in22.jpg";
import in23 from "public/slides/interiors/in23.jpg";
import in24 from "public/slides/interiors/in24.jpg";
import in25 from "public/slides/interiors/in25.jpg";
import in26 from "public/slides/interiors/in26.jpg";
import in27 from "public/slides/interiors/in27.jpg";
import in28 from "public/slides/interiors/in28.jpg";
import in29 from "public/slides/interiors/in29.jpg";
import w1 from "public/slides/work/1.jpg";
import w2 from "public/slides/work/2.jpg";
import w3 from "public/slides/work/3.jpg";
import w4 from "public/slides/work/4.jpg";
import w5 from "public/slides/work/5.jpg";
import w6 from "public/slides/work/6.jpg";
import w7 from "public/slides/work/7.jpg";
import w8 from "public/slides/work/t1.jpg";
import w9 from "public/slides/work/t2.jpg";

import GalleryImage from "../components/GalleryImage";
const Content = () => {
  const images1 = [
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
    img22,
    img23,
    img24,
    img25,
    img26,
  ];
  const images2 = [
    in1,
    in2,
    in3,
    in4,
    in5,
    in6,
    in7,
    in8,
    in9,
    in10,
    in11,
    in12,
    in13,
    in14,
    in15,
    in16,
    in17,
    in18,
    in19,
    in20,
    in21,
    in22,
    in23,
    in24,
    in25,
    in26,
    in27,
    in28,
    in29,
  ];
  const images3 = [w1, w2, w3, w4, w5, w6, w7, w8, w9];
  return (
    <div className='relative min-h-screen sm:min-h-[calc(100vh-177px)] bg-gray-800 overflow-hidden	'>
      <div>
        <h1 className='p-4 text-4xl text-center text-white uppercase bg-gray-600'>
          Galeria
        </h1>
      </div>
      <div className='mt-4 mb-2'>
        <h1 className='p-4 text-2xl md:text-3xl text-center text-white uppercase bg-gray-400'>
          Biophilic Architecture examples
        </h1>
      </div>
      <div className='columns-1 md:columns-2 lg:columns-3 2xl:columns-4 mx-auto space-y-4 p-4'>
        {images1.map((image, id) => {
          return <GalleryImage key={id} image={image} />;
        })}
      </div>
      <div className='mt-4 mb-2'>
        <h1 className='p-4 text-2xl md:text-3xl text-center text-white uppercase bg-gray-400'>
          Biophilic Interiors examples
        </h1>
      </div>
      <div className='columns-1 md:columns-2 lg:columns-3 2xl:columns-4 mx-auto space-y-4 p-4'>
        {images2.map((image, id) => {
          return <GalleryImage key={id} image={image} />;
        })}
      </div>
      <div className='mt-4 mb-2'>
        <h1 className='p-4 text-2xl md:text-3xl text-center text-white uppercase bg-gray-400'>
          Work in progress
        </h1>
      </div>
      <div className='columns-1 md:columns-2 lg:columns-3 2xl:columns-4 mx-auto space-y-4 p-4'>
        {images3.map((image, id) => {
          return <GalleryImage key={id} image={image} />;
        })}
      </div>
    </div>
  );
};

export default Content;
