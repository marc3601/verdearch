import React from "react";
import Image from "next/image";

const Banner = ({ image, title }) => {
  return (
    <div id='banner' className='relative'>
      <div id='image' className='grow relative overflow-hidden  h-96'>
        <Image
          src={image}
          alt={title}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          priority
        />
      </div>
      <div id='headline' className='absolute inset-x-0 bottom-0 bg-zinc-800/75'>
        <h1 className='text-center text-white uppercase 2xl:text-5xl xl:text-4xl text-3xl p-5'>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
