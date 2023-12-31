import React from "react";
import Image from "next/image";
const TextInlineImage = ({ image, desc, large }) => {
  return (
    <div
      className={`flex-row justify-center w-full ${
        !large ? "md:w-3/4 lg:w-2/3 2xl:w-1/2" : ""
      } mx-auto`}>
      <Image
        src={image}
        placeholder='blur'
        alt='verdearch'
        className='w-full	'
      />
      {desc && <p className='text-xs pt-1'>{desc}</p>}
    </div>
  );
};

export default TextInlineImage;
