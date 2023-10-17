import React from "react";
import Image from "next/image";
import Link from "next/link";
const Badge = ({ title, image, href }) => {
  return (
    <Link href={href}>
      <div className='container w-11/12 2xl:w-3/5 mx-auto py-4'>
        <div className='flex h-40 lg:h-64 relative cursor-pointer'>
          <div
            id='image'
            className='grow relative overflow-hidden 
          rounded-lg
          '>
            <Image
              className='hover:scale-110 transition duration-500'
              src={image}
              alt={title}
              placeholder='blur'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div id='title' className='absolute w-full bg-zinc-800/75'>
            <h2 className='p-4 lg:p-6 text-white text-base sm:text-xl lg:text-2xl 2xl:text-3xl uppercase'>
              {title}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Badge;
