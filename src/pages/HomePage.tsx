import HeroImage from "../components/HeroImage/HeroImage";
import NavBar from "../components/NavBar/NavBar";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <HeroImage />
    </div>
  );
};

export default HomePage;
