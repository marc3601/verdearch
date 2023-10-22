import React from "react";
import arch from "public/images/ARCHITEKTURA.jpg";
import banner from "public/images/arch_banner.jpeg";
import Banner from "@/app/components/Banner";
import TextInlineImage from "../../../components/TextInlineImage";
import Navbar from "@/app/components/Navbar";
const page = () => {
  return (
    <>
      <Navbar localeEN />
      <Banner image={banner} title='Architecture' />
      <div className='container	mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
        {" "}
        <br></br>
        <h3>Design and consultation:</h3>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>Passive Biophilic Building.</li>
          <li>Thermal modernization to passive and low-energy standards.</li>
          <li>Thermal modernization of historical buildings.</li>
        </ul>
        <br></br>
        <p className='text-sm md:text-base'>
          Today, energy efficiency issues are a priority in the design of new
          buildings and thermal modernizations. Passive House Standards were
          primarily created to guarantee thermic comfort and hygienic air
          quality inside buildings. The technology evolved around principles
          such as air- tightness, high thermal insulation, triple glassing,
          South- orientation, and ventilation system with heat recovery.
          <br></br>
          <br></br> An additional advantage is energy savings and lower
          operating costs. Over thirty years of experience in passive
          construction shows that energy parameters and air quality remain
          stable over time. Unfortunately, very often mistakes in building
          envelope design or modernization lead to &quot;sick building&quot;
          syndrome, which jeopardizes the health of residents and employees.
          <br></br>
          <br></br> Passive Biophilic Building not only provides the benefits of
          energy efficiency, but above all benefits the psychophysical condition
          of users by integrating into design direct and indirect contact with
          nature (geographical location, building bulk, orientation and view,
          integration of greenery, daylighting, non-toxic building and finishing
          materials, and the relationship between man and space).
        </p>
        <br></br>
        <TextInlineImage image={arch} />
        <br></br>
        <p className='text-sm md:text-base'>
          <b>Important aspects of the Biophilic Passive Building:</b>
        </p>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>Geographical location and local context.</li>
          <li>
            The relationship between the orientation of a building and its mass.
          </li>
          <li>Space planning and functionality, thermal zones.</li>
          <li>
            Glazing, views, and the relationship between the indoor and the
            outdoor.
          </li>
          <li>
            Introduction of natural elements and use of plants as an integrated
            design element.
          </li>
          <li>
            Safe, non-toxic construction and finishing materials from controlled
            sources.
          </li>
          <li>
            Natural and artificial lighting varied based on the use and the time
            of day. High-quality thermal insulation.
          </li>
          <li>Airtightness of the building envelope.</li>
          <li>Szczelność powłoki budynku.</li>
          <li>Triple IG glazing.</li>
          <li>Mechanical ventilation with heat recovery.</li>
        </ul>
        <br></br>
        <p className='text-green-800'>
          <b>Package: PASSIVE BIO:</b>
        </p>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base 2xl:text-xl '>
          <li>
            <b>Consultation:</b>
          </li>
        </ul>
        <br></br>
        <p className='text-sm md:text-base'>
          Scope: passive, low-energy, and traditional construction, new and
          modernized buildings.<br></br> During the meeting in person or online
          and after reviewing the information necessary to analyze the
          investment&#39;s issues, we will define the goals and budget.
          Depending on the scale of the project and its complexity, we will
          choose the optimal line of cooperation. The building will be analyzed
          in terms of orientation and location, air tightness and thermal
          insulation of the outer shell, air quality, heating and cooling
          system, ventilation, and materials.<br></br> The first hour of
          consultation will allow you to choose the elements of the package
          depending on your expectations and budget.
        </p>
        <br></br>
        <p>
          <b>What to expect:</b>
        </p>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>
            Analysis and evaluation of current conditions, such as building
            orientation, technology, and materials.
          </li>
          <li>
            Definition of investment priorities, and building&#39;s energy
            goals.
          </li>
          <li>
            Calculations and verification in the passive house design program
            PHPP, and proposal of solutions to maximize energy efficiency.
          </li>
          <li>
            Analysis from the perspective of 12 Biophilic principles, and
            evaluation of the possible solutions.
          </li>
          <li>
            Full elaboration of guidelines for the project: thermal insulation,
            air tightness, heating system and ventilation, selection of
            materials, selection of plants, drawings of details for contractors,
            list of manufacturers.
          </li>
          <li>Recommendation of professional and local contractors.</li>
        </ul>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base 2xl:text-xl '>
          <li>
            <b>Comprehensive project:</b>
          </li>
        </ul>
        <br></br>
        <p className='text-sm md:text-base'>
          After discussing with the investor the goals and expectations of the
          project, we will prepare an investment proposal, preceded by a
          comprehensive analysis including energy targets. It is up to You to
          decide whether the project is to be a certified Passive House,
          low-energy, or zero- energy building and to what extent Biophilic
          Design elements are to be an integral part of the investment.
        </p>
        <br></br>
        <p className='text-green-800'>
          <b>Package: THERMO</b>
        </p>
        <br></br>
        <ul className='list-disc pl-4 text-sm md:text-base'>
          <li>
            It is a comprehensive project of thermal modernization of
            traditional or historical buildings to low- energy or passive
            standards. The project consists of developing optimal solutions for
            achieving energy goals, along with the guidelines for the
            contractors and drawing of details. In addition, we offer assistance
            in the selection of specialized local contractors.
          </li>
        </ul>
        <br></br>
        <p className='text-sm md:text-base'>
          Do you have any questions? Give us a call, it&#39;s free. +48 502 030
          392
        </p>
        <br></br>
      </div>
    </>
  );
};

export default page;
