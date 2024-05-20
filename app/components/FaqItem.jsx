"use client";
import React, { useState } from "react";

const FaqItem = ({ question, faqitemref = null, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      ref={faqitemref}
      className="pt-10 mt-0 !w-full border-b-[1px] border-gray-600 pb-0 border-solid "
    >
      <h2 className="!mt-0 !pt-0">
        <button
          className="flex items-center justify-between text-base  !text-wrap  w-11/12 text-left font-base "
          onClick={toggleExpanded}
        
        >
          <span className="!text-wrap  sm:text-xl md:text-base">{question}</span>
          <svg
            className="fill-white shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                expanded ? "rotate-180" : ""
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                expanded ? "rotate-0" : ""
              }`}
            />
          </svg>
        </button>
      </h2>
      <div
        className={`grid pt-4  text-white text-lg overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {Array.isArray(answer) ? (
            answer.map((item, index) => {
              return <p className="pb-3" key={index}>{item}</p>;
            })
          ) : (
            <p className="pb-3">
              {answer}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
