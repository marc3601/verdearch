import React from "react";
import interior from "public/images/WNETRZA.jpeg";

import Banner from "@/app/components/Banner";
import banner from "public/images/projekt_banner.jpg";

import TextInlineImage from "../../components/TextInlineImage";
import Navbar from "@/app/components/Navbar";
const page = () => {
  return (
    <>
      <Navbar />
      <Banner image={banner} title='Wnętrza' />
      <div className='container	mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
        <h2 className='font-bold text-xl'>Wnętrza</h2>

        <p className='text-sm md:text-base'>
          <b>
            {" "}
            Pierwszy w Polsce kompleksowy Projekt Biofiliczny (Biophilic
            Design).
          </b>
        </p>
        <br></br>
        <p className='text-sm md:text-base'>
          W dzisiejszych czasach różnorodność i dostępność materiałów
          wykończeniowych, mebli i elementów dekoracyjnych jest nieograniczona,
          niestety wielu producentów oraz projektantów skupia się wyłącznie na
          aspekcie wizualnym i trendach, pomijając wpływ materiałów i substancji
          używanych podczas produkcji na zdrowie konsumenta. W moich projektach
          selekcjonuje materiały, które są bezpieczne dla zdrowia, pochodzą z
          kontrolowanych źródeł, a proces produkcji minimalizuje negatywny wpływ
          na środowisko. Dodatkowo dobieram gatunki roślin mających znaleźć się
          we wnętrzu pod kątem ich wpływu na człowieka oraz warunków uprawy.
        </p>
        <br></br>
        <TextInlineImage image={interior} />
        <br></br>

        <p className='text-green-800'>
          <b>Pakiet: GO BIOPHILIC:</b>
        </p>
        <br></br>
        <p className='text-sm md:text-base'>
          <b>Konsultacja -</b> Wprowadź założenia biofilii do twojej
          przestrzeni. Godzinna konsultacja, na której koniec otrzymasz
          spersonalizowany raport i wytyczne:
        </p>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>Analiza stanu aktualnego i problematyki;</li>
          <li>rzut funkcjonalny;</li>
          <li>
            dobór materiałów wykończeniowych, roślin i elementów aranżacji.
          </li>
        </ul>
        <br></br>
        <p className='text-sm md:text-base'>
          <b>Projekt koncepcyjny -</b> Stwórz miejsce, które wspiera Twoje
          zdrowie, kreatywność i efektywność. W ramach pakietu otrzymasz:
        </p>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>rzut funkcjonalny;</li>
          <li>moodboard;</li>
          <li>rysunek każdej ściany;</li>
          <li>analizę oświetlenia dziennego i sztucznego;</li>
          <li>dobór roślin;</li>
          <li>katalog materiałów i mebli;</li>
          <li>wizualizacje 3D (opcjonalnie).</li>
        </ul>
        <br></br>
        <p className='text-sm md:text-base'>
          <b>Projekt kompleksowy -</b> Maksymalizacja korzyści płynących z
          Biofilii.
        </p>
        <br></br>
        <p>W ramach pakietu otrzymasz:</p>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>
            projekt koncepcyjny + spersonalizowany dobór materiałów i mebli wraz
            z cenami,
          </li>
          <li>
            rysunek detali konstrukcyjnych i wykończeniowych dla wykonawców.
          </li>
        </ul>
        <br></br>
        <p className='text-sm md:text-base'>
          Masz pytania? Zadzwoń, rozmowa nic nie kosztuje. +48 502 030 392
        </p>
      </div>
    </>
  );
};

export default page;
