import React from "react";
import Image from "next/image";
import logo from "public/images/logo.png";
import seal from "public/images/seal_en.png";
import lang from "public/images/uk.png";
import mainImage from "public/images/main.jpeg";
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
            <Link href='/en'>
              <div className='cursor-pointer'>
                <Image alt='uk' src={lang} />
              </div>
            </Link>
          </div>

          <div className='flex justify-between p-2'>
            <div id='title' className='flex justify-center items-center'>
              <div>
                <h2 className='text-2xl sm:text-3xl font-bold	relative'>
                  Joanna Maria Daoud
                </h2>
                <h1 className='text-xl sm:text-2xl relative'>
                  Atelier Projektowania Pasywnego i Biofilicznego.
                </h1>
              </div>
            </div>
            <div id='image_container' className='hidden md:block mr-8'>
              <Image
                className='relative z-0'
                width={100}
                src={seal}
                alt='passive house tradesperson'
                priority
              />
            </div>
          </div>
        </div>

        <div className='relative px-4 py-6 lg:py-10 flex-row md:flex justify-around items-center bg-lime-800/30	'>
          <div id='image_container' className='flex justify-center '>
            <Image width={330} src={logo} alt='verdearch' priority />
          </div>
        </div>
        <div className='relative px-4 py-4 mt-2 md:px-10 container xl:w-3/4 mx-auto backdrop-blur-sm bg-white/10'>
          <h2 className='text-xl my-5 font-bold italic sm:text-2xl md:text-3xl lg:text-4xl '>
            Design który Wspiera Zdrowie i Harmonię w Zgodzie z Naturą.
          </h2>
          <p className='text-base  xl:text-xl '>
            Pomyśl, że przestrzeń, w której przebywasz, wspiera twój rozwój,
            pomaga minimalizować stres oraz sprzyja odzyskaniu równowagi. Taki
            wpływ na człowieka ma kontakt z przyrodą…
          </p>
          <h3 className='text-xl lg:text-2xl 2xl:text-3xl mt-5 md:mt-8 font-bold italic text-lime-900	'>
            Wprowadź naturę do wnętrza!
          </h3>
          <div className='flex py-5 md:hidden'>
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
