import React from "react";
import interior from "public/slides/8.jpeg";
import banner from "public/images/interior_banner.jpeg";
import Banner from "@/app/components/Banner";
import TextInlineImage from "../../../components/TextInlineImage";
import Navbar from "@/app/components/Navbar";
const page = () => {
  return (
    <>
      <Navbar localeEN />
      <Banner image={banner} title='Wnętrza' />
      <div className='container	mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
        <br></br>
        <p className='text-sm md:text-base'>
          <b>The first comprehensive Biophilic Design in Poland.</b>
        </p>
        <br></br>
        <p className='text-sm md:text-base'>
          Nowadays, the variety and availability of finishing materials,
          furniture, and decorative elements are unlimited. Yet, many
          manufacturers and designers focus only on the visual aspect and
          trends, ignoring the impact of materials, impregnates, and adhesives
          used during production on consumers&#39; health. In my projects, I
          select products safe for health and the environment. In addition, I
          determine plants species for the interior based on their impact on
          people and growing conditions.
        </p>
        <br></br>
        <TextInlineImage image={interior} />
        <br></br>

        <p className='text-green-800'>
          <b>Package: GO BIOPHILIC:</b>
        </p>
        <br></br>
        <p className='text-sm md:text-base'>
          Bring the principles of Biophilia into your space.<br></br> A one-hour
          consultation, at the end of which you will receive a personalized
          report and guidelines:
        </p>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>Analysis of the current state and problems;</li>
          <li>Proposal of solutions</li>
          <li>Selection of finishing materials, plants, and decorations.</li>
        </ul>
        <br></br>
        <p className='text-sm md:text-base'>
          <b>Conceptual design: </b> Create a place that supports your health,
          creativity, and performance. <br></br>
          <br></br> As part of the package, you will receive:
        </p>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>functional plan;</li>
          <li>mood board;</li>
          <li>drawing of each wall;</li>
          <li>analysis of daylight and artificial lighting;</li>
          <li>selection of plants;</li>
          <li>catalog of materials and furniture;</li>
          <li>3D visualizations (optional).</li>
        </ul>
        <br></br>
        <p className='text-sm md:text-base'>
          <b>Comprehensive Project:</b> Maximizing the Benefits of Biophilia.
        </p>
        <br></br>
        <p>As part of the package, you will receive:</p>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>
            Conceptual design + personalized selection of materials and
            furniture with price list.
          </li>
          <li>
            Drawing of construction and finishing details for contractors.
          </li>
          <li>Pre-consultation with the contractors.</li>
        </ul>
        <br></br>
        <p className='text-sm md:text-base'>
          Do you have questions? Give us a call, it&#39;s free. +48 502 030 392
        </p>
      </div>
    </>
  );
};

export default page;
