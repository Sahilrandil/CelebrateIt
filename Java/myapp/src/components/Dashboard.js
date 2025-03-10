// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';
// import '../assets/style/Dashboard.css';

// function Dashboard() {
//   const [user, setUser] = useState({
//     userName: '',
//     email: '',
//     contact_number: '',
//   });

//   const [bookings, setBookings] = useState([
//     // Sample booking data (you can replace with dynamic data)
//     {
//       id: 1,
//       event: 'Wedding',
//       date: '2024-12-10',
//       status: 'Confirmed',
//       price: '₹1,00,000',
//       theme: 'Royal Wedding',
//       image: '/Home/wedding1.jpg',
//     },
//     {
//       id: 2,
//       event: 'Birthday',
//       date: '2024-11-25',
//       status: 'Completed',
//       price: '₹1,00,000',
//       theme: 'Colorful Celebration',
//       image: '/Home/birth1.jpg',
//     },
//     {
//       id: 3,
//       event: 'Haldi',
//       date: '2025-01-15',
//       status: 'Pending',
//       price: '₹70,000',
//       theme: 'Light Setup',
//       image: '/Home/haldi1.jpg',
//     },
//   ]);

//   const [isPopupVisible, setPopupVisible] = useState(false);
//   const [formData, setFormData] = useState(user);

//   // Fetch user data on component mount
//   useEffect(() => {
//     //const userId = 1; // Replace with the actual logged-in user ID (use localStorage/sessionStorage)
    
//     const token = localStorage.getItem("token");
//     const decodedToken = token ? jwtDecode(token) : null;
//     const Id = decodedToken?.userId;
//     console.log(Id);
//     axios.get(`http://localhost:8080/users/${Id}`)
//       .then((response) => {
//         console.log(response.data);
//         setUser(response.data); // Set user data received from API
//       })
//       .catch((error) => {
//         console.error('There was an error fetching the user data:', error);
//       });
//   }, []);

//   const handleLogout = () => {
//     alert('You have been logged out.');
//     localStorage.removeItem("token");
//     window.location.href = '/login';
//   };

//   const handleEditProfile = () => {
//     setPopupVisible(true);
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setUser(formData);
//     setPopupVisible(false);
//     alert('Profile updated successfully!');
//   };

//   const handleDeleteBooking = (id) => {
//     const updatedBookings = bookings.filter((booking) => booking.id !== id);
//     setBookings(updatedBookings);
//     alert(`Booking ID ${id} has been deleted.`);
//   };

//   const completedBookings = bookings.filter((booking) => booking.status === 'Completed');
//   const currentBookings = bookings.filter((booking) => booking.status !== 'Completed');

//   return (
//     <div className="dashboard-container">
//       {/* Logout Button */}
//       <div className="logout-container">
//         <button className="logout-btn" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>

//       {/* User Profile Section */}
//       <div className="user-profile">
//         <h2>User Profile</h2>
//         <p>
//           <strong>Name:</strong> {user.userName}
//         </p>
//         <p>
//           <strong>Email:</strong> {user.email}
//         </p>
//         <p>
//           <strong>Phone:</strong> {user.contact_number}
//         </p>
//         <button className="edit-profile-btn" onClick={handleEditProfile}>
//           Edit Profile
//         </button>
//         <button className="feedback-form-btn">
//           <a href="/FeedbackForm">Give Feedback</a>
//         </button>
//       </div>

//       {/* Event Bookings Section */}
//       <div className="bookings-section">
//         <h2>Your Bookings</h2>
//         <div className="bookings-cards">
//           {currentBookings.map((booking) => (
//             <div className="booking-card" key={booking.id}>
//               <img src={booking.image} alt={booking.event} className="booking-image" />
//               <div className="booking-details">
//                 <h3>{booking.event}</h3>
//                 <p>
//                   <strong>Date:</strong> {booking.date}
//                 </p>
//                 <p>
//                   <strong>Status:</strong> {booking.status}
//                 </p>
//                 <p>
//                   <strong>Price:</strong> {booking.price}
//                 </p>
//                 <p>
//                   <strong>Theme:</strong> {booking.theme}
//                 </p>
//                 <div className="card-actions">
//                   <button className="delete-btn" onClick={() => handleDeleteBooking(booking.id)}>
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Booking History Section */}
//       <div className="history-section">
//         <h2>Booking History</h2>
//         <div className="bookings-cards">
//           {completedBookings.map((booking) => (
//             <div className="booking-card" key={booking.id}>
//               <img src={booking.image} alt={booking.event} className="booking-image" />
//               <div className="booking-details">
//                 <h3>{booking.event}</h3>
//                 <p>
//                   <strong>Date:</strong> {booking.date}
//                 </p>
//                 <p>
//                   <strong>Status:</strong> {booking.status}
//                 </p>
//                 <p>
//                   <strong>Price:</strong> {booking.price}
//                 </p>
//                 <p>
//                   <strong>Theme:</strong> {booking.theme}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Popup Form */}
//       {isPopupVisible && (
//         <div className="popup">
//           <div className="popup-content">
//             <h2>Edit Profile</h2>
//             <form onSubmit={handleFormSubmit}>
//               <div className="form-group">
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   name="UserName"
//                   value={formData.UserName}
//                   onChange={handleFormChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Email</label>
//                 <input type="email" name="Email" value={formData.Email} readOnly />
//               </div>
//               <div className="form-group">
//                 <label>Phone</label>
//                 <input
//                   type="text"
//                   name="ContactNumber"
//                   value={formData.ContactNumber}
//                   onChange={handleFormChange}
//                   required
//                 />
//               </div>
//               <button type="submit" className="submit-btn">
//                 Save
//               </button>
//               <button type="button" className="cancel-btn" onClick={() => setPopupVisible(false)}>
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {jwtDecode} from 'jwt-decode'; // Ensure you're using the correct package for jwtDecode
import '../assets/style/Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    contact_number: '',
  });

    // const [Bookings,setBooking]=useState(
    //       {
    // "bookingId":0,
    // "eventDate": "",
    // "totalPrice": 0,
    // "bookingStatus": "",
    // "fTitle": "",
    // "fBasePrice": 0,
    // "fDiscount":0,
    // "fImage": "",
    // "bCategoryName": ""
    //         }
  
    //   );

  const [bookings, setBookings] = useState([]);
  const [completedBookings, setCompletedBookings] = useState([]);
  const [currentBookings, setCurrentBookings] = useState([]);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState(user);

  // Fetch user data on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = token ? jwtDecode(token) : null;
    const userId = decodedToken?.userId;

    // Fetch user data
    axios
      .get(`http://localhost:8080/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });

    // Fetch user bookings
    console.log(userId);
    axios
    .get(`http://localhost:8080/bookings/GetBookingsByUserId/${userId}`)
    .then((response) => {
      const allBookings = response.data;

      // Filter active and completed bookings properly
      setCurrentBookings(allBookings.filter((booking) => booking.bookingstatus == "CONFIRMED" ));
      setCompletedBookings(allBookings.filter((booking) => booking.bookingstatus == "CANCELLED" ||  booking.bookingstatus == "COMPLETED" ));
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
      .put(`http://localhost:5078/api/User/${user.id}`, formData)
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
  const handleCancelBooking = async (bookingid) => {
    console.log("Attempting to cancel booking with ID:", bookingid);

    try {
        const response = await axios.put(`http://localhost:8080/bookings/cancel/${bookingid}`);

        if (response.status === 200) {
            setCurrentBookings((prevBookings) => 
                prevBookings.filter(booking => booking.bookingid !== bookingid)
            );

            setCompletedBookings((prevCompleted) => {
                const canceledBooking = currentBookings.find(booking => booking.bookingid === bookingid);
                if (canceledBooking) {
                    return [...prevCompleted, { ...canceledBooking, bookingstatus: "CANCELLED" }];
                }
                return prevCompleted;
            });
            alert(`Booking ID ${bookingid} has been canceled.`);
        } else {
            alert("Failed to cancel the booking.");
        }
    } catch (error) {
        console.error("Error canceling booking:", error.response ? error.response.data : error.message);
        alert("Failed to cancel the booking. Please try again.");
    }
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
          <strong>Phone:</strong> {user.contact_number}
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
              <div className="booking-card" key={booking.bookingid}>
                <div className="booking-details">
                  {/* <h3>Event Details</h3> */}
                  <h3><strong> {booking.bcategoryname}</strong></h3>
                  <p><strong></strong> {booking.stitle}</p>
                  {/* <p><strong></strong> {booking.fImage}</p> */}
                  <img src={booking.simage} alt="Event Image" style={{ width: "380px", height: "200px", objectFit: "cover" }} />
                  
                  <p><strong>BasePrice :</strong> {booking.sbasePrice}</p>
                  <p><strong>Discount :</strong> {booking.sdiscount}</p>
                  <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>
                  <p><strong>Status:</strong> {booking.bookingstatus}</p>
                  <p><strong>Date:</strong> {new Date(booking.eventdate).toLocaleDateString()}</p>
                  
                  <div className="card-actions">
                    <button className="delete-btn" onClick={() => handleCancelBooking(booking.bookingid)}>
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
              <div className="booking-card" key={booking.bookingid}>
                <div className="booking-details">
                  <h3>{booking.event}</h3>
                  <h3><strong> {booking.bcategoryname}</strong></h3>
                  <p><strong></strong> {booking.stitle}</p>
                  {/* <p><strong></strong> {booking.fImage}</p> */}
                  <img src={booking.simage} alt="Event Image" style={{ width: "380px", height: "200px", objectFit: "cover" }} />
                  
                  <p><strong>BasePrice :</strong> {booking.sbasePrice}</p>
                  <p><strong>Discount :</strong> {booking.sdiscount}</p>
                  <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>
                  <p><strong>Status:</strong> {booking.bookingstatus}</p>
                  <p><strong>Date:</strong> {new Date(booking.eventdate).toLocaleDateString()}</p>
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
