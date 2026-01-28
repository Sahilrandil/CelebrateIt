import React from "react";
import { ServiceCard1 } from "./ServiceCard1";
import '../assets/style/WeddingSection.css';

// Marquee Images
import birthImage from '../images/Home/wedding1.jpg';
import birthImage1 from '../images/Home/wedding2.jpg';
import haldiImage from '../images/Home/wedding3.jpg';

function WeddingSection() {
  return (
    <div>
      {/* Marquee Section */}
      <div className="marquee-container">
        <div className="marquee-content">
          <img src={birthImage} alt="Wedding Decor" className="marquee-image" />
          <img src={birthImage1} alt="Reception Setup" className="marquee-image" />
          <img src={haldiImage} alt="Haldi Decor" className="marquee-image" />
          <img src={birthImage} alt="Wedding Decor Duplicate" className="marquee-image" />
          <img src={birthImage1} alt="Reception Setup Duplicate" className="marquee-image" />
          <img src={haldiImage} alt="Haldi Decor Duplicate" className="marquee-image" />
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4" style={{ fontFamily: 'Gabriela, serif', color: '#d63384' }}>
          Wedding Services
        </h2>
        <ServiceCard1 categoryId={1} />
      </div>
    </div>
  );
}

export default WeddingSection;
