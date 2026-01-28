// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
// import '../assets/style/AppFooter.css'; // Make sure to create and link the CSS file

// function AppFooter() {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row className="py-5">
//           {/* Column 1: Links */}
//           <Col md={3} className="right-shift">
//             <h5>Quick Links</h5>
//             <ul className="footer-links">
//               <li><a href="#contactus">Contact Us</a></li>
//               <li><a href="#terms">Terms & Privacy</a></li>
//               <li><a href="#aboutus">About Us</a></li>
//               <li><a href="#wedding">Wedding Website</a></li>
//               <li><a href="#admin">Administration Login</a></li>
//             </ul>
//           </Col>

//           {/* Column 2: Social Media */}
//           <Col md={3}>
//             <h5>Follow Us</h5>
//             <div className="social-icons">
//               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                 <FaFacebook size={30} />
//               </a>
//               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram size={30} />
//               </a>
//               <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
//                 <FaPinterest size={30} />
//               </a>
//               <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin size={30} />
//               </a>
//               <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
//                 <FaWhatsapp size={30} />
//               </a>
//             </div>
//           </Col>

//           {/* Column 3: Contact Info */}
//           <Col md={3}>
//             <h5>Contact Information</h5>
//             <p>Email: celebratit@domain.com</p>
//             <p>Phone: +123 456 7890</p>
//             <p>Address: Khargher, Mumbai, India</p>
//           </Col>

//           {/* Column 4: Newsletter or Legal */}
//           <Col md={3}>
//             <h5>Subscribe to Newsletter</h5>
//             <input type="email" placeholder="Your email" className="footer-email-input" />
//             <button className="footer-btn">Subscribe</button>
//           </Col>
//         </Row>
//         <Row className="text-center py-3">
//           <Col>
//             <p>&copy; {new Date().getFullYear()} Celebrate It. All rights reserved.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }

// export default AppFooter;


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../assets/style/AppFooter.css'; // Make sure to create and link the CSS file

function AppFooter() {
  return (
    <footer className="footer"style={{ backgroundColor: "#fff" }}>
      <Container style={{ backgroundColor: "#fff"}}>
        <Row className="py-5">
          {/* Column 1: Links */}
          <Col md={3} className="right-shift">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/TermsPrivacy">Terms & Privacy</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/">Wedding Website</Link></li>
              <li><Link to="/AdminPanel">Administration Login</Link></li>
              {/* <li><Link to="/AdminDashboard1">Administration Login</Link></li> */}
            </ul>
          </Col>

          {/* Column 2: Social Media */}
          <Col md={3}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.instagram.com/uplightpro?igsh=dmUyaGw1ZnB2eDAz " target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
              <a href="https://in.pinterest.com/search/pins/?q=Reception%20stage%20decor&rs=autocomplete_bubble&b_id=BAYpMvvJSzUcAAAAAAAAAAA3aIygE2H9wzm9yXL0p5jlJelvhG_GZgT274gs00UrVhS5n_Yz9-4I-8KnJcz7n8X8O5nN8vrxT4NZGGJZtEzQhaDrLoYvadk&source_id=9QP9gNwJ&top_pin_id=7036943161836687" target="_blank" rel="noopener noreferrer">
                <FaPinterest size={30} />
              </a>
              <a href="https://www.linkedin.com/company/plan-your-memories/ " target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} />
              </a>
            </div>
          </Col>

          {/* Column 3: Contact Info */}
          <Col md={3}>
            <h5>Contact Information</h5>
            <p>Email: celebratit@domain.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: Khargher, Mumbai, India</p>
          </Col>

          {/* Column 4: Newsletter or Legal */}
          <Col md={3}>
            <h5>Subscribe to CelebrateIt</h5>
            <input type="email" placeholder="Your email" className="footer-email-input" />
            <button className="footer-btn">Subscribe</button>
          </Col>
        </Row>
        <Row className="text-center py-3">
          <Col>
            <p>&copy; {new Date().getFullYear()} Celebrate It. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default AppFooter;

