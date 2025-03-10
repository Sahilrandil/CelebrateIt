import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {jwtDecode} from 'jwt-decode'; // Ensure you're using the correct package for jwtDecode
import '../assets/style/Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    contactNumber: '',
  });

    const [Bookings,setBooking]=useState(
          {
    "bookingId":0,
    "eventDate": "",
    "totalPrice": 0,
    "bookingStatus": "",
    "fTitle": "",
    "fBasePrice": 0,
    "fDiscount":0,
    "fImage": "",
    "bCategoryName": ""
            }
  
      );

  const [bookings, setBookings] = useState([]);
  const [completedBookings, setCompletedBookings] = useState([]);
  const [currentBookings, setCurrentBookings] = useState([]);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState(user);

  // Fetch user data on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = decodedToken?.Id;

    // Fetch user data
    axios
      .get(`http://localhost:5078/api/User/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });

    // Fetch user bookings
    axios
    .get('http://localhost:5078/api/Bookings/GetAllBookings', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
    .then((response) => {
      const allBookings = response.data;

      // Filter active and completed bookings properly
      setCurrentBookings(allBookings.filter((booking) => booking.bookingStatus === "confirmed" ));
      setCompletedBookings(allBookings.filter((booking) => booking.bookingStatus === "CANCELLED" || booking.bookingStatus === "COMPLETED"));
    })
    .catch((error) => {
      console.error('Error fetching bookings:', error);
    });
}, []);

  const handleLogout = () => {
    alert('You have been logged out.');
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
    axios
      .put(`http://localhost:5078/api/User/${user.id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(() => {
        setUser(formData);
        setPopupVisible(false);
        alert('Profile updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating profile:', error);
        alert('Failed to update profile. Please try again.');
      });
  };

  const handleCancelBooking = (id) => {
    console.log("Attempting to cancel booking with ID:", id);
  
    axios
      .post(
        `http://localhost:5078/api/Bookings/CancelBooking/${id}`,
        {}, // Assuming no payload is required
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setCurrentBookings((prevBookings) => {
            const updatedCurrentBookings = prevBookings.filter(
              (booking) => booking.bookingId !== id
            );
            const canceledBooking = prevBookings.find(
              (booking) => booking.bookingId === id
            );
            
            if (canceledBooking) {
              canceledBooking.bookingStatus = "cancelled";
              setCompletedBookings((prevCompleted) => [
                ...prevCompleted,
                canceledBooking,
              ]);
            }
  
            return updatedCurrentBookings;
          });
  
          alert(`Booking ID ${id} has been canceled.`);
        } else {
          alert("Failed to cancel the booking.");
        }
      })
      .catch((error) => {
        console.error(
          "Error canceling booking:",
          error.response ? error.response.data : error.message
        );
        alert("Failed to cancel the booking. Please try again.");
      });
  };
  

  return (
    <div className="dashboard-container">
      {/* Logout Button */}
      <div className="logout-container">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* User Profile Section */}
      <div className="user-profile">
        <h2>User Profile</h2>
        <p>
          <strong>Name:</strong> {user.userName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.contactNumber}
        </p>
        <button className="edit-profile-btn" onClick={handleEditProfile}>
          Edit Profile
        </button>
        <button className="feedback-form-btn">
  <Link to="/FeedbackForm" style={{ textDecoration: "none", color: "inherit" }}>Give Feedback</Link>
</button>
      </div>

      {/* Current Bookings Section */}
      <div className="bookings-section">
        <h2>Your Bookings</h2>
        <div className="bookings-cards">
          {currentBookings.length === 0 ? (
            <p>No current bookings found.</p>
          ) : (
            currentBookings.map((booking) => (
              <div className="booking-card" key={booking.bookingId}>
                <div className="booking-details">
                  {/* <h3>Event Details</h3> */}
                  <h3><strong> {booking.bCategoryName}</strong></h3>
                  <p><strong></strong> {booking.fTitle}</p>
                  {/* <p><strong></strong> {booking.fImage}</p> */}
                  <img src={booking.fImage} alt="Event Image" style={{ width: "380px", height: "200px", objectFit: "cover" }} />
                  
                  <p><strong>BasePrice :</strong> {booking.fBasePrice}</p>
                  <p><strong>Discount :</strong> {booking.fDiscount}</p>
                  <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>
                  <p><strong>Status:</strong> {booking.bookingStatus}</p>
                  <p><strong>Date:</strong> {new Date(booking.eventDate).toLocaleDateString()}</p>
                  
                  <div className="card-actions">
                    <button className="delete-btn" onClick={() => handleCancelBooking(booking.bookingId)}>
                      cancel
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Booking History Section */}
      <div className="history-section">
        <h2>Booking History</h2>
        <div className="bookings-cards">
          {completedBookings.length === 0 ? (
            <p>No completed bookings found.</p>
          ) : (
            completedBookings.map((booking) => (
              <div className="booking-card" key={booking.id}>
                <div className="booking-details">
                  <h3>{booking.event}</h3>
                  <h3><strong> {booking.bCategoryName}</strong></h3>
                  <p><strong></strong> {booking.fTitle}</p>
                  {/* <p><strong></strong> {booking.fImage}</p> */}
                  <img src={booking.fImage} alt="Event Image" style={{width: "380px", height: "200px", objectFit: "cover" }} />
                  
                  <p><strong>BasePrice :</strong> {booking.fBasePrice}</p>
                  <p><strong>Discount :</strong> {booking.fDiscount}</p>
                  <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>
                  <p><strong>Status:</strong> {booking.bookingStatus}</p>
                  <p><strong>Date:</strong> {new Date(booking.eventDate).toLocaleDateString()}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Popup Form */}
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Edit Profile</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} readOnly />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Save
              </button>
              <button type="button" className="cancel-btn" onClick={() => setPopupVisible(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
