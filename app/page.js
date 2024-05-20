import React from "react";
import ReactPlayer from "react-player";
import { Row, Col } from "antd";
import Image from "next/image";
import Background from "../public/assests/homepage/background.jpeg";
import HomepageExperience from "../component/homepage/experience";
import HomePageCraft from "../component/homepage/craft";
import HomePageCraft2 from "./components/craft2";
import Subscribe from "../component/homepage/subscribe";
import Footer from "./components/Footer";
import Carousel from "../component/homepage/Carousel.js";
import Nav from "../component/homepage/Nav";
import Hero from "../component/homepage/hero";
import AtHome from "./components/AtHome";

const HomePage = () => {
  return (
    <div className="-mt-16 md:!-mt-24 lg:!-mt-32">
      <Row>
        <Hero />
      </Row>
      <div className="background-black d-flex justify-center overflow-x-hidden">
        <Row className="homepage-main-container ">
          <Carousel />
          {/* <HomepageExperience /> */}
          <AtHome/>
          <HomePageCraft />
          {/* <HomePageCraft2 /> */}
          
          <HomePageCraft2/>
          <Subscribe />
        </Row>
      </div>
      <Row></Row>
    </div>
  );
};

export default HomePage;
