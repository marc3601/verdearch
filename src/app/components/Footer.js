import React from "react";
import { SocialIcon } from "react-social-icons";
import logo from "public/images/logo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className='p-3 bg-gray-700 mt-4 flex items-center justify-between'>
      <div id='logo'>
        <Image src={logo} alt='logo' width={130} />
      </div>
      <div id='socials'>
        <SocialIcon className='cursor-pointer' network='facebook' />
        <SocialIcon className='cursor-pointer ml-2' network='x' />
        <SocialIcon className='cursor-pointer ml-2' network='instagram' />
      </div>
      <div id='phone' className='text-white'>
        <p>+48 888 888 888</p>
      </div>
    </div>
  );
};

export default Footer;
