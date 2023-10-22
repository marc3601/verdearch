import React from "react";
import wne from "public/images/wnelink.jpeg";
import arch from "public/images/archlink.jpeg";
import OfferLink from "../../components/OfferLink";
import Link from "next/link";

const Content = () => {
  return (
    <>
      <div className='container	mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
        <br></br>
        <p className='text-sm md:text-base'>
          I offer a comprehensive design of &quot;healthy&quot; passive
          buildings and Biophilic interiors. My primary goal is the
          investor&#39;s life comfort, health, and well-being. I&#39;m not
          interested in &quot;greenwashing&quot; or copying catalog
          visualizations but in a personalized proposal considering your needs,
          lifestyle, and budget.
        </p>
        <br></br>
        <Link href='/en/benefits' className='underline'>
          See the benefits for each sector.
        </Link>{" "}
      </div>
      <div className='container sm:flex justify-center items-center  mx-auto mt-4 mb-4 p-6'>
        <OfferLink
          image={arch}
          link='/en/design_consultation/architecture'
          title='Architecture'
          largeText
        />
        <OfferLink
          image={wne}
          link='/en/design_consultation/interiors'
          title='Interiors'
          largeText
        />
      </div>
    </>
  );
};

export default Content;
