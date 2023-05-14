import React, { useRef, useEffect, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import "./HeroImage.css"; // Your CSS file

const HeroImage: React.FC = () => {
  const playerRef = useRef<any>(null);
  const [fadeOutText, setFadeOutText] = useState(false);

  useEffect(() => {
    setFadeOutText(true);
    const timer = setTimeout(() => {
      setFadeOutText(false);
    }, 3000);

    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 0) {
        setFadeOutText(true);
      } else {
        setFadeOutText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const options: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
      loop: 1,
      modestbranding: 1,
      playsinline: 1,
      mute: 1,
      playlist: "FT3ODSg1GFE",
    },
  };

  return (
    <div className="video">
      <div className="video-overlay"></div>
      <div className="video-intercept"></div>
      <YouTube
        videoId="FT3ODSg1GFE"
        opts={options}
        style={{ height: "100vh", width: "100%" }}
      />

      <div className="text-white text-left hero-text fade-in-text">
        <h1 className="display-4 text-left">Sonic Tools LP</h1>
        <p className="lead text-left">
          Proudly made in the USA, Sonic Tools LP is the leader of custom
          manufacturing
        </p>
        <button id="cataloguebtn" className="btn btn-primary btn-lg">
          Catalogue
        </button>
      </div>
      <div className={`text-white ${fadeOutText ? "fade-out" : "fade-in"}`}>
        <div className="scroll-instruction">
          <p>
            <span className="bounce">&#8595;</span> Scroll down to learn more{" "}
            <span className="bounce">&#8595;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
