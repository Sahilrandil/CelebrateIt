import React from "react";
import { Link } from 'react-router-dom'; 
import birthImage from '../images/Home/photo1.jpg';
import birthImage1 from '../images/Home/photo2.jpg';
import haldiImage from '../images/Home/photo3.jpg';
import { Form, Button } from "react-bootstrap"; 

import '../assets/style/PhotoSection.css';

import messageImage from '../images/Home/des.jpg';

// Service images
import weddingImg from '../images/Home/photo1.jpg';
import engagementImg from '../images/Home/photo2.jpg';
import birthdayImg from '../images/Home/photo3.jpg';
import photographyImg from '../images/Home/photo7.jpg';
import cateringImg from '../images/Home/photo5.jpg';
import haldiImg from '../images/Home/photo8.jpg';
//import photography from '../images/Home/photo7.jpg';
//import catering from '../images/Home/photo8.jpg';
import { ServiceCard1 } from "./ServiceCard1";

function PhotoSection() {

    const wedding = [
        {
          title: 'Maternity Photoshoot',
          image: weddingImg,
          link: '#wedding',
          description: 'From lavish wedding themes to intimate , we bring your dream wedding to life with unmatched elegance.',
          price: '$10000',
          rating: '★★★★☆'
        },
        {
          title: 'Wedding',
          image: engagementImg,
          link: '#engagement',
          description: 'Celebrate the beginning of forever with stunning engagement decor and memorable setups.',
          price: '$10000',
          rating: '★★★★☆'
        },
        {
          title: 'Wedding',
          image: birthdayImg,
          link: '#birthday',
          description: 'Throw unforgettable birthday parties with vibrant themes and creative decorations.',
          price: '$15000',
          rating: '★★★★★'
        },
        {
          title: 'Engegement',
          image: photographyImg,
          link: '#photography',
          description: 'Capture your most cherished moments with our professional photography and videography services.',
          price: '$12000',
          rating: '★★★★☆'
        },
        {
          title: 'Traditional Wedding',
          image: cateringImg,
          link: '#catering',
          description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
          price: '$8000',
          rating: '★★★☆☆'
        },
        {
          title: 'Birthday',
          image: haldiImg,
          link: '#haldi',
          description: 'Immerse yourself in the joyous Haldi ceremony with vibrant decor and traditional vibes.',
          price: '$10000',
          rating: '★★★★★'
        },
        // {
        //   title: 'Maharashtra',
        //   image: photography,
        //   link: '#photography',
        //   description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
        //   price: '$2000',
        //   rating: '★★★★☆'
        // },
        // {
        //   title: 'NorthIndian',
        //   image: catering,
        //   link: '#catering',
        //   description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
        //   price: '$2500',
        //   rating: '★★★★★'
        // },
      ];
    

  return (
    <div>

         {/* Message Section */}
      <div className="message-section">
        <img src={messageImage} alt="Decorative" className="message-image" />
        <h1 className="message-title">Photography & Videography Services!</h1>
        <p className="message-text">
        Capture your most cherished moments with the expertise of our professional photographers. Whether it's a wedding, birthday, corporate event, or family gathering, we ensure every special moment is preserved beautifully.
        </p>
        <p className="message-text">
        Bring your memories to life with our skilled videographers. We capture not just the visuals but the emotions of every event, creating cinematic films you’ll treasure forever.
        </p>
      </div>

      <div className="marquee-containerr">
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
      <div className="marquee-containerr">
        <div className="marquee-content">
          {/* Images in a continuous loop */}
          <img src={birthImage} alt="birth1" className="marquee-image" />
          <img src={haldiImage} alt="haldi1" className="marquee-image" />
          <img src={birthImage1} alt="birth2" className="marquee-image" />
          
          {/* <img src={haldiImage} alt="haldi2" className="marquee-image" /> */}
          {/* Duplicated images for seamless looping */}
          <img src={haldiImage} alt="haldi3" className="marquee-image" />
          <img src={birthImage} alt="birth3" className="marquee-image" />
          <img src={birthImage1} alt="birth4" className="marquee-image" />
          
          {/* <img src={haldiImage} alt="haldi4" className="marquee-image" /> */}
        </div>
      </div>


      {/* <div className="wedding-section">
      <h2>Photography & Video Section</h2>
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

            <Link as={Link}to="/photodetails">
                <button className="wedding-button">Book Now</button>
              </Link>
            
          </div>
        ))}
      </div>
    </div> */}
     
     {/* Form Section */}
     {/* <div
        className="form-div"
        style={{
          
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
        {/* <div className="form-inner">
          <Form> */}
            {/* Occasion Input */}
            {/* <Form.Group>
              <Form.Label>Occasion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. Birthday, Wedding, Corporate Event, etc"
              />
            </Form.Group> */}

            {/* Photographer */}
            {/* <div className="d-flex">
              {["Photographer", "Videographer"].map((label, index) => (
                <div key={`default-${label}-${index}`} className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id={`${label}-${index}`}
                    label={label}
                    defaultChecked={index === 0}
                  />
                </div>
              ))}
            </div> */}

            {/* Booking Duration */}
            {/* <Form.Group>
              <Form.Label>Booking Duration</Form.Label>
              <Form.Control type="date" placeholder="From" />
              <h5>To</h5>
              <Form.Control type="date" placeholder="To" />
            </Form.Group> */}

            {/* Email Input */}
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" /> */}
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
           {/* </Form> </Form.Group> */}

            {/* <Button variant="primary" type="submit">
              Search Your Photographer
            </Button>
          </Form> */}
        {/* </div> */}
      {/* </div> */}

     
      <div className="wedding-section">
                       <h2> Photography & Video Section</h2>
                       <div className="wedding-section">
                         <ServiceCard1 categoryId={6} />
                       </div>
                     </div>

      
    </div>
  );
}

export default PhotoSection;
