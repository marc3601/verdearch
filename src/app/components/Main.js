import React from "react";
import Image from "next/image";
import logo from "public/images/logo.png";
import seal from "public/images/seal_en.png";
import mainImage from "public/images/main.jpeg";
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
        <div className='p-6'>
          <h2 className='text-3xl font-bold	relative'>Joanna Maria Daoud</h2>
          <h1 className='text-2xl relative'>
            Atelier Projektowania Pasywnego i Biofilicznego.
          </h1>
        </div>

        <div className='relative flex justify-around items-center bg-lime-100/40	'>
          <div id='image_container'>
            <Image
              className='relative z-0'
              width={180}
              src={seal}
              alt='logo'
              priority
            />
          </div>
          <div id='image_container'>
            <Image
              className='relative z-0'
              width={700}
              src={logo}
              alt='logo'
              priority
            />
          </div>
          <div id='image_container'>
            <Image
              className='relative z-0 invisible'
              width={180}
              src={logo}
              alt='logo'
            />
          </div>
        </div>
        <div className='relative p-10 mt-12 container mx-auto'>
          <h1 className='2xl:text-5xl xl:text-4xl text-3xl pb-5'>
            Design który Wspiera Twoje Zdrowie i Harmonie w Zgodzie<br></br> z
            Naturą .
          </h1>
          <p className='2xl:text-2xl text-xl '>
            Pomysl, ze przestrzeń w której przebywasz wspierają twój rozwój,
            pomagają minimalizować stres oraz sprzyjają odzyskaniu równowagi.
            Taki wpływ na człowieka ma kontakt z przyroda...<br></br>
            <br></br> <b>Wprowadz nature do wnętrza !</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
