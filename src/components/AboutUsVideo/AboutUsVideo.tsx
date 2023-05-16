import React from "react";

import "./AboutUsVideo.css";

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  return (
    <div className="video-wrapper">
      <div className="header-wrapper">
        <h2 className="about-us-header">Our Story</h2>
      </div>
      <div className="youtube-video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
