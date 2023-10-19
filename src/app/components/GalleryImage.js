import React from "react";
import Image from "next/image";
const GalleryImage = ({ image }) => {
  return (
    <>
      <div id='image'>
        <Image
          src={image}
          alt='projekt biofiliczny'
          width={400}
          height={400}
          placeholder='blur'
          objectFit='cover'
          objectPosition='center'
          className='w-full transition hover:scale-105 cursor-zoom-in	'
        />
      </div>
    </>
  );
};

export default GalleryImage;
