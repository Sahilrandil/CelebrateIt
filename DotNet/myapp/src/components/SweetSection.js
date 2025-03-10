import React from "react";
import { Link } from 'react-router-dom'; 
import birthImage from '../images/Home/birth1.jpg';
import birthImage1 from '../images/Home/birth1.jpg';
import haldiImage from '../images/Home/haldi1.jpg';
import '../assets/style/SweetSection.css';

// Service images
import weddingImg from '../images/Home/img1.jpg';
import engagementImg from '../images/Home/img4.jpg';
import birthdayImg from '../images/Home/img3.jpg';
import photographyImg from '../images/Home/img4.jpg';
import cateringImg from '../images/Home/img5.jpg';
import haldiImg from '../images/Home/birth1.jpg';
import photography from '../images/Home/img7.jpg';
import catering from '../images/Home/img6.jpg';

function SweetSection() {

    const wedding = [
        {
          title: 'Indian',
          image: weddingImg,
          link: '#wedding',
          description: 'From lavish wedding themes to intimate , we bring your dream wedding to life with unmatched elegance.',
          price: '$100000',
          rating: '★★★★☆'
        },
        {
          title: 'SouthIndian',
          image: engagementImg,
          link: '#engagement',
          description: 'Celebrate the beginning of forever with stunning engagement decor and memorable setups.',
          price: '$100000',
          rating: '★★★★☆'
        },
        {
          title: 'Old Indian',
          image: birthdayImg,
          link: '#birthday',
          description: 'Throw unforgettable birthday parties with vibrant themes and creative decorations.',
          price: '$15000',
          rating: '★★★★★'
        },
        {
          title: 'Rajput',
          image: photographyImg,
          link: '#photography',
          description: 'Capture your most cherished moments with our professional photography and videography services.',
          price: '$12000',
          rating: '★★★★☆'
        },
        {
          title: 'Marathi',
          image: cateringImg,
          link: '#catering',
          description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
          price: '$8000',
          rating: '★★★☆☆'
        },
        {
          title: 'Koakani',
          image: haldiImg,
          link: '#haldi',
          description: 'Immerse yourself in the joyous Haldi ceremony with vibrant decor and traditional vibes.',
          price: '$10000',
          rating: '★★★★★'
        },
        {
          title: 'Maharashtra',
          image: photography,
          link: '#photography',
          description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
          price: '$2000',
          rating: '★★★★☆'
        },
        {
          title: 'NorthIndian',
          image: catering,
          link: '#catering',
          description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
          price: '$2500',
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
          <img src={haldiImage} alt="haldi2" className="marquee-image" />
          {/* Duplicated images for seamless looping */}
          <img src={birthImage} alt="birth3" className="marquee-image" />
          <img src={birthImage1} alt="birth4" className="marquee-image" />
          <img src={haldiImage} alt="haldi3" className="marquee-image" />
          <img src={haldiImage} alt="haldi4" className="marquee-image" />
        </div>
      </div>


      <div className="wedding-section">
      <h2>Sweet Section</h2>
      <div className="wedding-section">
        {wedding.map((wedding, index) => (
          <div
            key={index}
            className="wedding-card"
            onClick={() => (window.location.href = wedding.link)}
          >
            <img src={wedding.image} alt={wedding.title} className="wedding-image" />
            <h4 className="wedding-title">{wedding.title}</h4>
            <p className="wedding-description">{wedding.description}</p>
            <p className="wedding-price">{wedding.price}</p>
            <p className="wedding-rating">{wedding.rating}</p>

            <Link as={Link}to="/weddingdetails">
                <button className="wedding-button">View Details</button>
              </Link>
            {/* <button className="wedding-button">View Details</button> */}
          </div>
        ))}
      </div>
    </div>
     
      

      
    </div>
  );
}

export default SweetSection;
