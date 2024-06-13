"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
const GalleryImage = ({ image }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.removeAttribute("style");
    };
  }, [active]);
  return (
    <>
      <div id='image'>
        {active && (
          <div className='fixed inset-0 bg-zinc-700/90 z-10'>
            <div className='w-full h-screen p-2 sm:p-8'>
              <div className='relative h-full'>
                <Image
                  src={image}
                  className='w-full h-full object-contain'
                  alt='projekt'
                />
                <div className='absolute top-0 right-0 m-4'>
                  <div
                    className='flex justify-center items-center bg-white font-bold w-[30px] h-[30px] rounded-full cursor-pointer'
                    onClick={() => setActive(false)}>
                    <p>X</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className='rounded-md overflow-hidden'>
          <Image
            src={image}
            alt='projekt biofiliczny'
            width={500}
            height={500}
            placeholder='blur'
            objectFit='cover'
            objectPosition='center'
            className='w-full transition hover:scale-105 cursor-zoom-in	'
            onClick={() => setActive(true)}
          />
        </div>
      </div>
    </>
  );
};

export default GalleryImage;
