"use client";
import { React, useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
import Innovation from "../../public/assests/beers/beer-innovation.avif";

const BeerFooter = () => {
  const [isResponsiveScreen, setIsResponsiveScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 600) {
        setIsResponsiveScreen(true);
      }
    }
  }, []);

  return (
    <Row className="experience-main-container guiness-main-container bottom-40">
      {isResponsiveScreen && (
        <>
          <Row>
            <Col className="padding-15">
              <p className="p-content">Experience</p>
            </Col>
          </Row>
          <Col xs={24} className="image-holder">
            <Image src={Innovation} alt="experience-img" />
          </Col>
        </>
      )}

      <Col xs={24} lg={12} className="content">
        {!isResponsiveScreen && <p>Experience</p>}
        <h1 className="heading">INNOVATION AT GUINNESS</h1>
        <p className="p-content">
          Through the years, Guinness’ dedication to innovation has remained a
          key part of the brand’s mission.
        </p>
        <Button className="find-out-btn d-flex justify-center align-center cursor-pointer ant-btn">
          Find out More <RightOutlined />
        </Button>
      </Col>

      {!isResponsiveScreen && (
        <Col lg={12} className="image-holder">
          <Image src={Innovation} alt="experience-img" />
        </Col>
      )}
    </Row>
  );
};

export default BeerFooter;
