import React from "react";
import zoo from "public/images/zoo.jpg";
import fractals from "public/images/fractals.png";
import pyramid from "public/images/pyramid.jpg";
import TextInlineImage from "../../components/TextInlineImage";
const Content = () => {
  return (
    <div className='container	mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
      <h2 className='font-bold text-xl'>Biophilic Design</h2>
      <br></br>
      <p className='italic text-sm text-center'>
        Biophilia- &quot;the urge to affiliate with other forms of life&quot;
        (1984 E. O. Willson)
      </p>
      <br></br>
      <p className='text-sm md:text-base'>
        Today, we all agree that animals cannot thrive in zoo cages as it is not
        their natural ecosystem. However, we believe that life in concrete
        cities is &quot;normal&quot; for our society, even though in the history
        of humankind for thousands of years, we have been an integral part of
        the natural environment, and only since the Industrial Revolution we
        took the path of disconnection with nature.
      </p>
      <br></br>
      <TextInlineImage image={zoo} />
      <br></br>
      <p className='text-sm md:text-base'>
        Biodiversity in cities and towns is eliminated, and modern, hyper-
        sterile buildings and interiors lack natural stimulants, further
        separating us from the natural environment. It is a real problem in
        developed societies!
        <br></br>
        <br></br>
        Erich Fromm was the first to introduce the term biophilia, defined as
        “the passionate love of life and of all that is alive” (1973). <br></br>
        <br></br>
        E. O. Wilson in his book “Biophilia” (1986) argues that our natural
        affinity for life is the very essence of our humanity and binds us to
        all other living species.
      </p>
      <br></br>
      <TextInlineImage image={fractals} />
      <br></br>
      <p className='text-sm md:text-base'>
        Biophilic design aims to reconnect 
        <b>
          people with nature and recreate the natural bond with environmental
          processes to increase well-being, improve health, and boost
          productivity.
        </b>
          From a biophilic perspective, 
        <b>buildings and interiors should reflect local biodiversity</b> and be
        responsive to nature, climate, and changing seasons. <br></br> Over 30
        years of studies clearly show that just one hour of extensive contact
        with nature
        <b>
           can increase productivity by 20%, while exposure to fractal patterns
          and natural materials reduces stress by 60%. 
        </b>{" "}
        Biophilic design bases on 14 patterns divided into 3 key- principles:
      </p>
      <br></br>
      <ul className='list-disc pl-4 text-sm md:text-base'>
        <li>Direct connection to nature (7 patterns).</li>
        <li>In-direct connection to nature (3 patterns).</li>
        <li>Human-spatial response (4 patterns).</li>
      </ul>
      <br></br>
      <TextInlineImage
        image={pyramid}
        desc='Tim Beatley (2012) Exploring the Nature Pyramid'
      />
      <br></br>
    </div>
  );
};

export default Content;
