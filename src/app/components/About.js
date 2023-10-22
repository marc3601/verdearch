import React from "react";

const About = () => {
  return (
    <div className='bg-white'>
      <div className='px-4 pb-4 mb-2 md:px-10 container xl:w-3/4 mx-auto'>
        <p className='text-base 2xl:text-xl 2xl:leading-8	pb-4'>
          <b>
            Jako specjalista w dziedzinie architektury zrównoważonej i
            Biofilicznej, zwanej także Biofilną (Biophilic Design), oraz
            akredytowany Mistrz Budownictwa Pasywnego,
          </b>{" "}
          wyznaje <b>holistyczne podejście do architektury</b> aby stworzyć
          niepowtarzalne miejsce do życia i pracy, które poprawi twój{" "}
          <b>komfort życia</b> oraz wpłynie pozytywnie na zdrowie twoje, twojej
          rodziny i pracowników.<br></br>
          <br></br> W mojej pracy opieram się na trzech aspektach zrównoważonego
          rozwoju:
        </p>
        <ul className='text-base 2xl:text-xl'>
          <li>
            <b>Społeczeństwo</b> – Sprawić aby budynki i wnętrza były zdrowe.
          </li>
          <li>
            <b>Ekonomia</b>- Ograniczyć koszty operacyjne, oraz poprawić
            wydajność budynku
          </li>
          <li>
            <b>Ekologia</b> - Ograniczyć ślad ekologiczny i chronić środowisko.
          </li>
        </ul>
        <br></br>
        <p className='text-base 2xl:text-xl 2xl:leading-8	pb-4'>
          Chcesz wiedzieć więcej? Zadzwoń 502030392
        </p>
      </div>
    </div>
  );
};

export default About;
