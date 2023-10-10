import React from "react";

const About = () => {
  return (
    <div className='bg-white'>
      <div className='p-10 container xl:w-2/3 mx-auto'>
        <p className='text-xl'>
          Jako specjalista w dziedzinie architektury zrównoważonej i
          biofilicznej oraz akredytowany Mistrz Budownictwa Pasywnego wyznaje
          holistyczne podejście do architektury aby stworzyć niepowtarzalne
          miejsce do życia i pracy, które poprawi twój komfort życia oraz
          wpłynie pozytywnie na zdrowie twoje, twojej rodziny i pracowników.{" "}
          <br></br>W mojej pracy opieram się na trzech aspektach zrównoważonego
          rozwoju:
        </p>
        <br></br>
        <ul className='text-xl'>
          <li>
            <b>Społeczeństwo</b> – Sprawić aby budynki i wnętrza były zdrowe.
          </li>
          <li>
            <b>Ekonomia</b>-Ograniczyć koszty operacyjne, oraz poprawić
            wydajność budynku
          </li>
          <li>
            <b>Ekologia</b> - Ograniczyć ślad ekologiczny i chronić środowisko.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
