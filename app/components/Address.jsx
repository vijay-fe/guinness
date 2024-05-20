"use client"
import { usePathname } from 'next/navigation';
import React from 'react'

const Address = () => {
    const path = usePathname();
  let patharr = path.split("/");
  patharr[0] = "home";
  let data = patharr;
  patharr = patharr.map((item) => {
    return item.split("-").reduce((pritem, item) => {
      return pritem + " " + item;
    });
  });
  // console.log(data);
  return (
    <span className="flex w-fit pl-8 lg:pl-20 -mb-28 mt-5 lg:-mb-20 z-20 relative">
        {patharr.map((item, index) => {
          if (index < patharr.length - 1) {
            return (
              <>
                <span
                  key={index}
                  className="hidden lg:flex capitalize text-sm mr-2  gap-5  text-gray-300 opacity-70 pl-5"
                >
                  {item=="home" ? <a className="" href={"/"}>
                    {item}
                  </a> :<a className="" href={"/" + data[index]}>
                    {item}
                  </a>}{" "}
                  <p className="!text-white">/</p>
                </span>
              </>
            );
          } else {
            return (
              <span
                key={index}
                className=" flex uppercase text-xs md:text-sm text-white font-bold"
              >
                <p className="!text-white pr-5 lg:hidden">/</p>
                {item}
              </span>
            );
          }
        })}
      </span>
  )
}

export default Address