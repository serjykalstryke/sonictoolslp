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

  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);

  const handlePlayerReady = (event: any) => {
    const isMobileSafari =
      navigator.userAgent.match(/iPad|iPhone|iPod/i) &&
      !(window as any).MSStream;

    if (isMobileSafari) {
      event.target.playVideo();

      document.addEventListener("visibilitychange", handleVisibilityChange);
    } else {
      setIsAutoplayEnabled(true);
      event.target.playVideo();
    }

    playerRef.current = event.target;

    event.target.addEventListener(YouTube.PlayerState.ENDED, () => {
      if (isMobileSafari) {
        event.target.playVideo();
      }
    });
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      playerRef.current.pauseVideo(); // Pause video when the page loses visibility
    } else {
      playerRef.current.playVideo(); // Resume video when the page regains visibility
    }
  };

  const options: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      controls: 0,
      loop: 1,
      modestbranding: 1,
      playsinline: 1,
      mute: 1,
      playlist: "FT3ODSg1GFE",
    },
  };

  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="video">
      <div className="video-wrapper">
        <div className="video-overlay"></div>
        <div className="video-intercept"></div>
        <YouTube
          videoId="FT3ODSg1GFE?autoplay=1"
          opts={options}
          onReady={handlePlayerReady}
          className="video-fullscreen"
          ref={playerRef}
        />
      </div>

      <div className="text-white text-left hero-text fade-in-text">
        <h1 className="display-4 text-left hero-header">Sonic Tools LP</h1>
        <p className="lead text-left hero-text-text">
          Proudly made in the USA, Sonic Tools LP is the leader of custom
          manufacturing
        </p>
        <button id="cataloguebtn" className="btn btn-primary btn-lg">
          Catalogue
        </button>
      </div>
      <div className={`text-white ${fadeOutText ? "fade-out" : ""}`}>
        <div
          className={`scroll-instruction ${
            fadeOutText ? "fade-out" : "fade-in"
          }`}
        >
          <p>
            <span className="bounce">&#8595;</span> Scroll down to learn more
            <span className="bounce">&#8595;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
