import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/style/Gallery.css';

import img1 from '../images/Home/photo2.jpg';
import img2 from '../images/Home/haldi1.jpg';
import img3 from '../images/Home/eng2.jpg';
import img4 from '../images/Home/photo1.jpg';
import img5 from '../images/Home/birth4.jpg';
import img6 from '../images/Home/img6.jpg';
import img7 from '../images/Home/img7.jpg';
import img8 from '../images/Home/eng8.jpg';
import img9 from '../images/Home/photo7.jpg';

import messageImage from '../images/Home/des.jpg';

const Gallery = () => {
  const images = [
    { src: img1, alt: 'Image 1', message: 'A memorable moment captured forever!' },
    { src: img2, alt: 'Image 2', message: 'The celebration of love and joy!' },
    { src: img3, alt: 'Image 3', message: 'Together, we begin a beautiful journey.' },
    { src: img4, alt: 'Image 4', message: 'Our hearts beat as one on this special day.' },
    { src: img5, alt: 'Image 5', message: 'The magic of our bond, forever cherished.' },
    { src: img6, alt: 'Image 6', message: 'Our wedding day, a dream come true.' },
    { src: img7, alt: 'Image 7', message: 'A moment of pure happiness and laughter.' },
    { src: img8, alt: 'Image 8', message: 'The most beautiful day of our lives.' },
    { src: img9, alt: 'Image 9', message: 'Together, we create our forever.' },
  ];

  return (
    <Container className="gallery-container py-4">
      {/* Message Section */}
      <h1 className="text-center mb-4">Gallery</h1>
      <div className="message-section">
        <img src={messageImage} alt="Message Decorative" className="message-image" />
        <h1 className="message-title">Turning Moments Into Memories, Filled With Love and Joy!</h1>
        <p className="message-text">
          Life’s most precious moments deserve to be celebrated in the most extraordinary way. At <strong>CelebrateIt</strong>, we believe every event is a story waiting to be told—a story of love, laughter, and unforgettable memories.
        </p>
        <p className="message-text">
          Whether it’s the magical union of two souls in an engagement, the vibrant hues of Haldi and Mehendi, the grand celebration of a wedding, or the joyous giggles of a birthday, we are here to craft a dreamlike setting for your cherished occasions.
        </p>
      </div>

      {/* Image Gallery with Cards */}
      <Row>
        {images.map((image, index) => (
          <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
            <Card className="gallery-card">
              <Card.Img variant="top" src={image.src} alt={image.alt} className="gallery-image" />
              <Card.Body>
                <Card.Text className="card-message">{image.message}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
