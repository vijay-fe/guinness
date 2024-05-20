"use client";
import { React, useState } from "react";
import apple_icon from "../../public/assests/homepage/apple-icon.png";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex relative">
      <div className="logo">GUINNESS</div>
      <div className="flex nav-items">
        <svg
          height="28"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
        </svg>
        <svg
          onClick={toggleNav}
          height="28"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </div>
      {isNavOpen && <div className="overlay-menu"></div>}
      {isNavOpen && (
        <div className="nav-slide-ctn  top-0 animate-openmenu">
          <div className="upper-ctn">
            <button className="search-btn">
              <span>
                <svg
                  aria-labelledby="title-black-search desc-black-search"
                  fill="none"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="title-black-search">Search Icon</title>
                  <desc id="desc-black-search">Click to Search</desc>
                  <path
                    d="M16.6667 14.6667H15.6133L15.24 14.3067C16.5467 12.7867 17.3333 10.8133 17.3333 8.66667C17.3333 3.88 13.4533 0 8.66667 0C3.88 0 0 3.88 0 8.66667C0 13.4533 3.88 17.3333 8.66667 17.3333C10.8133 17.3333 12.7867 16.5467 14.3067 15.24L14.6667 15.6133V16.6667L21.3333 23.32L23.32 21.3333L16.6667 14.6667ZM8.66667 14.6667C5.34667 14.6667 2.66667 11.9867 2.66667 8.66667C2.66667 5.34667 5.34667 2.66667 8.66667 2.66667C11.9867 2.66667 14.6667 5.34667 14.6667 8.66667C14.6667 11.9867 11.9867 14.6667 8.66667 14.6667Z"
                    fill="black"
                  ></path>
                </svg>
              </span>
            </button>
            <button className="menu-btn">
              <span>
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {}}
                >
                  <line
                    stroke="#0A0406"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="22.7071"
                    x2="2.70711"
                    y1="2.70711"
                    y2="22.7071"
                  ></line>
                  <line
                    stroke="#0A0406"
                    stroke-linejoin="round"
                    stroke-width="2"
                    transform="matrix(0.707107 0.707107 0.707107 -0.707107 2 2)"
                    x2="28.2843"
                    y1="-1"
                    y2="-1"
                  ></line>
                </svg>
              </span>
            </button>
          </div>
          <div className="btm-ctn">
            <div className="menu-item-ctn">
              <div className="menu-items">
                {/* <!-- <div className="menu-ctn-res">
              <div className="res-item">
                <a href="">BEERS</a>
                <button className="reset-btn">
                  <svg
                    className=""
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_8620_36201)">
                      <line
                        stroke="#929292"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="16"
                        y1="8.33325"
                        y2="8.33325"
                      ></line>
                      <line
                        stroke="#929292"
                        stroke-linejoin="round"
                        stroke-width="2"
                        transform="matrix(0 1 1 0 8.66797 0)"
                        x2="16"
                        y1="-1"
                        y2="-1"
                      ></line>
                    </g>
                    <defs>
                      <clipPath id="clip0_8620_36201_mobile-item-expand">
                        <rect fill="white" height="16" width="16"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className="reveal-down">
                <div className="ele-cnt">
                  <a href="">GUINNESS DRAUGHT</a>
                  <a href="">GUINNESS 0.0</a>
                  <a href="">GUINNESS HOP HOUSE 13</a>
                  <a href="">GUINNESS FOREIGN EXTRA STOUT</a>
                  <a href="">GUINNESS SMOOTH</a>
                  <a href="">GUINNESS COLD BREW COFFEE BEER</a>
                  <a href="">GUINNESS WEST INDIES PORTER</a>
                  <a href="">GUINNESS ORIGINAL</a>
                  <a href="">GUINNESS BALTIMORE BLONDE</a>
                  <a href="">GUINNESS SPECIAL EXPORT</a>
                  <a href="">GUINNESS CLEAR</a>
                </div>
              </div>
            </div>
            <div className="menu-ctn-res">
              <div className="res-item">
                <a href="">OUR CRAFT</a>
                <button className="reset-btn">
                  <svg
                    className=""
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_8620_36201)">
                      <line
                        stroke="#929292"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="16"
                        y1="8.33325"
                        y2="8.33325"
                      ></line>
                      <line
                        stroke="#929292"
                        stroke-linejoin="round"
                        stroke-width="2"
                        transform="matrix(0 1 1 0 8.66797 0)"
                        x2="16"
                        y1="-1"
                        y2="-1"
                      ></line>
                    </g>
                    <defs>
                      <clipPath id="clip0_8620_36201_mobile-item-expand">
                        <rect fill="white" height="16" width="16"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className="reveal-down">
                <div className="ele-cnt">
                  <a href="">THE STORY OF GUINNESS</a>
                  <a href="">GUINNESS ADVERTISING</a>
                  <a href="">THE STORY OF INNOVATION</a>
                  <a href="">GUINNESS NITROSURGE</a>
                  <a href="">GUINNESS MICRODRAUGHT</a>
                  <a href="">REGENERATIVE FARMING</a>
                  <a href="">HOMECOMING</a>
                </div>
              </div>
            </div>
            <div className="menu-ctn-res">
              <div className="res-item">
                <a href="">EXPERIENCES</a>
                <button className="reset-btn">
                  <svg
                    className=""
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_8620_36201)">
                      <line
                        stroke="#929292"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="16"
                        y1="8.33325"
                        y2="8.33325"
                      ></line>
                      <line
                        stroke="#929292"
                        stroke-linejoin="round"
                        stroke-width="2"
                        transform="matrix(0 1 1 0 8.66797 0)"
                        x2="16"
                        y1="-1"
                        y2="-1"
                      ></line>
                    </g>
                    <defs>
                      <clipPath id="clip0_8620_36201_mobile-item-expand">
                        <rect fill="white" height="16" width="16"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className="reveal-down">
                <div className="ele-cnt">
                  <a href="">GUINNESS STOREHOUSE</a>
                  <a href="">GUINNESS AT HOME</a>
                  <a href="">RECIPES AND PAIRINGS</a>
                  <a href="">GUINNESS OPEN GATE BREWERY DUBLIN</a>
                </div>
              </div>
            </div>
            <div className="menu-ctn-res">
              <div className="res-item">
                <a href="">SHOP</a>
                <button className="reset-btn">
                  <svg
                    className=""
                    fill="none"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_8620_36201)">
                      <line
                        stroke="#929292"
                        stroke-linejoin="round"
                        stroke-width="2"
                        x1="16"
                        y1="8.33325"
                        y2="8.33325"
                      ></line>
                      <line
                        stroke="#929292"
                        stroke-linejoin="round"
                        stroke-width="2"
                        transform="matrix(0 1 1 0 8.66797 0)"
                        x2="16"
                        y1="-1"
                        y2="-1"
                      ></line>
                    </g>
                    <defs>
                      <clipPath id="clip0_8620_36201_mobile-item-expand">
                        <rect fill="white" height="16" width="16"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
              <div className="reveal-down">
                <div className="ele-cnt">
                  <a href="">BUY GUINNESS MERCHANDISE</a>
                </div>
              </div>
            </div> --> */}

                <div className="menu-item">
                  <a href=""> BEERS </a>
                </div>
                <div className="menu-item-sub-menu">
                  <div className="sub-menu-ctn">
                    <a href="">GUINNESS DRAUGHT</a>
                    <a href="">GUINNESS 0.0</a>
                    <a href="">GUINNESS HOP HOUSE 13</a>
                    <a href="">GUINNESS FOREIGN EXTRA STOUT</a>
                    <a href="">GUINNESS SMOOTH</a>
                    <a href="">GUINNESS COLD BREW COFFEE BEER</a>
                    <a href="">GUINNESS WEST INDIES PORTER</a>
                    <a href="">GUINNESS ORIGINAL</a>
                    <a href="">GUINNESS BALTIMORE BLONDE</a>
                    <a href="">GUINNESS SPECIAL EXPORT</a>
                    <a href="">GUINNESS CLEAR</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href=""> OUR CRAFT </a>
                </div>
                <div className="menu-item-sub-menu">
                  <div className="sub-menu-ctn">
                    <a href="">THE STORY OF GUINNESS</a>
                    <a href="">GUINNESS ADVERTISING</a>
                    <a href="">THE STORY OF INNOVATION</a>
                    <a href="">GUINNESS NITROSURGE</a>
                    <a href="">GUINNESS MICRODRAUGHT</a>
                    <a href="">REGENERATIVE FARMING</a>
                    <a href="">HOMECOMING</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href=""> EXPERIENCES </a>
                </div>
                <div className="menu-item-sub-menu">
                  <div className="sub-menu-ctn">
                    <a href="">GUINNESS STOREHOUSE</a>
                    <a href="">GUINNESS AT HOME</a>
                    <a href="">RECIPES AND PAIRINGS </a>
                    <a href="">GUINNESS OPEN GATE BREWERY DUBLIN</a>
                  </div>
                </div>
                <div className="menu-item">
                  <a href=""> SHOP </a>
                </div>
                <div className="menu-item-sub-menu">
                  <div className="sub-menu-ctn">
                    <a href="">BUY GUINNESS MERCHANDISE</a>
                  </div>
                </div>
              </div>
              <div className="btm-footer">
                <div className="space">
                  <hr />
                  <a href="">Find Great Guinness</a>
                  <a href="">FAQ</a>
                  <a href="">SIGN-UP</a>
                  <a href="">CONTACT US</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
