import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.module.css";
import image1 from "../../Assets/Images/Group 69.png";
import image2 from "../../Assets/Images/Group 70.png";
import image3 from "../../Assets/Images/Group 71.png";
// import edgelogo from "../Assets/Images/edge logo.png";

const CarouselContainer = (props) => {
  const [truee, settruee] = useState(false);
  const carasoleHandler = (e) => {
    console.log("clicked");
    settruee(!truee);
    props.hand(truee);
  };

  //   props.hand(!truee);
  return (
    <Carousel
      fade={true}
      pause={false}
      prevIcon={<span aria-hidden="true" />}
      nextIcon={<span aria-hidden="true" />}
    >
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="corh3">Let Your Vision Take You The Distance</h3>
          <button onClick={carasoleHandler}>Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image2} alt="Third slide" />
        <Carousel.Caption>
          <h3 className="corh3">Let Your Vision Take You The Distance</h3>
          <button onClick={carasoleHandler}>Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h3 className="corh3">Let Your Vision Take You The Distance</h3>
          <button onClick={carasoleHandler}>Get Started</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselContainer;