import React from "react";
import Link from "next/link";
import Image from "next/image";
const OfferLink = ({ image, title, link, background, width, largeText }) => {
  return (
    <Link
      href={link}
      className='m-6 hover:shadow-xl transition hover:scale-110'>
      <div className='relative'>
        <Image
          src={image}
          alt={title}
          width={width}
          placeholder='blur'
          className='mx-auto'
        />
        <div
          className={`absolute ${
            background ? "bg-gray-600/70" : ""
          } top-2/4 transform -translate-y-1/2	p-1 w-full mx-auto`}>
          <h2
            className={`text-center uppercase text-white text-2xl sm:text-3xl lg:text-4xl ${
              largeText ? "xl:text-5xl" : ""
            } transition`}>
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default OfferLink;
