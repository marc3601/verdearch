import React from "react";
import passive from "public/images/passive.jpg";
import smart from "public/images/smart.jpeg";
import cert1 from "public/images/cert1.jpg";
import cert2 from "public/images/cert2.jpg";

import TextInlineImage from "../components/TextInlineImage";
const Content = () => {
  return (
    <div className='container	 mx-auto w-3/4 xl:w-1/2 mt-4 mb-4'>
      {/* <h2 className='font-bold text-xl'>Biophilic Design</h2> */}
      <br></br>
      <p>
        Poprzez{" "}
        <b>
          zintegrowanie technologii budownictwa pasywnego i wiedzy z dziedziny
          biofilii (Biophilic Design)
        </b>
        , która skupia się na korzyściach płynących z bliskości człowieka z
        naturą, zaprojektuję dla Ciebie przestrzeń, która będzie charakteryzować
        się <b>wysoką jakością powietrza, oraz komfortem termicznym</b>, jak i
        wspierać{" "}
        <b>
          harmonijny rozwój, kreatywność, efektywność pracy, zminimalizuje stres
        </b>{" "}
        lub tez pomoże Ci się <b>zrelaksować i zregenerować.</b>
      </p>{" "}
      <br></br>
      <TextInlineImage image={passive} />
      <br></br>
      <p>
        Po 30 latach badań dane jasno stwierdzają, że już godzina intensywnego
        przebywania z naturą może{" "}
        <b>zwiększyć produktywność o 20% a poziom stresu spada o 60%</b>
        gdy mamy kontakt z naturalnymi materiałami i fraktalnymi motywami.
        <br></br>
        <br></br>
        Dodatkowo, dzięki zintegrowaniu rozwiązań pasywnych i{" "}
        <b>inteligentnych technologii (Smart Building Technology)</b> pomogę Ci
        <b> zminimalizować koszty eksploatacji budynku</b> oraz kompleksowo
        zdefiniuje najodpowiedniejsze <b>strategie działania</b> rozłożone w
        czasie tak, aby nie inwestować nie potrzebnie w zbędne, często bardzo
        kosztowne rozwiązania.
      </p>{" "}
      <br></br>
      <TextInlineImage image={smart} />
      <br></br>
      <p>
        {" "}
        Dużą uwagę przywiązuje też do{" "}
        <b>jakości i pochodzenia materiałów budowlanych</b> i wykończeniowych.
        Współpracuje z firmami, których proces produkcji jest 
        <b>przejrzysty, obniżają swój ślad ekologiczny</b> i mają na uwadze{" "}
        <b>cykl życia produktu</b>, a materiały są{" "}
        <b>pozyskiwane z odpowiedzialnych źródeł i bezpieczne dla zdrowia.</b>{" "}
        <br></br>
        <br></br>
        <span className='underline'>
          Zobacz korzyści dla poszczególnych sektorów.
        </span>{" "}
        <br></br>
        <br></br>
        <b>Chcesz wiedzieć więcej? Zadzwoń 502030392</b>
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
