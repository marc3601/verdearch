import React from "react";
import Image from "next/image";
import logo from "public/images/logo.png";
import seal from "public/images/seal_en.png";
import mainImage from "public/images/main.jpeg";
import lang from "public/images/pl.png";
import Link from "next/link";
const Main = () => {
  return (
    <div className='relative flex'>
      <Image
        src={mainImage}
        alt='main'
        priority
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
      <div
        id='overlay'
        className='bg-gradient-to-t from-white from-2% absolute inset-0'></div>
      <div className='w-full'>
        <div className='relative p-6 bg-gradient-to-t from-white to transparent'>
          <div className='flex justify-end'>
            <Link href='/'>
              <div className='cursor-pointer'>
                <Image alt='pl' src={lang} />
              </div>
            </Link>
          </div>
          <h2 className='text-2xl sm:text-3xl font-bold	relative'>
            Joanna Maria Daoud
          </h2>
          <h1 className='text-xl sm:text-2xl relative'>
            Sustainable and Biophilic Design Project Atelier.
          </h1>
        </div>

        <div className='relative px-4 py-8 lg:py-12 flex-row md:flex justify-around items-center bg-lime-800/30	'>
          <div id='image_container' className='flex justify-center '>
            <Image
              className='relative z-0 w-3/4 sm:w-1/2 md:w-full'
              width={350}
              src={logo}
              alt='verdearch'
              priority
            />
          </div>
          <div id='image_container' className='hidden sm:flex md:order-first'>
            <Image
              className='relative z-0'
              width={120}
              src={seal}
              alt='passive house tradesperson'
              priority
            />
          </div>
          <div id='image_container' className='hidden md:flex'>
            <Image
              className='relative z-0 invisible'
              width={150}
              src={logo}
              alt='logo'
            />
          </div>
        </div>
        <div className='relative px-4 py-4 mt-2 md:px-10 container xl:w-3/4 mx-auto backdrop-blur-sm bg-white/10'>
          <h2 className='text-xl my-5 font-bold italic sm:text-2xl md:text-3xl lg:text-4xl '>
            Design for Wellbeing in Balance with Nature.
          </h2>
          <p className='text-base  xl:text-xl '>
            Imagine that the space where you operate supports your wellbeing,
            helps minimize stress, and promotes balance. Such an impact on
            humans has contact with wildlife...
          </p>
          <h3 className='text-xl lg:text-2xl 2xl:text-3xl mt-5 md:mt-8 font-bold italic text-lime-900	'>
            Bring nature inside.
          </h3>
          <div className='flex py-5 sm:hidden'>
            <Image
              className='relative z-0'
              width={150}
              src={seal}
              alt='passive house tradesperson'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
