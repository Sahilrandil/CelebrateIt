import React from 'react';
import '../assets/style/EngagementVideo.css';
import engagementVideo from '../assets/videos/engagement-video.mp4';

const EngagementVideo = () => {
  return (
    <div className="video-section">
      <video className="video-element" autoPlay muted loop>
        <source src={engagementVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default EngagementVideo;
