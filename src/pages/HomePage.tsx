import React from "react";

import HeroImage from "../components/HeroImage/HeroImage";
import NavBar from "../components/NavBar/NavBar";
import Carousel from "../components/Carousel/Carousel";
import YouTubeVideo from "../components/AboutUsVideo/AboutUsVideo";
import IndustryCarousel from "../components/IndustryCarousel/IndustryCarousel";
import Footer from "../components/Footer/Footer";

const HomePage: React.FC = () => {
  const videoId = "k9CMyeAwSgs";
  return (
    <div>
      <NavBar />
      <HeroImage />
      <Carousel />
      <YouTubeVideo videoId={videoId} />
      <IndustryCarousel />
      <Footer />
    </div>
  );
};

export default HomePage;
