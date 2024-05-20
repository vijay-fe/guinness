"use client";
import { React, useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
import Experience from "../../public/assests/homepage/experience.avif";
import { useRouter } from "next/navigation";

const HomepageExperience = () => {
  const router = useRouter();
  const [isResponsiveScreen, setIsResponsiveScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsiveScreen(window.innerWidth < 600);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 600) {
        setIsResponsiveScreen(true);
      }
    }
  }, []);

  return (
    <div>
      <div class="in-container lg:mb-30 pt-20 md:pt-32 mb-20 md:px-16">
        <div class="relative flex flex-col !items-start md:flex-row-reverse md:items-end lg:items-center">
          <h2 class="text-base !text-left font-bold mb-6 px-8 uppercase text-white md:hidden">
            EXPERIENCE
          </h2>
          <div class="relative w-full flex-1 cursor-pointer">
            <figure class="aspect-[10/9] bg-gradient-corner-bottom relative w-full overflow-hidden opacity-80">
              <Image src={Experience} alt="experience-img" />
            </figure>
          </div>
          <div class="pointer-events-none relative w-full md:mb-0 md:-mr-80 md:basis-9/12  lg:-mr-32 lg:basis-7/12">
            <div class="pl-8 pr-12 pt-0 md:pl-0 md:pr-0 lg:pr-4">
              <div class="relative z-10 -mt-6 w-full md:w-auto">
                <h2 class="text-overline mb-8 hidden uppercase !text-white md:block">
                  EXPERIENCE
                </h2>
                <h3 class="text-4xl text-white font-bold md:text-5xl lg:text-7xl mb-6 w-full indent-5 uppercase md:indent-10">
                  GUINNESS AT HOME
                </h3>
                <div class="pointer-events-auto bg-black md:pr-8 md:pt-8 lg:w-7/12 flex flex-col !items-start gap-5">
                  <div class="prose prose-p:text-body-sm indent-3">
                    <p className="!text-white text-lg ">
                      Discover the magic of Guinness at home. From mastering
                      your pour, to using new innovations like Guinness
                      Nitrosurge and MicroDraught to emulate that perfect pint
                      of Guinness Draught in the comfort of your own home, we've
                      got you covered
                    </p>
                  </div>
                  <a
                    class="block md:inline-block"
                    data-ga-category="EXPERIENCE"
                    data-ga-click_text="Find Out More"
                    data-ga-destination_page_path="/en/experiences/guinness-at-home"
                    data-ga-event="category_tiles"
                    title="GUINNESS AT HOME"
                    href="/experiences/guinness-at-home"
                  >
                    <span class="btn-base btn-link btn-chevron relative mt-8 text-[#B59551]">
                      Find Out More
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageExperience;
