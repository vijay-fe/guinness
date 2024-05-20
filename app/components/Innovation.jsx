"use client";
import { React, useState, useEffect } from "react";

const Innovation = () => {
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
    <div className=" flex py-24 pb-52 md:py-0 flex-col md:flex-row lg:px-16 w-full md:h-screen relative !justify-end gap-10">
      <div className="flex flex-row justify-start items-start !text-white w-full lg:hidden px-10 font-bold md:absolute">
        {" "}
        OUR CRAFT
      </div>
      <div className="flex flex-col justify-start !items-start  !text-white lg:flex-shrink-0   md:gap-10 absolute bottom-16 md:bottom-0 lg:bottom-auto lg:left-0 pl-5 md:pl-5 lg:pl-10 z-10">
        <div className=" hidden lg:block font-bold">OUR CRAFT</div>
        <div className="">
          <h1 className="!text-white hidden lg:block !indent-12 text-4xl lg:text-7xl text-nowrap">
            {"    "}INNOVATION AT 
            <br className="hidden lg:block" />
            GUINNESS
          </h1>
          <h1 className="!text-white block lg:hidden !indent-12 text-4xl lg:text-7xl text-wrap">
            {"    "}INNOVATION AT GUINNESS
          </h1>
        </div>
        <div className="flex flex-col  !items-start gap-5">
          <div className=" w-full md:w-4/5 lg:w-3/5">
            <p className="!text-white text-wrap !indent-5 bg-black lg:bg-transparent md:p-5 pt-8 pr-10 ">
            Through the years, Guinness&apos; dedication to innovation has remained a key part of the brand&apos;s mission.


            </p>
          </div>
          <div className="flex justify-center items-center">
            <a className="text-[#B9965B] hover:text-amber-100 font-semibold text-base">
              Find Out More &gt;
            </a>
          </div>
        </div>
      </div>
      <div className=" relative !aspect-square overflow-hidden   flex !justify-end h-5/6 lg:flex-grow-0 lg:h-5/6">
        <img
          className="w-full  object-cover opacity-75 z-0"
          src={"/assests/beers/innovation.avif"}
        />
      </div>
    </div>
  );
};

export default Innovation;
