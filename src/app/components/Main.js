import React from "react";
import Image from "next/image";
import logo from "public/images/logo.png";
import mainImage from "public/images/main.jpeg";
const Main = () => {
  return (
    <div className='relative min-h-screen flex items-center'>
      <Image
        src={mainImage}
        className='relative z-0'
        alt='main'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
      <div className='container mx-auto '>
        <h1 className='text-5xl text-white text-center z-10	relative'>
          Atelier Projektowania Pasywnego i Biofilicznego.
        </h1>
        <Image className='relative z-0 mx-auto' src={logo} alt='logo' />
        <h2 className='text-4xl text-white text-center z-10	relative'>
          Joanna Maria Daoud
        </h2>
      </div>
    </div>
  );
};

export default Main;
