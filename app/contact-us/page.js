import React from "react";
import Subscribe from "../../component/homepage/subscribe";
import Address from "../components/Address";

const page = () => {
  return (<>
<Address/>
    <div className="mt-16">
      <div class="in-container lg:mb-30 relative  pt-16 md:pt-[52px] lg:px-16 lg:pt-0 mb-36">
        <section class="grid lg:-mt-3 lg:grid-flow-row lg:grid-cols-12 lg:grid-rows-1 lg:items-end lg:gap-8">
          <div class="relative z-10 order-1 px-8 pt-2 col-span-12 lg:col-span-8 lg:col-start-2 lg:row-span-1 lg:row-start-1 lg:-mr-8 lg:px-0 lg:pt-0 xl:col-span-6 xl:col-start-2">
            <h2 class=" text-3xl md:text-4xl lg:text-6xl font-bold mb-0 lg:pt-20 ">
              GOT SOMETHING YOU&apos;D LIKE TO SHARE WITH US?
            </h2>
          </div>
          <div class="relative z-10 order-3 col-span-12 bg-black px-8 py-6 lg:order-2 lg:col-span-6 lg:col-start-2 lg:row-span-1 lg:row-start-2 lg:-mr-8 lg:px-0 lg:py-0 lg:pr-10 lg:pt-10 xl:col-span-5 xl:col-start-2">
            <div class="prose prose-p:text-body-sm lg:prose-p:text-body-lg">
              <div class="prose flex flex-col gap-7 !items-start">
                <p className="text-white text-lg lg:text-2xl">
                  Questions about the beer, the company or the website? Tell us
                  your great ideas, what&apos;s bugging you, or what you love about
                  Guinness®.
                </p>
                <p className="text-white text-lg lg:text-2xl">
                  Send an email to&nbsp;
                  <a className="text-[#B59551]" href="mailto:ConsumerInfo.GB@Diageo.com">
                    ConsumerInfo.GB@Diageo.com
                  </a>
                  <span></span>
                </p>
                <p className="text-lg lg:text-2xl text-white">
                  We will only use your data in accordance with our&nbsp;
                  <a
                    href="https://footer.diageohorizon.com/dfs/assets/www.guinness.com/PrivacyPolicy_en.html?locale=en-gb"
                    target="_blank"
                    rel="nofollow noopener"
                    className="!text-[#B59551]"
                  >
                    privacy policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
          <div class="relative z-0 order-2 col-span-12 -mt-16 pl-4 lg:order-3 lg:col-span-9 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:mt-0 xl:col-span-7 xl:col-start-6">
            <figure class="aspect-w-16 aspect-h-12 lg:aspect-h-15 xl:aspect-h-13 bg-gradient-corner-bottom relative w-full">
              {" "}
              <img src="/assests/contact.avif" />{" "}
            </figure>
          </div>
        </section>
      </div>
      <Subscribe/>
    </div>

  </>
  );
};

export default page;
