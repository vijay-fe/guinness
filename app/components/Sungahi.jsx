import Image from "next/image";
import Mkbeer from "../../public/assests/beers/mkbeer.avif";
import React from "react";

const Sungahi = () => {
  return (
    <div style={{ paddingBottom: "50px" }}>
      <div class="relative">
        <div style={{ paddingLeft: "20%", margin: "10%" }}>
          <Image
            className="image1"
            src={Mkbeer}
            alt="our-craft-img-1"
            style={{ position: "relative", height: "100%", width: "100%" }}
          />
        </div>
      </div>
      <div class="lg:-mt-30 pointer-events-none relative z-20 -mt-20 flex w-full flex-col md:-mt-6 lg:w-full lg:flex-row lg:justify-between">
        <div class="pointer-events-auto block w-full bg-black px-4 pt-8 lg:absolute lg:bottom-0 lg:right-0 lg:w-1/2 lg:px-10 lg:pb-0 lg:pt-10 flex flex-col !items-start gap-5">
          <div class="prose prose-p:text-body-sm text-lg !text-white">
            <p>
              Some believe it’s all about the classic 45-degree angle, pouring
              into a glass in one go before leaving to settle. However, others
              believe the magic lies in the hard pour, also known as “the flip”.
              Using a clean can, flip the can upside down into the glass lifting
              out slowly as the liquid rises to meet it. The only way to find
              out? Give it a go for yourself!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sungahi;
