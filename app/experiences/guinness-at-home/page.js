"use client";
import Image from "next/image";
import React from "react";
import TrtNew from "../../components/TrtNew";
import Subscribe from "../../../component/homepage/subscribe";
import Subgah from "../../components/Subgah";
import Sungahi from "../../components/Sungahi";

const Page = () => {
  return (
    <div className="pt-10  lg:px-12 w-full">
      <section class="in-container">
        <div class="md:mb-30 relative mb-14 mt-20 bg-black pt-2 text-white md:mt-[68px]">
          <div class="relative z-20 -mb-6 flex flex-col md:items-end lg:-mb-12 px-10 ">
            <h2 class=" text-4xl md:text-5xl font-bold lg:text-7xl mb-0 inline-block indent-6 md:max-w-[974px] md:indent-0 lg:text-title">
              GUINNESS AT HOME
            </h2>
          </div>
          <div class="relative z-10 flex w-full justify-end before:h-full md:pl-0 pl-4">
            <figure
              class="hero-image-top relative w-full bg-gradient-top  aspect-h-12 pb-0 "
              id="hero-image-top"
            >
              <img
                src="/assests/experiences/guinness-at-home/at-home.avif"
                className="object-cover opacity-80"
              />
            </figure>
          </div>
          <div class="relative z-10 flex w-full flex-col justify-between md:flex-row md:-mt-16">
            <div class="relative bg-black pl-8 pr-6 pt-6 md:basis-7/12 md:pl-16 md:pr-10 md:pt-10">
              <div class="prose prose-p:text-body-sm md:prose-p:text-body-lg ">
                <div class="prose text-white !text-lg flex flex-col gap-4">
                  <p>
                    Guinness Draught is intrinsically linked to the pub. They’re
                    two sides of the same coin. However, thanks to the creation
                    of the widget in 1988, consumers were eventually able to
                    enjoy the rich, creamy taste of Guinness Draught from the
                    comfort of their own home.
                  </p>
                  <p>
                    Since then, Guinness lovers across the globe have become
                    fascinated with crafting the “perfect” Guinness Draught at
                    home, from mastering the art of pour to exploring with
                    different glassware.
                  </p>
                  <p>
                    While we believe nothing can quite measure up to the magic
                    of the pub, bustling with conversation and character, we’ve
                    also made it our mission to ensure there’s nothing standing
                    in the way of enjoying a beautiful, great tasting Guinness
                    Draught at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subgah />

      <Sungahi />
      <TrtNew />
      <Subscribe />
    </div>
  );
};

export default Page;
