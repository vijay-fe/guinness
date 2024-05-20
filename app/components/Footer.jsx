"use client";
import { Switch } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const privacyStateData = {
    how_cookies: "How We Use Cookies",
    necessary_cookies: "Strictly Necessary Cookies",
    functional_cookies: "Functional Cookies",
    performance_analy_cookies: "Performance and Analytics Cookies",
    advertising_cookies: "Advertising Cookies",
  };

  const [openPrivacy, setopenPrivacy] = useState(false);

  const [privayMaintain, setprivayMaintain] = useState("How We Use Cookies");
  const [obj, setObj] = useState({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  });
  const handleIndex = (i) => {
    index === i ? setIndex(0) : setIndex(i);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        if (window.innerWidth > 816) {
          setObj({
            a: true,
            b: true,
            c: true,
            d: true,
          });
          setIndex(true);
        } else {
          setObj({
            a: 1,
            b: 2,
            c: 3,
            d: 4,
          });
          setIndex(0);
        }
      });
      if (window.innerWidth > 816) {
        setObj({
          a: true,
          b: true,
          c: true,
          d: true,
        });
        setIndex(true);
      } else {
        setObj({
          a: 1,
          b: 2,
          c: 3,
          d: 4,
        });
        setIndex(0);
      }
    }
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [
    typeof window !== "undefined" && window?.innerWidth,
    typeof window !== "undefined" && window?.innerHeight,
  ]);
  return (
    <footer className="overflow-hidden !box-border">
      {obj && (
        <div className="foot-top">
          <div className="foot-items">
            <div className="foot-item head">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("/beers", "_blank");
                }}
              >
                BEERS{" "}
              </span>
              <svg
                className="plus "
                onClick={() => handleIndex(1)}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                ></path>
              </svg>
            </div>
            {index === obj.a && (
              <div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open("/beers/guinness-draught", "_blank");
                  }}
                >
                  GUINNESS DRAUGHT
                </div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open("/beers/guinness-zero", "_blank");
                  }}
                >
                  GUINNESS 0.0
                </div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open("/beers/guinness-hop-house-13", "_blank");
                  }}
                >
                  GUINNESS HOP HOUSE 13
                </div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open(
                      "/beers/guinness-foreign-extra-stout",
                      "_blank"
                    );
                  }}
                >
                  GUINNESS FOREIGN EXTRA STOUT
                </div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open("/beers/guinness-smooth", "_blank");
                  }}
                >
                  GUINNESS SMOOTH
                </div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open(
                      "/beers/guinness-cold-brew-coffee-beer",
                      "_blank"
                    );
                  }}
                >
                  GUINNESS COLD BREW COFFEE BEER
                </div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open("/beers/guinness-west-indies-porter", "_blank");
                  }}
                >
                  GUINNESS WEST INDIES PORTER
                </div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open("/beers/guinness-original", "_blank");
                  }}
                >
                  GUINNESS ORIGINAL
                </div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://www.guinness.com/en/beers/guinness-baltimore-blonde",
                      "_blank"
                    );
                  }}
                >
                  GUINNESS BALTIMORE BLONDE
                </div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://www.guinness.com/en/beers/guinness-special-export",
                      "_blank"
                    );
                  }}
                >
                  GUINNESS SPECIAL EXPORT
                </div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open("/beers/guinness-clear", "_blank");
                  }}
                >
                  GUINNESS CLEAR
                </div>
              </div>
            )}
          </div>
          <div className="foot-items cursor-pointer">
            <div className="foot-item head">
              <span style={{ cursor: "pointer" }}>OUR CRAFT</span>
              <svg
                className="plus "
                onClick={() => handleIndex(2)}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                ></path>
              </svg>
            </div>
            {index === obj.b && (
              <div>
                <div className="foot-item cursor-pointer">
                  THE STORY OF GUINNESS
                </div>
                <div className="foot-item cursor-pointer">
                  GUINNESS ADVERTISING
                </div>
                <div className="foot-item cursor-pointer">
                  THE STORY OF INNOVATION
                </div>
                <div className="foot-item cursor-pointer">
                  GUINNESS NITROSURGE
                </div>
                <div className="foot-item cursor-pointer">
                  GUINNESS MICRODRAUGHT
                </div>
                <div className="foot-item cursor-pointer">HOMECOMING</div>
              </div>
            )}
          </div>
          <div className="foot-items cursor-pointer">
            <div className="foot-item head">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  window.open("/experiences", "_blank");
                }}
              >
                EXPERIENCES
              </span>
              <svg
                className="plus "
                onClick={() => handleIndex(3)}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                ></path>
              </svg>
            </div>
            {index === obj.c && (
              <div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open("/experiences/guinness-storehouse", "_blank");
                  }}
                >
                  GUINNESS STOREHOUSE
                </div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open("/experiences/guinness-at-home", "_blank");
                  }}
                >
                  GUINNESS AT HOME
                </div>
                <div
                  className="foot-item cursor-pointer"
                  onClick={() => {
                    window.open(
                      "https://www.guinness.com/en/experiences/recipes",
                      "_blank"
                    );
                  }}
                >
                  RECIPES & PAIRINGS
                </div>
                <div className="foot-item">
                  <Link
                    href="https://www.guinnessopengate.com/"
                    target="_blank"
                  >
                    GUINNESS OPEN GATE BREWERY DUBLIN{" "}
                    <svg
                      aria-labelledby="title-ex-link desc-ex-link"
                      class="h-4 w-4 black inline-block"
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
                    </svg>
                  </Link>{" "}
                </div>
                <div className="foot-item">
                  {" "}
                  <Link
                    href={"https://www.guinnessbrewerybaltimore.com/"}
                    target="_blank"
                  >
                    GUINNESS OPEN GATE BREWERY BALTIMORE{" "}
                    <svg
                      aria-labelledby="title-ex-link desc-ex-link"
                      class="h-4 w-4 black inline-block"
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
                    </svg>
                  </Link>{" "}
                </div>
              </div>
            )}
          </div>
          <div className="cnt-shop-find  ">
            <div className="foot-items">
              <div className="foot-item head cursor-pointer">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("/webstore");
                  }}
                >
                  SHOP
                </span>
                <svg
                  className="plus "
                  onClick={() => handleIndex(4)}
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                  ></path>
                </svg>
              </div>
              {index === obj.d && (
                <div>
                  <div
                    className="foot-item cursor-pointer"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open("/webstore", "_blank");
                    }}
                  >
                    BUY GUINNESS MERCHANDISE
                  </div>
                </div>
              )}
            </div>
            <div className="foot-items !py-10 md:!py-0 border-t-2 border-solid border-gray-400 md:border-none">
              <div className="foot-item head !hidden md:!block">
                <span>FIND OUT MORE</span>
              </div>
              <div
                className="foot-item  cursor-pointer"
                onClick={() => {
                  window.open("/find-great-guinness", "_blank");
                }}
              >
                FIND GREAT GUINNESS
              </div>
              <div
                className="foot-item cursor-pointer"
                onClick={() => {
                  window.open("/frequently-asked-questions", "_blank");
                }}
              >
                FAQ
              </div>
              <div
                className="foot-item  cursor-pointer"
                onClick={() => {
                  window.open("/signup", "_blank");
                }}
              >
                SIGN-UP
              </div>
              <div
                className="foot-item cursor-pointer"
                onClick={() => {
                  window.open("/contact-us", "_blank");
                }}
              >
                CONTACT US
              </div>
            </div>
          </div>
          <div className="foot-items drop !gap-5 ">
            <select className="dropdown" name="" id="">
              <option value="">Rest of the world</option>
              <option value="">United Kingdom</option>
              <option value="">Ireland</option>
              <option value="">United States of Amarica</option>
              <option value="">Africa</option>
              <option value="">Canada (English)</option>
              <option value="">Spain</option>
              <option value="">Malaysia</option>
              <option value="">Germany</option>
            </select>
            <div className="icons ">
              <Link
                href={"https://www.instagram.com/guinness/"}
                target="_blank"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                  </svg>
                </div>
              </Link>
              <Link
                href={"https://www.facebook.com/guinness.beer.98622/"}
                target="_blank"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="divider w-full opacity-0 md:opacity-100 !m-8 md:!my-16"></div>
      <div className="btm-cnt !w-full flex flex-col md:flex-row  !gap-10 md:px-10 lg:px-10  ">
        <div class="flex  w-fit  flex-wrap md:flex-nowrap   md:h-fit  flex-grow-0 !items-center  !justify-center gap-y-2 space-x-6 space-y-0 ">
          <a
            aria-label="Guinness open gate external"
            class="col-start-1 row-span-full flex justify-center items-center h-14 md:h-fit w-fit md:w-16 items-center justify-center"
            href="https://www.guinnessbrewerybaltimore.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="Guinness Open Gate"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              class="object-contain h-full md:h-fit md:w-full"
              style={{ color: "transparent", objectFit: "contain" }}
              src="/assests/gblogo.png"
            />
          </a>

          <a
            aria-label="Guinness Storehouse external"
            class="relative flex justify-center items-center h-10 w-fit md:w-20 md:h-fit"
            href="https://www.guinness-storehouse.com/en"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="Guinness Storehouse"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              class=" object-contain text-transparent h-full md:h-fit md:w-full"
              style={{ color: "transparent", objectFit: "contain" }}
              src="/assests/store.svg"
            />
          </a>

          <a
            aria-label="Guinness Webstore external"
            class="relative flex justify-center items-center h-10 md:h-fit items-center w-fit md:w-20"
            href="https://guinnesswebstore.com/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              alt="Guinness Webstore"
              loading="lazy"
              decoding="async"
              data-nimg="1"
              class="object-contain text-transparent h-full md:h-fit md:w-full"
              style={{ color: "transparent", objectFit: "contain" }}
              src="/assests/webstore.svg"
            />
          </a>
        </div>
        <div className=" w-full flex flex-col h-full !justify-center !items-center !gap-5">
          <div className="cnt !gap-5  flex flex-row w-full !justify-center items-center">
            <div className="foot-btm">
              {" "}
              <Link
                href={
                  "https://footer.diageohorizon.com/dfs/assets/www.guinness.com/TnC_en.html?locale=en-row"
                }
                target="_blank"
              >
                Conditions of Use
              </Link>
            </div>
            <div className="foot-btm">
              {" "}
              <Link
                href={
                  "https://www.diageoprivacycentre.com/en-gb?pp=https%3A%2F%2Ffooter.diageohorizon.com%2Fdfs%2Fassets%2Fwww.guinness.com%2FPrivacyPolicy_en.html%3Flocale%3Den-row"
                }
                target="_blank"
              >
                Diageo Privacy Centre
              </Link>
            </div>
            <div className="foot-btm">
              {" "}
              <Link
                href={
                  "https://footer.diageohorizon.com/dfs/assets/www.guinness.com/UGC_en.html?locale=en-row"
                }
                target="_blank"
              >
                Community Guidelines
              </Link>
            </div>
            <div className="foot-btm">
              {" "}
              <Link
                href={
                  "https://footer.diageohorizon.com/dfs/assets/www.guinness.com/www.guinness.com_en-row_final_accessibility.html"
                }
                target="_blank"
              >
                Accessibility
              </Link>
            </div>
            <div className="foot-btm" style={{ cursor: "pointer" }}>
              {" "}
              <span
                onClick={() => {
                  setopenPrivacy(true);
                }}
              >
                Privacy Settings
              </span>
            </div>
            <div className="foot-btm">
              {" "}
              <Link
                href={
                  "https://footer.diageohorizon.com/dfs/assets/www.guinness.com/PrivacyPolicy_en.html?locale=en-row"
                }
                target="_blank"
              >
                Privacy and Cookie Notice
              </Link>
            </div>
            <div className="foot-btm">
              {" "}
              <Link href={"https://www.responsibility.org/"} target="_blank">
                Drink responsibly
              </Link>
            </div>
            <div className="foot-btm">
              {" "}
              <Link href={"https://www.drinkiq.com/en-us"} target="_blank">
                DrinkIQ
              </Link>
            </div>
            <div className="foot-btm">
              {" "}
              <Link href={"https://us.thebar.com/"} target="_blank">
                theBar.com
              </Link>
            </div>
            <div className="foot-btm">© Guinness & Co 2024</div>
            <div className="foot-btm text-center !leading-normal">
              Please do not share with anyone under the legal purchase age for
              alcohol. Drink Responsibly.
            </div>
          </div>
        </div>
      </div>
      {openPrivacy && (
        <div className="fixed w-screen flex z-[100] !justify-center !items-center h-screen bg-black bg-opacity-60 top-0 left-0">
          <div className="md:max-h-[600px] w-screen h-screen md:max-w-[750px] rounded-sm bg-white">
            <div className="w-full h-full flex flex-col  ">
              <div className="p-4 flex w-full !justify-between ">
                <div className="flex  justify-start gap-3 ">
                  <div>
                    <img
                      className="h-10 object-contain"
                      src="https://cdn-ukwest.onetrust.com/logos/a9d71640-d3c6-49bc-bdfc-3b401ef238f2/5e6cdc75-fad3-4422-853e-1c630a40b431/Diageo-Logo-Gold.png"
                    />
                  </div>
                  <h1 className="text-gray-500 text-2xl !font-thin text-nowrap">
                    Manage Cookies
                  </h1>
                </div>
                <div>
                  <img
                    onClick={() => {
                      setopenPrivacy(false);
                    }}
                    src="/assests/cross.png"
                    className="h-5"
                  />
                </div>
              </div>
              <div className="border-t-2 border-solid border-gray-400 w-full border-opacity-30 border-b-2 flex-grow flex !items-start overflow-auto">
                <div className=" w-full md:w-4/12">
                  <div>
                    <div
                      className={
                        `bg-slate-100 p-3  text-gray-500 font-medium ` +
                        (privayMaintain.includes("Use") &&
                          " bg-gray-50 border-l-8 border-b-2 border-black border-solid ")
                      }
                    >
                      <h3
                        onClick={(e) => {
                          setprivayMaintain(privacyStateData.how_cookies);
                        }}
                      >
                        {privacyStateData.how_cookies}
                      </h3>
                    </div>
                  </div>
                  {privayMaintain.includes("Use") && (
                    <div className="p-5 md:hidden">
                      <div className="flex flex-col text-sm gap-3 text-gray-400">
                        <div className="w-full flex justify-between">
                          <h3 className="text-base text-left text-gray-500 ">
                            How We Use cookies
                          </h3>
                        </div>
                        <div>
                          When you browse or use our websites or apps (as well
                          as certain third-party websites with whom we have
                          partnered), we and our partners use cookies and
                          similar technologies to collect information
                          automatically from one or more devices associated with
                          you. The information does not usually directly
                          identify you, but it can give you a more personalised
                          web experience.
                        </div>
                        <div>
                          Our consumers are at the heart of what we do. Your
                          privacy is important to us and we won’t set any
                          optional cookies unless you enable them. Click on the
                          different category headings to find out more and to
                          select the cookies you’re happy for us to use. Even if
                          you decide to accept cookies now, you can change your
                          mind at any time.
                        </div>
                        <div>
                          For information about these cookies, how to delete
                          them and the processing of your personal data, please
                          visit our Privacy and Cookie Notice.
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <div
                      className={
                        `bg-slate-100 p-3  text-gray-500 font-medium ` +
                        (privayMaintain.includes("Necessary") &&
                          " bg-gray-50 border-l-8 border-b-2 border-black border-solid ")
                      }
                    >
                      <h3
                        onClick={(e) => {
                          setprivayMaintain(privacyStateData.necessary_cookies);
                        }}
                      >
                        {privacyStateData.necessary_cookies}
                      </h3>
                    </div>
                  </div>
                  {privayMaintain.includes("Necessary") && (
                    <div className=" p-5 md:hidden">
                      <div className="flex flex-col text-sm gap-3 text-gray-400">
                        <div className="w-full flex justify-between">
                          <h3 className="text-base text-left text-gray-500 ">
                            Strictly Necessary Cookies
                          </h3>
                          <a className="text-blue-500">Always Active</a>
                        </div>
                        <div>
                          These cookies are essential to enable you to move
                          around the website and use its features, such as
                          accessing secure areas of the website. Without these
                          cookies, our website cannot function properly and
                          services you have asked for, like shopping baskets or
                          e-billing, cannot be provided.{" "}
                        </div>
                        <div>
                          If you continue browsing, we will set necessary
                          cookies. A cookie will also be set on your device to
                          remember your privacy preferences. You may disable
                          these by changing your browser settings, but this may
                          affect how the website functions.
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <div
                      className={
                        `bg-slate-100 p-3  text-gray-500 font-medium ` +
                        (privayMaintain.includes("Functional") &&
                          " bg-gray-50 border-l-8 border-b-2 border-black border-solid ")
                      }
                    >
                      <h3
                        onClick={(e) => {
                          setprivayMaintain(
                            privacyStateData.functional_cookies
                          );
                        }}
                      >
                        {privacyStateData.functional_cookies}
                      </h3>
                    </div>
                  </div>
                  {privayMaintain.includes("Functional") && (
                    <div className="p-5 md:hidden">
                      <div className="flex flex-col text-sm gap-3 text-gray-400">
                        <div className="w-full flex justify-between">
                          <h3 className="text-base text-left text-gray-500 ">
                            Functional Cookies
                          </h3>
                          <Switch />
                        </div>
                        <div>
                          These cookies allow the website to remember choices
                          you make (such as your username, language or the
                          region you are in, your preferences) and provide
                          enhanced, more personal features. The information
                          these cookies collect may be anonymised and they
                          cannot track your browsing activity on other websites.
                        </div>
                        <div>
                          If you do not allow these cookies, then some services
                          may not function properly.
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <div
                      className={
                        `bg-slate-100 p-3  text-gray-500 font-medium ` +
                        (privayMaintain.includes("Performance") &&
                          " bg-gray-50 border-l-8 border-b-2 border-black border-solid ")
                      }
                    >
                      <h3
                        onClick={(e) => {
                          setprivayMaintain(
                            privacyStateData.performance_analy_cookies
                          );
                        }}
                      >
                        {privacyStateData.performance_analy_cookies}
                      </h3>
                    </div>
                  </div>
                  {privayMaintain.includes("Performance") && (
                    <div className="p-5 md:hidden">
                      <div className="flex flex-col text-sm gap-3 text-gray-400">
                        <div className="w-full flex justify-between">
                          <h3 className="text-base text-left text-gray-500 ">
                            Performance and Analytics Cookies
                          </h3>
                          <Switch />
                        </div>
                        <div>
                          These cookies, such as the Google Analytics cookie,
                          collect information about how visitors use a website,
                          for instance which pages visitors go to most often,
                          and any error messages visitors receive from web
                          pages. These cookies don’t collect information that
                          directly identifies a visitor.
                        </div>
                        <div>
                          If you do not allow these cookies, we will not be able
                          to monitor the use and performance of the site or
                          improve how a website works.
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <div
                      className={
                        `bg-slate-100 p-3  text-gray-500 font-medium ` +
                        (privayMaintain.includes("Advertising") &&
                          " bg-gray-50 border-l-8 border-b-2 border-black border-solid ")
                      }
                    >
                      <h3
                        onClick={(e) => {
                          setprivayMaintain(
                            privacyStateData.advertising_cookies
                          );
                        }}
                      >
                        {privacyStateData.advertising_cookies}
                      </h3>
                    </div>
                  </div>
                  {privayMaintain.includes("Advertising") && (
                    <div className="p-5 md:hidden">
                      {" "}
                      <div className="flex flex-col text-sm gap-3 text-gray-400">
                        <div className="w-full flex justify-between">
                          <h3 className="text-base text-left text-gray-500 ">
                            Advertising Cookies
                          </h3>
                          <Switch />
                        </div>
                        <div>
                          We use advertising cookies set by Diageo or our
                          partners to help us improve the relevancy of adverts
                          you receive across the web. You may see these
                          advertisements on our site and on other sites that you
                          visit, including third party social media platforms.
                          Advertising cookies we use include Third Party Cookies
                          set by <span className="text-blue-500">Google</span>,{" "}
                          <span className="text-blue-500">The Trade Desk</span>{" "}
                          and <span className="text-blue-500">Facebook</span>,
                          whom we use for online interest-based advertising. We
                          may also use social sharing plugins and cookies to
                          allow you share certain pages of our website on social
                          media.
                        </div>
                        <div>
                          If you do not enable these cookies you won't get
                          benefits like targeted adverts to hear about our great
                          products, special offers, news and information.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="hidden md:block md:w-8/12 p-5">
                  {privayMaintain.includes("Use") && (
                    <div className="flex flex-col text-sm gap-3 text-gray-400 overflow-y-scroll max-h-[300px]">
                      <div className="w-full flex justify-between">
                        <h3 className="text-base text-left text-gray-500 ">
                          How We Use cookies
                        </h3>
                      </div>
                      <div>
                        When you browse or use our websites or apps (as well as
                        certain third-party websites with whom we have
                        partnered), we and our partners use cookies and similar
                        technologies to collect information automatically from
                        one or more devices associated with you. The information
                        does not usually directly identify you, but it can give
                        you a more personalised web experience.
                      </div>
                      <div>
                        Our consumers are at the heart of what we do. Your
                        privacy is important to us and we won’t set any optional
                        cookies unless you enable them. Click on the different
                        category headings to find out more and to select the
                        cookies you’re happy for us to use. Even if you decide
                        to accept cookies now, you can change your mind at any
                        time.
                      </div>
                      <div>
                        For information about these cookies, how to delete them
                        and the processing of your personal data, please visit
                        our Privacy and Cookie Notice.
                      </div>
                    </div>
                  )}
                  {privayMaintain.includes("Necessary") && (
                    <div className="flex flex-col text-sm gap-3 text-gray-400">
                      <div className="w-full flex justify-between">
                        <h3 className="text-base text-left text-gray-500 ">
                          Strictly Necessary Cookies
                        </h3>
                        <a className="text-blue-500">Always Active</a>
                      </div>
                      <div>
                        These cookies are essential to enable you to move around
                        the website and use its features, such as accessing
                        secure areas of the website. Without these cookies, our
                        website cannot function properly and services you have
                        asked for, like shopping baskets or e-billing, cannot be
                        provided.{" "}
                      </div>
                      <div>
                        If you continue browsing, we will set necessary cookies.
                        A cookie will also be set on your device to remember
                        your privacy preferences. You may disable these by
                        changing your browser settings, but this may affect how
                        the website functions.
                      </div>
                    </div>
                  )}
                  {privayMaintain.includes("Functional") && (
                    <div className="flex flex-col text-sm gap-3 text-gray-400">
                      <div className="w-full flex justify-between">
                        <h3 className="text-base text-left text-gray-500 ">
                          Functional Cookies
                        </h3>
                        <Switch />
                      </div>
                      <div>
                        These cookies allow the website to remember choices you
                        make (such as your username, language or the region you
                        are in, your preferences) and provide enhanced, more
                        personal features. The information these cookies collect
                        may be anonymised and they cannot track your browsing
                        activity on other websites.
                      </div>
                      <div>
                        If you do not allow these cookies, then some services
                        may not function properly.
                      </div>
                    </div>
                  )}
                  {privayMaintain.includes("Performance") && (
                    <div className="flex flex-col text-sm gap-3 text-gray-400">
                      <div className="w-full flex justify-between">
                        <h3 className="text-base text-left text-gray-500 ">
                          Performance and Analytics Cookies
                        </h3>
                        <Switch />
                      </div>
                      <div>
                        These cookies, such as the Google Analytics cookie,
                        collect information about how visitors use a website,
                        for instance which pages visitors go to most often, and
                        any error messages visitors receive from web pages.
                        These cookies don’t collect information that directly
                        identifies a visitor.
                      </div>
                      <div>
                        If you do not allow these cookies, we will not be able
                        to monitor the use and performance of the site or
                        improve how a website works.
                      </div>
                    </div>
                  )}
                  {privayMaintain.includes("Advertising") && (
                    <div className="flex flex-col text-sm gap-3 text-gray-400">
                      <div className="w-full flex justify-between">
                        <h3 className="text-base text-left text-gray-500 ">
                          Advertising Cookies
                        </h3>
                        <Switch />
                      </div>
                      <div>
                        We use advertising cookies set by Diageo or our partners
                        to help us improve the relevancy of adverts you receive
                        across the web. You may see these advertisements on our
                        site and on other sites that you visit, including third
                        party social media platforms. Advertising cookies we use
                        include Third Party Cookies set by{" "}
                        <span className="text-blue-500">Google</span>,{" "}
                        <span className="text-blue-500">The Trade Desk</span>{" "}
                        and <span className="text-blue-500">Facebook</span>,
                        whom we use for online interest-based advertising. We
                        may also use social sharing plugins and cookies to allow
                        you share certain pages of our website on social media.
                      </div>
                      <div>
                        If you do not enable these cookies you won't get
                        benefits like targeted adverts to hear about our great
                        products, special offers, news and information.
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col md:flex-row w-full justify-between p-6 gap-3">
                    <div className="w-full md:w-fit">
                      <button className="bg-black w-full md:w-fit text-white px-6 py-2 ">
                        Confirm my choice
                      </button>
                    </div>
                    <div className="w-full md:w-fit">
                      <button className="bg-black w-full md:w-fit text-white px-6 py-2 ">
                        {" "}
                        Allow All
                      </button>
                    </div>
                  </div>
                  <div className="flex w-full p-1 pr-10  bg-gray-200 pb-2  !justify-end">
                    <div className="h-4">
                      <img
                        src="https://cdn-ukwest.onetrust.com/logos/static/powered_by_logo.svg"
                        className=" "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
