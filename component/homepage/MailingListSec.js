import React from "react";

const MailingListSec = () => {
  return (
    <>
      <div className="in-container lg:mb-30 relative mb-14 pt-16 md:pt-[52px] lg:px-16 lg:pt-0">
        <section className="grid lg:-mt-3 lg:grid-flow-row lg:grid-cols-12 lg:grid-rows-1 lg:items-end lg:gap-8">
          <div className="relative z-10 order-1 px-8 pt-2 lg:col-span-8 lg:col-start-2 lg:row-span-1 lg:row-start-1 lg:-mr-8 lg:px-0 lg:pt-0 xl:col-span-6 xl:col-start-2">
            <h2 className="text-headline-1 mb-0 lg:pt-20">
              JOIN OUR MAILING LIST
            </h2>
          </div>
          <div className="relative z-10 order-3 col-span-full bg-black px-8 py-6 lg:order-2 lg:col-span-6 lg:col-start-2 lg:row-span-1 lg:row-start-2 lg:-mr-8 lg:px-0 lg:py-0 lg:pr-10 lg:pt-10 xl:col-span-5 xl:col-start-2">
            <div className="prose prose-p:text-body-sm lg:prose-p:text-body-lg">
              <div className="prose">
                <p>
                  Sign up today for exclusive updates, news, and special offers.
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-0 order-2 col-span-12 -mt-16 pl-4 lg:order-3 lg:col-span-9 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:mt-0 xl:col-span-7 xl:col-start-6">
            <figure className="aspect-w-16 aspect-h-12 lg:aspect-h-15 xl:aspect-h-13 bg-gradient-corner-bottom relative w-full">
              <img
                alt="Sign Up Header Image"
                loading="lazy"
                decoding="async"
                className="object-cover"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "cover",
                  color: "transparent",
                }}
                sizes="(max-width: 1023px) 100vw, 60vw"
                srcSet="
                https://images.ctfassets.net/8nq3bs98o7cv/5aRYyHXCBsGg9APB5yjZ5X/beb5b9f2cd5a1dd32ab30c7526f28d75/Hero_Half.png?fm=avif&w=256&q=60   256w,
                https://images.ctfassets.net/8nq3bs98o7cv/5aRYyHXCBsGg9APB5yjZ5X/beb5b9f2cd5a1dd32ab30c7526f28d75/Hero_Half.png?fm=avif&w=320&q=60   320w,
                https://images.ctfassets.net/8nq3bs98o7cv/5aRYyHXCBsGg9APB5yjZ5X/beb5b9f2cd5a1dd32ab30c7526f28d75/Hero_Half.png?fm=avif&w=640&q=60   640w,
                https://images.ctfassets.net/8nq3bs98o7cv/5aRYyHXCBsGg9APB5yjZ5X/beb5b9f2cd5a1dd32ab30c7526f28d75/Hero_Half.png?fm=avif&w=750&q=60   750w,
                https://images.ctfassets.net/8nq3bs98o7cv/5aRYyHXCBsGg9APB5yjZ5X/beb5b9f2cd5a1dd32ab30c7526f28d75/Hero_Half.png?fm=avif&w=828&q=60   828w,
                https://images.ctfassets.net/8nq3bs98o7cv/5aRYyHXCBsGg9APB5yjZ5X/beb5b9f2cd5a1dd32ab30c7526f28d75/Hero_Half.png?fm=avif&w=1080&q=60 1080w,
                https://images.ctfassets.net/8nq3bs98o7cv/5aRYyHXCBsGg9APB5yjZ5X/beb5b9f2cd5a1dd32ab30c7526f28d75/Hero_Half.png?fm=avif&w=1200&q=60 1200w,
                https://images.ctfassets.net/8nq3bs98o7cv/5aRYyHXCBsGg9APB5yjZ5X/beb5b9f2cd5a1dd32ab30c7526f28d75/Hero_Half.png?fm=avif&w=1920&q=60 1920w,
                https://images.ctfassets.net/8nq3bs98o7cv/5aRYyHXCBsGg9APB5yjZ5X/beb5b9f2cd5a1dd32ab30c7526f28d75/Hero_Half.png?fm=avif&w=2048&q=60 2048w,
                https://images.ctfassets.net/8nq3bs98o7cv/5aRYyHXCBsGg9APB5yjZ5X/beb5b9f2cd5a1dd32ab30c7526f28d75/Hero_Half.png?fm=avif&w=3840&q=60 3840w
              "
                src="https://images.ctfassets.net/8nq3bs98o7cv/5aRYyHXCBsGg9APB5yjZ5X/beb5b9f2cd5a1dd32ab30c7526f28d75/Hero_Half.png?fm=avif&w=3840&q=60"
              />
            </figure>
          </div>
        </section>
      </div>
    </>
  );
};

export default MailingListSec;
