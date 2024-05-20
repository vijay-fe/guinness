"use client";
import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import Image from "next/image";
import AllThingsBeer from "../../public/assests/beers/beer-1.avif";
import CommonBeerComponent from "../components/commonBeerComp";
import CommonBeer1 from "../../public/assests/beers/common-beer1.avif";
import extraStout from "../../public/assests/beers/extra-stout.avif";
import hop from "../../public/assests/beers/guinness_hop_house.avif";
import CommonBeer2 from "../../public/assests/beers/common-beer2.avif";
import coldbeer from "../../public/assests/beers/bold-beer.avif";
import smooth from "../../public/assests/beers/guinness_smooth/first.avif";
import westindies from "../../public/assests/beers/west-indies.avif";
import original from "../../public/assests/beers/original.avif";
import water from "../../public/assests/beers/water.avif";
import CommonBeer3 from "../../public/assests/beers/common-beer3.avif";
import Draught from "../../public/assests/beers/draught.avif";
import HomepageExperience from "../../component/homepage/experience";
import Subscribe from "../../component/homepage/subscribe";
import { RightOutlined } from "@ant-design/icons";
import BeerFooter from "../../component/beers/beerFooter";
import Nav from "../../component/homepage/Nav";
import TrtNew from "../components/TrtNew";
import AtHome from "../components/AtHome";
import Innovation from "../components/Innovation";
import { useRouter } from "next/navigation";

const Page = () => {
  const [state, setstate] = useState(false);
  const router = useRouter();

  function openmore() {
    setstate(true);
  }
  return (
    <>
      <div className="background-black md:px-10 !overflow-x-hidden">
        <div className=" beers-main-container pt-24">
          <div className=" all-things-beer-holder">
            <div className="overlay-beer"></div>
            <Image
              src={AllThingsBeer}
              className="main-beer "
              alt="all-things-beer"
            />
          </div>
          <div className="beers-image-content">
            <h1 className=" heading">ALL THINGS BEER</h1>
            <p className="">
              From the original black stuff to its alcohol-free comrade, we’ve
              covered all bases when it comes to beer. We’re constantly
              innovating to bring you new ways to enjoy one of the world’s
              oldest and most loved drinks, and we won’t settle for anything
              less than perfection.
            </p>
          </div>

          <div className="guiness-draught-content">
            <div className="shift-container">
              <p className=" p-content featured uppercase">Featured Beer</p>
            </div>
            <div className="style-left relative z-10 ">
              <h1 className="heading">GUINNESS DRAUGHT</h1>
              <p className="p-content">A BEER THAT{"'"}S MADE TO BE SAVORED</p>
            </div>

            <Image
              src={Draught}
              alt="draught-img"
              className="draught-img opacity-85 z-0"
            />
          </div>
          <div class="lg:-mt-30 pointer-events-none relative z-20 -mt-20 flex w-full flex-col md:-mt-6 lg:w-full lg:flex-row lg:justify-between">
            <div class="z-10 min-h-[120px] w-full px-4 md:px-8 lg:w-2/3 lg:px-10"></div>
            <div class="pointer-events-auto  w-full bg-black px-4 pt-8 lg:absolute lg:bottom-0 lg:right-0 lg:w-1/3 lg:px-10 lg:pb-0 lg:pt-10 flex flex-col !items-start gap-5">
              <div class="prose prose-p:text-body-sm ">
                <p className="!text-white text-lg">
                  There’s nothing on this planet like a pint of the black stuff.
                  (short description)
                </p>
              </div>
              <a
                className="block text-[#B59551] md:inline-block"
                data-ga-category="OUR CRAFT"
                data-ga-click_text="Find Out More"
                data-ga-destination_page_path="/beers/guinness-draught"
                data-ga-event="category_tiles"
                title="REGENERATIVE FARMING"
                href="/beers/guinness-draught"
              >
                <span class="btn-base btn-link btn-chevron relative mt-8">
                  Find Out More
                </span>
              </a>
            </div>
          </div>

          <CommonBeerComponent
            heading={"STOUT"}
            subheading={"GUINNESS 0.0"}
            content={"Not drinking? There’s a Guinness for that!"}
            imgURL={CommonBeer1}
            url="/beers/guinness-zero"
          />
          <CommonBeerComponent
            heading={"LAGER"}
            subheading={"GUINNESS HOP HOUSE 13"}
            content={
              "A crisp, full flavored lager packed full of hoppy goodness."
            }
            imgURL={hop}
            url={"/beers/guinness-hop-house-13"}
          />
          <CommonBeerComponent
            heading={"STOUT"}
            subheading={"GUINNESS FOREIGN EXTRA STOUT"}
            content={"A taste of the Guinness journey throughout the ages."}
            imgURL={extraStout}
            url={"/beers/guinness-foreign-extra-stout"}
          />

          {!state && (
            <div className="more-beers-holder ">
              <Button className="find-out-btn button" onClick={openmore}>
                SHOW MORE BEERS
              </Button>
            </div>
          )}

          {state && (
            <>
              <CommonBeerComponent
                heading={"STOUT"}
                subheading={"GUINNESS SMOOTH"}
                content={"All the character of Guinness stout with an extra smooth finish"}
                imgURL={smooth}
                url={"/beers/guinness-smooth"}
              />
              <CommonBeerComponent
                heading={"STOUT"}
                subheading={"GUINNESS COLD BREW COFFEE BEER"}
                content={"The brew for the beer AND coffee lover."}
                imgURL={coldbeer}
                url={"/beers/guinness-cold-brew-coffee-beer"}
              />
              <CommonBeerComponent
                heading={"PORTER"}
                subheading={"GUINNESS WEST INDIES PORTER"}
                content={"A world of Guinness history"}
                imgURL={westindies}
                url={"/beers/guinness-west-indies-porter"}
              />
              <CommonBeerComponent
                heading={"STOUT"}
                subheading={"GUINNESS ORIGINAL"}
                content={
                  "The precursor to every Guinness innovation you’ve ever enjoyed."
                }
                imgURL={original}
                url={"/beers/guinness-original"}
              />

              <CommonBeerComponent
                heading={"WATER"}
                subheading={"GUINNESS CLEAR"}
                content={"Guinness clear - make it a night you’ll remember"}
                imgURL={water}
                url={"/beers/guinness-clear"}
              />
            </>
          )}

          {/* <HomepageExperience /> */}
          <AtHome />
          <Innovation />
          {/* <BeerFooter /> */}

          <TrtNew />
          <Subscribe />
        </div>
      </div>
    </>
  );
};

export default Page;
