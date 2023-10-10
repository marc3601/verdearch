import Image from "next/image";
import React from "react";
import koszty from "public/images/koszty.jpg";
const Content = () => {
  return (
    <div className='container mx-auto w-3/4 xl:w-1/2 mt-4 mb-4'>
      <h2 className='font-bold text-xl'>
        1. Negatywny wpływ „tradycyjnych” budynków na nasze zdrowie.
      </h2>
      <br></br>
      <p>
        Nasz gatunek ewoluował jako integralna część środowiska naturalnego.
        Kontakt z przyroda i naturalnymi procesami jest niezbędny dla naszego
        dobrostanu psychofizycznego. Jednak, w krajach rozwiniętych ludzie
        spędzają 90% czasu w zamkniętych pomieszczeniach gdzie:
      </p>
      <br></br>
      <ul className='list-disc pl-4'>
        <li>Jakość powietrza jest zla, (w ponad 90% budynków tradycyjnych).</li>
        <li>
          Naturalne oświetlenie jest niewystarczające a sztuczne jest
          nieodpowiednio dobrane
        </li>
        <li>Brakuje elementów i materiałów naturalnych oraz roślin.</li>
      </ul>
      <br></br>
      <p>
        Negatywny wpływ na jakość powietrza wewnątrz budynków ma gromadzenie się
        toksyn i lotnych związków organicznych uwalnianych, miedzy innymi z
        materiałów budowlanych, wykończeniowych, mebli, czy dywanów.
        Jednocześnie coraz wyższa szczelność budynków, mająca na celu
        zminimalizowanie strat ciepła, przy jednoczesnym braku prawidłowo
        dobranego systemu wentylacji sprzyja problemom z fizyką budynku i
        powstawaniu pleśni i grzybów. Czynniki te negatywie wpływają na nasze
        samopoczucie i mogą prowadzić do “syndromu chorego budynku”
        objawiającego się bólami głowy, podrażnieniami nosa i oczu, alergiami,
        rozwojem chorób autoimmunologicznych, zmęczeniem, depresją, a nawet
        problemami z wątrobą i wad wrodzonych.
      </p>
      <br></br>
      <h2 className='font-bold text-xl'>2. Wysokie koszty utrzymania</h2>
      <br></br>
      <p>
        Posiadanie domu stanowiło dotychczas gwarancja bez- pieczeństwa i
        niezależności i od czynników zewnętrznych. Obecnie jednak, koszty
        utrzymania budynkow wzrosły drastycznie co związane jest z rosnącymi
        cenami energii
      </p>
      <br></br>
      <Image src={koszty} alt='koszty' className='w-1/2' />
    </div>
  );
};

export default Content;
