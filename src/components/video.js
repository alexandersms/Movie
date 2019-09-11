import React from "react";

const BASE_URL = "https://www.youtube.com/embed/";
const Video = ({ videoId }) => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        title={`video du film`}
        src={`${BASE_URL}${videoId}`}
      ></iframe>
    </div>
  );
};

export default Video;
