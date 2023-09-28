import React from "react";
import Image from "next/image";
const Badge = ({ title, image, side = "right" }) => {
  return (
    <div className='container w-11/12 mx-auto py-4'>
      <div className='flex h-96	'>
        <div
          id='image'
          className={`grow relative overflow-hidden ${
            side === "left" ? "rounded-r-lg order-2" : "rounded-l-lg"
          }`}>
          <Image
            className='hover:scale-110 transition duration-500 cursor-pointer'
            src={image}
            alt='problem'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div
          id='headline'
          className={`px-2 w-96 bg-green-800 flex items-center ${
            side === "left" ? "rounded-l-lg order-1" : "rounded-r-lg"
          }`}>
          <div className='grow text-center 	'>
            <p className='text-3xl text-white leading-9'>{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
