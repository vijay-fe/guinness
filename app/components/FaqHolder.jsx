import React from "react";
import FaqItem from "./FaqItem";

const FaqHolder = ({ faqid,name, data, faqref=null }) => {
  return (
    <div id={faqid} className="flex flex-col !items-start w-screen md:w-fit lg:max-w-2xl">
      <p className="!mt-0 pt-0 text-white text-2xl mb-5 !font-normal !text-left">
        {name}
      </p>
      {data?.map((item, index) => {
        if (index == (data.length - 1)) {
            {/* console.log("ref") */}
          return <FaqItem key={index} faqitemref={faqref} question={item.question} answer={item.answer} />;
        } else {
          return <FaqItem key={index} question={item.question} answer={item.answer} />;
        }
      })}
    </div>
  );
};

export default FaqHolder;
