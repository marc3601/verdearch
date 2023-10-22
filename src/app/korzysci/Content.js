import React from "react";
import szkola from "public/images/szkola.jpg";
import zdrowie from "public/images/zdrowie.jpg";
import praca from "public/images/praca.jpg";
import dom from "public/images/dom.jpg";
import rekreacja from "public/images/rekreacja.webp";
import handel from "public/images/handel.webp";
import TextAndImage from "../components/TextAndImage";
const Content = () => {
  return (
    <div className='container	mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
      <br></br>
      <h2 className='font-bold text-xl'>
        WPŁYW PROJEKTU BIOFILICZNEGO NA RÓŻNE SEKTORY.
      </h2>
      <br></br>
      <p className='text-sm md:text-base pb-4'>
        Raport Global Human Spaces Report wykazał, że 33% pracowników biurowych
        przyznaje, że warunki pracy w biurze mają wpływ na ich decyzje o
        podjęciu pracy w firmie. Warunki pracy i estetyka są jeszcze ważniejsze
        w sektorach takich jak hotelarstwo, mieszkalnictwo i handel detaliczny.
      </p>
      <TextAndImage
        image={szkola}
        title='Edukacja'
        list={[
          "Odpowiednia ilość światła dziennego zwiększa szybkość uczenia się o 20-26%.",
          "Wyższa frekwencja o około 3,5 dnia / rok.",
          "Poprawa wyników testów o 5-14%.",
        ]}
      />
      <TextAndImage
        image={zdrowie}
        title='Opieka zdrowotna'
        list={[
          "Krótszy pobyty w szpitalu i szybsza rekonwalescencja jeśli pacjent ma widok na zieleń i przyrodę.",
          "Niższy poziom lęku oraz obniżona percepcja bólu.",
          "Dostęp światła słonecznego minimalizuje odczuwanie bólu po operacji i wpływa na zmniejszenie dawki leków przeciwbólowych o 22%.",
        ]}
      />
      <TextAndImage
        image={rekreacja}
        title='Rekreacja'
        list={[
          "Goście są gotowi zapłacić o 23% wyższe stawki, jeśli mają wysokiej jakości widok.",
          "Goście spędzają o 36% więcej czasu w hotelowym lobby i korzystają częściej z serwisu hotelowego.",
        ]}
      />
      <TextAndImage
        image={handel}
        title='Handel'
        list={[
          "Odwiedzający spędzają więcej czasu i częściej przebywają w przestrzeniach handlowych.",
          "Towary wyglądają na bardziej wartościowe i estetyczne.",
        ]}
      />
      <TextAndImage
        image={praca}
        title='Miejsce pracy'
        list={[
          "Wzrost samopoczucia pracowników o 15%.",
          "Wzrost kreatywności o 15%.",
          "Wzrost wydajności o 6%.",
          "Zwiększona wydajność funkcji umysłowych.",
          "Zwiększenie testu pamięci o 10-25%.",
          "Zmniejszenie przewlekłego zmęczenia i absencji o 15%.",
        ]}
      />
      <TextAndImage
        image={dom}
        title='Dom i okolica'
        list={[
          "Komfort psychiczny i fizyczny i wysokiej jakości regeneracja.",
          "Optymalizacja  warunków środowiska wewnętrznego: temperatura, wilgotność, oświetlenie, jakość powietrza.",
          "Obniżenie rachunków za prąd.",
          "Wzrost wartości nieruchomości.",
          "Zmniejszenie przestępczości i zachowań agresywnych (okolica).",
        ]}
      />
    </div>
  );
};

export default Content;
