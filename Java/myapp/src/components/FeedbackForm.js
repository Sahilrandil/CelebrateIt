import React, { useState } from "react";
import "../assets/style/FeedbackForm.css"; // Import your CSS file
import img2 from "../images/Home/about1.jpg"; // Update to your image URL
import { jwtDecode } from "jwt-decode";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    feedbackId: 0,
    imageUrl: "",
    message: "",
    rating: 5,
    userid: 0,
  });

  const [errors, setErrors] = useState({
    imageUrl: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value })); // Corrected state update
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.imageUrl.trim()) {
      formErrors.imageUrl = "Image URL is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      formErrors.message = "Feedback message is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = decodedToken?.userId;

    if (!userId) {
      alert("User is not authenticated.");
      return;
    }

    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:8080/feedback/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, userid: userId }), // Ensuring correct user ID
        });

        if (response.ok) {
          alert("Feedback submitted successfully!");
          setFormData({
            feedbackId: 0,
            imageUrl: "",
            message: "",
            rating: 5,
            userid: userId,
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
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl" // ✅ Corrected name attribute
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="Enter image URL"
                required
              />
              {errors.imageUrl && <span className="error-message">{errors.imageUrl}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Feedback Message</label>
              <textarea
                id="message"
                name="message" // ✅ Corrected name attribute
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your feedback"
                rows="5"
                required
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
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
