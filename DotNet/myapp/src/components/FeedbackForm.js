import React, { useState } from "react";
import "../assets/style/FeedbackForm.css"; // Import your CSS file
import img2 from "../images/Home/about1.jpg"; // Update to your image URL
import { jwtDecode } from "jwt-decode";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    feedbackId: 0,
    image: "",
    feedbackMessage: "",
    rating: 5,
    userId: 0,
  });

  const [errors, setErrors] = useState({
    image: "",
    feedbackMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.image.trim()) {
      formErrors.image = "Image URL is required";
      isValid = false;
    }

    if (!formData.feedbackMessage.trim()) {
      formErrors.feedbackMessage = "Feedback message is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = decodedToken?.Id;

    if (!userId) {
      alert("User is not authenticated.");
      return;
    }

    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5078/api/Feedback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, userId }), // Include userId here
        });

        if (response.ok) {
          alert("Feedback submitted successfully!");
          setFormData({
            feedbackId: 0,
            image: "",
            feedbackMessage: "",
            rating: 5,
            userId: userId,
          });
        } else {
          alert("Failed to submit feedback. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">We Value Your Feedback</h2>

      <div className="half-container">
        <div className="half-image">
          <img src={img2} alt="Feedback" className="feedback-image" />
        </div>
        <div className="half-text">
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter image URL"
                required
              />
              {errors.image && <span className="error-message">{errors.image}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="feedbackMessage">Feedback Message</label>
              <textarea
                id="feedbackMessage"
                name="feedbackMessage"
                value={formData.feedbackMessage}
                onChange={handleChange}
                placeholder="Enter your feedback"
                rows="5"
                required
              ></textarea>
              {errors.feedbackMessage && (
                <span className="error-message">{errors.feedbackMessage}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
              >
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>

            <button type="submit" className="submit-button">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
