import React from "react";
import Address from "../components/Address";
import Subscribe from "../../component/homepage/subscribe";

const Page = () => {
  return (
    <>
      <Address />

      <div
        className="mapboxgl-ctrl-attrib-inner  mt-36 lg:mt-28 px-2 md:px-0  lg:px-12 relative "
        role="list"
      >
        <section class="in-container md:mb-30 relative mb-14">
          <div class="relative bg-black text-white">
            <div class="relative w-full">
              <div class="relative mt-16 flex w-full justify-end pl-6 md:mt-[52px] md:pl-0 lg:pt-2">
                <figure class="aspect-[10/8] md:aspect-[10/4] bg-gradient-bottom w-full">
                  <img src="/assests/gifts.avif" />
                </figure>
              </div>
              <div class="relative z-20 -mt-6 flex w-full flex-col justify-between px-8 md:-mt-8 md:flex-row md:px-16">
                <div class="relative md:basis-8/12">
                  <h2 class="text-2xl md:text-3xl mb-[24px] indent-0 md:mb-10 md:indent-6 lg:text-4xl font-bold">
                    SHOP OUR GUINNESS BEER, MERCHANDISE AND HOME BAR
                    ESSENTIALS…GO ON, A BROWSE WON&apos;T HURT
                  </h2>
                  <div class="prose prose-p:text-body-sm md:prose-p:text-body-lg">
                    <div class="prose">
                      <p className=" text-lg lg:text-xl">
                        FROM POLOS TO PINT GLASSES, WE’VE GOT IT ALL!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <div class="in-container lg:mb-30 mb-14">
            <section class="bg-black px-4 lg:px-14">
              <header class="mb-10 px-4 lg:px-6">
                <div>
                  <h3 class="text-overline mb-6 text-white font-bold">
                    WHERE TO BUY
                  </h3>
                </div>
                <div>
                  <div class="prose prose-p:text-body-sm max-w-[725px]">
                    <div class="prose">
                      <p className="text-white text-lg">
                        Whether you’re shopping for a Guinness adorer in your
                        family or need a special gift to wow your hard-to-please
                        boss, we’ve got you covered with beer, merchandise and
                        home bar essentials. Browse our personalisation options
                        to make it a really memorable gift.
                      </p>
                    </div>
                  </div>
                </div>
              </header>
              <div class="relative w-full overflow-hidden">
                <div class="grid w-full grid-cols-12 gap-x-0 gap-y-10 md:gap-x-8 md:gap-y-0 lg:gap-x-10">
                  <div class="col-span-12 md:col-span-6">
                    <div class="relative h-auto">
                      <div>
                        <figure class="aspect-w-3 aspect-h-2 relative">
                          <div>
                            <span>
                              <img src="/assests/beers/guinness.avif" />{" "}
                            </span>
                          </div>
                        </figure>
                        <div class="mt-8 bg-black px-6 lg:mt-10">
                          <div class="card-header">
                            <h2 class="text-headline-2 text-white font-bold">
                              SHOP BEER
                            </h2>
                          </div>
                          <div class="card-body mt-4">
                            <div class="prose prose-p:text-body-sm">
                              <div class="prose">
                                <p className="text-white">
                                  Click here to explore where your nearest
                                  retailers are
                                </p>
                              </div>
                            </div>
                          </div>
                          <button
                            class="btn-gold mt-8 cswidget cs-unloaded cswidget-root _z94nc5jma _n4w2oj1kz"
                            data-asset-id="2201"
                            aria-label="Buy Beer"
                            type="button"
                            data-instanceid="_n4w2oj1kz"
                          >
                            <span class="block md:hidden bg-[#B9965B] px-7 py-4 font-bold">
                              <svg
                                class=""
                                fill="none"
                                height="24"
                                viewBox="0 0 18 17"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6 16.5C5.17299 16.5 4.5 15.827 4.5 15C4.5 14.173 5.17299 13.5 6 13.5C6.82701 13.5 7.5 14.173 7.5 15C7.5 15.827 6.82738 16.5 6 16.5ZM14 16.5C13.173 16.5 12.5 15.827 12.5 15C12.5 14.173 13.173 13.5 14 13.5C14.827 13.5 15.5 14.173 15.5 15C15.5 15.827 14.8274 16.5 14 16.5Z"
                                  fill="white"
                                ></path>
                                <path
                                  clip-rule="evenodd"
                                  d="M3.9792 5.34516C3.93066 5.21147 4.00271 5.13847 5.27271 5.54081L15.5816 5.27336C15.7798 5.27676 15.9565 5.39507 16.0677 5.56595C16.2069 5.78048 16.2383 6.05582 16.1574 6.30193C15.8656 7.18968 15.574 8.11253 15.2825 9.03541C14.9028 10.2378 14.538 11.3932 14.1726 12.4805C13.4036 12.9279 12.9464 12.9323 12.3768 12.938C11.5644 12.946 10.5205 12.9564 9.49104 12.9582L8.82194 12.958C7.61627 12.9552 6.50624 12.9391 5.92859 12.8855C5.74051 12.7968 5.6034 12.6129 5.55288 12.3889C5.50821 12.1907 5.4602 11.9766 5.4094 11.7492L5.24917 11.0296C4.88623 9.39487 4.42835 7.30527 4.02521 5.46495C4.0238 5.45854 4.02198 5.452 4.01984 5.44538L4.00425 5.40496C4.00134 5.39818 3.99836 5.39139 3.99542 5.38465L3.9792 5.34516Z"
                                  fill-rule="evenodd"
                                  stroke="white"
                                  stroke-width="1.8"
                                ></path>
                                <path
                                  d="M4.02169 5.52656L2.93879 1H1"
                                  stroke="white"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.8"
                                ></path>
                              </svg>
                            </span>
                          </button>
                            <button className="bg-[#B9965B] hidden md:block px-7 py-4 font-bold text-black text-lg ">
                              BUY BEER
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-12 md:col-span-6">
                    <div class="relative h-auto">
                      <div>
                        <a href="/en-gb/undefined">
                          <figure class="aspect-w-3 aspect-h-2 relative">
                            <div>
                              <span>
                                <img src="/assests/beers/rj.jpeg" />
                              </span>
                            </div>
                          </figure>
                        </a>
                        <div class="mt-8 bg-black px-6 lg:mt-10 flex flex-col !items-start gap-0">
                          <div class="card-header">
                            <h2 class="text-headline-2 text-white font-bold">
                              SHOP MERCHANDISE
                            </h2>
                          </div>
                          <div class="card-body mt-4">
                            <div class="prose prose-p:text-body-sm">
                              <div class="prose">
                                <p className="text-white">
                                  Everything from your home bar to hoodies…
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            class="btn-gold  mt-8"
                            target="_blank"
                            title="BUY MERCHANDISE"
                            href="https://guinnesswebstore.co.uk/"
                          >
                            <button className="bg-[#B9965B] text-lg font-bold text-nowrap px-7 w-fit py-4 font-bold text-black flex gap-2   ">
                              <img
                                className="h-7 object-contain"
                                src="/assests/beers/link.png"
                              />
                              <>BUY MERCHANDISE</>
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section class="in-container lg:mb-30 mb-20 w-full bg-black md:pl-16">
          <div class="relative ml-[2px] flex  !items-start md:!items-end flex-col md:flex-row-reverse lg:!items-center">
            <h2 class="text-overline font-bold text-base sm:text-lg !text-left text-overline mb-6 px-3 md:px-8 text-white md:hidden">
              GUINNESS STOREHOUSE
            </h2>
            <div class="relative w-full flex-1">
              <figure class="aspect-square bg-gradient-corner-bottom relative w-full overflow-hidden">
                <span class="absolute inset-0 m-0 box-border block overflow-hidden border-0 p-0 opacity-75">
                  <img src="/assests/great.avif" />
                </span>
              </figure>
            </div>
            <div class="relative w-full md:-mr-80 md:basis-9/12 lg:-mr-32 lg:basis-7/12">
              <div class="pl-8 pr-12 pt-0 md:pl-0 md:pr-0">
                <div class="relative z-10 !text-left -mt-6 w-full md:w-auto">
                  <h2 class="text-overline !text-left text-xl font-semibold mb-8 hidden text-white md:block">
                    GUINNESS STOREHOUSE
                  </h2>
                  <h3 class=" text-4xl md:text-5xl text-white font-bold lg:text-7xl mb-0 w-full uppercase mb-10">
                    BUY TICKETS TO VISIT THE HOME OF THE BLACK STUFF
                  </h3>
                  <div class="pointer-events-auto bg-black md:pr-8 md:pt-8 lg:w-7/12">
                    <div class="prose-p:text-body-sm indent-3"></div>
                    <a
                      class="block md:inline-block "
                      rel="noreferrer"
                      target="_blank"
                      title="Guinness Storehouse Link"
                      href="https://www.guinness-storehouse.com/en/home"
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
                        Find Out More 
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-[70vh] pt-10 relative my-20 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d46637865.91627774!2d-104.07892161930098!3d44.48340761152554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGuinness%20Draught%20Available!5e0!3m2!1sen!2sin!4v1715675130410!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Subscribe />
      </div>
    </>
  );
};

export default Page;
