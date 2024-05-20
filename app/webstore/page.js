import React from "react";
import Subscribe from "../../component/homepage/subscribe";

const Page = () => {
  return (
    <main className="pt-10 lg:px-20">
      <section class="in-container">
        <div class="md:mb-30 relative mb-14 mt-20 bg-black pt-2 text-white md:mt-[68px]">
          <div class="relative z-20 -mb-6 flex flex-col md:items-end lg:-mb-12 px-10 ">
            <h2 class=" text-4xl font-bold md:text-5xl lg:text-7xl mb-0 inline-block indent-6 md:max-w-[974px] md:indent-0 md:text-headline-1">
              WELCOME TO THE OFFICIAL GUINNESS WEBSTORE
            </h2>
          </div>
          <div class="relative z-10 flex w-full justify-end before:h-full md:pl-0 pl-4">
            <figure
              class="hero-image-top relative w-full bg-gradient-top aspect-w-16 aspect-h-12 aspect-[10/8] md:aspect-[10/4]"
              id="hero-image-top"
            >
              {" "}
              <img
                src="/assests/webstore/hook.avif"
                className="opacity-80"
              />{" "}
            </figure>
          </div>
          <div class="relative z-10 flex w-full flex-col justify-between md:flex-row md:-mt-16">
            <div class="relative bg-black pl-8 pr-6 pt-6 md:basis-7/12 md:pl-16 md:pr-10 md:pt-10">
              <div class="prose prose-p:text-body-sm md:prose-p:text-body-lg ">
                <div class="prose">
                  <p className="text-lg ">
                    Whether you’re shopping for a Guinness adorer in your family
                    or need a special gift to wow your hard-to-please boss,
                    we’ve got you covered with beer, merchandise and home bar
                    essentials. Browse our personalisation options to make it a
                    really memorable gift. We ship directly from the UK and
                    Ireland right across Europe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="story-block__wrapper in-container relative mb-[80px] w-full bg-black lg:mb-[96px] !text-white">
        <div class="relative w-full lg:w-[55%]">
          <figure class="aspect-w-16 aspect-[10/6] lg:aspect-[4/5] bg-gradient-bottom pointer-events-none relative z-10 w-full overflow-hidden bg-[#160b0e]">
            <span class="absolute inset-0 m-0 box-border block overflow-hidden border-0 p-0">
              <img className="" src="/assests/webstore/hook2.avif" />
            </span>
          </figure>
        </div>
        <div class="pointer-events-none relative z-10 -mt-8 flex w-full flex-col lg:-mt-[35%] lg:min-h-[514px] lg:items-end lg:justify-end lg:pr-16">
          <div class="flex w-11/12 flex-col bg-black p-8 lg:w-[800px] lg:bg-transparent lg:p-0">
            <div class="relative mb-6 lg:mb-8 lg:ml-64">
              <h3 class=" text-4xl md:text-5xl lg:text-7xl mb-0 uppercase text-white transition-opacity delay-100 duration-300 ease-in-out font-bold">
                Guinness Webstore
              </h3>
            </div>
            <div class="pointer-events-auto bg-black lg:p-16 lg:pr-0 flex flex-col gap-5 !items-start ">
              <div class="prose-p:text-body-sm prose-strong:text-white">
                <div class="prose">
                  <p>
                    For all your Guinness beer needs. Enjoy Guinness at home in
                    style all year round.
                  </p>
                </div>
              </div>
              <a
                class="block md:inline-block "
                rel="noreferrer"
                target="_blank"
                title="Visit Guinness Webstore"
                href="https://guinnesswebstore.com/"
                className="!text-[#B59551]"
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
                  Visit Guinness Webstore
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section class="story-block__wrapper in-container relative mb-[80px] w-full bg-black lg:mb-[96px]">
        <div class="relative w-full lg:w-[55%]">
          <figure class="aspect-w-16 aspect-[10/6] lg:aspect-[1] bg-gradient-bottom pointer-events-none relative z-10 w-full overflow-hidden bg-[#160b0e]">
            <span class="absolute inset-0 m-0 box-border block overflow-hidden border-0 p-0">
              {" "}
              <img src="/assests/webstore/hook3.avif" />
            </span>
          </figure>
        </div>
        <div class="pointer-events-none relative z-10 -mt-8 flex w-full flex-col lg:-mt-[35%] lg:min-h-[514px] lg:items-end lg:justify-end lg:pr-16">
          <div class="flex w-11/12 flex-col bg-black p-8 lg:w-[800px] lg:bg-transparent lg:p-0">
            <div class="relative mb-6 lg:mb-8 lg:ml-64">
              <h3 class=" text-4xl md:text-5xl lg:text-7xl mb-0 uppercase text-white transition-opacity delay-100 duration-300 ease-in-out font-bold">
                Glassware
              </h3>
            </div>
            <div class="pointer-events-auto bg-black lg:p-16 lg:pr-0 flex flex-col !items-start gap-5 ">
              <div class="prose-p:text-body-sm prose-strong:text-white">
                <div class="prose">
                  <p className="!text-white">
                    Celebrate any occasion by sharing a toast with a Guinness
                    glass. Pint glasses, tankards, or champagne flutes – you’re
                    sure to find a glass to suit style either as a gift or to
                    add to your own collection.
                  </p>
                </div>
              </div>
              <a
                class="block md:inline-block "
                rel="noreferrer"
                target="_blank"
                title="Shop Glassware"
                href="https://guinnesswebstore.com/collections/official-guinness-glassware"
                className="font-bold !text-[#B59551]"
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
                  Shop Glassware
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="story-block__wrapper in-container relative mb-[80px] w-full bg-black lg:mb-[96px]">
        <div class="relative w-full lg:w-[55%]">
          <figure class="aspect-w-16 aspect-[10/5] lg:aspect-[4/5] bg-gradient-bottom pointer-events-none relative z-10 w-full overflow-hidden bg-[#160b0e]">
            <span class="absolute inset-0 m-0 box-border block overflow-hidden border-0 p-0">
              <img src="/assests/webstore/hook4.avif" />
            </span>
          </figure>
        </div>
        <div class="pointer-events-none relative z-10 -mt-8 flex w-full flex-col lg:-mt-[35%] lg:min-h-[514px] lg:items-end lg:justify-end lg:pr-16">
          <div class="flex w-11/12 flex-col bg-black p-8 lg:w-[800px] lg:bg-transparent lg:p-0">
            <div class="relative mb-6 lg:mb-8 lg:ml-64">
              <h3 class="text-4xl md:text-5xl lg:text-7xl font-bold mb-0 uppercase text-white transition-opacity delay-100 duration-300 ease-in-out">
                Guinness Rugby
              </h3>
            </div>
            <div class="pointer-events-auto bg-black lg:p-16 lg:pr-0 flex flex-col !items-start gap-5">
              <div class="prose-p:text-body-sm prose-strong:text-white">
                <div class="prose">
                  <p className="text-white text-lg">
                    Country or club, it’s time to show your support for your
                    team. We have a wide selection of official Guinness rugby
                    apparel for sports fans and Guinness lovers alike.
                  </p>
                </div>
              </div>
              <a
                class="block md:inline-block "
                rel="noreferrer"
                target="_blank"
                title="Shop Apparel"
                href="https://guinnesswebstore.com/collections/guinness-clothing-accessories"
                className="!text-[#B59551] font-bold"
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
                  Shop Apparel
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="story-block__wrapper in-container relative mb-[80px] w-full bg-black lg:mb-[96px]">
        <div class="relative w-full lg:w-[55%]">
          <figure class="aspect-w-16 aspect-[10/5] lg:aspect-[4/5] bg-gradient-bottom pointer-events-none relative z-10 w-full overflow-hidden bg-[#160b0e]">
            <span class="absolute inset-0 m-0 box-border block overflow-hidden border-0 p-0">
              <img src="/assests/webstore/hook5.avif" />
            </span>
          </figure>
        </div>
        <div class="pointer-events-none relative z-10 -mt-8 flex w-full flex-col lg:-mt-[35%] lg:min-h-[514px] lg:items-end lg:justify-end lg:pr-16">
          <div class="flex w-11/12 flex-col bg-black p-8 lg:w-[800px] lg:bg-transparent lg:p-0">
            <div class="relative mb-6 lg:mb-8 lg:ml-64">
              <h3 class="text-4xl md:text-5xl lg:text-7xl font-bold mb-0 uppercase text-white transition-opacity delay-100 duration-300 ease-in-out">
                Guinness At Home
              </h3>
            </div>
            <div class="pointer-events-auto bg-black lg:p-16 lg:pr-0 flex flex-col !items-start gap-5">
              <div class="prose-p:text-body-sm prose-strong:text-white">
                <div class="prose">
                  <p className="text-white">
                    When you can’t make it to the pub, bring the pub to you!
                    Browse our extensive range of home bar products and make
                    staying at home just as special as going out.
                  </p>
                </div>
              </div>
              <a
                class="block md:inline-block "
                rel="noreferrer"
                target="_blank"
                title="Shop Home Bar"
                href="https://guinnesswebstore.com/collections/guinness-at-home"
                className="font-bold text-[#B59551]"
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
                  Shop Home Bar
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Subscribe/>
    </main>
  );
};

export default Page;
