import React from "react";
import zoo from "public/images/zoo.jpg";
import fractals from "public/images/fractals.png";
import pyramid from "public/images/pyramid.jpg";
import TextInlineImage from "../components/TextInlineImage";
const Content = () => {
  return (
    <div className='container	 mx-auto w-3/4 xl:w-1/2 mt-4 mb-4'>
      <h2 className='font-bold text-xl'>Biophilic Design</h2>
      <br></br>
      <p>
        Dziś wszyscy jesteśmy zgodni, że zwierzęta żyjące w klatkach zoo nie
        mogą się zdrowo rozwijać, gdyż nie jest to ich naturalny ekosystem.
        <br></br>
        <br></br>Zaakceptowaliśmy jednak, że życie w zabetonowanych miastach
        jest dla człowieka &quot;normą&quot;, pomimo że w historii ludzkości
        przez tysiące lat byliśmy integralną częścią środowiska naturalnego, a
        dopiero od czasów rewolucji przemysłowej weszliśmy na ścieżkę szybkiej
        separacji od świata przyrody.
      </p>
      <br></br>
      <TextInlineImage image={zoo} />
      <br></br>
      <p>
        <b>
          Bioróżnorodność w miastach i miasteczkach jest sukcesywnie
          eliminowana, a nowoczesne budynki i wnętrza są hiper sterylne i
          pozbawione naturalnych stymulantów
        </b>
        , jeszcze bardziej alienując nas od środowiska naturalnego.<br></br>
        <br></br>{" "}
        <b>
          Deficyt kontaktu z przyrodą w różnych jej formach oraz naturalnymi
          procesami, to prawdziwy problem społeczeństw rozwiniętych!
        </b>{" "}
        <br></br>
        <br></br>
        <b>Erich Fromm</b> był pierwszym, który użył terminu Biofilia,
        definiując ją jako „żarliwa miłość do życia, istot żywych i elementów
        świata ożywionego” (1973). <br></br>
        <br></br>
        <b>Edward. O. Wilson</b> w swojej książce zatytułowanej „Biofilia”
        (1986) twierdzi, że nasza wrodzony pociąg do tego co żywe, jest istotą
        naszego człowieczeństwa i łączy nas ze wszystkimi innymi żywymi
        gatunkami.
      </p>
      <br></br>
      <TextInlineImage image={fractals} />
      <br></br>
      <p>
        <b>Biofilia w architekturze i projektowaniu wnętrz</b> ma na celu
        <b>przywrócenie harmonii między człowiekiem i naturą</b> dzięki
        bezpośredniemu wprowadzeniu elementów naturalnych oraz pośredniemu
        nawiązywaniu do form i procesów zachodzących w przyrodzie. Nadrzędnym
        <b>
          celem jest polepszenie jakości życia i pracy poprzez poprawę zdrowia i
          redukcje stresu,  maksymalizację wydajności i kreatywności  oraz
          zwiększenie atrakcyjności inwestycji.
        </b>
      </p>
      <br></br>
      <p className='underline'>Zobacz korzyści dla poszczególnych sektorów.</p>
      <br></br>
      <p>
        Budynki i wnętrza powinny odzwierciedlać różnorodność lokalnych
        ekosystemów, brać pod uwagę klimat, naturalny cykl dnia i nocy, oraz
        zmieniające się pory roku.<br></br>
        <b>
          Projekt Biofiliczny (Biophilic Design) nie jest „stylem”, a opiera się
          na 14 założeniach
        </b>{" "}
        podzielonych na trzy główne filary:
      </p>
      <br></br>
      <ul className='list-disc pl-4'>
        <li>Bezpośredni kontakt z naturą (7 założeń).</li>
        <li>Pośredni kontakt z naturą (3 założenia).</li>
        <li>Relacja między człowiekiem a przestrzenią (4 założenia).</li>
      </ul>
      <br></br>
      <TextInlineImage image={pyramid} />
      <br></br>
      <p>
        Tim Beatley (2012).{" "}
        <span className='underline'>Exploring the Nature Pyramid</span>. The
        Nature of Cities.
      </p>
    </div>
  );
};

export default Content;
