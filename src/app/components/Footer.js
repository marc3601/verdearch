import React from "react";
import { SocialIcon } from "react-social-icons";
import logo from "public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className='p-8 bg-gray-700 flex md:items-center justify-between sm:justify-start'>
      <div id='logo' className='flex'>
        <Link href='/' className='inline-block'>
          <Image src={logo} alt='logo' width={70} />
        </Link>
      </div>
      <div id='contacts' className='flex-row sm:flex sm:items-center px-2'>
        <div id='email' className='flex pb-2 sm:p-0 sm:ml-2'>
          <SocialIcon
            className='cursor-pointer'
            style={{ height: 35, width: 35 }}
            network='email'
          />
          <p className='p-2 text-xs text-white'>office@verdearch.com</p>
        </div>
        <div id='phone' className='flex pb-2 sm:p-0 sm:ml-2'>
          <SocialIcon
            className='cursor-pointer'
            style={{ height: 35, width: 35 }}
            network='whatsapp'
          />
          <p className='p-2 text-xs text-white'>+48 502 030 392</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
