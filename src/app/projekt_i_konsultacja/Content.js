import React from "react";
import wne from "public/images/wnelink.jpeg";
import arch from "public/images/archlink.jpeg";

import Image from "next/image";
import Link from "next/link";
const Content = () => {
  return (
    <>
      <div className='container	mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
        <br></br>
        <p className='text-sm md:text-base'>
          Oferuję kompleksowe projektowanie „zdrowych” budynków pasywnych i
          wnętrz Biofilicznych (Biofilnych), stawiając sobie jako nadrzędny cel
          komfort życia, zdrowie i samopoczucie inwestora. Nie interesuje mnie
          „greenwash” ani kopiowanie katalogowych wizualizacji a
          spersonalizowany design uwzględniający twoje potrzeby, styl życia, i
          budżet.
        </p>
      </div>
      <div className='container sm:flex justify-center items-center  mx-auto mt-4 mb-4 p-6'>
        <Link
          href='/projekt_i_konsultacja/architektura'
          className='m-6 hover:shadow-xl transition hover:scale-110'>
          <div className='relative w-fit'>
            <Image
              src={arch}
              alt='architektura'
              width={400}
              placeholder='blur'
            />
            <div className='bg-gray-600/50 absolute inset-y-1/2 -translate-y-1/2	w-full'>
              <h2 className='text-center uppercase text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'>
                Architektura
              </h2>
            </div>
          </div>
        </Link>

        <Link
          href='/projekt_i_konsultacja/wnetrza'
          className='m-6 hover:shadow-xl transition hover:scale-110'>
          <div className='relative w-fit'>
            <Image
              src={wne}
              alt='architektura'
              width={400}
              placeholder='blur'
            />
            <div className='bg-gray-600/50 absolute inset-y-1/2 -translate-y-1/2	w-full'>
              <h2 className='text-center uppercase text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl'>
                Wnętrza
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Content;
