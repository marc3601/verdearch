import React from "react";
import Link from "next/link";
import Image from "next/image";
const SectionsLink = ({ image, title, link }) => {
  return (
    <Link
      href={link}
      className='m-6 hover:shadow-xl transition hover:scale-110'>
      <div className='relative w-fit'>
        <Image src={image} alt={title} width={400} placeholder='blur' />
        <div className='absolute bg-gray-600/70 top-2/4 transform -translate-y-1/2	p-1 w-full'>
          <h2 className='text-center uppercase text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl transition'>
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default SectionsLink;
