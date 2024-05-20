"use client";

import React from "react";
import { Row, Col, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import OurCraft1 from "../../public/assests/homepage/our-craft1.avif";

const HomePageCraft = () => {
  return (
    <div className="w-full">
      <div class="in-container lg:mb-30 mb-20 px-4 md:px-16">
        <section class="hero-banner-container bg-black">
          <div class="relative z-10 w-full">
            <div class="pb-6 pl-4 lg:pb-8 lg:pl-0">
              <h2 class="text-xl font-bold uppercase text-white">OUR CRAFT</h2>
            </div>
            <div class="relative">
              <div class="relative z-0 cursor-pointer opacity-80">
                <figure class="bg-gradient-bottom aspect-w-3 aspect-h-4  md:aspect-[10/7] lg:aspect-[10/4] relative">
                  <Image
                    className="image1"
                    src={OurCraft1}
                    alt="our-craft-img-1"
                  />
                </figure>
              </div>
            </div>
            <div class="lg:-mt-30 pointer-events-none relative z-20 -mt-20 flex w-full flex-col md:-mt-6 lg:w-full lg:flex-row lg:justify-between">
              <div class="z-10 min-h-[120px] w-full px-4 md:px-8 lg:w-2/3 lg:px-10">
                <h3 class=" text-4xl font-bold md:text-5xl lg:text-7xl mb-0 uppercase text-white lg:indent-14">
                  THE STORY OF GUINNESS
                </h3>
              </div>
              <div class="pointer-events-auto block w-full bg-black px-4 pt-8 lg:absolute lg:bottom-0 lg:right-0 lg:w-1/3 lg:px-10 lg:pb-0 lg:pt-10 flex flex-col !items-start gap-5">
                <div class="prose prose-p:text-body-sm text-lg !text-white">
                  <p>
                    From Arthur Guinness&apos; legacy of philanthropy to how
                    Guinness has been taking care of its people for over 200
                    years.
                  </p>
                </div>
                <a
                  className="block md:inline-block"
                  data-ga-category="OUR CRAFT"
                  data-ga-click_text="Find Out More"
                  data-ga-destination_page_path="/en/our-craft/guinness-story"
                  data-ga-event="category_tiles"
                  title="THE STORY OF GUINNESS"
                  href="https://www.guinness.com/en/our-craft/guinness-story"
                >
                  <span className="btn-base btn-link btn-chevron relative mt-8 text-[#B59551]">
                    Find Out More
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePageCraft;
