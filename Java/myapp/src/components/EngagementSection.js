import React from "react";
import { Link } from 'react-router-dom'; 
import birthImage from '../images/Home/eng1.jpg';
import birthImage1 from '../images/Home/eng7.jpg';
import haldiImage from '../images/Home/eng8.jpg';
import '../assets/style/EngagementSection.css';

// Service images
import weddingImg from '../images/Home/wedding1.jpg';
import engagementImg from '../images/Home/wedding2.jpg';
import birthdayImg from '../images/Home/wedding3.jpg';
import photographyImg from '../images/Home/wedding4.jpg';
import cateringImg from '../images/Home/wedding5.jpg';
import haldiImg from '../images/Home/wedding6.jpg';
import { ServiceCard1 } from "./ServiceCard1";
//import photography from '../images/Home/img7.jpg';
//import catering from '../images/Home/img6.jpg';

function EngagementSection() {

    const wedding = [
        {
          title: 'Indian',
          image: weddingImg,
          link: '#wedding',
          description: 'From lavish wedding themes to intimate , we bring your dream wedding to life with unmatched elegance.',
          basePrice: '$100000',
          rating: '4'
        },
        {
          title: 'SouthIndian',
          image: engagementImg,
          link: '#engagement',
          description: 'Celebrate the beginning of forever with stunning engagement decor and memorable setups.',
          basePrice: '$100000',
          rating: '4'
        },
        {
          title: 'Old Indian',
          image: birthdayImg,
          link: '#birthday',
          description: 'Throw unforgettable birthday parties with vibrant themes and creative decorations.',
          basePrice: '$15000',
          rating: '4'
        },
        {
          title: 'Rajput',
          image: photographyImg,
          link: '#photography',
          description: 'Capture your most cherished moments with our professional photography and videography services.',
          basePrice: '$12000',
          rating: '5'
        },
        {
          title: 'Marathi',
          image: cateringImg,
          link: '#catering',
          description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
          basePrice: '$8000',
          rating: '5'
        },
        {
          title: 'Koakani',
          image: haldiImg,
          link: '#haldi',
          description: 'Immerse yourself in the joyous Haldi ceremony with vibrant decor and traditional vibes.',
          basePrice: '$10000',
          rating: '★★★★★'
        },
        
      ];
    

  return (
    <div>
      <div className="marquee-container">
        <div className="marquee-content">
          {/* Images in a continuous loop */}
          <img src={birthImage} alt="birth1" className="marquee-image" />
          <img src={birthImage1} alt="birth2" className="marquee-image" />
          <img src={haldiImage} alt="haldi1" className="marquee-image" />
          {/* <img src={haldiImage} alt="haldi2" className="marquee-image" /> */}
          {/* Duplicated images for seamless looping */}
          <img src={birthImage} alt="birth3" className="marquee-image" />
          <img src={birthImage1} alt="birth4" className="marquee-image" />
          <img src={haldiImage} alt="haldi3" className="marquee-image" />
          <img src={haldiImage} alt="haldi4" className="marquee-image" />
        </div>
      </div>


      <div className="wedding-section">
      <h2>Engagement Section</h2>
      <div className="wedding-section">
        <ServiceCard1 categoryId={2} />
      </div>
    </div>
     
      

      
    </div>
  );
}

export default EngagementSection;
