"use client";

import { Row } from "antd";
import React, { useEffect, useState } from "react";
import GuinessZero from "../../../component/beers/guiness-zero";
import HomepageExperience from "../../../component/homepage/experience";
import Subscribe from "../../../component/homepage/subscribe";
import Footer from "../../components/Footer";
import Ourcraft from "../../../component/beers/Ourcraft";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import Carousel from "../../../component/homepage/Carousel.js";
import { useParams, usePathname, useRouter } from "next/navigation";
import Ourstory from "../../components/ourstory";

const Page = () => {
  const router = useRouter();
  const { name } = useParams();
  let pathname = usePathname();
  pathname = pathname.split("/");
  const currentBeerType = pathname[pathname.length - 1].replaceAll("-", "_");
  useEffect(() => {
    if (
      currentBeerType == "guinness_draught" ||
      currentBeerType == "guinness_zero" ||
      currentBeerType == "guinness_foreign_extra_stout" ||
      currentBeerType == "guinness_hop_house_13"
    ) {
      setsideState(true);
    }

    if (currentBeerType == "guinness_zero") {
      setguinnessZero(true);
    }
  }, []);
  // console.log(currentBeerType);
  const BEER_DATA = {
    guinness_draught: {
      MainHeading:
        "THERE’S NOTHING ON THIS PLANET LIKE A PINT OF THE BLACK STUFF.(ABOUT LABLE)''",
      PrimaryParas: [
        "When someone looks at you and says “Pint?”, this is the pint they’re talking about. If you want something else, you’ll have to specify. It’s rich, it’s creamy, and it’s black (well actually, if you look closely, Guinness is ruby red in colour but don’t tell anyone!).",
        "It’s everything it promises to be. Every time. It’s what we’re famous for, and although we love all of our beers just the same, it will always hold a special place in our Guinness Draught loving hearts.",
        "Hopefully yours too. Truly unique. Perfectly balanced.",
        "Not many people know this, but the iconic pint wasn’t the first beer brewed by the man himself*",
        "*The man himself = Arthur Guinness. If you knew that, get yourself a Guinness Draught.",
        "Guinness Draught in fact was only brewed for the first time in 1959 to celebrate the 200-year anniversary since Arthur Guinness signed a 9,000-year lease on St. James’s Gate Brewery. Good man Arthur, he clearly knew a good thing when he saw it!",
      ],
      Aroma: "Hints of roasted coffee and chocolate",
      Appearance: "Dark Ruby Red with a creamy head",
      Taste: "Smoothly balanced with bitter, sweet, roasted notes",
      Alcohol: "4.2%",
      Calories: "35kcal per 100ml",
      Carbs: "3g per 100ml",
      Fat: "0g per 100ml",
      Ingredients: [
        "Water",
        "Malted Barley",
        "Barley",
        "Roasted Barley",
        "Hops",
        "Nitrogen",
        "Yeast",
      ],
      SecondaryHeading: "",
      SecondaryPara: [
        "We won’t lie, it took more than a while to craft this beer, which is why we’re so passionate about the way it’s poured. And by ‘passionate’ we mean ‘proudly obsessed’. This is how we make sure that every single mouthful of your pint tastes exactly as our expert brewers wanted.     ",
        'When in the pub or bar, a beautiful, great tasting pint of Guinness Draught is served using our famous "two-part" pour. First, pour the Guinness Draught into a clean, dry glass tilted at 45 degrees, until it is three-quarters full. Now, it’s time to wait! Allow the surge to settle before filling the glass completely to the top, culminating in a beer that’s made to be savored from your first sip to your last.      ',
        "Pull up a stool and enjoy.      ",
      ],
    },
    guinness_zero: {
      MainHeading: 'NOT DRINKING? THERE’S A GUINNESS FOR THAT!"',
      PrimaryParas: [
        "The Guinness with everything except the alcohol. Guinness 0.0 boasts the same beautifully smooth taste, perfectly balanced flavour, and unique dark colour of Guinness, just without the alcohol.      ",
        "To create Guinness 0.0 the St James’s Gate brewers, start by brewing Guinness exactly as they always have, using the same natural ingredients; water, barley, hops, and yeast; before gently removing the alcohol through a cold filtration method. The cold filtration process allows the alcohol to be filtered out without presenting thermal stress to the beer, protecting the integrity of its taste and character. The brewers then carefully blend and balance the flavours to ensure the distinctive flavour profile and taste characteristics of Guinness.      ",
        "The resulting product is a stout that is unmistakably Guinness, just without the alcohol, featuring the same dark, ruby red liquid and creamy head, hints of chocolate and coffee, smoothly balanced with bitter, sweet and roasted notes.      ",
      ],
      Aroma: "Hints of roasted coffee and chocolate      ",
      Appearance: "Dark Ruby Red with a creamy head      ",
      Taste: "Smoothly balanced with bitter, sweet, roasted notes      ",
      Alcohol: "0%",
      Calories: "71kJ / 17kcal per 100ml",
      Carbs: "3.8g per 100ml",
      Fat: "0g per 100ml",
      Ingredients: [
        "Water",
        "Malted Barley",
        "Barley",
        "Roasted Barley",
        "Fructose",
        "Natural Flavourings",
        "Hops",
        "Yeast",
      ],
      SecondaryHeading: "",
      SecondaryPara: [
        "The journey to launching Guinness 0.0 has drawn on Guinness’s proud 261-year history of innovation and brewing brilliance dating from 1759. A commitment to retaining the distinct character and taste of Guinness was central to the four-year process led by the technical and innovation teams at St. James’s Gate, the Home of Guinness.      ",
      ],
    },
    guinness_foreign_extra_stout: {
      MainHeading: 'A TASTE OF THE GUINNESS JOURNEY THROUGHOUT THE AGES."',
      PrimaryParas: [
        "Guinness Foreign Extra Stout is a full flavored beer, born of a thirst for adventure. Arthur Guinness was an explorer. He explored the senses. He explored taste. He explored texture. And of course, he was determined to explore pastures new and afar.      ",
        "In the early 1800s, while other breweries were content to stay close to home, Guinness struck out into unchartered territories, braving the perils of sea travel to export our distinctive beer across the globe.      ",
        "Brewed with extra hops to preserve the beer in the ships’ holds during voyages of four-to-five weeks in tropical climates, the recipe yielded a powerful drink with bold character.      ",
        "Originally known as West India Porter, Guinness Foreign Extra Stout has evolved throughout the ages, but its soul has stayed the same.      ",
        "Pack your bags, whet your lips and dive in.      ",
      ],
      Aroma:
        "Robust and roasted with intense notes of dark chocolate, caramel and dried fruits      ",
      Appearance: "Black liquid with a frothy head      ",
      Taste:
        "Full Bodied with coffee notes balanced with subtle sweetness      ",
      Alcohol: "7.5%",
      Calories: "267kJ / 64kcal per 100ml",
      Carbs: "5g per 100ml",
      Fat: "0g per 100ml",
      Ingredients: [
        "Water",
        "Malted Barley",
        "Barley",
        "Roasted Barley",
        "Hops",
        "Yeast",
      ],
      SecondaryHeading: "",
      SecondaryPara: [
        "Did you know?      ",
        "Order a ‘Black Bulldog’ in Malaysia and you’ll be handed a bottle of Guinness Foreign Extra Stout. This is because the first export bottlers of Guinness used to add their own symbols to the label to distinguish their bottles and exclusive territories. There were dozens of different symbols, the most famous of which were the bulldog, the wolf, the dog and a cat. Useless fun fact to share at a party? You’re welcome!      ",
      ],
    },
    guinness_hop_house_13: {
      MainHeading:
        'A CRISP, FULL FLAVORED LAGER PACKED FULL OF HOPPY GOODNESS."',
      PrimaryParas: [
        "This double-hopped beauty is just one delicious brew created by the talented team of brewers at our official home of experimentation in Dublin, the Guinness Open Gate Brewery.        ",
        "At St. James’s Gate, we like to think that anything we can dream up, we can brew up and we never stop experimenting with recipes old and new. That way, we get to explore unique flavours with passion, with creativity and with love. And you can taste it all in our beers!        ",
        "The brewer that led the creation of Hop House 13 Lager, Peter Simpson, famously said:        ",
        "“Needs more hops”        ",
        "His fellow brewers obliged and bingo, a crisp, full-flavored lager was born, packed full of uniquely fresh hop aromas and hints of apricot and peach.        ",
        "Where did it get its name you ask? Hop House 13 is named after a 100-year-old building at St. James’s Gate, formerly used to store hops.        ",
      ],
      Aroma: "Sweet and fruity with hints of apricot and peach        ",
      Appearance: "Golden, bright and clear      ",
      Taste:
        "Crisp, full flavoured and refreshing, hoppy but not too bitter with a malty finish        ",
      Alcohol: "4.1%      ",
      Calories: "148kJ / 35 kcal per 100ml",
      Carbs: "3g per 100ml      ",
      Fat: "0g per 100ml      ",
      Ingredients: ["Water", "Malted Barley", "Hops", "Yeast"],
      SecondaryHeading: "",
      SecondaryPara: [
        "Where did it get its name you ask? Hop House 13 is named after a 100-year-old building at St. James’s Gate, formerly used to store hops.        ",
      ],
    },
    guinness_cold_brew_coffee_beer: {
      MainHeading: 'THE BREW FOR THE BEER AND COFFEE LOVER."      ',
      PrimaryParas: [
        "Flavourful notes of Coffee, Chocolate and Caramel make for a delicious yet refreshingly sweet taste sensation. This is Guinness Cold Brew Coffee Beer - Beer with Cold Brew Coffee and natural flavours.       ",
      ],
      Aroma: "Sweet smelling with a distinct coffee/caramel nose      ",
      Appearance: "Dark with a rich creamy head      ",
      Taste:
        "Perfect balance of bitter and sweet caramel with roast coffee character. Mouthfeel is rich, smooth, creamy and balanced with a notable coffee finish.      ",
      Alcohol: "4%",
      Calories: "119kJ / 31kcal per 100ml",
      Carbs: "2g per 100ml",
      Fat: "0g per 100ml",
      Ingredients: [
        "Water",
        "Malted Barley",
        "Barley",
        "Roasted Barley",
        "Hops",
        "Nitrogen",
        "Yeast",
        "Coffee and Natural Coffee Flavours",
      ],
      SecondaryHeading: "",
      SecondaryPara: [
        "This brew not only combines everything you love about coffee and Guinness into one beer, but coffee beer is also the perfect balance of bitter and sweet with a roast coffee flavor. Brewed using cold brew coffee extract and coffee flavors, Guinness Nitro Cold Brew Coffee beer is best enjoyed straight from the can or poured into a clean glass to fully activate the magic of the widget inside the can.      ",
      ],
    },
    guinness_smooth: {
      MainHeading:
        'ALL THE CHARACTER OF GUINNESS STOUT WITH AN EXTRA SMOOTH FINISH"      ',
      PrimaryParas: [
        "Have you ever kissed a marshmallow cloud? Well, neither have we. But if you ever pour someone a glass of Guinness Smooth, watch them closely after their first sip. If the words ‘smooth’ and ‘creamy’ don’t come out of their mouth, please email us and let us know. It’s that simple… or smooth. Get it?        ",
        "Guinness Smooth is as much about the feeling as it is about the taste. Thanks to the creative freedom championed by Arthur Guinness and later generations of Guinness brewers, there’s always been a thirst to tweak recipes and have some fun. Which we do.         ",
        "And this is just one of the results that caught on.        ",
      ],
      Aroma:
        "Roast aroma with a pronounced sweet, chocolate caramel character      ",
      Appearance: "Dark ruby red liquid with a frothy head      ",
      Taste:
        "A smooth and bold beer with a refreshing taste. Brewed to provide the perfect balance of sweet and bitter with smooth roast notes for a smoother refreshing taste        ",
      Alcohol: "4.5%",
      Calories: "238kJ / 57kcal per 100ml",
      Carbs: "7.5g per 100ml",
      Fat: "0g per 100ml",
      Ingredients: [
        "Water",
        "Malted Barley",
        "Barley",
        "Roasted Barley",
        "Sorghum",
        "Hops",
        "Yeast",
      ],
      SecondaryHeading: "",
      SecondaryPara: [
        "The science bit? Nitrogenation. Guinness Smooth is a bottled stout that’s alive with bubbles of nitrogen. It takes all the taste of Guinness and gives it new verve.        ",
      ],
    },
    guinness_west_indies_porter: {
      MainHeading: 'A WORLD OF GUINNESS HISTORY"      ',
      PrimaryParas: [
        "Back in the early 1800s, the Guinness brewers were faced with a challenge: how do we keep our beer fresh on long sea voyages to distant drinkers? If you haven’t heard, Guinness brewers love a challenge, so they put their ingenious heads together and purposely brewed a beer containing extra hops, acting as a natural preservative.     ",
        "Did it work? Of course, it did! In fact, the recipe worked so well, the rich and characterful porter was quickly shipped to the Caribbean, America, Africa and Southeast Asia.      ",
      ],
      Aroma: "Toffee caramel with slight chocolate notes      ",
      Appearance: "Ruby red with a frothy head      ",
      Taste:
        "Complex but smooth and mellow with a sweet, chocolate flavour      ",
      Alcohol: "6%",
      Calories: "222kJ / 53 kcal per 100ml",
      Carbs: "4.4g per 100ml",
      Fat: "0g per 100ml",
      Ingredients: [
        "Water",
        "Malted Barley",
        "Barley",
        "Roasted Barley",
        "Hops",
        "Yeast",
      ],
      SecondaryHeading: "",
      SecondaryPara: [
        "There’s an entry in the Guinness Brewer’s Diary from 1801 that talks about the dream to create a recipe perfect for keeping beer fresh over long hauls.      ",
        "It appears dreams do come true.      ",
      ],
    },
    guinness_original: {
      MainHeading:
        "THE PRECURSOR TO EVERY GUINNESS INNOVATION YOU’VE EVER ENJOYED.      ",
      PrimaryParas: [
        "Every Guinness you’ve ever enjoyed can be traced back to this recipe. A direct descendant of our archival recipes, Guinness Extra Stout is based on a beer first brewed in 1821, when Arthur Guinness II set down precise instructions for brewing his Superior Porter. Sharp and crisp to the taste with the trademark Guinness flavors at its core.      ",
      ],
      Aroma:
        "Subtly fruity with warming, roasted notes of coffee and dark chocolate      ",
      Appearance: "Dark ruby red with a frothy head      ",
      Taste:
        "Crisp and balanced with bitter, sweet, roasted notes and a dry finish      ",
      Alcohol: "4.2%",
      Calories: "148kJ / 35kcal per 100ml",
      Carbs: "3g per 100ml      ",
      Fat: "0g per 100ml      ",
      Ingredients: [
        "Water",
        "Malted Barley",
        "Barley",
        "Roasted Barley",
        "Hops",
        "Yeast",
      ],
      SecondaryHeading: "",
      SecondaryPara: [
        "It’s been over 200 years since this family favourite was born and, as Guinness moves forward, it’s safe to say history accompanies us in every bottle still enjoyed by people all over the world.      ",
        "For Guinness Original, we are eternally grateful.      ",
      ],
    },
    guinness_clear: {
      MainHeading: 'GUINNESS CLEAR - MAKE IT A NIGHT YOU’LL REMEMBER"      ',
      PrimaryParas: [
        "There’s nothing better than spending time with your mates and enjoying the rugby. But too much of a good thing can mean you overdo it - and nobody wants that.      ",
        "That’s why Guinness Clear is a gamechanger – it will keep you hydrated and help you stay in control.      ",
        "Wherever you’re enjoying the Six Nations, moderate your drinking with Guinness Clear - and make it a night you’ll remember.      ",
      ],
      Aroma: "",
      Appearance: "",
      Taste: "",
      Alcohol: "",
      Calories: "",
      Carbs: "",
      Fat: "",
      Ingredients: [],
      SecondaryHeading: "",
      SecondaryPara: [],
    },
  };

  const [sideState, setsideState] = useState(false);
  const [guinnessZero, setguinnessZero] = useState(false);
  const [waterpage, setwaterpage] = useState(false);

  return (
    <div className="bg-black scroll-smooth w-full !box-border">
      <div className="flex lg:px-12 w-full gap-10 !items-start pt-24">
        <div
          className={
            sideState
              ? "flex-grow h-[80vh]  w-8/12 mt-10 "
              : "flex-grow h-[80vh]  w-full mt-10 "
          }
        >
          <img
            className="object-cover h-full opacity-90"
            src={`/assests/beers/${currentBeerType}/first.avif`}
          />
        </div>
        {sideState && (
          <div className=" hidden md:flex flex-col  !items-start gap-5 lg:-mt-20 w-4/12 lg:w-3/12 flex-grow-0 ">
            <div>
              <img
                className="aspect-square"
                src={`/assests/beers/${currentBeerType}/second.avif`}
              />
            </div>
            <div className="w-10/12">
              <img
                className="aspect-square"
                src={`/assests/beers/${currentBeerType}/third.avif`}
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex px-3 gap-10 lg:gap-0 !items-start lg:!items-start md:px-14 w-full flex-col lg:flex-row pt-10 pb-20 h-fit lg:max-h-[100vh]">
        <div className="flex flex-col w-full lg:w-9/12 lg:pr-24 !items-start gap-10 -mt-16 ">
          <div className="flex gap-2  ">
            <span className="-mt-14">
              <img
                className="relative z-10 h-28 md:h-[75px] object-contain"
                src="/assests/beers/quote.png"
              />
            </span>{" "}
            <h1 className="z-10 text-2xl md:text-4xl indent-3">
              {BEER_DATA[currentBeerType].MainHeading}
            </h1>
          </div>
          <div className="!text-white flex flex-col gap-7  !items-start px-3 md:px-12 md:pr-36">
            {BEER_DATA[currentBeerType].PrimaryParas.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
            {currentBeerType == "guinness_clear" && (
              <>
                <h1 className="text-xl">A FLAVOUR UNLIKE ANYTHING ELSE</h1>
                <p>Made to a time-honoured recipe.</p>
              </>
            )}
          </div>
          {/* {currentBeerType != "guinness_clear" && (
            <div className=" px-3 md:px-10">
              <button className="bg-[#B9965B] px-7 py-4 font-bold text-black text-lg ">
                BUY BEER
              </button>
            </div>
          )} */}
        </div>
        {currentBeerType != "guinness_clear" && (
          <div className="flex flex-col !justify-center  self-center gap-5 w-fit !items-start lg:w-3/12 mr-10">
            <div className="flex   ">
              <span className="w-14 mr-9 flex-shrink-0">
                <img className=" object-cover" src="/assests/beers/aroma.png" />
              </span>
              <span className="!text-white ">
                <h2 className="text-xl font-bold font-gotham">Aroma</h2>
                <p className="text-lg">{BEER_DATA[currentBeerType].Aroma}</p>
              </span>
            </div>
            <div className="flex   ">
              <span className="w-14 mr-9 flex-shrink-0">
                <img
                  className=" object-cover"
                  src="/assests/beers/appearance.png"
                />
              </span>
              <span className="!text-white ">
                <h2 className="text-xl font-bold font-gotham">Appearance</h2>
                <p className="text-lg">
                  {BEER_DATA[currentBeerType].Appearance}
                </p>
              </span>
            </div>
            <div className="flex ">
              <span className="w-14 mr-9 flex-shrink-0">
                <img
                  className=" object-contain max-h-14"
                  src="/assests/beers/taste.png"
                />
              </span>
              <span className="!text-white flex-shrink">
                <h2 className="text-xl font-bold font-gotham">Taste</h2>
                <p className="text-lg">{BEER_DATA[currentBeerType].Taste}</p>
              </span>
            </div>
          </div>
        )}
      </div>

      {currentBeerType == "guinness_clear" ? (
        <div className=" relative flex flex-col lg:flex-row px-5 py-20 gap-10 !items-center lg:mb-[80vh] ">
          <div className=" relative lg:h-[85vh] xl:h-[95vh] w-full lg:w-1/2  md:px-10 md: bg-amber-950 lg:px-10 xl:px-20 lg:pr">
            <video
              className="!h-full mx-auto object-cover"
              muted
              src={`/assests/beers/${currentBeerType}/fourth.mp4`}
            />
          </div>
          <div className="relative flex flex-col items-center lg:flex-row h-full justify-center w-fit lg:w-1/2 gap-8 px-4 md:pl-0  lg:px-20 ">
            <h1 className=" relative lg:-ml-40 text-4xl md:text-6xl lg:text-7xl">
              THE SCIENCE OF GUINNESS CLEAR
            </h1>
            <div className=" lg:absolute lg:w-[55vw] z-20 md:p-16 flex flex-col gap-3 text-start !items-start   bg-black top-full lg:mt-20 right-0">
              {" "}
              <p className="!text-white text-wrap">
                “We created Guinness Clear to help you feel the benefits of
                spacing your drinks with water” – Joseph Glendenning: Master
                Brewer
              </p>
              <p className="!text-white text-wrap">
                Drinking plenty of water, on an occasion when you’re enjoying
                alcohol, keeps you hydrated and helps you moderate your
                drinking.
              </p>
              <p className="!text-white text-wrap">
                It takes your body about one hour to process a unit of alcohol.
              </p>
              <p className="!text-white text-wrap">
                Spacing your drinks with water gives your body time to process
                the alcohol in your system.
              </p>
              <p className="!text-white text-wrap">
                As well as drinking plenty of water, the tips below will help
                you get the most out of your night:
              </p>
              <p className="!text-white text-lg font-bold text-wrap">
                Before you Pour
              </p>
              <ul className="!list-disc !text-white px-10 flex flex-col gap-2 !items-start">
                <li>
                  If you’re going out, think about how you’re going to get home
                  before you leave home. Grab a cab or designate a driver.
                </li>
                <li>
                  Whether you’re staying in or going out, have a meal before you
                  start drinking or grab a bite to eat while you’re enjoying a
                  drink. Eating before or while drinking slows alcohol
                  absorption.
                </li>
                <li>
                  Decide how much you will drink before you start your night.
                </li>
              </ul>
              <p className="!text-white text-lg font-bold text-wrap">
                During the night
              </p>
              <ul className="!list-disc !text-white px-10 flex flex-col gap-2 !items-start">
                <li>Look out for each other and make sure everyone is ok</li>
                <li>
                  Drink plenty of water and space your drinks out with
                  non-alcohol ones
                </li>
                <li>
                  Keep track of how many drinks you have consumed and stick to
                  your plan
                </li>
                <li>
                  If someone you’re with has had too much to drink, watch out
                  for them and make sure they get home safely
                </li>
              </ul>
              <p className="!text-white text-wrap"></p>
              <p className="!text-white text-wrap"></p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row px-5 py-20 gap-10 !items-start">
          <div className="h-[75vh] md:w-1/2 lg:w-4/6 md:px-10 md:pr-0 lg:px-20 lg:pr-0">
            <img
              className="h-full object-cover"
              src={`/assests/beers/${currentBeerType}/fourth.avif`}
            />
          </div>
          {currentBeerType != "guinness_clear" ? (
            <div className="relative flex flex-col md:flex-row !items-start w-fit gap-8 px-10 md:pl-0  lg:px-20 lg:pl-0">
              <div className="flex flex-row gap-12 md:gap-0 md:flex-col !items-start">
                <div className="!text-white !justify-start !items-start flex flex-col">
                  <div className="flex flex-col gap-2 !items-start">
                    <h2 className="text-2xl font-bold">Alcohol</h2>
                    <p>{BEER_DATA[currentBeerType].Alcohol}</p>
                  </div>
                  <div className="flex flex-col gap-2 !items-start">
                    <h2 className="text-2xl font-bold">Calories</h2>
                    <p>{BEER_DATA[currentBeerType].Calories}</p>
                  </div>
                </div>
                <div className="flex flex-row flex-col !text-white">
                  <div className="flex flex-col gap-2 !items-start">
                    <h2 className="text-2xl font-bold">Carbs</h2>
                    <p>{BEER_DATA[currentBeerType].Carbs}</p>
                  </div>
                  <div className="flex flex-col gap-2 !items-start">
                    <h2 className="text-2xl font-bold">Fat</h2>
                    <p>{BEER_DATA[currentBeerType].Fat}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col !items-start gap-8">
                <h1 className=" text-xl sm:text-3xl md:text-4xl">
                  INGREDIENTS
                </h1>
                <span className="!text-white flex flex-col gap-2 !justify-start !items-start">
                  {BEER_DATA[currentBeerType].Ingredients.map((item, index) => {
                    return (
                      <p key={index} className="!m-0 !p-0">
                        {item}
                      </p>
                    );
                  })}
                </span>
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col md:flex-row !items-start w-fit md:w-1/2 gap-8 px-10 md:pl-0  lg:px-20 lg:pl-">
              <h1>THE SCIENCE OF GUINNESS CLEAR</h1>
            </div>
          )}
        </div>
      )}

      {/* <div className="flex flex-col md:flex-row px-20 py-20 gap-10 !items-start">
        {currentBeerType != "guinness_clear" ? (
          <div className="relative flex flex-col md:flex-row !items-start w-fit gap-8 px-10 md:pl-0  lg:px-20 lg:pl-0">
            <div className="flex flex-row gap-12 md:gap-0 md:flex-col !items-start">
              <div className="!text-white !justify-start !items-start flex flex-col">
                <div className="flex flex-col gap-2 !items-start">
                  <h2 className="text-2xl font-bold">Alcohol</h2>
                  <p>{BEER_DATA[currentBeerType].Alcohol}</p>
                </div>
                <div className="flex flex-col gap-2 !items-start">
                  <h2 className="text-2xl font-bold">Calories</h2>
                  <p>{BEER_DATA[currentBeerType].Calories}</p>
                </div>
              </div>
              <div className="flex flex-row flex-col !text-white">
                <div className="flex flex-col gap-2 !items-start">
                  <h2 className="text-2xl font-bold">Carbs</h2>
                  <p>{BEER_DATA[currentBeerType].Carbs}</p>
                </div>
                <div className="flex flex-col gap-2 !items-start">
                  <h2 className="text-2xl font-bold">Fat</h2>
                  <p>{BEER_DATA[currentBeerType].Fat}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col !items-start gap-8">
              <h1 className=" text-xl sm:text-3xl md:text-4xl">INGREDIENTS</h1>
              <span className="!text-white flex flex-col gap-2 !justify-start !items-start">
                {BEER_DATA[currentBeerType].Ingredients.map((item, index) => {
                  return (
                    <p key={index} className="!m-0 !p-0">
                      {item}
                    </p>
                  );
                })}
              </span>
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col md:flex-row !items-start w-fit md:w-1/2 gap-8 px-10 md:pl-0  lg:px-20 lg:pl-">
            <h1>THE SCIENCE OF GUINNESS CLEAR</h1>
          </div>
        )}
      </div> */}

      {currentBeerType != "guinness_clear" && (
        <>
          <div className="flex w-full !justify-center !items-center bg-black ">
            <div
              className="bg-black p-7 md:w-4/5 lg:w-3/5 text-sm !text-white md:-mt-52 md:ml-36 lg:ml-60 "
              style={{ marginLeft: "40%" }}
            >
              {BEER_DATA[currentBeerType].SecondaryPara.map((item) => {
                return (
                  <>
                    <p>{item}</p>
                    <br />
                  </>
                );
              })}
            </div>
          </div>

          {currentBeerType == "guinness_draught" && (
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
                <div>
                  <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-nowrap pt-10 text-center">
                    CLASSIC POUR
                  </h1>
                </div>
              </div>
              <div className="w-full flex z-20 !justify-center !items-center">
                <p className="!text-white text-lg bg-black p-5 lg:p-16 lg:w-3/5 lg:-mt-60 lg:ml-40 ">
                  To achieve the hard pour, open your Guinness Draught in a Can
                  and wait for that unmistakable hiss. Very quickly, turn the
                  can 180 degrees upside down and pour vertically into a clean
                  pint glass. Take the can out of the glass slowly until all the
                  liquid has been dispensed, and let it settle. Ah, just
                  perfect!
                </p>
              </div>
              <div className="flex flex-col lg:flex-row p-0 lg:px-20 py-20">
                <span className="h-[90vh] w-full lg:w-1/2 bg-orange-950">
                  <video
                    className="object-contain h-full"
                    loop
                    muted
                    controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
                  >
                    <source src="/assests/beers/hard.mp4" />
                  </video>
                </span>
                <div>
                  <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-8xl pt-10 text-center">
                    HARD POUR
                  </h1>
                </div>
              </div>
              <div className="w-full flex z-20 !justify-center !items-center pb-16">
                <p className="!text-white text-lg bg-black p-5 lg:p-16 lg:w-3/5 lg:-mt-60 lg:ml-40 ">
                  To achieve the hard pour, open your Guinness Draught in a Can
                  and wait for that unmistakable hiss. Very quickly, turn the
                  can 180 degrees upside down and pour vertically into a clean
                  pint glass. Take the can out of the glass slowly until all the
                  liquid has been dispensed, and let it settle. Ah, just
                  perfect!
                </p>
              </div>
            </>
          )}
          <Carousel />
          <div className="flex mt-20 flex-col md:flex-row md:px-20 gap-10 !items-start ">
            <div className="flex-grow-0 flex flex-col gap-5 p-5 md:p-0 !items-start mt-20">
              <h2 className="!text-sm">RELATED RECIPES</h2>
              <h1 className="!text-4xl !text-wrap ">TRY SOMETHING NEW</h1>
              <p className="!text-white !text-base !text-wrap">
                Guinness is a game changing way to elevate your cooking. Visit
                our website to learn how to add that Guinness magic to any
                occasion.
              </p>
              <a
                className="text-[#B59551] hover:text-orange-200 transition-all ease-in-out duration-200 cursor-pointer"
                href="#"
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
                    IRISH MASHED POTATO CROQUETTES WITH GUINNESS DRAUGHT CHEESE
                    SAUCE
                  </h2>
                </div>
                <div className="pl-5">
                  <p className="text-white">
                    “Deliciously irresistible Irish mashed potato croquettes,
                    you won’t be able to stop at one!”
                  </p>
                </div>
                <div className="pl-5">
                  <a className="text-[#B59551] text-lg">View Recipe &gt;</a>
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
                    <a className="text-[#B59551] text-lg">View Recipe &gt;</a>
                  </div>
                </div>
                <div className="flex-grow-0 flex flex-col gap-5 w-11/12 md:w-fit !items-start">
                  <div className="aspect-square relative">
                    <span className="absolute bottom-0 left-0 px-3 py-2 bg-black text-white tracking-wider pl-5 pb-5">
                      STARTER
                    </span>
                    <img
                      className="h-full object-cover aspect-square"
                      src="/assests/beers/patty.avif"
                    />
                  </div>
                  <div className="pl-5">
                    <h2 className="text-lg">
                      BAKED CRANBERRY CHEDDAR PUFF PASTRY
                    </h2>
                  </div>
                  <div className="pl-5">
                    <p className="text-white">
                      “A show-stopping starter to impress your family and
                      friends at Christmas dinner.”
                    </p>
                  </div>
                  <div className="pl-5">
                    <a className="text-[#B59551] text-lg">View Recipe &gt;</a>
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
                        IRISH MASHED POTATO CROQUETTES WITH GUINNESS DRAUGHT
                        CHEESE SAUCE
                      </h2>
                    </div>
                    <div className="pl-5">
                      <h3 className=" text-sm md:text-lg text-white">
                        “Deliciously irresistible Irish mashed potato
                        croquettes, you won’t be able to stop at one!”
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
                      <h2 className=" text-base md:text-lg">
                        APPLE & PEAR TART
                      </h2>
                    </div>
                    <div className="pl-5">
                      <h3 className=" text-sm md:text-lg text-white">
                        “This dessert feels like a belly hug on cold winter
                        days.”
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
                        “A show-stopping starter to impress your family and
                        friends at Christmas dinner.”
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
          <Ourcraft />

          <Ourstory />
          {/* <div className="bg-black p-10 lg:pl-28 py-10 flex flex-col gap-7 w-10/12 lg:w-7/12 text-white  ">
        <h2 className="w-full text-sm font-bold font-gotham tracking-wider">
          WHERE TO BUY
        </h2>
        <p className="w-full text-sm">
          Whether you’re shopping for a Guinness adorer in your family or need a
          special gift to wow your hard-to-please boss, we’ve got you covered
          with beer, merchandise and home bar essentials. Browse our
          personalisation options to make it a really memorable gift.
        </p>
      </div>
      <div className="bg-black  flex-col gap-20 lg:gap-10 md:flex-row pb-24 px-5 lg:px-20 flex justify-center font-gotham">
        <div className="flex flex-col  pr-0 items-start gap-5">
          <div className="flex ">
            <img src="/assests/beers/guinness.avif" />
          </div>
          <div className="flex flex-col justify-start items-start w-full pl-10 gap-4">
            <div className="w-full">
              <h2 className="m-0 p-0 font-bold font-gotham">SHOP BEER</h2>
            </div>
            <div className="w-full">
              <p className="text-white">
                Click here to explore where your nearest retailers are
              </p>
            </div>
            <div className="w-full">
              <button className="bg-[#B9965B] px-7 py-4 font-bold text-black text-lg ">
                BUY BEER
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col  pl-0 items-start gap-5">
          <div className="flex ">
            <img src="/assests/beers/rj.jpeg" />
          </div>
          <div className="flex flex-col justify-start items-start w-full pl-10 gap-4">
            <div className="w-full">
              <h2 className="m-0 p-0 font-bold">SHOP MERCHANDISE</h2>
            </div>
            <div className="w-full">
              <p className="text-white">
                Everything from your home bar to hoodies…
              </p>
            </div>
            <div className="w-full">
              <button className="bg-[#B9965B] px-7 w-fit py-4 font-bold text-black flex gap-2   ">
                <img
                  className="h-7 object-contain"
                  src="/assests/beers/link.png"
                />
                <p className="text-lg font-bold w-fit text-nowrap">
                  BUY MERCHANDISE
                </p>
              </button>
            </div>
          </div>
        </div>
      </div> */}
        </>
      )}
      <div
        className={
          currentBeerType == "guinness_clear"
            ? "background-black d-flex justify-center lg:!pt-24"
            : "background-black d-flex justify-center"
        }
      >
        <Row className="homepage-main-container ">
          <Subscribe />
        </Row>
      </div>
    </div>
  );
};

export default Page;
