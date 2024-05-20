"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper/modules";
const Carousel = () => {
  const [marginLeft, setMarginLeft] = useState(-593);
  const handleViewBeerClick = () => {
    window.location.href = "https://www.guinness.com/en/beers/guinness-draught";
  };

  const handleAllBeerClick = () => {
    window.location.href = "https://www.guinness.com/en/beers";
  };
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    if (swiperWrapper) {
      swiperWrapper.style.marginLeft = `-222px`; // Adjust the multiplier as needed
    }
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [RealIndex, setRealIndex] = useState(0);
  const [data, setdata] = useState([
    {
      i: 0,
      url:
        "https://images.ctfassets.net/8nq3bs98o7cv/jb4Bun8BuXIpBx66l8OAq/b41bbe3af43b7a39da1fbc0ec9e05a6a/eyJidWNrZXQiOiJzZXJ2ZXJsZXNzaW1naG5kbHItcHJkIiwia2V5IjoiRENIL2ltYWdlL2pwZWcvMTA4MDE1NjgvTElHSFQgQlVaWl9zbWFsbC5qcGciLCJlZGl0cyI6?fm=avif&w=1200&q=60",
      head: "GUINNESS DRAUGHT",
      desc:
        "There is nothing on this planet like a pint of the black stuff.(short description)",
      tag: "STOUT",
    },

    {
      i: 1,
      url:
        "https://images.ctfassets.net/8nq3bs98o7cv/1xOckUjvl1SaI2Y7Ngra1o/4651955d2cd1941e60414afdd29adf46/guiness00.avif?fm=avif&w=1080&q=60",
      head: "GUINNESS 0.0",
      desc: "The Guinness with everything except the alcohol",
      tag: "STOUT",
    },
    {
      i: 2,
      url:
        "https://images.ctfassets.net/8nq3bs98o7cv/2Y8vmWYAz8dkGeBPcNNseL/f9cf51d855b6a0f13219ca66a441d8ea/Hop_House_13_Lifestyle_Shot_On_Trade_Shot_03_11097_9x16?fm=avif&w=1080&q=60",
      head: "GUINNESS HOP HOUSE 13",
      desc: "A crisp, full flavoured lager packed full of hoppy goodness",
      tag: "LARGER",
    },
    {
      i: 3,
      url:
        "https://images.ctfassets.net/8nq3bs98o7cv/4QM6zI2J5nQohSjiYrfRfF/25c29328050da77447e721e09e513c7e/Fes_Fire_Asia_6sheet_Min?fm=avif&w=1200&q=60",
      head: "GUINNESS FOREIGN EXTRA STOUT",
      desc: "A full flavoured stoud born of a thirst for adventure",
      tag: "STOUT",
    },
    {
      i: 4,
      url:
        "https://images.ctfassets.net/8nq3bs98o7cv/2T9pYUnr9gUNhhAb9xtupC/e1e667d079cd25cc40d7806c869ba65e/Guinness_Smooth_Listing_image_20241.jpeg?fm=avif&w=1080&q=60",
      head: "GUINNESS SMOOTH",
      desc: "All the character of Guinness stout with a extra smooth finish",
      tag: "STOUT",
    },
    {
      i: 5,
      url:
        "https://images.ctfassets.net/8nq3bs98o7cv/4BT66woW4DEndaQnu9puOG/1d8bea16f8c80da975432168c246dc85/Img_2892_R2_1440?fm=avif&w=1920&q=60",
      head: "GUINNESS COLD BREW COFFEE BEER",
      desc: "The brew for the beer and coffee lover",
      tag: "STOUT",
    },
    {
      i: 6,
      url:
        "https://images.ctfassets.net/8nq3bs98o7cv/1WNURfsep4uvkp4DTyr7ii/f315752a012f3fa9257bcc5be6cbea9a/eyJidWNrZXQiOiJzZXJ2ZXJsZXNzaW1naG5kbHItcHJkIiwia2V5IjoiRENIL2ltYWdlL2pwZWcvMTA5OTMyMTMvR3Vpbm5lc3NfQkJRXzExMTkuanBnIiwiZWRpdHMi?fm=avif&w=1920&q=60",
      head: "GUINNESS ORIGNAL",
      desc: "The precursor to every Guinness innovation you've ever enjoyed",
      tag: "STOUT",
    },
    {
      i: 7,
      url:
        "https://images.ctfassets.net/8nq3bs98o7cv/496ZhZlMdW1rs7pdMZKW7l/636363f8d7dc13c557b2aa7cb21204c6/Guinness.com_Wip?fm=avif&w=1920&q=60",
      head: "GUINNESS WEST INDIES PORTER",
      desc:
        "A rich and character porter creator specifically do with stand long haul to the Caribbean American Africa, Africa and south-east Asia",
      tag: "PORTER",
    },
    {
      i: 8,
      url:
        "https://images.ctfassets.net/8nq3bs98o7cv/7IR06AulHgewvV7gFthwZj/2d7378d9ae4d33afbc747e7829815774/Guinness_Baltimore_Blonder_Hero.jpeg?fm=avif&w=1920&q=60",
      head: "GUINNESS BALTIMORE BLONDE",
      desc: "Irish tradition meets American spirit",
      tag: "LAGER",
    },
    {
      i: 9,
      url:
        "https://images.ctfassets.net/8nq3bs98o7cv/2oimLpkIV4OpkkkuwI8MqB/9b48c47e62dad4f3d4e2b458b122885b/Guinness_Special_Export_Listing_Img1.jpeg?fm=avif&w=1080&q=60",
      head: "GUINNESS SPECIAL EXPORT",
      desc: "A classic Irish stout with a distinctly Belgian twist",
      tag: "STOUT",
    },
    {
      i: 10,
      url:
        "https://images.ctfassets.net/8nq3bs98o7cv/2pRr74EgJs0WMSsQEyhsZz/7648d519a5d817e65ab84ecfd7b1ae12/eyJidWNrZXQiOiJzZXJ2ZXJsZXNzaW1naG5kbHItc3RnIiwia2V5IjoibWVkaWEvMXNjaHZiMWMvc2l4LW5hdGlvbnMtdGlsZS02LmpwZyIsImVkaXRzIjp7ImV.jpeg?fm=avif&w=1080&q=60",
      head: "GUINNESS CLEAR",
      desc: "Guinness Clear - make it a night you'll remember",
      tag: "WATER",
    },
  ]);
  const [transValue, setTransValue] = useState(-1136);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    const previousIndex = swiper.previousIndex;
    const swiperWrapper = document.querySelector(".swiper-wrapper");
    if (currentIndex > previousIndex) {
      swiperWrapper.style.marginLeft = `-166px`;
    } else if (currentIndex < previousIndex) {
      swiperWrapper.style.marginLeft = `-278px`;
    }
    setIndex(swiper.realIndex);
  };
  return (
    <>
      <div className="p-content">&nbsp; &nbsp; &nbsp; OUR BEERS</div>

      <Swiper
        effect="coverflow"
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        navigation={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 1,
          modifier: 2.5,
        }}
        modules={[Navigation, EffectCoverflow]}
        // breakpoints={{
        //   0: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 30,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //     spaceBetween: 50,
        //   },
        // }}
        className="beer-selector-carousel h-[394px] w-full select-none md:h-[513px] lg:h-[696px]"
        onSlideChange={handleSlideChange}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              aria-label={item.head}
              className="top"
              role="button"
              tabIndex="0"
            >
              <div className="slide-image pointer-events-none relative w-full">
                <figure className="fig2 aspect-h-4 bg-gradient-corner-bottom relative w-full overflow-hidden transition-all">
                  <img
                    alt={item.head}
                    loading="eager"
                    decoding="async"
                    sizes="(max-width: 768px) 70vw, (max-width: 1200px) 40vw, 25vw"
                    src={item.url}
                    className="w-full crou"
                  />
                </figure>
              </div>
              <div className="object-title hidden transition-opacity lg:block">
                <p className="body-sm-block pt-4 uppercase text-white">
                  {item.head}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pointer-events-none relative -mt-32 max-h-fit w-full px-8 md:mt-0 md:px-16">
        <div className="-mt-42 text-white relative left-0 z-10 w-[295px] md:-mt-40 md:w-[355px] lg:absolute lg:bottom-0 lg:left-[176px] lg:w-[500px] lg:max-w-[500px] xl:left-[216px]">
          <div className="pointer-events-none max-h-72 px-4 transition-all animate-carousel-card-fade-in">
            <h2 className="text-overline order-2 mb-[40px] max-h-72 uppercase">
              {data[index].tag}
            </h2>
            <h3 className="text-display-subtitle order-1 mb-0 line-clamp-3 lg:mb-6">
              {data[index].head}
            </h3>
          </div>
          <div className="bot md:pr-10 lg:bg-black lg:pt-10">
            <div className="object-detail body-sm-block mb-8 text-white">
              <p className="body-sm-block mb-4 lg:mb-8 animate-carousel-card-fade-in">
                {data[index].desc}
              </p>
            </div>
            <div className="viewBeer md:flex-row md:gap-y-0">
              <span className="mr-6">
                <a
                  className="btn-base btn-link btn-chevron"
                  href="/en/beers/guinness-foreign-extra-stout"
                >
                  View This Beer
                </a>
              </span>
              <a className="btn-base btn-link btn-chevron" href="/en/beers">
                All Beers
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
