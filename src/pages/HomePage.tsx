import React from "react";

import HeroImage from "../components/HeroImage/HeroImage";
import NavBar from "../components/NavBar/NavBar";
import Carousel from "../components/Carousel/Carousel";
import YouTubeVideo from "../components/AboutUsVideo/AboutUsVideo";
import IndustryCarousel from "../components/IndustryCarousel/IndustryCarousel";
import Footer from "../components/Footer/Footer";

import "./Home.css";

const HomePage: React.FC = () => {
  const videoId = "k9CMyeAwSgs";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <HeroImage />
      <Carousel />
      <div className="layout">
        <YouTubeVideo videoId={videoId} />
      </div>
      <IndustryCarousel />

      <Footer />
    </div>
  );
};

export default HomePage;
