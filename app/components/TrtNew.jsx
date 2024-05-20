"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const TrtNew = () => {
  return (
    <div className="flex mt-20 flex-col md:flex-row md:px-20 gap-10 !items-start ">
      <div className="flex-grow-0 flex flex-col gap-5 p-5 md:p-0 !items-start mt-20">
        <h2 className="!text-sm">RELATED RECIPES</h2>
        <h1 className="!text-4xl !text-wrap ">TRY SOMETHING NEW</h1>
        <p className="!text-white !text-base !text-wrap">
          Guinness is a game changing way to elevate your cooking. Visit our
          website to learn how to add that Guinness magic to any occasion.
        </p>
        <a
          className="text-[#B59551] hover:text-orange-200 transition-all ease-in-out duration-200 cursor-pointer"
          href="https://www.guinness.com/en/experiences/guinness-at-home"
        >
          View More Recipes
        </a>
      </div>
      <div className="flex-grow hidden md:flex  !justify-start !items-start  md:flex-row gap-10 overflow-x-scroll md:overflow-hidden ">
        <div className="flex-grow flex flex-col gap-5  md:w-8/12 !items-start justify-start mt-20">
          <div className=" w-fit md:w-full aspect-square relative">
            <span className="absolute bottom-0 left-0 px-3 py-2 bg-black text-white tracking-wider pl-5 pb-5">
              SIDE
            </span>
            <img
              className=" w-11/12 md:aspect-[2/3] lg:aspect-square "
              src="/assests/beers/cheese.avif"
            />
          </div>
          <div className="pl-5">
            <h2 className="text-lg">
              IRISH MASHED POTATO CROQUETTES WITH GUINNESS DRAUGHT CHEESE SAUCE
            </h2>
          </div>
          <div className="pl-5">
            <p className="text-white">
              “Deliciously irresistible Irish mashed potato croquettes, you
              won’t be able to stop at one!”
            </p>
          </div>
          <div className="pl-5">
            <a
              className="text-[#B59551] text-lg"
              href="https://www.guinness.com/en/experiences/recipes/irish-mashed-potato-croquettes-with-guinness-draught-cheese-sauce"
            >
              View Recipe &gt;
            </a>
          </div>
        </div>
        <div className="flex-grow-0 flex md:flex-col md:w-4/12 gap-10">
          <div className="flex-grow-0 flex flex-col gap-5  w-11/12 md:w-fit !items-start">
            <div className="w-[20vw] relative">
              <span className="absolute bottom-0 left-0 px-3 py-2 bg-black text-white tracking-wider">
                DESSERT
              </span>
              <img
                className=" object-cover md:aspect-square lg:aspect-[2/3]"
                src="/assests/beers/cream.avif"
              />
            </div>
            <div className="pl-5">
              <h2 className="text-lg">APPLE & PEAR TART</h2>
            </div>
            <div className="pl-5">
              <p className="text-white">
                “This dessert feels like a belly hug on cold winter days.”
              </p>
            </div>
            <div className="pl-5">
              <a
                className="text-[#B59551] text-lg"
                href="https://www.guinness.com/en/experiences/recipes/apple-pear-tart"
              >
                View Recipe &gt;
              </a>
            </div>
          </div>
          <div className="flex-grow-0 flex flex-col gap-5 w-11/12 md:w-fit !items-start">
            <div className="aspect-square relative">
              <span className="absolute bottom-0 left-0 px-3 py-2 bg-black text-white tracking-wider pl-5 pb-5">
                MAIN
              </span>
              <img
                className="h-full object-cover aspect-square"
                src="/assests/beers/patty.avif"
              />
            </div>
            <div className="pl-5">
              <h2 className="text-lg">BALTIMORE BLONDE FRIED CHICKEN</h2>
            </div>
            <div className="pl-5">
              <p className="text-white">
                “This recipe shows how Guinness can unlock unique flavours and
                new possibilities while cooking at home.”
              </p>
            </div>
            <div className="pl-5">
              <a
                className="text-[#B59551] text-lg"
                href="https://www.guinness.com/en/experiences/recipes/baltimore-blonde-fried-chicken"
              >
                View Recipe &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden w-screen text-left overflow-hidden flex justify-center items-center">
        <Swiper
          centeredSlides={true}
          loop={true}
          className="!justify-center !items-center"
        >
          <SwiperSlide>
            <div className="flex-grow w-screen flex flex-col gap-5  !items-start justify-start ">
              <div className="w-full aspect-square relative">
                <span className="absolute bottom-0 left-0 px-3 py-2 bg-black text-white tracking-wider pl-5 pb-5">
                  SIDE
                </span>
                <img
                  className="  md:aspect-[2/3] lg:aspect-square "
                  src="/assests/beers/cheese.avif"
                />
              </div>
              <div className="pl-5">
                <h2 className=" text-base md:text-lg">
                  IRISH MASHED POTATO CROQUETTES WITH GUINNESS DRAUGHT CHEESE
                  SAUCE
                </h2>
              </div>
              <div className="pl-5">
                <h3 className=" text-sm md:text-lg text-white">
                  “Deliciously irresistible Irish mashed potato croquettes, you
                  won’t be able to stop at one!”
                </h3>
              </div>

              <div className="pl-5">
                <a className="text-[#B59551] text-lg">View Recipe &gt;</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-grow w-screen flex flex-col gap-5  !items-start justify-start ">
              <div className="w-full aspect-square relative">
                <span className="absolute bottom-0 left-0 px-3 py-2 bg-black text-white tracking-wider pl-5 pb-5">
                  SIDE
                </span>
                <img
                  className="  md:aspect-[2/3] lg:aspect-square "
                  src="/assests/beers/cream.avif"
                />
              </div>
              <div className="pl-5">
                <h2 className=" text-base md:text-lg">APPLE & PEAR TART</h2>
              </div>
              <div className="pl-5">
                <h3 className=" text-sm md:text-lg text-white">
                  “This dessert feels like a belly hug on cold winter days.”
                </h3>
              </div>
              <div className="pl-5">
                <a className="text-[#B59551] text-lg">View Recipe &gt;</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex-grow w-screen flex flex-col gap-5  !items-start justify-start ">
              <div className="w-full aspect-square relative">
                <span className="absolute bottom-0 left-0 px-3 py-2 bg-black text-white tracking-wider pl-5 pb-5">
                  SIDE
                </span>
                <img
                  className="  md:aspect-[2/3] lg:aspect-square "
                  src="/assests/beers/patty.avif"
                />
              </div>
              <div className="pl-5">
                <h2 className=" text-base md:text-lg">
                  BAKED CRANBERRY CHEDDAR PUFF PASTRY
                </h2>
              </div>
              <div className="pl-5">
                <h3 className=" text-sm md:text-lg text-white">
                  “A show-stopping starter to impress your family and friends at
                  Christmas dinner.”
                </h3>
              </div>
              <div className="pl-5">
                <a className="text-[#B59551] text-lg">View Recipe &gt;</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="flex-grow w-screen flex flex-col gap-5  !items-start justify-start ">
              <div className="w-full aspect-square relative">
                <span className="absolute bottom-0 left-0 px-3 py-2 bg-black text-white tracking-wider pl-5 pb-5">
                  SIDE
                </span>
                <img
                  className="  md:aspect-[2/3] lg:aspect-square "
                  src="/assests/beers/cheese.avif"
                />
              </div>
              <div className="pl-5">
                <h2 className="text-lg">
                  IRISH MASHED POTATO CROQUETTES WITH GUINNESS DRAUGHT CHEESE
                  SAUCE
                </h2>
              </div>
              <div className="pl-5">
                <p className="text-white">
                  “Deliciously irresistible Irish mashed potato croquettes, you
                  won’t be able to stop at one!”
                </p>
              </div>
              <div className="pl-5">
                <a className="text-[#B59551] text-lg">View Recipe &gt;</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper> */}
    </div>
  );
};

export default TrtNew;
