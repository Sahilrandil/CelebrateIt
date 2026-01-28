import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import '../assets/style/Dashboard.css';
import '../assets/style/Cards.css'; // Use shared card styles

function Dashboard() {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    contactNumber: '',
  });

  const [currentBookings, setCurrentBookings] = useState([]);
  const [completedBookings, setCompletedBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = decodedToken?.Id;

    if (userId) {
      fetchUserData(userId, token);
      fetchUserBookings(userId, token);
    }
  }, []);

  const fetchUserData = (userId, token) => {
    axios
      .get(`http://localhost:5078/api/User/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.error('Error fetching user data:', error));
  };

  const fetchUserBookings = (userId, token) => {
    setLoading(true);
    axios
      .get(`http://localhost:5078/api/Bookings/GetBookingDetailsByUserId/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const allBookings = response.data;
        setCurrentBookings(allBookings.filter(b => b.bookingStatus === "confirmed"));
        setCompletedBookings(allBookings.filter(b => b.bookingStatus === "cancelled" || b.bookingStatus === "completed"));
      })
      .catch((error) => console.error('Error fetching bookings:', error))
      .finally(() => setLoading(false));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const handleEditProfile = () => {
    setPopupVisible(true);
    setFormData(user);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = decodedToken?.Id;

    axios
      .put(`http://localhost:5078/api/User/${userId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setUser(formData);
        setPopupVisible(false);
        alert('Profile updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        alert('Failed to update profile.');
      });
  };

  const handleCancelBooking = (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;

    axios
      .post(`http://localhost:5078/api/Bookings/CancelBooking/${id}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        if (response.status === 200) {
          alert(`Booking ID ${id} has been canceled.`);
          // Refresh list locally
          const canceled = currentBookings.find(b => b.bookingId === id);
          if (canceled) {
            canceled.bookingStatus = "cancelled";
            setCompletedBookings([...completedBookings, canceled]);
            setCurrentBookings(currentBookings.filter(b => b.bookingId !== id));
          }
        }
      })
      .catch((error) => {
        console.error("Error canceling booking:", error);
        alert("Failed to cancel booking.");
      });
  };

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="dashboard-header d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome, {user.userName}!</h2>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      </div>

      {/* Profile Section */}
      <div className="app-card mb-5 p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>User Profile</h3>
          <button className="btn btn-primary" onClick={handleEditProfile}>Edit Profile</button>
        </div>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.contactNumber}</p>
        <div className="mt-3">
          <Link to="/FeedbackForm" className="btn btn-outline-info">Submit Feedback</Link>
        </div>
      </div>

      {/* Active Bookings */}
      <h3 className="section-title mb-3">Your Upcoming Bookings</h3>
      {loading ? <p>Loading bookings...</p> : (
        <div className="cards-grid">
          {currentBookings.length === 0 ? (
            <p>No active bookings.</p>
          ) : (
            currentBookings.map((booking) => (
              <div key={booking.bookingId} className="app-card">
                {booking.fImage && <img src={booking.fImage} alt={booking.fTitle} className="app-card-image" />}
                <div className="app-card-content">
                  <h3 className="app-card-title">{booking.bCategoryName}</h3>
                  <h4 className="app-card-subtitle">{booking.fTitle}</h4>

                  <div className="mt-3">
                    <p><strong>Date:</strong> {new Date(booking.eventDate).toLocaleDateString()}</p>
                    <p><strong>Total:</strong> ₹{booking.totalPrice}</p>
                    <span className="badge badge-success">Confirmed</span>
                  </div>

                  <div className="app-card-actions mt-3">
                    <button className="btn-card btn-danger-card" onClick={() => handleCancelBooking(booking.bookingId)}>
                      Cancel Booking
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Booking History */}
      <h3 className="section-title mt-5 mb-3">Booking History</h3>
      <div className="cards-grid">
        {completedBookings.length === 0 ? (
          <p>No past bookings.</p>
        ) : (
          completedBookings.map((booking) => (
            <div key={booking.bookingId} className="app-card" style={{ opacity: 0.8 }}>
              {booking.fImage && <img src={booking.fImage} alt={booking.fTitle} className="app-card-image" />}
              <div className="app-card-content">
                <h3 className="app-card-title">{booking.bCategoryName}</h3>
                <h4 className="app-card-subtitle">{booking.fTitle}</h4>
                <div className="mt-3">
                  <p><strong>Date:</strong> {new Date(booking.eventDate).toLocaleDateString()}</p>
                  <p><strong>Total:</strong> ₹{booking.totalPrice}</p>
                  <span className={`badge ${booking.bookingStatus === 'cancelled' ? 'badge-danger' : 'badge-secondary'}`}>
                    {booking.bookingStatus}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Edit Profile Modal */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Edit Profile</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group mb-3">
                <label>Name</label>
                <input
                  type="text"
                  name="userName"
                  className="form-control"
                  value={formData.userName}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label>Email</label>
                <input type="email" className="form-control" name="email" value={formData.email} readOnly disabled />
              </div>
              <div className="form-group mb-3">
                <label>Phone</label>
                <input
                  type="text"
                  name="contactNumber"
                  className="form-control"
                  value={formData.contactNumber}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button type="button" className="btn btn-secondary" onClick={() => setPopupVisible(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
