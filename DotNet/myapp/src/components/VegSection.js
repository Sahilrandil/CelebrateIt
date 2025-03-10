import React from "react";
import { Link } from 'react-router-dom'; 
import birthImage from '../images/Home/veg1.jpg';
import birthImage1 from '../images/Home/veg2.jpg';
import haldiImage from '../images/Home/veg3.jpg';
import '../assets/style/VegSection.css';

// Service images
import weddingImg from '../images/Home/veg1.jpg';
import engagementImg from '../images/Home/veg2.jpg';
import birthdayImg from '../images/Home/veg3.jpg';
import photographyImg from '../images/Home/veg4.jpg';
import cateringImg from '../images/Home/veg5.jpg';
import haldiImg from '../images/Home/veg6.jpg';
import photography from '../images/Home/veg7.jpg';
import catering from '../images/Home/veg4.jpg';
import { ServiceCard1 } from "./ServiceCard1";
import messageImage from '../images/Home/des.jpg';

function VegSection() {

    const wedding = [
        {
          title: 'Rajbhog Thali',
          image: weddingImg,
          link: '#wedding',
          description: 'From lavish wedding themes to intimate , we bring your dream wedding to life with unmatched elegance.',
          price: '$500',
          rating: '★★★★☆'
        },
        {
          title: 'Normal',
          image: engagementImg,
          link: '#engagement',
          description: 'Celebrate the beginning of forever with stunning engagement decor and memorable setups.',
          price: '$200',
          rating: '★★★★☆'
        },
        {
          title: 'Normal',
          image: birthdayImg,
          link: '#birthday',
          description: 'Throw unforgettable birthday parties with vibrant themes and creative decorations.',
          price: '$200',
          rating: '★★★★★'
        },
        {
          title: 'Bramhan Thali',
          image: photographyImg,
          link: '#photography',
          description: 'Capture your most cherished moments with our professional photography and videography services.',
          price: '$300',
          rating: '★★★★☆'
        },
        {
          title: 'Normal',
          image: cateringImg,
          link: '#catering',
          description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
          price: '$8000',
          rating: '★★★☆☆'
        },
        {
          title: 'Normal',
          image: haldiImg,
          link: '#haldi',
          description: 'Immerse yourself in the joyous Haldi ceremony with vibrant decor and traditional vibes.',
          price: '$150',
          rating: '★★★★★'
        },
        // {
        //   title: 'Maharashtra',
        //   image: photography,
        //   link: '#photography',
        //   description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
        //   price: '$250',
        //   rating: '★★★★☆'
        // },
        // {
        //   title: 'NorthIndian',
        //   image: catering,
        //   link: '#catering',
        //   description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
        //   price: '$250',
        //   rating: '★★★★★'
        // },
      ];
    

  return (
    <div>

             {/* Message Section */}
      <div className="message-section">
        <img src={messageImage} alt="Decorative" className="message-image" />
        <h1 className="message-title">Veg Thali Catering: A Symphony of Flavors for Every Vegetarian Lover!</h1>
        <p className="message-text">
        Our Veg Thali is a celebration of wholesome, vegetarian delights crafted to please the palate of every guest. Whether you’re a fan of rich, creamy curries or light, flavorful dishes, our Veg Thali offers a well-balanced and satisfying meal.
        </p>
        {/* <p className="message-text">
        Paneer Delicacies: Soft and fresh paneer cooked in aromatic gravies like Butter Masala or Kadai.    
Seasonal Veggies: Farm-fresh vegetables sautéed or simmered in Indian spices for authentic flavor.
Lentils & Pulses: Hearty Dal Tadka or Dal Makhani to add a protein-packed punch.
Rice & Bread: Steamed basmati rice, fragrant jeera rice, or a variety of rotis and naans.
Desserts: Classic sweets like Gulab Jamun, Jalebi, or Kheer to end the meal on a perfect note.
        </p> */}
      </div>

      <div className="marquee-container">
        <div className="marquee-content">
          {/* Images in a continuous loop */}
          <img src={birthImage} alt="birth1" className="marquee-imagee" />
          <img src={birthImage1} alt="birth2" className="marquee-imagee" />
          <img src={haldiImage} alt="haldi1" className="marquee-imagee" />
          <img src={haldiImage} alt="haldi2" className="marquee-imagee" />
          {/* Duplicated images for seamless looping */}
          <img src={birthImage} alt="birth3" className="marquee-imagee" />
          <img src={birthImage1} alt="birth4" className="marquee-imagee" />
          <img src={haldiImage} alt="haldi3" className="marquee-imagee" />
          <img src={haldiImage} alt="haldi4" className="marquee-imagee" />
        </div>
      </div>


      <div className="wedding-section">
           <h2>Veg Section</h2>
           <div className="wedding-section">
             <ServiceCard1 categoryId={4} />
           </div>
         </div>
     
      

      
    </div>
  );
}

export default VegSection;
