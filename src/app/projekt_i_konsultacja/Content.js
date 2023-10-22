import React from "react";
import wne from "public/images/wnelink.jpeg";
import arch from "public/images/archlink.jpeg";
import OfferLink from "../components/OfferLink";
const Content = () => {
  return (
    <>
      <div className='container	mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
        <br></br>
        <p className='text-sm md:text-base'>
          Oferuję kompleksowe{" "}
          <b>
            projektowanie „zdrowych” budynków pasywnych i wnętrz Biofilicznych
          </b>{" "}
          (Biofilnych), stawiając sobie jako{" "}
          <b>nadrzędny cel komfort życia, zdrowie i samopoczucie inwestora.</b>{" "}
          Nie interesuje mnie „greenwash” ani kopiowanie katalogowych
          wizualizacji a{" "}
          <b>
            spersonalizowany design uwzględniający twoje potrzeby, styl życia, i
            budżet.
          </b>
        </p>
        <br></br>
        <span className='underline'>
          Zobacz korzyści dla poszczególnych sektorów.
        </span>{" "}
      </div>
      <div className='container sm:flex justify-center items-center  mx-auto mt-4 mb-4 p-6'>
        <OfferLink
          image={arch}
          link='/projekt_i_konsultacja/architektura'
          title='Architektura'
          largeText
        />
        <OfferLink
          image={wne}
          link='/projekt_i_konsultacja/wnetrza'
          title='Wnętrza'
          largeText
        />
      </div>
    </>
  );
};

export default Content;
