import React from "react";

const About = () => {
  return (
    <div className='bg-white'>
      <div className='px-4 pb-4 mb-2 md:px-10 container xl:w-3/4 mx-auto'>
        <p className='text-base 2xl:text-xl 2xl:leading-8	pb-4'>
          As a sustainable and biophilic design specialist and a certified
          Passive House Tradesperson, I believe in a holistic approach towards
          architecture to create a unique environment that boosts Your
          performance and health.<br></br>
          <br></br> In my practice, I rely on three aspects of sustainable
          development:
        </p>
        <ul className='text-base 2xl:text-xl'>
          <li>
            <b>Society</b> - Make buildings and interiors healthy
          </li>
          <li>
            <b>Economy</b> - Limit operational costs and improve building
            performance
          </li>
          <li>
            <b>Ecology</b> - Limit ecological footprint and protect the
            environment
          </li>
        </ul>
        <br></br>
      </div>
    </div>
  );
};

export default About;
