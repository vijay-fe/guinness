"use client";
import { Carousel } from "antd";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Subscribe from "../../../component/homepage/subscribe";

const Page = () => {
  return (
    <div className="pt-10 lg:px-12 w-full">
      <section class="in-container">
        <div class="md:mb-30 relative mb-14 mt-20 bg-black pt-2 text-white md:mt-[68px]">
          <div class="relative z-20 -mb-6 flex flex-col md:items-end lg:-mb-12 px-10 ">
            <h2 class="text-title mb-0 inline-block indent-6 md:max-w-[974px] md:indent-0 text-4xl md:text-4xl lg:text-7xl font-bold">
              WELCOME TO THE HOME OF GUINNESS
            </h2>
          </div>
          <div class="relative z-10 flex w-full justify-end before:h-full md:pl-0 pl-4">
            <figure
              class="hero-image-top relative w-full bg-gradient-top aspect-w-16 aspect-[5/4] md:aspect-[10/4]"
              id="hero-image-top"
            >
              {" "}
              <img
                className="opacity-80"
                src="/assests/experiences/guinness-storehouse/storehouse.avif"
              />
            </figure>
          </div>
          <div class="relative z-10 flex w-full flex-col justify-between md:flex-row md:-mt-16">
            <div class="relative bg-black pl-8 pr-6 pt-6 md:basis-7/12 md:pl-16 md:pr-10 md:pt-10">
              <div class="prose prose-p:text-body-sm md:prose-p:text-body-lg ">
                <div class="prose">
                  <p className="text-lg">
                    If you want to truly immerse yourself in the unique history,
                    heart and soul of Ireland’s most iconic beer, there’s only
                    one place to go – its home. The Guinness Storehouse contains
                    seven unforgettable floors of sights, sounds and sensations
                    in a building that has been brewing beer for over 250 years.
                    Hopping with entertainment, this experience takes you on an
                    immersive experience from grain to glass. From the artful
                    brewing process to the iconic Guinness advertisements that
                    have become pillars of Irish culture throughout the globe,
                    there are so many special things to see. The 9,000 year
                    lease signed and sealed in 1759 by Arthur Guinness himself
                    is so impressive, it’s hard to find something even more
                    special to top it. But there is.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <span className="w-full">
        <section class="in-container lg:mb-30 mb-20 overflow-x-hidden w-full">
          <Carousel
            arrows
            autoplay
            autoplaySpeed={2000}
            className="!text-white"
          >
            <div class="relative !text-white ">
              <section class="in-container lg:mb-30 mb-20 w-full bg-black md:pl-16">
                <div class="relative ml-[2px] flex flex-col md:flex-row-reverse md:items-end lg:items-center">
                  <h3 class="text-overline text-overline mb-6 px-8 text-white md:hidden">
                    UNIQUE GUINNESS EXPERIENCES
                  </h3>
                  <div class="relative w-full flex-1">
                    <figure class="aspect-w-16 aspect-square bg-gradient-corner-bottom relative w-full overflow-hidden">
                      <span class="absolute inset-0 m-0 box-border block overflow-hidden border-0 p-0">
                        {" "}
                        <img src="/assests/experiences/guinness-storehouse/car1.avif" />{" "}
                      </span>
                    </figure>
                  </div>
                  <div class="relative w-full md:-mr-80 md:basis-9/12 lg:-mr-32 lg:basis-7/12">
                    <div class="pl-8 pr-12 pt-0 md:pl-0 md:pr-0">
                      <div class="relative z-10 -mt-6 w-full md:w-auto">
                        <h3 class="text-overline text-overline mb-8 hidden text-white md:block">
                          UNIQUE GUINNESS EXPERIENCES
                        </h3>
                        <h4 class="text-title mb-0 w-full uppercase text-4xl lg:text-8xl font-bold">
                          Visit the Guinness Brewery
                        </h4>
                        <div class="pointer-events-auto bg-black md:pr-8 md:pt-8 lg:w-7/12 flex flex-col gap-3 !items-start">
                          <div class="prose-p:text-body-sm indent-3">
                            <div class="prose">
                              <p>
                                Embark on an unforgettable journey through the
                                working brewery that has stood at St.
                                James&apos;s Gate for the past three centuries.
                              </p>
                            </div>
                          </div>
                          <a
                            class="block md:inline-block "
                            rel="noreferrer"
                            target="_blank"
                            title="https://www.guinness-storehouse.com/en/visit/premium-experiences"
                            href="https://www.guinness-storehouse.com/en/visit/premium-experiences"
                            className="text-[]"
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
                                <title>External Link</title>
                                <desc>Click to open in new tab.</desc>
                                <g>
                                  <path
                                    d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
                                    fill="currentColor"
                                  ></path>
                                </g>
                              </svg>{" "}
                              Find Out More &gt;
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="relative !text-white">
              <section class="in-container lg:mb-30 mb-20 w-full bg-black md:pl-16">
                <div class="relative ml-[2px] flex flex-col md:flex-row-reverse md:items-end lg:items-center">
                  <h3 class="text-overline text-overline mb-6 px-8 text-white md:hidden">
                    UNIQUE GUINNESS EXPERIENCES
                  </h3>
                  <div class="relative w-full flex-1">
                    <figure class="aspect-w-16 aspect-square bg-gradient-corner-bottom relative w-full overflow-hidden">
                      <span class="absolute inset-0 m-0 box-border block overflow-hidden border-0 p-0">
                        <img src="/assests/experiences/guinness-storehouse/car2.avif" />
                      </span>
                    </figure>
                  </div>
                  <div class="relative w-full md:-mr-80 md:basis-9/12 lg:-mr-32 lg:basis-7/12">
                    <div class="pl-8 pr-12 pt-0 md:pl-0 md:pr-0">
                      <div class="relative z-10 -mt-6 w-full md:w-auto">
                        <h3 class="text-overline text-overline mb-8 hidden text-white md:block">
                          UNIQUE GUINNESS EXPERIENCES
                        </h3>
                        <h4 class="text-title mb-0 w-full uppercase text-4xl lg:text-8xl font-bold">
                          BECOME A GUINNESS CONNOISSEUR
                        </h4>
                        <div class="pointer-events-auto bg-black md:pr-8 md:pt-8 lg:w-7/12 flex flex-col gap-3 !items-start">
                          <div class="prose-p:text-body-sm indent-3">
                            <div class="prose">
                              <p>
                                Enjoy a tasting and storytelling journey that
                                delves deeper into the origins and tastes of
                                Guinness.
                              </p>
                            </div>
                          </div>
                          <a
                            class="block md:inline-block "
                            rel="noreferrer"
                            target="_blank"
                            title="https://www.guinness-storehouse.com/en/visit/premium-experiences"
                            href="https://www.guinness-storehouse.com/en/visit/premium-experiences"
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
                                <title>External Link</title>
                                <desc>Click to open in new tab.</desc>
                                <g>
                                  <path
                                    d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
                                    fill="currentColor"
                                  ></path>
                                </g>
                              </svg>{" "}
                              Find Out More &gt;
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="relative !text-white">
              <section class="in-container lg:mb-30 mb-20 w-full bg-black md:pl-16">
                <div class="relative ml-[2px] flex flex-col md:flex-row-reverse md:items-end lg:items-center">
                  <h3 class="text-overline text-overline mb-6 px-8 text-white md:hidden">
                    UNIQUE GUINNESS EXPERIENCES
                  </h3>
                  <div class="relative w-full flex-1">
                    <figure class="aspect-w-16 aspect-square bg-gradient-corner-bottom relative w-full overflow-hidden">
                      <span class="absolute inset-0 m-0 box-border block overflow-hidden border-0 p-0">
                        <img src="/assests/experiences/guinness-storehouse/car3.avif" />
                      </span>
                    </figure>
                  </div>
                  <div class="relative w-full md:-mr-80 md:basis-9/12 lg:-mr-32 lg:basis-7/12">
                    <div class="pl-8 pr-12 pt-0 md:pl-0 md:pr-0">
                      <div class="relative z-10 -mt-6 w-full md:w-auto">
                        <h3 class="text-overline text-overline mb-8 hidden text-white md:block">
                          UNIQUE GUINNESS EXPERIENCES
                        </h3>
                        <h4 class="text-title mb-0 w-full uppercase text-4xl lg:text-8xl font-bold">
                          ENTER THE GUINNESS ARCHIVES
                        </h4>
                        <div class="pointer-events-auto bg-black md:pr-8 md:pt-8 lg:w-7/12 flex flex-col gap-3 !items-start">
                          <div class="prose-p:text-body-sm indent-3">
                            <div class="prose">
                              <p>
                                The Guinness Archive is home to the history,
                                culture and memory of Guinness from 1759 to
                                today.
                              </p>
                            </div>
                          </div>
                          <a
                            class="block md:inline-block "
                            rel="noreferrer"
                            target="_blank"
                            title="https://www.guinness-storehouse.com/en/discover"
                            href="https://www.guinness-storehouse.com/en/discover"
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
                                <title>External Link</title>
                                <desc>Click to open in new tab.</desc>
                                <g>
                                  <path
                                    d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
                                    fill="currentColor"
                                  ></path>
                                </g>
                              </svg>{" "}
                              Find Out More &gt;
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Carousel>
        </section>
      </span>

      <section class="in-container lg:mb-30 mb-14 !text-white">
        <div class="card-batch-3-col-container relative z-10 bg-black px-4 lg:px-16">
          <div class="mb-12 md:px-4 lg:px-6">
            <h3 class="text-overline mb-6 text-white text-lg">
              VISIT THE STOREHOUSE
            </h3>
          </div>
          <div class="relative grid grid-cols-12 gap-2 md:gap-8 md:pt-6 lg:gap-10 lg:pt-8">
            <div class="col-span-12 lg:col-span-4 ">
              <div class=" aspect-[5/4] md:aspect-[6/4] relative">
                {" "}
                <img src="/assests/experiences/guinness-storehouse/sh1.avif" />{" "}
              </div>
              <div class="mt-8 bg-black px-6 lg:mt-10 flex flex-col !items-start gap-7">
                <div class="card-header">
                  <h3 class="text-headline-2 text-sm uppercase  tracking-wide !leading-normal text-white md:text-xl md:leading-none">
                    Exceptional Restaurant Experiences At The Guinness
                    Storehouse
                  </h3>
                </div>
                <a
                  class="block md:inline-block "
                  rel="noreferrer"
                  target="_blank"
                  title="What's On"
                  href="https://www.guinness-storehouse.com/en/eat-and-drink"
                >
                  <span class="btn-base btn-link btn-chevron relative mt-8">
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
                      <title>External Link</title>
                      <desc>Click to open in new tab.</desc>
                      <g>
                        <path
                          d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>{" "}
                    What&apos;s On
                  </span>
                </a>
              </div>
            </div>
            <div class="col-span-12 lg:col-span-4 md:-mt-6 lg:-mt-8">
              <div class="aspect-[6/4] relative">
                {" "}
                <img src="/assests/experiences/guinness-storehouse/sh2.avif" />{" "}
              </div>
              <div class="mt-8 bg-black px-6 lg:mt-10 flex flex-col !items-start gap-7">
                <div class="card-header">
                  <h3 class="text-headline-2 text-sm uppercase !leading-normal text-white md:text-xl md:leading-none">
                    Plan Your Visit To Ireland’s Biggest Visitor Experience
                  </h3>
                </div>
                <a
                  class="block md:inline-block "
                  rel="noreferrer"
                  target="_blank"
                  title="Plan Your Visit"
                  href="https://www.guinness-storehouse.com/en/visit"
                >
                  <span class="btn-base btn-link btn-chevron relative mt-8">
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
                      <title>External Link</title>
                      <desc>Click to open in new tab.</desc>
                      <g>
                        <path
                          d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>{" "}
                    Plan Your Visit
                  </span>
                </a>
              </div>
            </div>
            <div class="col-span-12 lg:col-span-4 ">
              <div class="aspect-[6/4] relative">
                {" "}
                <img src="/assests/experiences/guinness-storehouse/sh3.avif" />
              </div>
              <div class="mt-8 bg-black px-6 lg:mt-10 flex flex-col !items-start gap-7 ">
                <div class="card-header">
                  <h3 class="text-headline-2 text-sm uppercase !leading-normal text-white md:text-xl md:leading-none">
                    Buy Tickets Now
                  </h3>
                </div>
                <a
                  class="block md:inline-block "
                  rel="noreferrer"
                  target="_blank"
                  title="Buy Now"
                  href="https://www.guinness-storehouse.com/en/booking"
                >
                  <span class="btn-base btn-link btn-chevron relative mt-8">
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
                      <title>External Link</title>
                      <desc>Click to open in new tab.</desc>
                      <g>
                        <path
                          d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>{" "}
                    Buy Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="story-block__wrapper in-container relative mb-[80px] mt-20 md:mt-40 w-full bg-black lg:mb-[96px]">
        <div class="relative w-full lg:w-[55%]">
          <figure class="aspect-w-16 aspect-[10/5.5] lg:aspect-square bg-gradient-bottom pointer-events-none relative z-10 w-full overflow-hidden bg-[#160b0e]">
            <span class="absolute inset-0 m-0 box-border block overflow-hidden border-0 p-0">
              <img src="/assests/experiences/guinness-storehouse/gravity.avif" />
            </span>
          </figure>
        </div>
        <div class="pointer-events-none relative z-10 -mt-8 flex w-full flex-col lg:-mt-[35%] lg:min-h-[514px] !items-start lg:!items-end lg:justify-end lg:pr-16 ">
          <div class="flex w-11/12 flex-col bg-black p-8 lg:w-[800px] lg:bg-transparent lg:p-0 !items-start">
            <div class="relative mb-6 lg:mb-8 lg:ml-64">
              <h3 class="text-4xl md:text-5xl lg:text-7xl mb-0 uppercase font-bold text-white transition-opacity delay-100 duration-300 ease-in-out">
                THE GRAVITY BAR
              </h3>
            </div>
            <div class="pointer-events-auto bg-black lg:p-16 lg:pr-0">
              <div class="prose-p:text-body-sm prose-strong:text-white">
                <div class="prose">
                  <p className="text-white text-lg">
                    Doubled in size in 2020, it provides you with unparalleled
                    360-degree views over one of the most beautiful cities in
                    the world. A high point in Dublin, Gravity Bar must be
                    experienced to be believed.
                    <br />
                    With so much to see and do on the floors beneath it, it’s
                    also the perfect place to sit back, relax and enjoy your
                    complimentary pint of Guinness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
    </div>
  );
};

export default Page;
