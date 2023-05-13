import React from "react";
import "./HeroImage.css"; // Your CSS file

import "./HeroImage.css"; // Your CSS file

const HeroImage: React.FC = () => {
  return (
    <div className="hero-image d-flex justify-content-start align-items-center text-left">
      <div className="text-white text-left hero-text">
        <h1 className="display-4 text-left">Welcome to My Website!</h1>
        <p className="lead text-left">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
