"use client";
import { Breadcrumb } from "antd";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Address from "../components/Address";

const Layout = ({ children }) => {
  const [state, setstate] = useState(0);
  
  return (
    <>
      <Address/>
      {children}
    </>
  );
};

export default Layout;
