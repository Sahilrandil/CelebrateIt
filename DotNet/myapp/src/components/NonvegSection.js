import React from "react";
import { Link } from 'react-router-dom'; 
import birthImage from '../images/Home/nveg1.jpg';
import birthImage1 from '../images/Home/nveg3.jpg';
import haldiImage from '../images/Home/nveg6.jpg';
import '../assets/style/NonvegSection.css';

// Service images
import weddingImg from '../images/Home/nveg1.jpg';
import engagementImg from '../images/Home/nveg6.jpg';
import birthdayImg from '../images/Home/nveg3.jpg';
import photographyImg from '../images/Home/nveg4.jpg';
import cateringImg from '../images/Home/nveg5.jpg';
import haldiImg from '../images/Home/nveg2.jpg';
import photography from '../images/Home/nveg7.jpg';
import catering from '../images/Home/nveg8.jpg';
import { ServiceCard1 } from "./ServiceCard1";

function NonvegSection() {

    const wedding = [
        {
          title: 'Royal Nonveg',
          image: weddingImg,
          link: '#wedding',
          description: 'From lavish wedding themes to intimate , we bring your dream wedding to life with unmatched elegance.',
          price: '$700',
          rating: '★★★★☆'
        },
        {
          title: 'SouthIndian',
          image: engagementImg,
          link: '#engagement',
          description: 'Celebrate the beginning of forever with stunning engagement decor and memorable setups.',
          price: '$500',
          rating: '★★★★☆'
        },
        {
          title: 'Normal',
          image: birthdayImg,
          link: '#birthday',
          description: 'Throw unforgettable birthday parties with vibrant themes and creative decorations.',
          price: '$400',
          rating: '★★★★★'
        },
        {
          title: 'Rajput',
          image: photographyImg,
          link: '#photography',
          description: 'Capture your most cherished moments with our professional photography and videography services.',
          price: '$400',
          rating: '★★★★☆'
        },
        {
          title: 'Marathi',
          image: cateringImg,
          link: '#catering',
          description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
          price: '$800',
          rating: '★★★☆☆'
        },
        {
          title: 'Koakani',
          image: haldiImg,
          link: '#haldi',
          description: 'Immerse yourself in the joyous Haldi ceremony with vibrant decor and traditional vibes.',
          price: '$250',
          rating: '★★★★★'
        },
        {
          title: 'Maharashtra',
          image: photography,
          link: '#photography',
          description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
          price: '$200',
          rating: '★★★★☆'
        },
        {
          title: 'NorthIndian',
          image: catering,
          link: '#catering',
          description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
          price: '$500',
          rating: '★★★★★'
        },
      ];
    

  return (
    <div>
      

      <div className="marquee-container">
        <div className="marquee-content">
          {/* Images in a continuous loop */}
          <img src={birthImage} alt="nveg1" className="marquee-image1" />
          <img src={birthImage1} alt="birth2" className="marquee-image1" />
          <img src={haldiImage} alt="haldi1" className="marquee-image1" />
          <img src={haldiImage} alt="haldi2" className="marquee-image1" />
          {/* Duplicated images for seamless looping */}
          <img src={birthImage} alt="nveg2" className="marquee-image1" />
          <img src={birthImage1} alt="birth4" className="marquee-image1" />
          <img src={haldiImage} alt="haldi3" className="marquee-image1" />
          {/* <img src={haldiImage} alt="haldi4" className="marquee-image1" /> */}
        </div>
      </div>


      <div className="wedding-section">
                 <h2>NonVeg Section</h2>
                 <div className="wedding-section">
                   <ServiceCard1 categoryId={5} />
                 </div>
               </div>
     
      

      
    </div>
  );
}

export default NonvegSection;
