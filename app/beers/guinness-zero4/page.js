import React from "react";
import { Row, Col, Button } from "antd";
import Nav from "../../../component/homepage/Nav";
import Footer from "../../components/Footer";
import GuinessZero from "../../../component/beers/guiness-zero";

const Beer = () => {
  return (
    <>
      <Row>
        <Nav />
      </Row>
      <div className="background-black d-flex justify-center">
        <Row className="beer-main-container">
          <GuinessZero />
        </Row>
      </div>
      <Row>
        <Footer />
      </Row>
    </>
  );
};

export default Beer;
