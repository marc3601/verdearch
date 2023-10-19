import React from "react";
import passive from "public/images/passive.jpg";
import smart from "public/images/smart.jpeg";
import cert1 from "public/images/cert1.jpg";
import cert2 from "public/images/cert2.jpg";

import TextInlineImage from "../components/TextInlineImage";
const Content = () => {
  return (
    <div className='container	 mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
      <br></br>
      <p className='text-sm md:text-base'>
        Pod koniec 2023 roku wróciłam do Polski, po 20 latach nauki i pracy za
        granicą (Włochy, Liban, Chiny), aby otworzyć Atelier Projektowania
        Pasywnego i Biofilicznego, i wykorzystać moją wiedzę i doświadczenie w
        praktyce. <br></br>
        <br></br>Poczynając od studiów Magisterskich na wydziale
        Architektonicznego Projektowania Zrównoważonego (Architektura per il
        Projetto Sostenibile) na Politecnico di Torino we Włoszech, poprzez
        doświadczenie w biurach projektowych w Bejrucie, aż po posadę wykładowcy
        uniwersyteckiego na wydziale Inżynierii i Architektury na Wenzhou
        University w Chinach, byłam wierna mojej pasji związanej z szeroko
        rozumianym Budownictwem Zrównoważonym (Sustainable Building Design).
        Jestem też akredytowanym Mistrzem Architektury Pasywnej, niemieckiego
        Passive House Institute.<br></br>
        <br></br> Wierzę głęboko, że nasze otoczenie ma ogromny wpływ na nasze
        zdrowie i harmonię psychofizyczną, a zastosowanie bezpiecznych
        materiałów oraz zasad biofilii we wnętrzach, architekturze i przestrzeni
        miejskiej ma niebywały potencjał regeneracyjny.<br></br>
        <br></br> Pomogę Ci przywrócić naturalny balans w domu i miejscu pracy.
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
