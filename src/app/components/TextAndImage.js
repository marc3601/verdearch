"use client";
import React, { useEffect, useState } from "react";
import TextInlineImage from "./TextInlineImage";

const TextAndImage = ({ image, title, list = [], even }) => {
  return (
    <>
      <br></br>
      <div className='flex-row md:flex'>
        <div className={`pr-3 pl-3 md:w-96 ${even && "order-last"}`}>
          <h3 className='uppercase font-bold'>{title}</h3>
          <br></br>
          <ul className={`list-disc ${even ? "pl-6" : "pl-4"} pb-4 md:pb-0`}>
            {list &&
              list.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
          </ul>
        </div>
        <TextInlineImage image={image} />
      </div>
      <br></br>
    </>
  );
};

export default TextAndImage;
