import React from "react";
import passive from "public/images/passive.jpg";
import smart from "public/images/smart.jpeg";
import TextInlineImage from "../../components/TextInlineImage";
import Link from "next/link";
const Content = () => {
  return (
    <div className='container	 mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
      <br></br>
      <p className='text-sm md:text-base'>
        By integrating passive house technology and the principles of biophilia,
        which address the benefits of a close human-nature relationship, I will
        offer You a space that will support health, creativity, and performance,
        and minimize stress or help you relax and regenerate.
      </p>{" "}
      <br></br>
      <TextInlineImage image={passive} large />
      <br></br>
      <p className='text-sm md:text-base'>
        After 30 years of research, data clearly shows that just an hour of
        intense contact with nature can increase productivity by 20%, while
        stress levels drop by 60% when we are exposed to natural materials and
        fractal patterns.
        <br></br>
        <br></br>
        In addition, thanks to my experience and application of intelligent
        technologies, I will help You to optimize building performance, minimize
        operational costs, and delineate the most appropriate strategies to
        prevent unnecessary investments in expensive solutions.
      </p>{" "}
      <br></br>
      <TextInlineImage image={smart} />
      <br></br>
      <p className='text-sm md:text-base'>
        {" "}
        In my practice, I care about the origin and correct use of construction
        and finishing materials. I look for transparent companies that can prove
        the safety of their products, have a lower carbon footprint, and
        consider their product&#39;s lifecycle.
        <br></br>
        <br></br>
        <Link href='/en/benefits' className='underline'>
          See the benefits for each sector.
        </Link>{" "}
        <br></br>
        <br></br>
        <b>Want to know more? Call 502030392</b>
      </p>
      <br></br>
    </div>
  );
};

export default Content;
