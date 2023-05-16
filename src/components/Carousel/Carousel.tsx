import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./Carousel.css";

const CarouselComponent = () => {
  return (
    <div className="tools-carousel">
      <div className="header-wrapper">
        <p className="carousel-header">Our Tools</p>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Tool+Category+1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="header">Tool Category</h3>
            <p className="description">Description</p>{" "}
            <Button>Catalogue</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Tool+Category+2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="header">Tool Category</h3>
            <p className="description">Description</p>{" "}
            <Button>Catalogue</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Tool+Category+3"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="header">Tool Category</h3>
            <p className="description">Description</p>{" "}
            <Button>Catalogue</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
