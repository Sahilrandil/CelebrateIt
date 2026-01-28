import React from "react";
import { Link } from 'react-router-dom'; 
import birthImage from '../images/Home/birth1.jpg';
import birthImage1 from '../images/Home/birth2.jpg';
import haldiImage from '../images/Home/birth3.jpg';
import '../assets/style/BirthdaySection.css';

// Service images
import weddingImg from '../images/Home/birth1.jpg';
import engagementImg from '../images/Home/birth2.jpg';
import birthdayImg from '../images/Home/birth3.jpg';
import photographyImg from '../images/Home/birth4.jpg';
import cateringImg from '../images/Home/birth5.jpg';
import haldiImg from '../images/Home/birth4.jpg';
import photography from '../images/Home/birth5.jpg';
import catering from '../images/Home/birth6.jpg';
import '../assets/style/WeddingSection.css';
import { ServiceCard1 } from "./ServiceCard1";


function BirthdaySection() {

    const wedding = [
        {
          title: 'Princec',
          image: weddingImg,
          link: '#wedding',
          description: 'From lavish birthday themes to intimate , we bring your dream wedding to life with unmatched elegance.',
          price: '$10000',
          rating: '★★★★☆'
        },
        {
          title: 'Animals',
          image: engagementImg,
          link: '#engagement',
          description: 'Celebrate the beginning of forever with stunning birthday decor and memorable setups.',
          price: '$10000',
          rating: '★★★★☆'
        },
        {
          title: 'Cartoon',
          image: birthdayImg,
          link: '#birthday',
          description: 'Throw unforgettable birthday parties with vibrant themes and creative decorations.',
          price: '$15000',
          rating: '★★★★★'
        },
        {
          title: 'Funny',
          image: photographyImg,
          link: '#photography',
          description: 'Capture your most cherished moments with our professional photography and videography services.',
          price: '$12000',
          rating: '★★★★☆'
        },
        {
          title: 'Doremon',
          image: cateringImg,
          link: '#catering',
          description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
          price: '$8000',
          rating: '★★★☆☆'
        },
        {
          title: 'Avenger',
          image: haldiImg,
          link: '#haldi',
          description: 'Immerse yourself in the joyous Haldi ceremony with vibrant decor and traditional vibes.',
          price: '$10000',
          rating: '★★★★★'
        },
        {
          title: 'One Piece',
          image: photography,
          link: '#photography',
          description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
          price: '$2000',
          rating: '★★★★☆'
        },
        {
          title: 'Schinchan',
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
          {/* <img src={haldiImage} alt="haldi2" className="marquee-image" /> */}
          {/* Duplicated images for seamless looping */}
          <img src={birthImage} alt="birth3" className="marquee-image" />
          <img src={birthImage1} alt="birth4" className="marquee-image" />
          <img src={haldiImage} alt="haldi3" className="marquee-image" />
          {/* <img src={haldiImage} alt="haldi4" className="marquee-image" /> */}
        </div>
      </div>


      <div className="wedding-section">
      
      <div className="wedding-section">
        <h2>Birthday Section</h2>
              <div className="wedding-section">
                <ServiceCard1 categoryId={3} />
              </div>
        {/* {wedding.map((wedding, index) => (
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

            <Link as={Link}to="/birthdaydetails">
                <button className="wedding-button">View Details</button>
              </Link>
            
          </div>
        ))}  */}
        
      </div>
    </div>
     
      

      
    </div>
  );
}

export default BirthdaySection;
