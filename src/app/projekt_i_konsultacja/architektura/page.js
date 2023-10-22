import React from "react";
import arch from "public/images/ARCHITEKTURA.jpg";
import banner from "public/images/arch_banner.jpeg";
import Banner from "@/app/components/Banner";
import TextInlineImage from "../../components/TextInlineImage";
import Navbar from "@/app/components/Navbar";
const page = () => {
  return (
    <>
      <Navbar />
      <Banner image={banner} title='Architektura' />
      <div className='container	mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
        {" "}
        <br></br>
        <h3>Projekt i konsultacja:</h3>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>Pasywny budynek Biofiliczny.</li>
          <li>
            Termomodernizacja do standardów pasywnych i niskoenergetycznych.
          </li>
          <li>Termomodernizacja budynków historycznych.</li>
        </ul>
        <br></br>
        <p className='text-sm md:text-base'>
          Dzisiaj{" "}
          <b>
            kwestie energooszczędności są priorytetem przy projektowaniu nowych
            budynków oraz termomodernizacjach.
          </b>
          <br></br> Budownictwo pasywne powstało, aby zagwarantować komfort
          temperaturowy oraz higieniczną jakość powietrza w budynkach poprzez
          zastosowanie technologii, która tworząc szczelną, odpowiednio
          zaizolowaną powłokę termiczną, minimalizuje niekontrolowana
          infiltracje powietrza z zewnątrz, jednocześnie gwarantując stałą
          wymianę powietrza przechodzącego przez system filtrów wentylacji
          mechanicznej.<br></br>
          <br></br>Dodatkową zaletą jest oszczędność energii i tym samym
          obniżenie kosztów eksploatacji. Ponad trzydziestoletnie doświadczenie
          budownictwa pasywnego pokazuje, że parametry energetyczne oraz jakość
          powietrza pozostają stabilne pomimo upływu czasu.<br></br>
          <br></br>Niestety, nieprawidłowo wykonana powłoka budynku, bądź
          modernizacja prowadzą do syndromu „chorego budynku”, mającego
          negatywny wpływ na zdrowie mieszkańców i pracowników.<br></br>
          <br></br>
          <b>Pasywny Budynek Biofiliczny</b> (Biofilny), daje nie tylko korzyści
          płynące z energooszczędności, ale przede wszystkim wpływa pozytywnie
          na stan psychofizyczny użytkowników i jakość powietrza, poprzez
          uwzględnienie bezpośredniego i pośredniego kontaktu z naturą, jak np.
          położenie geograficzne,  bryła budynku, orientacja i widok, integracja
          zieleni, nietoksyczne materiały budowlane i wykończeniowe, oraz
          relacja człowieka z przestrzenią. <br></br>
          <br></br>
          <b>
            Dzięki dodatkowemu uwzględnieniu w technologii pasywnej aspektów
            architektury Biofilicznej maksymalizujemy pozytywny wpływ na zdrowie
            psychofizyczne mieszkańców i pracowników.
          </b>
        </p>
        <br></br>
        <TextInlineImage image={arch} />
        <br></br>
        <p className='text-sm md:text-base'>
          <b>Ważne aspekty Pasywnego budynku Biofilicznego/ Biofilnego:</b>
        </p>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>Położenie geograficzne i kontekst lokalny.</li>
          <li>Relacja między orientacją budynku a jego bryłą.</li>
          <li>Planowanie przestrzeni i funkcjonalność, strefy termiczne.</li>
          <li>
            Przeszklenia, widoki i relacja między wnętrzem a otoczeniem
            zewnętrznym.
          </li>
          <li>
            Wprowadzenie elementów naturalnych i użycie roślin jako integralnego
            elementu projektu.
          </li>
          <li>
            Materiały budowlane i wykończeniowe pochodzące z kontrolowanych
            źródeł i nieemitujące substancji szkodliwych dla zdrowia.
          </li>
          <li>
            Oświetlenie naturalne oraz sztuczne zróżnicowane w zależności od
            funkcji, oraz pory dnia.
          </li>
          <li>Wysokiej jakości izolacja termiczna.</li>
          <li>Szczelność powłoki budynku.</li>
          <li>Przeszklenia termicznie izolujące.</li>
          <li>Wentylacja mechaniczna z rekuperacją ciepła.</li>
        </ul>
        <br></br>
        <p className='text-green-800'>
          <b>Pakiet:  PASSIVE BIO:</b>
        </p>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base 2xl:text-xl '>
          <li>
            <b>Konsultacja:</b>
          </li>
        </ul>
        <br></br>
        <p className='text-sm md:text-base'>
          Zakres: budownictwo pasywne, niskoenergetyczne i tradycyjne, nowe oraz
          modernizowane.<br></br> Podczas spotkania osobiście, bądź online i po
          zapoznaniu się z informacjami niezbędnymi do analizy problematyki
          inwestycji, zdefiniujemy cele oraz możliwości budżetowe. W zależności
          od skali projektu i jego skomplikowania obierzemy optymalną
          linię współpracy.<br></br> Budynek jest analizowany pod kątem
          orientacji i położenia, szczelności powietrznej i termoizolacji
          powłoki zewnętrznej, jakości powietrza, systemu grzewczo- chłodzącego,
          wentylacji, oraz materiałów.<br></br> Pierwsza godzina konsultacji to
          koszt 700 zł co pozwoli Ci na dobór elementów pakietu w zależności od
          oczekiwań i budżetu.
        </p>
        <br></br>
        <p>
          <b>Czego możesz oczekiwać:</b>
        </p>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>
            Analiza i ocena obecnych rozwiązań: orientacja budynku, technologia
            i materiały.
          </li>
          <li>Zdefiniowanie celów energetycznych i priorytetów inwestora.</li>
          <li>
            Obliczenia i weryfikacja w programie do projektowania budynków
            pasywnych PHPP, oraz propozycja rozwiązań w celu maksymalizacji
            efektywności energetycznej.
          </li>
          <li>
            Analiza pod kątem 12 aspektów Biofilcznych i ewaluacja możliwości
            wprowadzenia rozwiązań.
          </li>
          <li>
            Pełne opracowanie wytycznych dla projektu: izolacja termiczna,
            szczelność powietrzna, system grzewczy i wentylacja, dobór
            materiałów, dobór roślin, rysunki detali dla wykonawców, lista
            producentów.
          </li>
          <li>Rekomendacja profesjonalnych i lokalnych firm wykonawczych.</li>
        </ul>
        <br></br>
        <p className='text-sm md:text-base'>
          <span className='underline'>
            <b>Projekt kompleksowy: </b>
          </span>
          Po zapoznaniu się z priorytetami i oczekiwaniami inwestora wykonamy
          projekt inwestycji, poprzedzony pełną analizą oraz wyznaczeniem celów
          energetycznych.{" "}
          <b>
            To od Twojej decyzji zależy czy projekt ma być certyfikowanym
            Budynkiem Pasywnym, niskoenergetycznym, czy zero-energetycznym i do
            jakiego stopnia elementy Biofiliczne/Biofilne (Biophilic Design)
            mają być integralną częścią  inwestycji.
          </b>
        </p>
        <br></br>
        <p className='text-green-800'>
          <b>Pakiet: THERMO</b>
        </p>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>
            Kompleksowy projekt termomodernizacji budynków tradycyjnych oraz
            historycznych do standardów niskoenergetycznych i pasywnych.
            Opracowanie optymalnych rozwiązań dla osiągnięcia celów
            energetycznych, oraz wytyczne dla projektu wraz z rysunkiem detali.
            Dodatkowo pomoc w doborze profesjonalnych i lokalnych podwykonawców.
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
