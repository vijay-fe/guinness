import React from "react";

const Subgah = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-0 lg:px-20 py-20">
        <span className="h-[90vh] w-full lg:w-1/2 bg-orange-950">
          <video
            className="object-contain h-full"
            muted
            loop
            controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
            src="/assests/beers/classic.mp4"
          >
            <source src="/assests/beers/classic.mp4" />
          </video>
        </span>
        <div style={{ width: "100%", padding: "20px" }}>
          <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-nowrap pt-0 ">
            HOW TO POUR
          </h1>
          <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-nowrap pt-0">
            A CAN OF
          </h1>
          <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-nowrap pt-0 ">
            GUINNESS
          </h1>
          <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-nowrap pt-0 ">
            DRAUGHT
          </h1>
        </div>
      </div>
      <div className="w-full flex z-20 !justify-end !items-center mt-8 pt-5">
        <p className="!text-white text-lg bg-black p-2 lg:p-10 lg:w-3/3 lg:-mt-60 lg:ml-40 ">
          When pouring yourself a can of Guinness Draught at home, we’re very
          much of the mindset - Your Guinness, Your Way! Whether you have a
          preferred method of pouring or a favourite glass you hide at the back
          of the cupboard, follow your own style and enjoy it your way. In
          friend groups the world over, there’s been much debate around whether
          a can of Guinness Draught should be poured at a 45-degree angle or
          using the “hard pour” method. With both methods, all you need to do is
          follow four simple steps. You pull, you pour, it settles, and you
          enjoy! However, it’s the method of pouring that’s up for
          interpretation.
        </p>
      </div>
      {/* <div style={{ paddingBottom: "50px" }}>
        <div class="relative">
          <div style={{ paddingLeft: "20%", margin: "10%" }}>
            <Image
              className="image1"
              src={Mkbeer}
              alt="our-craft-img-1"
              style={{ position: "relative", height: "100%", width: "100%" }}
            />
          </div>
        </div>
        <div class="lg:-mt-30 pointer-events-none relative z-20 -mt-20 flex w-full flex-col md:-mt-6 lg:w-full lg:flex-row lg:justify-between">
          <div class="pointer-events-auto block w-full bg-black px-4 pt-8 lg:absolute lg:bottom-0 lg:right-0 lg:w-1/2 lg:px-10 lg:pb-0 lg:pt-10 flex flex-col !items-start gap-5">
            <div class="prose prose-p:text-body-sm text-lg !text-white">
              <p>
                Some believe it’s all about the classic 45-degree angle, pouring
                into a glass in one go before leaving to settle. However, others
                believe the magic lies in the hard pour, also known as “the
                flip”. Using a clean can, flip the can upside down into the
                glass lifting out slowly as the liquid rises to meet it. The
                only way to find out? Give it a go for yourself!
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Subgah;
