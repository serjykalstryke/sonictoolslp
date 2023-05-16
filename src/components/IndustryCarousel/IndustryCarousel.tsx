import React from "react";
import { Carousel } from "react-bootstrap";

import "./IndustryCarousel.css";

const IndustryCarousel = () => {
  return (
    <div className="industry-carousel-wrapper">
      <div className="header-wrapper">
        <h2 className="carousel-header">Our Work</h2>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Industry+1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Industry</h3>
            <p>Description of work done</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Industry+2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Industry</h3>
            <p>Description of work done</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Industry+3"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Industry</h3>
            <p>Description of work done</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default IndustryCarousel;
