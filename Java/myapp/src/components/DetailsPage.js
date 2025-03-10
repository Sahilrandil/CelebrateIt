import React, { useState } from "react";
import "../assets/style/DetailsPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img1 from "../assets/images/IndianTheme.webp";
import portfolio1 from "../assets/images/EngagImg1.jfif";
import portfolio2 from "../assets/images/EngagImg2.jfif";
import portfolio3 from "../assets/images/EngagImg3.jpg";
import portfolio4 from "../assets/images/EngagImg4.jpeg";
import portfolio5 from "../assets/images/EngagImg5.jpg";
import portfolio6 from "../assets/images/EngagImg6.jfif";
import portfolio7 from "../assets/images/EngagImg7.jfif";
import portfolio8 from "../assets/images/EngagImg8.jpg";
import portfolio9 from "../assets/images/EngagImg9.jpg";
import portfolio10 from "../assets/images/EngagImg10.jfif";
import portfolio11 from "../assets/images/EngagImg11.jpeg";
import portfolio12 from "../assets/images/EngagImg12.jfif";
import { useParams } from 'react-router-dom';
const portfolioImages = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
  portfolio10,
  portfolio11,
  portfolio12,
];

const DetailsPage = () => {
  const defaultRating = "4.8/5";
  const defaultPromotion = "10% ";
  const defaultPrice = "₹50,000";

  

  const [rating] = useState(defaultRating);
  const [promotion] = useState(defaultPromotion);
  const [price] = useState(defaultPrice);
  const [paymentFormVisible, setPaymentFormVisible] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    price: defaultPrice,
  });

  const todayDate = new Date().toISOString().split("T")[0];
  const [formErrors, setFormErrors] = useState({
    nameError: "",
    phoneError: "",
    emailError: "",
  });

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements["name"].value;
    const phone = form.elements["phone"].value;
    const email = form.elements["email"].value;

    // Validation
    let valid = true;
    let errors = {
      nameError: "",
      phoneError: "",
      emailError: "",
    };

    // Name validation (only alphabets and spaces allowed)
    if (!/^[A-Za-z\s]+$/.test(name)) {
      valid = false;
      errors.nameError = "Name must contain only letters and spaces";
    }

    // Phone number validation (only numbers and 10 digits)
    if (!/^\d{10}$/.test(phone)) {
      valid = false;
      errors.phoneError = "Phone number must be 10 digits";
    }

    // Email validation
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
      valid = false;
      errors.emailError = "Please enter a valid email address";
    }

    setFormErrors(errors);

    if (valid) {
      setBookingInfo({ ...bookingInfo, name });
      setPaymentFormVisible(true); // Show the payment form
    }
  };

  const handlePayment = (event) => {
    event.preventDefault();
    toast.success("🎉 Booking successfully completed!", {
      position: "top-right",
      autoClose: 2000,
    });
    setTimeout(() => {
      window.location.reload(); // Reload the page after payment
    }, 2000);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const errors = { ...formErrors };

    // Clear errors when user types correctly
    if (name === "name" && /^[A-Za-z\s]+$/.test(value)) {
      errors.nameError = "";
    }
    if (name === "phone" && /^\d{10}$/.test(value)) {
      errors.phoneError = "";
    }
    if (name === "email" && /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value)) {
      errors.emailError = "";
    }

    setFormErrors(errors);
  };

  return (
    <div className="details-page">
      <header className="details-header">
        <h1>CELEBRATEIT</h1>
        <p className="sub-header">Transforming your dreams into reality</p>
      </header>

      <div className="details-container">
        <div className="details-left">
          <img src={img1} alt="Indian Theme" className="details-image" />
          <h2>Indian Theme</h2>
          <div className="navigation-links">
            <a href="#images">Projects</a>
            <a href="#about">About</a>
            <a href="#review">Reviews</a>
          </div>
          <br />
          <div className="theme-info">
            <div className="rating">
              <span>⭐⭐⭐⭐☆</span>
              <p>{rating}</p>
            </div>
            <div className="promotion">
              <span className="promo-badge">Limited Time Offer</span>
              <p>{promotion}</p>
            </div>
          </div>
          <br />
          <div>
            <h2 id="about">About Indian Theme</h2>
            <p>
              Get in touch with your roots and give your engagement party an authentic Indian vibe.
              Think bamboo cane furniture, jute mats and rugs, candle lanterns, and earthen pots as part of
              the décor to add an authentic Indian vibe. add more infor related this theme engagement
            </p>
            <p>
              An Indian-themed engagement party is a vibrant celebration of tradition, featuring bamboo
              cane furniture, jute rugs, candle lanterns, and earthen pots for décor. Guests can enjoy
              traditional floor seating with embroidered cushions and low wooden tables, while the atmosphere
              is enhanced with marigold garlands, torans, and colorful lighting.
            </p>
          </div>

          <div className="portfolio-grid" id="images">
            {portfolioImages.map((image, index) => (
              <div key={index} className="portfolio-item">
                <img src={image} alt={`Portfolio ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section form */}
        <div className="details-right">
          <div className="pricing">
            <h3>Starting Price</h3>
            <p>{price}</p>
            <span>Price (Planning Fee)</span>
          </div><br></br>

          {/* Form details */}
          <form className="booking-form" onSubmit={handleBooking}>
            <h4>
              CelebrateIt
              <br /> Booking Information
            </h4>
            <input
              type="text"
              name="name"
              placeholder="Full name*"
              required
              onChange={handleInputChange}
            />
            {formErrors.nameError && <p className="error">{formErrors.nameError}</p>}
            <div className="contact-details">
              <select>
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number*"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                required
                onChange={handleInputChange}
              />
            </div>
            {formErrors.phoneError && <p className="error">{formErrors.phoneError}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email address*"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              required
              onChange={handleInputChange}
            />
            {formErrors.emailError && <p className="error">{formErrors.emailError}</p>}
            <input
              type="date"
              placeholder="Function date*"
              min={todayDate}
              required
            />
            <input type="text" placeholder="Location" required />
            <textarea placeholder="Details about Event"></textarea>

            {/* Read-only text fields for Rating, Promotion, and Price */}
            <label>Rating</label>
            <input type="text" value={`${rating}`} readOnly />
            <label>Promotion</label>
            <input type="text" value={`${promotion}`} readOnly />
            <label>Price</label>
            <input type="text" value={`${price}`} readOnly />

            <button type="submit" className="send-message">
              Book Now
            </button>
          </form>

          {/* Payment Form */}
          {paymentFormVisible && (
            <form className="payment-form" onSubmit={handlePayment}>
              <h4>Payment Form</h4>
              <p>
                <strong>Name:</strong> {bookingInfo.name}
              </p>
              <p>
                <strong>Amount Due:</strong> {bookingInfo.price}
              </p>
              <div className="payment-methods">
                <label>
                  <input type="radio" name="paymentMethod" value="creditCard" required />
                  Credit Card
                </label>
                <label>
                  <input type="radio" name="paymentMethod" value="bankTransfer" required />
                  Bank Transfer
                </label>
                <label>
                  <input type="radio" name="paymentMethod" value="paypal" required />
                  PayPal
                </label>
              </div>
              <div className="credit-card-details">
                <input
                  type="text"
                  placeholder="Card Number"
                  id="cardNumber"
                  maxLength={16}
                  pattern="[0-9]{16}"
                  title="Please enter a valid 16-digit Card number"
                  required
                />
                <input
                  type="text"
                  placeholder="MM/YY"
                  pattern="(0[1-9]|1[0-2])\/\d{2}"
                  id="expiryDate"
                  maxLength="5"
                  required
                />
                <input
                  type="text"
                  placeholder="CVC"
                  id="cvc"
                  maxLength="3"
                  required
                />
              </div>
              <label>
                <input type="checkbox" required /> I agree with the{" "}
                <a href="#">Terms and Conditions</a>
              </label>
              <button type="submit" className="pay-now">
                Pay Now
              </button>
            </form>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DetailsPage;
