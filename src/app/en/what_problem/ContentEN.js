import React from "react";
import koszty from "public/images/koszty.jpg";
import degradacja from "public/images/degrade.jpg";
import TextInlineImage from "../../components/TextInlineImage";
const Content = () => {
  return (
    <div className='container	mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
      <h2 className='font-bold text-xl'>
        1. Negative impact of &quot;traditional&quot; buildings on our health.
      </h2>
      <br></br>
      <p className='text-sm md:text-base'>
        Our species has evolved as an integral part of the natural environment.
        Contact with nature and natural processes is essential for our
        psychophysical well-being. However, in developed countries, people spend
        90% of their time indoors where:
      </p>
      <br></br>
      <ul className='list-disc pl-4 text-sm md:text-base'>
        <li>Air quality is poor.</li>
        <li>
          Natural lighting is insufficient, and artificial lighting is
          inadequately selected.
        </li>
        <li>Plants and natural elements are absent.</li>
      </ul>
      <br></br>
      <p className='text-sm md:text-base'>
        The accumulation of toxins and volatile organic compounds released from
        building materials, finishing, furniture, and carpets, among others, has
        a negative impact on indoor air quality. At the same time, the
        increasing air-tightness of buildings, aimed at minimizing heat losses
        paired with inefficient ventilation systems, is conducive to problems
        with the building’s physics and formation of mold. These factors
        negatively affect our well-being and can lead to &quot;sick building
        syndrome&quot; manifested by headaches, irritation of the nose and eyes,
        allergies, development of autoimmune diseases, fatigue, depression, and
        even liver problems and birth defects.
      </p>
      <br></br>
      <h2 className='font-bold text-xl'>2. High cost of living.</h2>
      <br></br>
      <p className='text-sm md:text-base'>
        Until now, owning a house has been a guarantee of security and
        independence from external factors. Currently, the building’s
        operational costs have increased drastically as an outcome of rising
        energy prices and the unstable geopolitical situation, which makes our
        budget strictly dependent on the global situation.
      </p>
      <br></br>
      <TextInlineImage image={koszty} />
      <br></br>
      <p className='text-sm md:text-base'>
        Due to inadequately designed or poorly modernized building envelope, the
        energy demand remains very high. The installation of photovoltaic panels
        or a change of heat source often turns out to be an expensive
        investment, disproportionate to the benefits achieved. <br></br>In
        addition, the ambitious EU standards included in the Fit for 55 package
        mean that we need to adapt construction technologies to the new limits
        as soon as possible since &quot;traditional&quot; buildings will lose
        their value to a large extent.
      </p>
      <br></br>
      <h2 className='font-bold text-xl'>3. Environmental degradation.</h2>
      <br></br>
      <p className='text-sm md:text-base'>
        Nowadays, biodiversity is constantly declining and natural resources are
        being overexploited. Traditional building materials are responsible for
        high energy consumption, around 40%, and a similar percentage of carbon
        dioxide (CO2) emissions, associated with the production process and
        waste disposal. Without taking steps towards more sustainable resource
        management, we risk that future generations will face serious problems
        related to environmental degradation, global warming, and increasingly
        difficult access to basic resources such as drinking water, which is
        already a real problem in some areas.
      </p>
      <br></br>
      <TextInlineImage image={degradacja} />
      <br></br>
    </div>
  );
};

export default Content;
