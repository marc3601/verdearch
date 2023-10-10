import React from "react";
import Image from "next/image";
import Link from "next/link";
const Badge = ({ title, image, href }) => {
  return (
    <Link href={href}>
      <div className='container w-11/12 2xl:w-2/3 mx-auto py-4'>
        <div className='flex h-64 2xl:h-80 relative cursor-pointer'>
          <div
            id='image'
            className='grow relative overflow-hidden 
          rounded-lg
          '>
            <Image
              className='hover:scale-110 transition duration-500'
              src={image}
              alt='problem'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div id='title' className='absolute w-full bg-zinc-800/75'>
            <h2 className='p-6 text-white text-3xl 2xl:text-4xl uppercase'>
              {title}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Badge;
