import React from "react";
import { Row, Col, Button } from "antd";
import Image from "next/image";
import Beer1 from "../../public/assests/beers/beer1.avif";
import Beer2 from "../../public/assests/beers/beer2.avif";
import Beer3 from "../../public/assests/beers/beer3.avif";
import HomepageExperience from "../../component/homepage/experience";
import Subscribe from "../../component/homepage/subscribe";

const GuinessZero = () => {
  return (
    <div className="guiness-zero">
      <Row className="beer-comp1" gutter={50}>
        <Col lg={18} md={18} sm={18} className="image-holder1">
          <Image src={Beer1} alt="beer1-image" />
        </Col>
        <Col lg={6} md={6} sm={6} className="image-holder2">
          <Image src={Beer2} alt="beer2-image" />
          <Image src={Beer3} alt="beer3-image" />
        </Col>
      </Row>

      <Row className="beer-comp2">
        <Col lg={16} md={16} sm={16} className="content-holder1">
          <h3 className="head">NOT DRINKING? THERE’S A GUINNESS FOR THAT!"</h3>
          <p className="para">
            The Guinness with everything except the alcohol. Guinness 0.0 boasts
            the same beautifully smooth taste, perfectly balanced flavour, and
            unique dark colour of Guinness, just without the alcohol.
          </p>
          <p className="para">
            To create Guinness 0.0 the St James’s Gate brewers, start by brewing
            Guinness exactly as they always have, using the same natural
            ingredients; water, barley, hops, and yeast; before gently removing
            the alcohol through a cold filtration method. The cold filtration
            process allows the alcohol to be filtered out without presenting
            thermal stress to the beer, protecting the integrity of its taste
            and character. The brewers then carefully blend and balance the
            flavours to ensure the distinctive flavour profile and taste
            characteristics of Guinness.
          </p>
          <p className="para">
            The resulting product is a stout that is unmistakably Guinness, just
            without the alcohol, featuring the same dark, ruby red liquid and
            creamy head, hints of chocolate and coffee, smoothly balanced with
            bitter, sweet and roasted notes.
          </p>
        </Col>
        <Col lg={6} md={6} sm={6} className="content-holder2">
          <div className="content">
            <p className="head">Aroma</p>
            <p className="para">Hints of roasted coffee and chocolate</p>
          </div>
          <div className="content">
            <p className="head">Appearance</p>
            <p className="para">Dark Ruby Red with a creamy head</p>
          </div>
          <div className="content">
            <p className="head">Taste</p>
            <p className="para">
              Smoothly balanced with bitter, sweet, roasted notes
            </p>
          </div>
        </Col>
      </Row>

      <Row className="beer-comp3  mb-80 " gutter={50}>
        <Col className="image-holder" lg={16} md={16} sm={16}>
          <Image src={Beer2} alt="beer-image" />
        </Col>
        <Col lg={3} md={3} sm={3} className="nutritional-facts">
          <div className="content-holder">
            <p className="label">Alchohol</p>
            <p className="value">0%</p>
          </div>
          <div className="content-holder">
            <p className="label">Calories</p>
            <p className="value">71kJ / 17kcal per 100ml</p>
          </div>
          <div className="content-holder">
            <p className="label">Carbs</p>
            <p className="value">3.8g per 100ml</p>
          </div>
          <div className="content-holder">
            <p className="label">Fat</p>
            <p className="value">0g per 100ml</p>
          </div>
        </Col>
        <Col lg={5} md={5} sm={5} className="ingredients-holder">
          <h3 className="heading">INGREDIENTS</h3>
          <div className="ingredients">
            <p>Water</p>
            <p>Malted Barley</p>
            <p>Barley</p>
            <p>Roasted Barley</p>
            <p>Fructose</p>
            <p>Natural Flavourings</p>
            <p>Hops</p>
            <p>Yeast</p>
          </div>
        </Col>
        <Col lg={24} md={24} sm={24} className="ingredients-content">
          <p className="para">
            The journey to launching Guinness 0.0 has drawn on Guinness’s proud
            261-year history of innovation and brewing brilliance dating from
            1759. A commitment to retaining the distinct character and taste of
            Guinness was central to the four-year process led by the technical
            and innovation teams at St. James’s Gate, the Home of Guinness.
          </p>
        </Col>
      </Row>
      {/* <Carousel/> */}
      <HomepageExperience />
      <Subscribe />
    </div>
  );
};

export default GuinessZero;
