import React from "react";
import cert1 from "public/images/cert1.jpg";
import cert2 from "public/images/cert2.jpg";

import TextInlineImage from "../../components/TextInlineImage";
const Content = () => {
  return (
    <div className='container	 mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
      <br></br>
      <p className='text-sm md:text-base'>
        At the end of 2023, I returned to Poland after 20 years of studying and
        working abroad (Italy, Lebanon, China) to open the Atelier of Passive
        and Biophilic Design and use my knowledge and experience in practice.{" "}
        <br></br>
        <br></br>Starting from my Master&#39;s degree in Sustainable
        Architectural Design (Architecture per il Projetto Sostenibile) at the
        Politecnico di Torino in Italy, through my experience in design offices
        in Beirut, to my position as a university lecturer at the Faculty of
        Engineering and Architecture at Wenzhou University in China, I have been
        faithful to my passion for Sustainable Building Design. I am also an
        accredited Passive Architecture Tradesperson at the German Passive House
        Institute.<br></br>
        <br></br> I strongly believe that our surroundings have a tremendous
        impact on our health and psychophysical harmony, and that the use of
        safe materials and the principles of biophilia in interiors,
        architecture, and urban space has an incredible regenerative potential.
        I will help you restore the natural balance in your home and workplace.
        <br></br>
        <br></br>
        <b>VERDE Architektura</b>
        <br></br> Joanna Maria Daoud<br></br> Telefon: (+48) 502 030392<br></br>{" "}
        Aleja Grunwaldzka 219, 5A<br></br> 80-266 Gdańsk
      </p>
      <br></br>
      <div className='lg:flex'>
        <TextInlineImage image={cert1} />
        <TextInlineImage image={cert2} />
      </div>
      <br></br>
    </div>
  );
};

export default Content;
