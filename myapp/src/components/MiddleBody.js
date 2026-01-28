import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/style/MiddleBody.css';

// Service images
import weddingImg from '../images/Home/wedding4.jpg';
import engagementImg from '../images/Home/haldi1.jpg';
import birthdayImg from '../images/Home/wedding5.jpg';
import photographyImg from '../images/Home/wedding2.jpg';
import cateringImg from '../images/Home/eng8.jpg';
import haldiImg from '../images/Home/birth1.jpg';
import photography from '../images/Home/photo2.jpg';
import catering from '../images/Home/img6.jpg';
import wedding from '../images/Home/wedding1.jpg';

// Carousel images
import carousel1 from '../images/Home/wedding2.jpg';
import carousel2 from '../images/Home/eng7.jpg';
import carousel3 from '../images/Home/wedding4.jpg';

// Experience images
import exp1 from '../images/Home/haldi1.jpg';
import exp2 from '../images/Home/wed1.jpg';
import exp3 from '../images/Home/birth1.jpg';

// Message section image
import messageImage from '../images/Home/des.jpg';

function MiddleBody() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

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
      description: 'Celebrate the beginning of forever with vibrant Haldi decor and traditional vibes.'
    },
    {
      title: 'Reception',
      image: birthdayImg,
      link: '/WeddingSection',
      description: 'Grand receptions with stunning floral arrangements and lighting.'
    },
    {
      title: 'Engagement',
      image: photographyImg,
      link: '/engagementsection',
      description: 'Stunning engagement decor to mark the beginning of your journey.'
    },
    {
      title: 'Birthday',
      image: haldiImg,
      link: '/BirthdaySection',
      description: 'Throw unforgettable birthday parties with vibrant themes and creative decorations.'
    },
    {
      title: 'Catering (All)',
      image: cateringImg,
      link: '/VegSection',
      description: 'Treat your guests to a culinary experience with our world-class catering services.'
    },
    {
      title: 'Photography',
      image: photography,
      link: '/PhotoSection',
      description: 'Capture your most cherished moments with our professional photography and videography services.'
    },
    {
      title: 'Wedding (Traditional)',
      image: wedding,
      link: '/WeddingSection',
      description: 'Traditional wedding setups that honor your customs and heritage.'
    },
    {
      title: 'Catering (Veg)',
      image: catering,
      link: '/VegSection',
      description: 'Delicious vegetarian catering options for your special event.'
    }
  ];

  const slides = [
    {
      id: 1,
      image: exp1,
      title: "Haldi Ceremony",
      message: "Celebrate every milestone with elegance and joy! At Celebrate It, we believe that the best celebrations are the ones filled with laughter, love, and color.",
      message1: "Transform your special moments with our beautiful decorations.",
      message2: "- Mayura-Ruturaj"
    },
    {
      id: 2,
      image: exp2,
      title: "Wedding Celebration",
      message: "Transform your special moments into cherished memories with Celebrate It! Whether it's the joyous glow of a wedding or the vibrant energy of a birthday.",
      message1: "We are here to make your celebrations shine.",
      message2: "- Mayura-Ruturaj"
    },
    {
      id: 3,
      image: exp3,
      title: "Birthday Bash",
      message: "Make your celebrations unforgettable with Celebrate It! Whether you're saying 'I do' at a wedding or blowing out candles at a birthday.",
      message1: "Celebrate with us and let the decorations reflect the joy in your heart.",
      message2: "- Mayura-Ruturaj"
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="middle-body">
        {/* Hero Carousel - Guest View */}
        <Carousel className="hero-carousel">
          <Carousel.Item>
            <img className="d-block w-100" src={carousel1} alt="Wedding Slide" />
            <Carousel.Caption className="text-center">
              <h3>Welcome to CelebrateIt</h3>
              <p>Your Dream Event Starts Here. Please Login to Explore.</p>
              <div className="mt-4">
                <Link to="/login">
                  <Button variant="primary" size="lg" className="me-3 px-4">Login</Button>
                </Link>
                <Link to="/registration">
                  <Button variant="outline-light" size="lg" className="px-4">Sign Up</Button>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Brief Intro */}
        <Container className="text-center my-5">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="message-text">We make your special moments unforgettable. Join us to plan your perfect Wedding, Birthday, or Corporate Event.</p>
        </Container>
      </div>
    );
  }

  return (
    <div className="middle-body">
      {/* Hero Carousel - Logged In View */}
      <Carousel className="hero-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="Wedding Slide" />
          <Carousel.Caption>
            <h3>Plan Your Perfect Wedding</h3>
            <p>From decoration to catering, we’ve got you covered.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="Engagement Slide" />
          <Carousel.Caption>
            <h3>Celebrate Life's Milestones</h3>
            <p>Make birthdays and engagements unforgettable.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="Photography Slide" />
          <Carousel.Caption>
            <h3>Capture Every Moment</h3>
            <p>Professional photography and videography services.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Message Section */}
      <Container>
        <div className="message-section">
          <img src={messageImage} alt="Decorative" className="message-image" />
          <h1 className="message-title">Turning Moments Into Memories</h1>
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
      </Container>

      {/* Services Section */}
      <Container>
        <h2 className="section-title">Our Services</h2>
        <div className="services-section">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-content">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>

      {/* Promises Section */}
      <div className="promises-section">
        <Container>
          <h2 className="promises-title">Our Promise To You</h2>
          <p className="promises-text">
            We listen to your dreams, understand your style, and bring your ideas to life with creativity and precision. Your event will be a true reflection of you.
          </p>
          <p className="promises-text">
            From decor and catering to photography and entertainment, we work with the best in the industry to ensure your event exceeds expectations.
          </p>
          <p className="promises-text">
            💌 "Because your happiness is our priority, and every event is a story waiting to be beautifully told."
          </p>
        </Container>
      </div>

      {/* Experience Section */}
      <Container className="experience-container">
        <h2 className="section-title">Experience With CelebrateIt</h2>
        <Carousel>
          {slides.map((slide) => (
            <Carousel.Item key={slide.id}>
              <Row className="align-items-center">
                {/* Left Side: Image */}
                <Col md={6}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="experience-image"
                  />
                </Col>
                {/* Right Side: Text */}
                <Col md={6}>
                  <div className="experience-slide-content">
                    <h2 style={{ fontFamily: 'Gabriela, serif', color: '#d63384' }}>{slide.title}</h2>
                    <p className="text-muted mt-3">{slide.message}</p>
                    <p className="text-muted">{slide.message1}</p>
                    <p className="font-italic font-weight-bold mt-4">{slide.message2}</p>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* Video Section */}
      <Container className="video-section-container">
        <h2 className="section-title">Our Video</h2>
        <div className="video-wrapper">
          <video controls>
            <source src="/Home/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="video-description">Enjoy this beautiful video showcasing our ceremony decor and moments.</p>
      </Container>
    </div>
  );
}

export default MiddleBody;
