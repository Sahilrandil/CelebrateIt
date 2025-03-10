import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/style/UserBooking.css";

export function BookingCard({ categoryId }) {
  const [bookings, setBookings] = useState([]); // Set initial state to an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      if (!categoryId) {
        setBookings([]); // Clear bookings if category is deselected
        return;
      }

      try {
        setLoading(true);
        // Updated API URL with path parameter
        const response = await axios.get(`http://localhost:8080/bookings/GetBookingsByCategoryId/${categoryId}`);

        if (Array.isArray(response.data)) {
          const confirmedBookings = response.data.filter((booking) => booking.bookingstatus === "CONFIRMED");
          setBookings(confirmedBookings);
        } else {
          console.error("Unexpected API response format:", response.data);
          setBookings([]); // Ensure it's an array
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setBookings([]); // Handle API errors
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, [categoryId]);

  const handleUpdate = async (bookingid) => {
    console.log(bookingid);
    try {
      const response = await axios.put(
        `http://localhost:8080/bookings/UpdateBookingStatusTocompleted/${bookingid}`
      );
  
      if (response.status === 200) {
        alert("Booking status updated to COMPLETED successfully!");
  
        // Update the UI by changing the booking status in the state
        setBookings((prevBookings) =>
          prevBookings.map((b) =>
            b.bookingId === bookingid
              ? { ...b, bookingstatus: "COMPLETED" }
              : b
          )
        );
      } else {
        alert("Failed to update booking status.");
      }
    } catch (error) {
      console.error("Error updating booking status:", error);
      alert("An error occurred while updating the booking status.");
    }
  };
  

  if (loading) return <div>Loading bookings...</div>;
  if (!bookings || bookings.length === 0) return <div>No Booking Data Present !!!</div>;

  return (
    <div className="bookings-grid">
      {bookings.map((booking) => (
        <div key={booking.bookingId} className="booking-card">
          <h3><strong> {booking.bCategoryName}</strong></h3>
          <h4>{booking.stitle}</h4>
          {booking.simage && (
            <img src={booking.simage} alt="Event Image" style={{ width: "410px", height: "260px", objectFit: "cover" }} />
          )}
          <p><strong>User Name:</strong> {booking.uname}</p>
          <p><strong>User Email:</strong> {booking.uemail}</p>
          <p><strong>Contact Number:</strong> {booking.ucontact_number}</p>
          <p><strong>Event Location:</strong> {booking.eventLocation}</p>
          <p><strong>Pin Code:</strong> {booking.pinCode}</p>
          <p><strong>Base Price:</strong> ₹{booking.sbasePrice}</p>
          <p><strong>Discount:</strong> ₹{booking.sdiscount}</p>
          <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>
          <p><strong>Status:</strong> {booking.bookingstatus}</p>
          <p><strong>Event Date:</strong> {new Date(booking.eventdate).toLocaleDateString()}</p>
          <p><strong>Event Details:</strong> {booking.eventdetails}</p>
          <button onClick={() => handleUpdate(booking.bookingid)} className="update-booking-btn">
            Booking Completed
          </button>
        </div>
      ))}
    </div>
  );
}




