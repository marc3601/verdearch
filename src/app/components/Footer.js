import React from "react";
import { SocialIcon } from "react-social-icons";
import logo from "public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className='p-3 bg-gray-700 flex-row md:flex md:items-center'>
      <div id='logo' className='flex justify-center'>
        <Link href='/' className='inline-block'>
          <Image src={logo} alt='logo' width={130} />
        </Link>
      </div>
      <div id='email' className='flex justify-center'>
        <SocialIcon
          className='cursor-pointer'
          style={{ height: 35, width: 35 }}
          network='email'
        />
        <p className='p-2 text-xs text-white'>office@verdearch.com</p>
      </div>
      <div id='phone' className='flex justify-center'>
        <SocialIcon
          className='cursor-pointer'
          style={{ height: 35, width: 35 }}
          network='whatsapp'
        />
        <p className='p-2 text-xs text-white'>+48 502 030 392</p>
      </div>
    </div>
  );
};

export default Footer;
