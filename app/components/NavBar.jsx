"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollNum, setscrollNum] = useState(0);
  const [goingdown, setgoingdown] = useState(false);
  const [current, setcurrent] = useState(0);
  const router = useRouter();
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [index, setIndex] = useState(0);
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
      window.addEventListener("scroll", () => {
        // console.log(window.scrollY);
        setscrollNum((old) => {
          if (old < parseInt(window.scrollY)) {
            // console.log(true);
            setgoingdown(true);
          } else {
            // console.log(false);
            setgoingdown(false);
          }
          return parseInt(window.scrollY);
        });
      });
      if (window.innerWidth > 786) {
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
      window.removeEventListener("scroll", () => {});
    };
  }, [
    typeof window !== "undefined" && window?.innerWidth,
    typeof window !== "undefined" && window?.innerHeight,
  ]);
  return (
    <>
      <div
        className={
          "fixed w-full top-0 left-0 px-5 md:px-20 py-5 !bg-transparent !z-50 !box-border overflow-x-hidden transition-all ease-in-out duration-1000 !text-black" +
          (goingdown && " bg-black bg-opacity-25 py-1")
        }
      >
        <div className="flex justify-between !bg-transparent relative !z-50">
          <span
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <img
              className={
                goingdown
                  ? " h-12 md:h-16 transition-all ease-in-out duration-1000 z-50"
                  : " h-8 md:h-20 transition-all ease-in-out duration-1000 z-50"
              }
              src="/assests/logo.svg"
            />
          </span>
          <span>
            {isNavOpen ? (
              <span>
                <img
                  className="h-12 w-fit fixed top-3 right-5 md:top-10 md:right-10 z-40 object-contain "
                  onClick={toggleNav}
                  src="/assests/cross.png"
                />
              </span>
            ) : (
              <span className="flex !w-fit justify-center items-center gap-10">
                <span className=" flex justify-center items-center">
                  <img
                    className="h-7 w-fit top-10 right-10 z-40 object-contain "
                    onClick={toggleNav}
                    src="/assests/search.png"
                  />
                </span>
                <span>
                  <svg
                    onClick={toggleNav}
                    height="28"
                    color="white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                  </svg>
                </span>
              </span>
            )}
          </span>
        </div>
        <div
          className={
            "absolute top-0 left-0 h-0 !z-20 bg-black bg-opacity-75 w-full transition-all ease-out duration-1000 " +
            (goingdown && !isNavOpen && "h-full")
          }
        ></div>
      </div>
      {isNavOpen && (
        <div
          className="w-full fixed top-0 left-0 overflow-hidden h-screen !z-30 bg-black "
          onClick={toggleNav}
        ></div>
      )}
      <div
        className={
          isNavOpen
            ? "fixed !h-screen !w-full md:!w-[75vw] bg-white z-40 top-0  transition-all duration-700 ease-out right-[0] flex !justify-center !items-center flex-col"
            : "fixed !h-screen w-full md:!w-[75vw] -right-full md:-right-[75vw] transition-all duration-700 ease-out bg-white z-20 top-0 animate-closemenu flex-col"
        }
      >
        <div className="hidden md:flex relative w-full flex-col !items-start md:scale-[0.8] xl:scale-100 md:mb-10 lg:mb-0  ">
          {isNavOpen && (
            <div className="relative flex flex-col  md:flex !items-end md:gap-5 lg:gap-10 p-10 z-50 px-20">
              <div className="relative group w-fit text-xl lg:text-6xl xl:text-7xl font-bold">
                <a
                  href="/beers"
                  onMouseOver={() => {
                    setcurrent(1);
                  }}
                >
                  BEERS
                </a>
                {current == 1 && (
                  <div
                    className="absolute  transition-all duration-300 !text-xs lg:!text-base font-normal top-0 md:-right-64 lg:-right-72 !items-start  flex flex-col gap-3  "
                    onMouseOver={() => {
                      setcurrent(1);
                    }}
                    onMouseOut={() => {
                      setcurrent(0);
                    }}
                  >
                    <Link href={"/beers/guinness-draught"} onClick={toggleNav}>
                      GUINNESS DRAUGHT
                    </Link>
                    <Link href={"/beers/guinness-zero"} onClick={toggleNav}>
                      GUINNESS 0.0
                    </Link>
                    <Link
                      href={"/beers/guinness-hop-house-13"}
                      onClick={toggleNav}
                    >
                      GUINNESS HOP HOUSE 13
                    </Link>
                    <Link
                      href={"/beers/guinness-foreign-extra-stout"}
                      onClick={toggleNav}
                    >
                      GUINNESS FOREIGN EXTRA STOUT
                    </Link>
                    <Link href={"/beers/guinness-smooth"} onClick={toggleNav}>
                      GUINNESS SMOOTH
                    </Link>
                    <Link
                      href={"/beers/guinness-cold-brew-coffee-beer"}
                      onClick={toggleNav}
                    >
                      GUINNESS COLD BREW COFFEE BEER
                    </Link>
                    <Link
                      href={"/beers/guinness-west-indies-porter"}
                      onClick={toggleNav}
                    >
                      GUINNESS WEST INDIES PORTER
                    </Link>
                    <Link href={"/beers/guinness-original"} onClick={toggleNav}>
                      GUINNESS ORIGINAL
                    </Link>
                    <Link href={""} onClick={toggleNav}>
                      GUINNESS BALITIMORE BLONDE
                    </Link>
                    <Link href={""} onClick={toggleNav}>
                      GUINNESS SPECIAL EXPORT
                    </Link>
                    <Link href={"/beers/guinness-clear"} onClick={toggleNav}>
                      GUINNESS CLEAR
                    </Link>
                  </div>
                )}
              </div>{" "}
              <div className="relative group w-fit text-xl lg:text-6xl xl:text-7xl font-bold">
                <a
                  href=""
                  onMouseOver={() => {
                    setcurrent(2);
                  }}
                >
                  OUR CRAFT
                </a>
                {current == 2 && (
                  <div
                    className="absolute transition-all duration-700 !text-xs lg:!text-base font-normal top-0 -right-56 !items-start  flex flex-col gap-5  "
                    onMouseOver={() => {
                      setcurrent(2);
                    }}
                    onMouseOut={() => {
                      setcurrent(0);
                    }}
                  >
                    <Link href={""} onClick={toggleNav}>
                      THE STORY OF GUINNESS
                    </Link>
                    <Link href={""} onClick={toggleNav}>
                      GUINNESS ADVERTISING
                    </Link>
                    <Link href={""} onClick={toggleNav}>
                      THE STORY OF INNOVATION
                    </Link>
                    <Link href={""} onClick={toggleNav}>
                      GUINNESS NITROSURGE
                    </Link>
                    <Link href={""} onClick={toggleNav}>
                      GUINNESS MICRODRAUGHT
                    </Link>
                    <Link href={""} onClick={toggleNav}>
                      HOMECOMING
                    </Link>
                  </div>
                )}
              </div>{" "}
              <div className="relative group w-fit text-xl lg:text-6xl xl:text-7xl font-bold">
                <a
                  href="/experiences"
                  onMouseOver={() => {
                    setcurrent(3);
                  }}
                >
                  EXPERIENCES
                </a>
                {current == 3 && (
                  <div
                    className="absolute  transition-all duration-300 !text-xs lg:!text-base font-normal top-0 -right-96 !items-start  flex flex-col gap-5  "
                    onMouseOver={() => {
                      setcurrent(3);
                    }}
                    onMouseOut={() => {
                      setcurrent(0);
                    }}
                  >
                    <Link
                      href={"/experiences/guinness-storehouse"}
                      onClick={toggleNav}
                    >
                      GUINNESS STOREHOUSE
                    </Link>
                    <Link
                      href={"/experiences/guinness-at-home"}
                      onClick={toggleNav}
                    >
                      GUINNESS AT HOME
                    </Link>
                    <Link
                      href={"/experiences/recipes-and-pairings"}
                      onClick={toggleNav}
                    >
                      RECIPES AND PAIRINGS
                    </Link>
                    <Link
                      href={"https://www.guinnessopengate.com/"}
                      onClick={toggleNav}
                    >
                      GUINNESS OPEN GATE BREWERY DUBLIN
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
                    </Link>
                    <Link
                      href={"https://www.guinnessbrewerybaltimore.com/"}
                      onClick={toggleNav}
                    >
                      GUINNESS OPEN GATE BREWERY BALTIMORE
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
                    </Link>
                  </div>
                )}
              </div>{" "}
              <div className="relative group w-fit text-xl lg:text-6xl xl:text-7xl font-bold">
                <a
                  href="#"
                  onMouseOver={() => {
                    setcurrent(4);
                  }}
                >
                  SHOP
                </a>
                {current == 4 && (
                  <div
                    className="absolute group-hover:opacity-100 transition-all duration-300 !text-xs lg:!text-base font-normal top-0 -right-60 !items-start opacity-0 flex flex-col gap-5  "
                    onMouseOver={() => {
                      setcurrent(4);
                    }}
                    onMouseOut={() => {
                      setcurrent(0);
                    }}
                  >
                    <Link href={"/webstore"} onClick={toggleNav}>
                      BUY GUINNESS MERCHANDISE
                    </Link>
                  </div>
                )}
              </div>{" "}
            </div>
          )}
        </div>
        <div className="hidden  w-full items-end   px-32 md:flex flex-col gap-2 !text-2xl !font-light md:scale-[0.6] lg:scale-[1] self-baseline">
          <div className=" flex flex-col w-fit !items-end">
            <div
              className="foot-item cursor-pointer  w-full  flex justify-end !p-0 !m-0 "
              onClick={() => {
                router.push("/find-great-guinness");

                toggleNav();
              }}
            >
              FIND GREAT GUINNESS
            </div>
            <div
              className="foot-item cursor-pointer  w-full  flex justify-end !p-0 !m-0"
              onClick={() => {
                toggleNav();
                router.push("/frequently-asked-questions");
              }}
            >
              FAQ
            </div>
            {/* <div className="foot-item">SIGN-UP</div> */}
            <div
              className="foot-item cursor-pointer  w-full  flex justify-end !p-0 !m-0"
              onClick={() => {
                router.push("/signup");
                toggleNav();
              }}
            >
              SIGN UP
            </div>
            <div
              className="foot-item cursor-pointer  w-full  flex justify-end !p-0 !m-0"
              onClick={() => {
                toggleNav();
                router.push("/contact-us");
              }}
            >
              CONTACT US
            </div>
          </div>
        </div>
        <div className="flex md:hidden relative w-full flex-col !items-start">
          {isNavOpen && obj && (
            <div className="foot-top w-full px-10">
              <div className="foot-items">
                <div className="foot-item head">
                  <a className=" text-3xl font-bold" href="/beers">
                    BEERS{" "}
                  </a>
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
                  <div className=" flex flex-col !items-start  gap-3">
                    <h4
                      className="text-xs"
                      onClick={() => {
                        setIsNavOpen(false);
                        router.push("/beers/guinness-draught");
                      }}
                    >
                      GUINNESS DRAUGHT
                    </h4>
                    <a
                      className="text-xs "
                      href="/beers/guinness-zero"
                      onClick={toggleNav}
                    >
                      GUINNESS 0.0
                    </a>
                    <a
                      className="text-xs"
                      href="/beers/guinness-hop-house-13"
                      onClick={toggleNav}
                    >
                      GUNIESS HOP HOUSE 13
                    </a>

                    <a
                      className="text-xs"
                      href="/beers/guinness-foreign-extra-stout"
                      onClick={toggleNav}
                    >
                      GUINNESS FOREIGN EXTRA STOUT
                    </a>

                    <a
                      className="text-xs"
                      href="/beers/guinness-smooth"
                      onClick={toggleNav}
                    >
                      GUINNESS SMOOTH
                    </a>
                    <a
                      className="text-xs"
                      href="/beers/guinness-cold-brew-coffee-beer"
                      onClick={toggleNav}
                    >
                      GUINNESS COLD BREW COFFEE BEER
                    </a>
                    <a
                      className="text-xs"
                      href="/beers/guinness-west-indies-porter"
                      onClick={toggleNav}
                    >
                      GUINNESS WEST INDIES PORTER
                    </a>
                    <a
                      className="text-xs"
                      href="/beers/guinness-original"
                      onClick={toggleNav}
                    >
                      GUINNESS ORIGINAL
                    </a>
                    <a className="text-xs" href="" onClick={toggleNav}>
                      GUINNESS BALTIMORE BLONDE
                    </a>
                    <a className="text-xs" href="" onClick={toggleNav}>
                      GUINNESS SPECIAL EXPORT
                    </a>
                    <a
                      className="text-xs"
                      href="/beers/guinness-clear"
                      onClick={toggleNav}
                    >
                      GUINNESS CLEAR
                    </a>
                  </div>
                )}
              </div>
              <div className="foot-items">
                <div className="foot-item head">
                  <a className=" text-3xl font-bold" href="#">
                    OUR CRAFT
                  </a>

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
                  <div className="flex flex-col !items-start gap-2">
                    <a className="text-xs">THE STORY OF GUINNESS</a>
                    <a className="text-xs">GUINNESS ADVERTISING</a>
                    <a className="text-xs">THE STORY OF INNOVATION</a>
                    <a className="text-xs">GUINNESS NITROSURGE</a>
                    <a className="text-xs">GUINNESS MICRODRAUGHT</a>
                    <a className="text-xs">REGENERATIVE FARMING</a>
                    <a className="text-xs">HOMECOMING</a>
                  </div>
                )}
              </div>
              <div className="foot-items">
                <div className="foot-item head">
                  <a className=" text-3xl font-bold" href="/experiences">
                    EXPERIENCES
                  </a>
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
                  <div className="flex flex-col !items-start  gap-3">
                    <a
                      href="/experiences/guinness-storehouse"
                      className="text-xs"
                    >
                      GUINNESS STOREHOUSE
                    </a>
                    <a href="/experiences/guinness-at-home" className="text-xs">
                      GUINNESS AT HOME
                    </a>
                    <a className="text-xs">RECIPES AND PAIRINGS</a>
                    <a className="text-xs">GUINNESS OPEN GATE BREWERY DUBLIN</a>
                    <a className="text-xs">
                      GUINNESS OPEN GATE BREWERY BALTIMORE
                    </a>
                  </div>
                )}
              </div>
              <div className="cnt-shop-find">
                <div className="foot-items">
                  <div className="foot-item head">
                    <a className=" text-3xl font-bold" href="#">
                      SHOP
                    </a>
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
                    <a href="/webstore" className="text-xs">
                      BUY GUINNESS MERCHANDISE
                    </a>
                  )}
                </div>
              </div>

              <div className="foot-items !py-10 md:!py-0 border-t-2 border-solid border-gray-400 md:border-none">
                <div className="foot-item head !hidden md:!block ">
                  <span>FIND OUT MORE</span>
                </div>
                {/* <div className="foot-item">FIND GREAT GUINNESS</div> */}
                <div
                  className="foot-item"
                  onClick={() => {
                    router.push("/find-great-guinness");
                    toggleNav();
                  }}
                >
                  FIND GREAT GUINNESS
                </div>
                <div
                  className="foot-item"
                  onClick={() => {
                    toggleNav();
                    router.push("/frequently-asked-questions");
                  }}
                >
                  FAQ
                </div>
                {/* <div className="foot-item">SIGN-UP</div> */}
                <div
                  className="foot-item"
                  onClick={() => {
                    router.push("https://www.guinness.com/en/sign-up");
                    toggleNav();
                  }}
                >
                  SIGN-UP
                </div>
                <div
                  className="foot-item"
                  onClick={() => {
                    toggleNav();
                    router.push("/contact-us");
                  }}
                >
                  CONTACT US
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
