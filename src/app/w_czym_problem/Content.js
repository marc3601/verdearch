import React from "react";
import koszty from "public/images/koszty.jpg";
import degradacja from "public/images/degrade.jpg";
import TextInlineImage from "../components/TextInlineImage";
const Content = () => {
  return (
    <div className='container	mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
      <h2 className='font-bold text-xl'>
        1. Negatywny wpływ „tradycyjnych” budynków na nasze zdrowie.
      </h2>
      <br></br>
      <p className='text-sm md:text-base'>
        <b>
          Nasz gatunek ewoluował jako integralna część środowiska
          naturalnego.&nbsp;
        </b>
        Kontakt z przyrodą i naturalnymi procesami jest niezbędny dla naszego
        dobrostanu psychofizycznego.<br></br>
        <br></br>Jednak,{" "}
        <b>
          w krajach rozwiniętych ludzie spędzają 90% czasu w zamkniętych
          pomieszczeniach
        </b>{" "}
        gdzie:
      </p>
      <br></br>
      <ul className='list-disc pl-4 text-sm md:text-base'>
        <li>
          <b>Jakość powietrza jest zła</b> w ponad 90% budynków tradycyjnych.
        </li>
        <li>
          <b>
            Naturalne oświetlenie jest niewystarczające a sztuczne jest
            nieodpowiednio dobrane
          </b>
        </li>
        <li>
          <b>Brakuje elementów i materiałów naturalnych oraz roślin.</b>
        </li>
      </ul>
      <br></br>
      <p className='text-sm md:text-base'>
        Negatywny wpływ na jakość powietrza wewnątrz budynków ma gromadzenie się
        toksyn i lotnych związków organicznych uwalnianych, między innymi z
        materiałów budowlanych, wykończeniowych, mebli, czy dywanów.
        Jednocześnie coraz wyższa szczelność budynków, mająca na celu
        zminimalizowanie strat ciepła, przy jednoczesnym braku prawidłowo
        dobranego systemu wentylacji, sprzyja problemom z fizyką budynku i
        powstawaniu pleśni i grzybów.
        <br></br>
        <br></br>
        Czynniki te{" "}
        <b>
          negatywie wpływają na nasze samopoczucie i mogą prowadzić do
          &quot;syndromu chorego budynku&quot;
        </b>{" "}
        objawiającego się bólami głowy, podrażnieniami nosa i oczu, alergiami,
        rozwojem chorób autoimmunologicznych, zmęczeniem, depresją, a nawet
        problemami z wątrobą i wad wrodzonych.
      </p>
      <br></br>
      <h2 className='font-bold text-xl'>2. Wysokie koszty utrzymania</h2>
      <br></br>
      <p className='text-sm md:text-base'>
        Posiadanie domu stanowiło dotychczas gwarancja bezpieczeństwa i
        niezależności i od czynników zewnętrznych. Obecnie jednak, koszty
        utrzymania budynku wzrosły drastycznie co związane jest z rosnącymi
        <b>
          &nbsp;cenami energii i niestabilną sytuacją geopolityczna co sprawia,
          że nasz budżet jest ściśle uzależniony od sytuacji globalnej.
        </b>
      </p>
      <br></br>
      <TextInlineImage image={koszty} />
      <br></br>
      <p className='text-sm md:text-base'>
        Przy nieodpowiednio zaprojektowanej lub źle zmodernizowanej powłoce
        budynku, zapotrzebowanie energetyczne pozostaje bardzo wysokie a zakup
        paneli fotowoltaicznych lub zmiana źródła ciepła mogą okazać się
        kosztowną inwestycją, niewspółmierną do osiągniętych korzyści.
        <br></br>
        <br></br>
        Dodatkowo, ambitne standardy UE zawarte w Pakiecie Fit for 55 sprawiają,
        że musimy jak najszybciej dostosować technologie budowlane do nowych
        limitów, gdyż „tradycyjne” budynki będą w znacznym stopniu tracić na
        wartości.
      </p>
      <br></br>
      <h2 className='font-bold text-xl'>
        3. Degradacja środowiska naturalnego.
      </h2>
      <br></br>
      <p className='text-sm md:text-base'>
        W dzisiejszych czasach bioróżnorodność stale się zmniejsza, a zasoby
        naturalne są nadmiernie eksploatowane. Tradycyjne materiały budowlane
        odpowiadają za wysokie zużycie energii, wynoszące około 40%, i podobny
        procent emisji dwutlenku węgla (CO2) związany z procesem produkcji i
        utylizacja odpadów. Bez podjęcia kroków w kierunku bardziej
        zrównoważonego zarządzania zasobami, ryzykujemy, że przyszłe pokolenia
        będą musiały stawić czoła problemom związanym z degradacją środowiska
        naturalnego, ociepleniem klimatu, oraz coraz trudniejszym dostępem do
        niektórych podstawowych zasobów jak np. woda pitna, który już aktualnie
        jest realnym problemem w wielu rejonach.
      </p>
      <br></br>
      <TextInlineImage image={degradacja} />
      <br></br>
    </div>
  );
};

export default Content;
