
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/style/MiddleBody.css';

//  service images
import weddingImg from '../images/Home/wedding4.jpg';
import engagementImg from '../images/Home/haldi1.jpg';
import birthdayImg from '../images/Home/wedding5.jpg';
import photographyImg from '../images/Home/wedding2.jpg';
import cateringImg from '../images/Home/eng8.jpg';
import haldiImg from '../images/Home/birth1.jpg';
import photography from '../images/Home/photo2.jpg';
import catering from '../images/Home/img6.jpg';
import wedding from '../images/Home/wedding1.jpg';

//  carousel images
import carousel1 from '../images/Home/wedding2.jpg';
import carousel2 from '../images/Home/eng7.jpg';
import carousel3 from '../images/Home/wedding4.jpg';


import exp1 from '../images/Home/haldi1.jpg';
import exp2 from '../images/Home/wed1.jpg';
import exp3 from '../images/Home/birth1.jpg';
//  message section image
import messageImage from '../images/Home/des.jpg';
import { Col, Container, Row } from 'react-bootstrap';



function MiddleBody() {


const services = [
    {
      title: 'Wedding',
      image: weddingImg,
      link: '/WeddingSection',
      description: 'From lavish wedding themes to intimate celebrations, we bring your dream wedding to life with unmatched elegance.'
    },
    {
      title: 'Haldi',
      image: engagementImg,
      link: '/WeddingSection',
      description: 'Celebrate the beginning of forever with stunning engagement decor and memorable setups.'
    },
    {
        title: 'Reception',
        image: birthdayImg,
        link: '/WeddingSection',
        description: 'Throw unforgettable birthday parties with vibrant themes and creative decorations.'
      },
      {
        title: 'Engagement',
        image: photographyImg,
        link: '/engagementsection',
        description: 'Capture your most cherished moments with our professional photography and videography services.'
      },
      {
        title: 'Birthday',
        image: haldiImg,
        link: '/BirthdaySection',
        description: 'Immerse yourself in the joyous Haldi ceremony with vibrant decor and traditional vibes.'
      },
      {
        title: 'Engagement',
        image: cateringImg,
        link: '/engagementsection',
        description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.'
      },
     
      
      {
        title: 'Photography',
        image: photography,
        link: '/PhotoSection',
        description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.'
      },
      
      {
        title: 'Wedding',
        image: wedding,
        link: '/WeddingSection',
        description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.'
      },
      {
        title: 'Catering',
        image: catering,
        link: '/VegSection',
        description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.'
      },

    ];

    const slides = [
        {
          id: 1,
          image: exp1, // Replace with your image URL
          title: "Haldi Ceremony",
          link: '#exp1',
          message: "Celebrate every milestone with elegance and joy! At Celebrate It, we believe that the best celebrations are the ones filled with laughter, love, and color. From weddings to birthdays, and all the special occasions in between, let us help you create a day that will be remembered forever.",
          message1:"Transform your special moments with our beautiful decorations. Celebrate every occasion with joy and elegance—from the vibrant hues of haldi to the grandness of a wedding or the fun of a birthday party",
          message2:"-Mayura-Ruturaj"
          
          
        },
        {
          id: 2,
          image: exp2, 
          title: "Wedding Celebration",
          link: '#exp2',
          message: "Transform your special moments into cherished memories with Celebrate It! Whether it's the joyous glow of a wedding, the vibrant energy of a birthday, or the traditional splendor of a haldi ceremony, we are here to make your celebrations shine. Let us add a touch of magic to your day, because life's biggest moments deserve the most beautiful decorations.",
          message1:"Transform your special moments with our beautiful decorations. Celebrate every occasion with joy and elegance—from the vibrant hues of haldi to the grandness of a wedding or the fun of a birthday party",
          message2:"-Mayura-Ruturaj"
        },
        {
          id: 3,
          image: exp3, 
          title: "Birthday Bash",
          link: '#exp3',
          message: "Make your celebrations unforgettable with Celebrate It! Whether you're saying 'I do' at a wedding, blowing out candles at a birthday, or experiencing the joyous rituals of a haldi ceremony, we bring the beauty and festivity to every moment. Celebrate with us and let the decorations reflect the joy in your heart.",
          message1:"Transform your special moments with our beautiful decorations. Celebrate every occasion with joy and elegance—from the vibrant hues of haldi to the grandness of a wedding or the fun of a birthday party",
          message2:"-Mayura-Ruturaj"
        }
      ];

  return (
    <div className="middle-body">
      {/* Image Slider */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
          <Carousel.Caption>
            <h3>Plan Your Perfect Wedding</h3>
            <p>From decoration to catering, we’ve got you covered.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Celebrate Life's Milestones</h3>
            <p>Make birthdays and engagements unforgettable.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Capture Every Moment</h3>
            <p>Professional photography and videography services.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Message Section */}
      <div className="message-section">
        <img src={messageImage} alt="Decorative" className="message-image" />
        <h1 className="message-title">Turning Moments Into Memories, Filled With Love and Joy!</h1>
        <p className="message-text">
          Life’s most precious moments deserve to be celebrated in the most extraordinary way. At
          <strong> CelebrateIt</strong>, we believe every event is a story waiting to be
          told—a story of love, laughter, and unforgettable memories.
        </p>
        <p className="message-text">
          Whether it’s the magical union of two souls in an engagement, the vibrant hues of Haldi and
          Mehendi, the grand celebration of a wedding, or the joyous giggles of a birthday, we are
          here to craft a dreamlike setting for your cherished occasions.
        </p>
      </div>

     {/* Services Section */}
     <h2>OUR SERVICES</h2>
      <div className="services-section">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => (window.location.href = service.link)}
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <h4 className="service-title">{service.title}</h4>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>


            {/* Promises Section */}
            <div className="promises-section">
        <h2 className="promises-title">Our Promise To You</h2>
        <p className="promises-text">
          We listen to your dreams, understand your style, and bring your ideas to life with creativity and precision. Your event will be a true reflection of you.
          From the smallest detail to the grandest arrangement, we handle it all so you can focus on enjoying the moment. With us, planning is as seamless as the celebration itself.
        </p>
        <p className="promises-text">
          From decor and catering to photography and entertainment, we work with the best in the industry to ensure your event exceeds expectations.
        </p>
        <p className="promises-text">
          We believe in clear and open communication throughout the planning process. No hidden costs, no last-minute surprises—just complete peace of mind.
        </p>
        <p className="promises-text">
          Our ultimate goal is to create moments you’ll cherish forever. With our expertise and passion, we transform your event into a masterpiece of joy and love. 
        </p>
        <p className="promises-text">
        💌 "Because your happiness is our priority, and every event is a story waiting to be beautifully told."
        </p>
      </div>


      <Container>
        <h2 >Experience With CelebrateIt </h2>
      <Carousel>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <Row className="d-flex align-items-center" style={{ height: "400px" }}>
              {/* Left Side: Image */}
              <Col md={6} className="p-0">
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </Col>

              {/* Right Side: Text */}
              <Col md={6} className="d-flex flex-column justify-content-center p-4" style={{ width:"650px",height:"500px" }}>
                <h2 >{slide.title}</h2>
                <p className="text-muted">{slide.message}</p>
                <p className="text-muted">{slide.message1}</p>
                <p className="text-muted">{slide.message2}</p>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>


    {/* video */}
    <Container className="video-section1 my-5">
        <h2>OUR VIDEO</h2>
      <Row>
        <Col md={12}>
          <div className="video-container">
            <video width="100%" height="auto" controls>
              <source src="/Home/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="video-description mt-3">Enjoy this beautiful video showcasing our ceremony decor and moments.</p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>



  );
}

export default MiddleBody;
