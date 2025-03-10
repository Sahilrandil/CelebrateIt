import axios from "axios";
import { useEffect, useState } from "react";
import '../assets/style/FeedbackCard.css'; // Import your CSS file for styling

export function FeedbackCard() {
  const [feedbacks, setFeedbacks] = useState([]);

  // Fetch feedback data from the API
  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:5078/api/Feedback");
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedback data:", error);
    }
  }

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Handle Delete Operation
  const handleDelete = async (feedbackId) => {
    // Show confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
    
    if (!confirmDelete) return; // Exit if the user cancels

    try {
      await axios.delete(`http://localhost:5078/api/Feedback/${feedbackId}`);
      alert("Feedback deleted successfully!");
      fetchData(); // Refresh feedback list after deletion
    } catch (error) {
      console.error("Error deleting feedback:", error);
      alert("Failed to delete feedback.");
    }
  };

  if (feedbacks.length === 0) {
    return <div className="no-feedback-data">No Feedback Data Available</div>;
  }

  return (
    <div className="feedback-cards">
      {feedbacks.map((feedback) => (
        <div key={feedback.feedbackId} className="feedback-card">
          {feedback.image && (
            <div className="feedback-image-container">
              <img src={feedback.image} alt="Feedback" className="feedback-image" />
            </div>
          )}
          <div className="feedback-details">
            <p><strong>Feedback:</strong> {feedback.feedbackMessage}</p>
            <p><strong>Rating:</strong> {feedback.rating}</p>
            <button
              onClick={() => handleDelete(feedback.feedbackId)}
              className="delete-feedback-btn"
            >
              Delete Feedback
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
