import React from "react";
import szkola from "public/images/szkola.jpg";
import zdrowie from "public/images/zdrowie.jpg";
import praca from "public/images/praca.jpg";
import dom from "public/images/dom.jpg";
import rekreacja from "public/images/rekreacja.webp";
import handel from "public/images/handel.webp";
import TextAndImage from "../../components/TextAndImage";
const Content = () => {
  return (
    <div className='container	mx-auto w-5/6 xl:w-1/2 mt-4 mb-4'>
      <br></br>
      <p className='text-sm md:text-base pb-4'>
        The Global Human Spaces Report found that 33% of office workers say that
        the design of an office affects their decision whether to work for a
        company or not, the same is even more important in sectors like
        hospitality, housing, and retail.
      </p>
      <br></br>
      <TextAndImage
        image={szkola}
        title='EDUCATION'
        list={[
          "Exposure to natural light increases the speed of learning by 20-26%",
          "Increase attendance by around 3.5 days/ year.",
          "Improvement in test scores by 5-14%.",
        ]}
      />
      <TextAndImage
        image={zdrowie}
        title='HEALTHCARE'
        list={[
          "Shorter hospital stays if views of trees and greenery are available.",
          "Reduced anxiety, pain perception, and medication intake.",
          "Exposure to sunlight reduces the postoperation perception of pain and decreases the intake of analgesics by 22%.",
        ]}
      />
      <TextAndImage
        image={rekreacja}
        title='HOSPITALITY'
        list={[
          "Guests are willing to pay 23% higher rent if they have a quality view.",
          "Guest spends 36% more time in a hotel lobby.",
        ]}
      />
      <TextAndImage
        image={handel}
        title='RETAIL'
        list={[
          "More time spent in retail spaces.",
          "The goods look more valuable and more expensive.",
          "People visit more frequently as they come to relax and spend quality time.",
        ]}
      />
      <TextAndImage
        image={praca}
        title='WORKPLACE'
        list={[
          "15% increase in well-being.",
          "15% increase in creativity.",
          "6% increase in productivity.",
          "Increase performance in mental function.",
          "Increase in memory test by 10-25%.",
          "Prevent task fatigue and absenteeism by 15%.",
        ]}
      />
      <TextAndImage
        image={dom}
        title='HOME/ NEIGHBORHOOD'
        list={[
          "Mental and physical relaxation and regeneration.",
          "High environmental comfort (temperature, lighting, air- quality)",
          "Lower electricity bills.",
          "7% increase in property values",
          "7-8% less crime",
          "Increase a sense of community",
        ]}
      />
    </div>
  );
};

export default Content;
