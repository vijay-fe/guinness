import React from "react";
import TrtNew from "../components/TrtNew";
import Subscribe from "../../component/homepage/subscribe";

const Page = () => {
  return (
    <div className="pt-32 md:pt-36 lg:pt-28 w-full">
      <div className="flex flex-col  w-full items-start !justify-start">
        <div className="pl-10 aspect-[10/6] md:aspect-[10/4.5] overflow-hidden w-full">
          <img
            className=" object-cover opacity-85"
            src="/assests/experiences/home.avif"
          />
        </div>
        <div
          className="relative self-start z-10 flex flex-col md:flex-col w-full md:w-4/6 gap-14 -mt-16 pb-10 md:pb-20 px-10 md:pl-20
         !items-start "
        >
          <h1 className="md:indent-10 text-3xl md:text-4xl lg:text-5xl m-0 w-fit p-0">
            THE GUINNESS EXPERIENCE
          </h1>

          <div>
            <p className="text-white text-lg">
              Whether you&apos;re pulling up a stool at your local pub, catching the
              bartender&apos;s eye before you murmur the all-important four-letter
              word “Pint”, or enjoying a Guinness while cheering on your
              favourite sports team, from your couch or arm in arm at the
              stadium, Guinness is a beer crafted for both those big and small
              moments in life!
            </p>
          </div>
        </div>
      </div>
      <div className="in-container lg:mb-30 mb-20 px-4 md:px-16">
        <div className="">
          <div class="pb-6 pl-4 lg:pb-8 lg:pl-0">
            <h2 class="text-overline uppercase text-white text-lg tracking-wider">
              EXPERIENCE
            </h2>
          </div>
          <div class="relative w-full">
            <div class="relative z-0 cursor-pointer opacity-80">
              <figure class="bg-gradient-bottom aspect-w-3 aspect-[4/5]  md:aspect-[10/6] lg:aspect-[10/4] relative">
                <img
                  src="/assests/experiences/beer2.avif"
                  className="object-cover "
                />{" "}
              </figure>
            </div>
          </div>
          <div class=" lg:-mt-30 pointer-events-none relative z-20 -mt-20 flex w-full flex-col md:-mt-12 lg:w-full lg:flex-row lg:justify-between">
            <div class="z-10 min-h-[120px] w-full px-4 md:px-8 lg:w-2/3 lg:px-10">
              <h3
                class="text-title mb-0 uppercase text-white lg:indent-14 font-bold text-4xl sm:text-4xl
               md:text-5xl lg:text-7xl"
              >
                GUINNESS AT HOME
              </h3>
            </div>
            <div class="pointer-events-auto block w-full bg-black px-4 pt-8 lg:absolute lg:bottom-0 lg:right-0 lg:w-1/3 lg:px-10 lg:pb-0 lg:pt-10 flex flex-col !items-start gap-5 ">
              <div class="prose prose-p:text-body-sm">
                <p className="text-white text-base">
                  Discover the magic of Guinness at home. From mastering your
                  pour, to using new innovations like Guinness Nitrosurge and
                  MicroDraught to emulate that perfect pint of Guinness Draught
                  in the comfort of your own home, we&apos;ve got you covered
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
                <span class="btn-base btn-link btn-chevron relative mt-10 text-amber-500">
                  Find Out More
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="in-container lg:mb-30 mb-20 px-4 md:px-16">
          <section class="hero-banner-container bg-black">
            <div class="relative z-10 w-full">
              <div class="pb-6 pl-4 lg:pb-8 lg:pl-0">
                <h2 class="text-overline uppercase text-white text-lg">
                  EXPERIENCE
                </h2>
              </div>
              <div class="relative">
                <div class="relative z-0 cursor-pointer opacity-70">
                  <figure class="bg-gradient-bottom bg-gradient-to-t from-black to-white aspect-w-3 aspect-[4/5]  md:aspect-[10/6] lg:aspect-[10/4.5] flex justify-center items-center relative">
                    <img
                      src="/assests/experiences/store.avif"
                      className="object-cover"
                    />
                  </figure>
                </div>
              </div>
              <div class="lg:-mt-30 pointer-events-none relative z-20 -mt-20 flex w-full flex-col md:-mt-36 lg:w-full lg:flex-row lg:justify-between">
                <div class="z-10 min-h-[120px] w-full px-4 md:px-8 lg:w-2/3 lg:px-10">
                  <h3 class="text-title mb-0 uppercase text-white lg:indent-14 text-4xl font-bold md:text-5xl lg:text-7xl">
                    GUINNESS STOREHOUSE
                  </h3>
                </div>
                <div class="pointer-events-auto block w-full bg-black px-4 pt-8 lg:absolute lg:bottom-0 lg:right-0 lg:w-1/3 lg:px-10 lg:pb-0 lg:pt-10 flex flex-col gap-5 !items-start">
                  <div class="prose prose-p:text-body-sm">
                    <p className="text-white text-base">
                      Immerse yourself in the unique history, heart and soul of
                      Ireland’s most iconic beer.
                    </p>
                  </div>
                  <a
                    class="block md:inline-block"
                    data-ga-category="EXPERIENCE"
                    data-ga-click_text="Find Out More"
                    data-ga-destination_page_path="/en/experiences/guinness-storehouse"
                    data-ga-event="category_tiles"
                    title="GUINNESS STOREHOUSE"
                    href="/experiences/guinness-storehouse"
                  >
                    <span class="btn-base btn-link btn-chevron relative mt-8 text-amber-500">
                      Find Out More
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <TrtNew />
      <div className="mt-24">
        <div class="in-container lg:mb-30 mb-20 md:px-16">
          <div class="relative flex flex-col md:flex-row-reverse md:items-end lg:items-center">
            <h2 class="text-overline mb-6 px-8 uppercase text-white md:hidden">
              Experience
            </h2>
            <div class="relative w-full flex-1 cursor-pointer">
              <figure class="aspect-w-16 aspect-h-16 bg-gradient-corner-bottom relative w-full overflow-hidden">
                <div>
                  <span> <img src="/assests/experiences/open_gate.avif" /></span>
                </div>
              </figure>
            </div>
            <div class="pointer-events-none relative w-full md:-mr-80 md:basis-9/12 lg:-mr-32 lg:basis-7/12">
              <div class="pl-8 pr-12 pt-0 md:pl-0 md:pr-0 lg:pr-4">
                <div class="relative z-10 -mt-6 w-full md:w-auto">
                  <h2 class="text-overline mb-8 hidden uppercase text-white md:block text-lg tracking-wider">
                    Experience
                  </h2>
                  <h3 class="text-title mb-6 w-full indent-5 uppercase md:indent-10 text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                    Open Gate Brewery{" "}
                  </h3>
                  <div class="pointer-events-auto bg-black md:pr-8 md:pt-8 lg:w-7/12 flex flex-col gap-5 !items-start">
                    <div class="prose prose-p:text-body-sm indent-3">
                      <p className="text-white text-lg">
                        Be the first to taste experimental beers in the Guinness
                        Open Gate Brewery taproom, where Guinness Brewers are
                        given licence to explore new recipes.
                      </p>
                    </div>
                    <a
                      class="block md:inline-block "
                      rel="noreferrer"
                      target="_blank"
                      title="Open Gate Brewery (Baltimore)"
                      href="https://www.guinnessbrewerybaltimore.com/"
                    >
                      <span class="btn-base btn-link btn-chevron relative mt-8 text-[#B59551]">
                        <svg
                          aria-labelledby="title-ex-link desc-ex-link"
                          class="h-6 w-6 black inline-block"
                          id=""
                          role="img"
                          version="1.1"
                          viewBox="0 0 122.6 122.88"
                          x="0px"
                          xmlns="http://www.w3.org/2000/svg"
                          y="0px"
                        >
                          <title>  External Link</title>
                          <desc>Click to open in new tab.</desc>
                          <g>
                            <path
                              d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </svg>{" "}
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
      <Subscribe />
    </div>
  );
};

export default Page;
