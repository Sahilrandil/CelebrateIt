import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/style/Cards.css"; // Use shared styles

export function BookingCard({ categoryId }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      if (!categoryId) {
        setBookings([]); // Clear bookings if category is deselected
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5078/api/Bookings/GetBookingsByCategoryId?categoryId=${categoryId}`
        );

        if (Array.isArray(response.data)) {
          setBookings(response.data);
        } else {
          console.error("Unexpected API response format:", response.data);
          setBookings([]);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setBookings([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, [categoryId]);

  const handleUpdate = (booking) => {
    console.log("Update booking:", booking);
    // Implement update logic (e.g., open a modal to edit details)
  };

  if (loading) return <div className="text-center mt-5">Loading bookings...</div>;
  if (!bookings || bookings.length === 0) return <div className="text-center mt-5">No Booking Data Present !!!</div>;

  return (
    <div className="cards-grid">
      {bookings.map((booking) => (
        <div key={booking.bookingId} className="app-card">
          {booking.fImage && (
            <img src={booking.fImage} alt="Event Image" className="app-card-image" />
          )}
          <div className="app-card-content">
            <h3 className="app-card-title">{booking.bCategoryName}</h3>
            <h4 className="app-card-subtitle">{booking.fTitle}</h4>

            <div className="mt-2">
              <p><strong><small>USER DETAILS</small></strong></p>
              <p className="mb-1">Name: {booking.uName}</p>
              <p className="mb-1">Email: {booking.uEmail}</p>
              <p className="mb-1">Phone: {booking.uContactNumber}</p>
            </div>

            <hr />

            <div className="mt-2">
              <p><strong><small>EVENT DETAILS</small></strong></p>
              <p className="mb-1">Date: {new Date(booking.eventDate).toLocaleDateString()}</p>
              <p className="mb-1">Location: {booking.eventLocation} - {booking.pinCode}</p>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="app-card-price">Total: ₹{booking.totalPrice}</span>
              <span className={`badge ${booking.bookingStatus === 'confirmed' ? 'badge-success' : 'badge-warning'}`}>
                {booking.bookingStatus}
              </span>
            </div>

            <div className="app-card-actions mt-3">
              <button onClick={() => handleUpdate(booking)} className="btn-card btn-primary-card">
                Mark Completed
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
