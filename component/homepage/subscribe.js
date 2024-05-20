"use client";
import React from "react";
import { useRouter } from "next/router";
import { Row, Col, Button } from "antd";
import Image from "next/image";
import SubscribeImage from "../../public/assests/homepage/subscribe.avif";
import Link from "next/link";

const Subscribe = () => {
  return (
    <Row className="homepage-subscribe relative">
      <Col lg={24} className="content-holder p15-left absolute">
        <p className="p-content">SUBSCRIBE</p>
        <div>
          <p className="content">KEEP UPDATED WITH ALL THINGS GUINNESS</p>
        </div>
        <Link href={"/signup"}>
          <Button className="subscribe-button">SIGN UP</Button>
        </Link>
      </Col>
      <Col lg={24} className="image-holder">
        <Image src={SubscribeImage} alt="subscribe-image" />
      </Col>
    </Row>
  );
};

export default Subscribe;
