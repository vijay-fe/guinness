"use client";
import React, { useEffect, useRef, useState } from "react";
import Address from "../components/Address";
import Subscribe from "../../component/homepage/subscribe";
import FaqItem from "../components/FaqItem";
import FaqHolder from "../components/FaqHolder";

const Page = () => {
  const BeersData = [
    {
      question: "What are the key ingredients in Guinness?",
      answer:
        "Our key ingredients – other than inspiration – are roasted barley, malted barley, hops, yeast and water.",
    },
    {
      question: "What is the widget –and how does it work?",
      answer:
        "Glad you asked. The widget is a plastic moulded device that sits on the top of the contents of each can of Guinness Draught. When the can is opened, a small amount of beer and nitrogen, trapped in the widget, is forced out through the beer, which creates the famous surge and creamy head that you find on a pint of Guinness Draught served in a pub. The nitrogen filled ball gives Guinness Draught in cans the taste and texture of a pub-poured pint at home.",
    },
    {
      question: "Is Guinness Draught black?",
      answer:
        "Look closely. Guinness Draught beer is not actually black but rather dark ruby red because of the way the ingredients are prepared. Some raw barley is roasted, in a similar way to coffee beans, which is what gives Guinness Draught its distinctive colour.",
    },
    {
      question: "Why is the head of Guinness Draught creamy white?",
      answer:
        "The creamy white head is created from the 'initiation' and 'surging' of bubbles of nitrogen and carbon dioxide gas as the beer is poured. It's actually the nitrogen that causes the tight white creamy head.",
    },
    {
      question: "Is Guinness vegan friendly?",
      answer:
        "Yes, our new state-of-the-art filtration process has removed the use of isinglass as a means of filtration and therefore made the ingredients in Guinness Draught, Guinness Extra Stout and Guinness Foreign Extra Stout suitable for vegans.",
    },
    {
      question: "What is the alcohol in Guinness?",
      answer: [
        "The alcohol percentage of Guinness varies depending on the product. See below for a breakdown of each beer’s ABV, from highest to lowest.",

        "Guinness Special Export – 8% alcohol by volume (ABV)",

        "Guinness Foreign Extra Stout – 7.5% alcohol by volume (ABV)",

        " West Indies Porter - 6% alcohol by volume (ABV)",

        " Guinness Baltimore Blonde – 5% alcohol by volume (ABV)",

        " Guinness Smooth – 4.5% alcohol by volume (ABV)",

        "  Guinness Draught - 4.2% alcohol by volume (ABV)",

        " Guinness Original / Guinness Extra Stout - 4.2% alcohol by volume (ABV)",

        " Guinness Hop House 13 Lager - 4.1% alcohol by volume (ABV)",

        " Guinness Nitro Cold Brew Coffee – 4% alcohol by volume (ABV)",

        "  Guinness 0.0 – 0% alcohol by volume (ABV)",
      ],
    },
    {
      question: "How many calories in Guinness?",
      answer: [
        "The calorie count in Guinness is different for each beer, and is also based on the serving size (i.e. a pint, or can). See below for the number of calories per liquid volume, from highest to lowest.",
        "        Guinness Foreign Extra Stout – 64kcal per 100ml",
        "        Guinness Special Export – 62kcal per 100ml",
        "        Guinness Smooth - 57kcal per 100ml",
        "        West Indies Porter - 53 kcal per 100ml",
        "        Guinness Blonde American Lager / Guinness Baltimore Blonde Lager – 43kcal per 100ml",
        "        Guinness Draught - 35kcal per 100ml",
        "        Guinness Hop House 13 Lager – 35kcal per 100ml",
        "        Guinness Original / Guinness Extra Stout - 35kcal per 100ml",
        "        Guinness Nitro Cold Brew Coffee – 31kcal per 100mls",
        " Guinness 0.0 - 17kcal per 100ml",
      ],
    },
    {
      question: "How many carbs in Guinness?",
      answer: [
        "The amount of carbs in Guinness ranges for each beer, and is also based on the serving size (i.e. a pint or can). See below for the number of carbs per liquid volume, from highest to lowest.",

        "Guinness Smooth - 7.5g per 100ml",

        "  Guinness Foreign Extra Stout – 5g per 100ml",

        " West Indies Porter – 4.4g per 100ml",

        "Guinness Special Export – 4g per 100ml",

        "Guinness 0.0 – 3.8g per 100ml",

        "Guinness Draught - 3g per 100ml",

        "Guinness Hop House 13 Lager – 3g per 100ml",

        "Guinness Original / Guinness Extra Stout - 3g per 100ml",

        "Guinness Blonde American Lager / Guinness Baltimore Blonde Lager – 3g per 100ml",

        " Guinness Nitro Cold Brew Coffee – 2g per 100ml",
      ],
    },
    {
      question: "Is Guinness a stout?",
      answer:
        "Yes, Guinness is the world's most popular stout. A stout is a category of beer which is best known for its rich dark colour and distinctive creamy head.",
    },
    {
      question: "Does Guinness Draught expire?",
      answer:
        "At Guinness, quality is at the heart of what we do, and we know that the best Guinness is the freshest Guinness. For this reason, we have dedicated Guinness Quality teams who work closely with our licensed partners around the world, doing rigorous checks with utmost care and individual attention. They guarantee that people can expect a pint of Guinness to be beautiful and fresh, whenever and wherever they choose to enjoy it.\nIf enjoying Guinness at home the liquid stays fresh for up to 10 months after the production date printed on the base of the can ",
    },
    {
      question: "Does Guinness have caffeine?",
      answer:
        "Guinness is created using four key ingredients – roasted barley, malted barley, hops, yeast and water and doesn’t contain caffeine.",
    },
    {
      question: "Does Guinness have dairy?",
      answer:
        "Guinness is created using four key ingredients – roasted barley, malted barley, hops, yeast and water making Guinness dairy-free.",
    },
    {
      question: "Does Guinness offer a non-alcoholic option?",
      answer:
        "After four years in development, Guinness recently announced the launch of Guinness 0.0 – the Guinness with everything, except alcohol.\n Guinness 0.0 is the non-alcoholic beer from the brewers at St. James’s Gate that boasts the same beautifully smooth taste, perfectly balanced flavour and unique dark colour of Guinness, without the alcohol.",
    },
  ];

  const InnovationData = [
    {
      question: "What is the Guinness NITROSURGE?",
      answer: "“Guinness NITROSURGE” is a new device from Guinness which uses a patented application of ultrasound technology and connects to the top of your Guinness NITROSURGE can to deliver beautiful Guinness with a smooth, domed head and that rich ruby red colour. The technology puts the craft of the famed two-part pour in your hands, when you’re choosing to enjoy a beautiful Guinness at home.",
    },
    {
      question: "What is Guinness MICRODRAUGHT?",
      answer: [
        "Guinness MICRODRAUGHT is a new cutting-edge technology which serves beautiful, fresh Guinness Draught on tap to outlets around the world, no matter their size or setup.",
        "    The pioneering dispense technology is an innovative solution which will, for the first time, allow Guinness to be poured when a keg system isn’t available, bringing Guinness to new places and new spaces.",
      ],
    },
  ];

  const brewData = [
    {
      question:
        "In Ireland, is Guinness made with water from the River Liffey?",
      answer:
        "No. While the St James's Gate Brewery is situated on the banks of the River Liffey in the heart of Dublin, the water used in our brewing process comes from the Wicklow mountains a little way to the south.",
    },
    {
      question:
        "In how many countries worldwide is Guinness stout brewed and sold?",
      answer:
        "Guinness beer is available in well over 100 countries worldwide and is brewed in over 40. Some of the biggest-selling markets for Guinness Draught include Great Britain, Ireland, Nigeria, US and Cameroon.",
    },
    {
      question: "How much Guinness is sold worldwide?",
      answer:
        "Over 10 million glasses of Guinness stout are enjoyed every single day around the world, and 1,883,200,000 pints are sold every year – that's 1.8 billion, to put it another way.    ",
    },
  ];

  const importantdata = [
    {
      question: "How should Guinness Draught be poured?",
      answer:
        "In the pub or bar the perfect pint of Guinness Draught is served using our famous 'two-part' pour. First, start with a clean, dry glass. Pour the Guinness Draught into a glass tilted at 45 degrees, until it is three-quarters full. Allow the surge to settle before filling the glass completely to the top. Your perfect pint, complete with its creamy white head, just domed proud of the glass rim, is then ready to drink. At home, you should let the can chill for at least 24 hours before pouring the contents of the can into a large glass in one smooth actio",
    },
    {
      question: "How should Guinness in bottles be poured?",
      answer:
        "Start by ensuring that your bottle is perfectly chilled, we would recommend refrigerating it at 8 degrees Celsius for at least 24 hours before you serve. Check that you have the correct, clean glassware before you crack the cap. Tilt the glass and the bottle towards each other, starting both at an angle of 45 degrees. Pour slowly in one single go, the bottle shouldn’t touch the glass at any stage. As you reach the end of the bottle, the head comes just over the top to create a beautiful tanned head. Your perfect Guinness is now ready to drink.",
    },
  ];

  const wheredata = [
    {
      question: "Where can I buy Guinness-branded merchandise?",
      answer:
        "The Guinness company doesn't make its own merchandise, but licenses its trademark to many companies to make merchandise on its behalf. A wide selection of Guinness-branded merchandise, licensed products or originals can be purchased online at the Guinness WebStore.",
    },
    {
      question:
        "I'm coming to Dublin. Tell me how I can visit the home of Guinness.",
      answer:
        "Easy. The Guinness Storehouse would love to welcome you to its home at St. James's Gate. The Guinness Storehouse is a seven-storey tribute to the black stuff – a unique visitor centre opened in 2000 in the heart of the brewery. There you can learn all about our history, brewing process, advertising and more. And then enjoy a perfectly-served pint of Guinness stout while enjoying one of Dublin's best views.",
    },
    {
      question: "Can I visit the Guinness Brewery?",
      answer:
        "Yes, you can! Visit The Guinness Storehouse here, where you can find out all about the Guinness Brewery Experience. This is an intimate and exclusive tour of St. James Gate, where you will embark on an unforgettable journey through the working brewery that has stood there for the past three centuries. Please note this experience is offered in English and is strictly for those over the age of 18.",
    },
  ];

  const beerref = useRef();
  const innovationref = useRef();
  const importantref = useRef();
  const brewref = useRef();
  const whereref = useRef();
  const [beervisible, setbeervisible] = useState(true);
  const [InnovationVisible, setInnovationVisible] = useState(false);
  const [importantVisible, setimportantVisible] = useState(false);
  const [brewVisible, setbrewVisible] = useState(false);
  const [whereVisible, setwhereVisible] = useState(false);

  const [currentactive, setcurrentactive] = useState("beers");

  const beercallbackfun = (entries) => {
    const [entry] = entries;
    setbeervisible(entry.isIntersecting);
  };
  const innovationcallbackfun = (entries) => {
    const [entry] = entries;
    setInnovationVisible(entry.isIntersecting);
  };
  const importantcallbackfun = (entries) => {
    const [entry] = entries;
    setimportantVisible(entry.isIntersecting);
  };
  const brewcallbackfun = (entries) => {
    const [entry] = entries;
    setbrewVisible(entry.isIntersecting);
  };
  const wherecallbackfun = (entries) => {
    const [entry] = entries;
    setwhereVisible(entry.isIntersecting);
  };

  const beeroptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const innovationoptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const importantoptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const brewoptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const whereoptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };

  useEffect(() => {
    const beerobserver = new IntersectionObserver(beercallbackfun, beeroptions);
    if (beerref.current) beerobserver.observe(beerref.current);

    return () => {
      if (beerref.current) beerobserver.unobserve(beerref.current);
    };
  }, [beerref, beeroptions]);

  useEffect(() => {
    const innovationobserver = new IntersectionObserver(
      innovationcallbackfun,
      innovationoptions
    );
    if (innovationref.current)
      innovationobserver.observe(innovationref.current);

    return () => {
      if (innovationref.current)
        innovationobserver.unobserve(innovationref.current);
    };
  }, [innovationref, innovationoptions]);

  useEffect(() => {
    const importantobserver = new IntersectionObserver(
      importantcallbackfun,
      importantoptions
    );
    if (importantref.current) importantobserver.observe(importantref.current);

    return () => {
      if (importantref.current)
        importantobserver.unobserve(importantref.current);
    };
  }, [importantref, importantoptions]);

  useEffect(() => {
    const brewobserver = new IntersectionObserver(brewcallbackfun, brewoptions);
    if (brewref.current) brewobserver.observe(brewref.current);

    return () => {
      if (brewref.current) brewobserver.unobserve(brewref.current);
    };
  }, [brewref, brewoptions]);

  useEffect(() => {
    // console.log(whereref.current);
    const whereobserver = new IntersectionObserver(
      wherecallbackfun,
      whereoptions
    );
    if (whereref.current) whereobserver.observe(whereref.current);

    return () => {
      if (whereref.current) whereobserver.unobserve(whereref.current);
    };
  }, [whereref, whereoptions]);

  useEffect(() => {
    if (beervisible == true) {
      setcurrentactive("beers");
    } else {
      if (InnovationVisible == true) {
        setcurrentactive("innovation");
      } else {
        if (importantVisible == true) {
          setcurrentactive("important");
        } else {
          if (brewVisible == true) {
            setcurrentactive("brew");
          } else {
            if (whereVisible == true) {
              setcurrentactive("where");
            }
          }
        }
      }
    }
  }, [
    beervisible,
    InnovationVisible,
    importantVisible,
    brewVisible,
    whereVisible,
  ]);

  // useEffect(() => {
  //   console.log(currentactive);
  //   console.log(beervisible);
  //   if (InnovationVisible == true) setcurrentactive("innovation");
  // }, [InnovationVisible]);
  // useEffect(() => {
  //   console.log(currentactive);
  //   console.log(beervisible);
  //   if (importantVisible == true) setcurrentactive("important");
  // }, [importantVisible]);
  // useEffect(() => {
  //   console.log(currentactive);
  //   console.log(beervisible);
  //   if (brewVisible == true) setcurrentactive("brew");
  // }, [brewVisible]);
  // useEffect(() => {
  //   console.log(currentactive);
  //   console.log(beervisible);
  //   if (whereVisible == true) setcurrentactive("where");
  // }, [whereVisible]);
  return (
    <>
      <Address />
      <div id="faq" className="relative pt-16 !scroll-smooth">
        <div className="in-container lg:mb-30 relative mb-14 pt-16 md:pt-[52px] lg:px-16 lg:pt-0">
          <section className="grid lg:-mt-3 lg:grid-flow-row lg:grid-cols-12 lg:grid-rows-1 lg:items-end lg:gap-8">
            <div className="relative z-10 order-1 px-8 pt-2 lg:col-span-8 lg:col-start-2 lg:row-span-1 lg:row-start-1 lg:-mr-8 lg:px-0 lg:pt-0 xl:col-span-6 xl:col-start-2">
              <h2 className="  text-3xl md:text-4xl  lg:text-6xl font-bold mb-0 lg:pt-20">
                GIVE US A QUESTION, WE’LL GIVE YOU AN ANSWER… WELL AT LEAST
                WE’LL TRY OUR BEST!
              </h2>
            </div>
            <div className="relative z-10 order-3 col-span-full bg-black px-8 py-6 lg:order-2 lg:col-span-6 lg:col-start-2 lg:row-span-1 lg:row-start-2 lg:-mr-8 lg:px-0 lg:py-0 lg:pr-10 lg:pt-10 xl:col-span-5 xl:col-start-2">
              <div className="prose prose-p:text-body-sm lg:prose-p:text-body-lg">
                <div className="prose">
                  <p className="text-white text-lg">
                    Interested in learning more about Guinness or have a burning
                    question you’d like answered? Check out a selection of the
                    most asked, Guinness related questions below… there’s quite
                    a few!
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-0 order-2 col-span-12 -mt-16 pl-4 lg:order-3 lg:col-span-9 lg:col-start-4 lg:row-span-2 lg:row-start-1 lg:mt-0 xl:col-span-7 xl:col-start-6">
              <figure className="aspect-w-16 aspect-[10/9] lg:aspect-[1] xl:aspect-[10/8] bg-gradient-corner-bottom relative w-full">
                {" "}
                <img src="/assests/faq.avif" />{" "}
              </figure>
            </div>
          </section>
        </div>
        <div className="relative w-full grid grid-cols-12 mt-40 mb-16 gap-10 px-5 md:px-20 ">
          <div className="col-span-4 hidden md:col-span-3 md:-ml-16 md:mb-16 md:block ">
            <div
              className="tab-nav sticky top-52 hidden flex-col md:flex"
              role="tablist"
            >
              <a
                aria-controls="panel-our-beers"
                className={
                  currentactive.localeCompare("beers")
                    ? " group relative w-10/12 cursor-pointer border-t border-solid border-white pb-8 pt-6 font-medium capitalize opacity-60 transition-all duration-500 "
                    : "group relative  cursor-pointer  border-solid border-white   font-medium capitalize  transition-all duration-500 w-full border-t-2 pb-10 pt-8 opacity-100"
                }
                href="#our-beers"
                role="tab"
              >
                <div className="relative ml-16 text-white">
                  <div
                    className={
                      currentactive.localeCompare("beers")
                        ? "text-caption group-aria-selected:text-body-sm relative left-0 inline-block pl-0 text-sm transition-all duration-500 "
                        : " text-caption group-aria-selected:text-body-sm relative  inline-block  text-sm transition-all duration-500 left-full -translate-x-full pl-[calc(16.6667%)]"
                    }
                  >
                    Our Beers
                  </div>
                </div>
              </a>
              <a
                aria-controls="panel-innovation"
                className={
                  currentactive.localeCompare("innovation")
                    ? " group relative w-10/12 cursor-pointer border-t border-solid border-white pb-8 pt-6 font-medium capitalize opacity-60 transition-all duration-500 "
                    : "group relative  cursor-pointer  border-solid border-white   font-medium capitalize  transition-all duration-500 w-full border-t-2 pb-10 pt-8 opacity-100"
                }
                href="#innovation"
                role="tab"
              >
                <div className="relative ml-16 text-white">
                  <div
                    className={
                      currentactive.localeCompare("innovation")
                        ? "text-caption group-aria-selected:text-body-sm relative left-0 inline-block pl-0 text-sm transition-all duration-500 "
                        : " text-caption group-aria-selected:text-body-sm relative  inline-block  text-sm transition-all duration-500 left-full -translate-x-full pl-[calc(16.6667%)]"
                    }
                  >
                    Innovation
                  </div>
                </div>
              </a>
              <a
                aria-controls="panel-the-all-important-pour"
                className={
                  currentactive.localeCompare("important")
                    ? " group relative w-10/12 cursor-pointer border-t border-solid border-white pb-8 pt-6 font-medium capitalize opacity-60 transition-all duration-500 "
                    : "group relative  cursor-pointer  border-solid border-white   font-medium capitalize  transition-all duration-500 w-full border-t-2 pb-10 pt-8 opacity-100"
                }
                href="#the-all-important-pour"
                role="tab"
              >
                <div className="relative ml-16 text-white">
                  <div
                    className={
                      currentactive.localeCompare("important")
                        ? "text-caption group-aria-selected:text-body-sm relative left-0 inline-block pl-0 text-sm transition-all duration-500 "
                        : " text-caption group-aria-selected:text-body-sm relative  inline-block  text-sm transition-all duration-500 left-full -translate-x-full pl-[calc(16.6667%)]"
                    }
                  >
                    The All-Important Pour
                  </div>
                </div>
              </a>
              <a
                aria-controls="panel-our-brewing-credentials"
                className={
                  currentactive.localeCompare("brew")
                    ? " group relative w-10/12 cursor-pointer border-t border-solid border-white pb-8 pt-6 font-medium capitalize opacity-60 transition-all duration-500 "
                    : "group relative  cursor-pointer  border-solid border-white   font-medium capitalize  transition-all duration-500 w-full border-t-2 pb-10 pt-8 opacity-100"
                }
                role="tab"
                href="#our-brewing-credentials"
              >
                <div className="relative ml-16 text-white">
                  <div
                    className={
                      currentactive.localeCompare("brew")
                        ? "text-caption group-aria-selected:text-body-sm relative left-0 inline-block pl-0 text-sm transition-all duration-500 "
                        : " text-caption group-aria-selected:text-body-sm relative  inline-block  text-sm transition-all duration-500 left-full -translate-x-full pl-[calc(16.6667%)]"
                    }
                  >
                    Our Brewing Credentials
                  </div>
                </div>
              </a>
              <a
                aria-controls="panel-where-to-find-us"
                className={
                  currentactive.localeCompare("where")
                    ? " group relative w-10/12 cursor-pointer border-t border-solid border-white pb-8 pt-6 font-medium capitalize opacity-60 transition-all duration-500 "
                    : "group relative  cursor-pointer  border-solid border-white   font-medium capitalize  transition-all duration-500 w-full border-t-2 pb-10 pt-8 opacity-100"
                }
                role="tab"
                href="#where-to-find-us"
              >
                <div className="relative ml-16 text-white">
                  <div
                    className={
                      currentactive.localeCompare("where")
                        ? "text-caption group-aria-selected:text-body-sm relative left-0 inline-block pl-0 text-sm transition-all duration-500 "
                        : " text-caption group-aria-selected:text-body-sm relative  inline-block  text-sm transition-all duration-500 left-full -translate-x-full pl-[calc(16.6667%)]"
                    }
                  >
                    Where To Find Us
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            aria-label="tabbed content navigation"
            class="fixed !bottom-0 z-40 flex w-full flex-col items-center transition-transform duration-500 before:relative before:h-10 before:w-full before:bg-gradient-to-t before:from-black before:opacity-80 before:content-[''] md:hidden translate-y-0 !p-0 h-fit"
          >
            <div class="text-boulder no-scrollbar h-[76px] w-full select-none overflow-y-hidden overflow-x-scroll bg-black !py-4 px-5">
              <div
                class="translate-3d-tx-32 relative box-content flex h-full w-full transition duration-0"
                role="tablist"
              >
                <div class="inline-block h-full w-fit shrink-0">
                  <a
                    aria-controls="panel-our-beers"
                    class={
                      currentactive.localeCompare("beers")
                        ? "text-overline group flex h-full items-center justify-center border-l border-white px-6 uppercase text-white opacity-60 "
                        : "text-overline group flex h-full items-center justify-center border-l border-white px-6 uppercase text-white opacity-100"
                    }
                    href="#our-beers"
                    role="tab"
                  >
                    <span
                      class={
                        currentactive.localeCompare("beers")
                          ? "-translate-y-0 transition-all duration-300"
                          : " transition-all duration-300 -translate-y-2"
                      }
                    >
                      Our Beers
                    </span>
                  </a>
                </div>
                <div class="inline-block h-full w-fit shrink-0">
                  <a
                    aria-controls="panel-innovation"
                    aria-selected="false"
                    class={currentactive.localeCompare("innovation") ? "text-overline group flex h-full items-center justify-center border-l border-white px-6 uppercase text-white opacity-60" : "text-overline group flex h-full items-center justify-center border-l border-white px-6 uppercase text-white opacity-100"}
                    href="#innovation"
                    role="tab"
                  >
                    <span class={currentactive.localeCompare("innovation") ? "-translate-y-0 transition-all duration-300 " : " transition-all duration-300 -translate-y-2"}>
                      Innovation
                    </span>
                  </a>
                </div>
                <div class="inline-block h-full w-fit shrink-0">
                  <a
                    aria-controls="panel-the-all-important-pour"
                    aria-selected="false"
                    class={currentactive.localeCompare("important") ? "text-overline group flex h-full items-center justify-center border-l border-white px-6 uppercase text-white opacity-60" : "text-overline group flex h-full items-center justify-center border-l border-white px-6 uppercase text-white opacity-100"}
                    href="#the-all-important-pour"
                    role="tab"
                  >
                    <span class={currentactive.localeCompare("important") ? "-translate-y-0 transition-all duration-300 " : " transition-all duration-300 -translate-y-2"}>
                      The All-Important Pour
                    </span>
                  </a>
                </div>
                <div class="inline-block h-full w-fit shrink-0">
                  <a
                    aria-controls="panel-our-brewing-credentials"
                    aria-selected="false"
                    class={currentactive.localeCompare("brew") ? "text-overline group flex h-full items-center justify-center border-l border-white px-6 uppercase text-white opacity-60" : "text-overline group flex h-full items-center justify-center border-l border-white px-6 uppercase text-white opacity-100"}
                    href="#our-brewing-credentials"
                    role="tab"
                  >
                    <span class={currentactive.localeCompare("brew") ? "-translate-y-0 transition-all duration-300 " : " transition-all duration-300 -translate-y-2"}>
                      Our Brewing Credentials
                    </span>
                  </a>
                </div>
                <div class="inline-block h-full w-fit shrink-0">
                  <a
                    aria-controls="panel-where-to-find-us"
                    aria-selected="false"
                    class={currentactive.localeCompare("where") ? "text-overline group flex h-full items-center justify-center border-l border-white px-6 uppercase text-white opacity-60" : "text-overline group flex h-full items-center justify-center border-l border-white px-6 uppercase text-white opacity-100"}
                    href="#where-to-find-us"
                    role="tab"
                  >
                    <span class={currentactive.localeCompare("where") ? "-translate-y-0 transition-all duration-300 " : " transition-all duration-300 -translate-y-2"}>
                      Where To Find Us
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-full w-screen  md:w-fit md:col-span-9 md:col-start-4 flex flex-col gap-14 !items-start">
            <FaqHolder
              faqid="our-beers"
              name="Our Beers"
              faqref={beerref}
              data={BeersData}
            />
            <FaqHolder
              faqid="innovation"
              name="INNOVATION"
              faqref={innovationref}
              data={InnovationData}
            />
            <FaqHolder
              faqid="the-all-important-pour"
              name="THE ALL-IMPORTANT POUR"
              faqref={importantref}
              data={importantdata}
            />
            <FaqHolder
              faqid="our-brewing-credentials"
              name="OUR BREWING CREDENTIALS"
              faqref={brewref}
              data={brewData}
            />
            <FaqHolder
              faqid="where-to-find-us"
              name="WHERE TO FIND US"
              faqref={whereref}
              data={wheredata}
            />
          </div>
        </div>
        <Subscribe />
      </div>
    </>
  );
};

export default Page;
