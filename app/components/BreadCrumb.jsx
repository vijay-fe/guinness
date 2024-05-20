"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useMemo } from 'react';

export default function BreadCrumb() {
  const path = usePathname();

  const pathData = useMemo(() => {
    const pathArr = path.split("/");
    pathArr[0] = "home";
    const data = [...pathArr];

    const formattedPathArr = pathArr.map(item =>
      item.split("-").join(" ")
    );

    return { formattedPathArr, data };
  }, [path]);

  let accumulatedPath = "";

  return (
    <span className="flex w-fit pl-8 lg:pl-20 z-20 relative">
      {pathData.formattedPathArr.map((item, index) => {
        const isLast = index === pathData.formattedPathArr.length - 1;
        accumulatedPath += index === 0 ? "/" : `${pathData.data[index]}/`;

        return isLast ? (
          <span
            key={index}
            className="flex uppercase text-xs md:text-sm text-white font-bold"
          >
            <p className="!text-white pr-5 lg:hidden">/</p>
            {item}
          </span>
        ) : (
          <span
            key={index}
            className="hidden lg:flex capitalize text-sm mr-2 gap-5 text-gray-300 opacity-70 pl-5"
          >
            <Link href={accumulatedPath}>
              {item}
            </Link>
            <p className="!text-white">/</p>
          </span>
        );
      })}
    </span>
  );
}
