// import axios from "axios";
// import { useEffect, useState } from "react";
// import "../assets/style/UserBooking.css";

// export function BookingCard({ categoryId }) {
//   const [bookings, setBookings] = useState({
//     "bookingId": 0,
//     "eventLocation": "",
//     "pinCode": "",
//     "eventDate": "",
//     "quantity": 1,
//     "totalPrice": 0,
//     "paymentMethod": "",
//     "bookingStatus": "confirmed",
//     "uName": "",
//     "uEmail": "",
//     "uContactNumber": "",
//     "fTitle": "",
//     "fBasePrice": 0,
//     "fDiscount": 0,
//     "bCategoryName": ""
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchBookings() {
//       if (!categoryId) {
//         setBookings([]); // Clear bookings if category is deselected
//         return;
//       }

//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `http://localhost:5078/api/Bookings/GetBookingsByCategoryId?categoryId=${categoryId}`
//         );
//         if (Array.isArray(response.data)) {
//           setBookings(response.data);
//         } else {
//           setBookings([]); // Ensure it's an array
//         }
//         //setBookings(response.data);
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchBookings();
//   }, [categoryId]);

 
  

//   // Handle Update operation (to be implemented)
//   const handleUpdate = (booking) => {
//     console.log("Update booking:", booking);
//     // Implement update logic (e.g., open a modal to edit details)
//   };

//   if (loading) return <div>Loading bookings...</div>;
//   if (!bookings || bookings.length === 0) return <div>No Booking Data Present !!!</div>;

//   return (
//     <div className="bookings-grid">
//       {bookings.map((booking) => (
//         <div key={booking.bookingId} className="booking-card">
//           {/* <h3>Booking ID: {booking.bookingId}</h3> */}
//           <h3><strong> {booking.bCategoryName}</strong></h3>
//           <h4><strong></strong> {booking.fTitle}</h4>
//           <img src={booking.fImage} alt="Event Image" style={{ width: "410px", height: "260px", objectFit: "cover" }} />
//           <p><strong>User Name</strong> {booking.uName}</p>
//           <p><strong>User Email</strong> {booking.uEmail}</p>
//           <p><strong>ContactNumber</strong> {booking.uContactNumber}</p>
//           <p><strong>Event Location:</strong> {booking.eventLocation}</p>
//           <p><strong>Pin Code:</strong> {booking.pinCode}</p>
//           <p><strong>BasePrice :</strong> {booking.fBasePrice}</p>
//           <p><strong>Discount :</strong> {booking.fDiscount}</p>
//           <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>
//           <p><strong>Status:</strong> {booking.bookingStatus}</p>
//           {/* <p><strong>Date:</strong> {new Date(booking.eventDate).toLocaleDateString()}</p> */}
//           <p><strong>Event Date:</strong> {new Date(booking.eventDate).toLocaleDateString()}</p>
//           <p><strong>Event Details:</strong> {booking.eventDetails}</p>
//           {/* <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p> */}
//           <p><strong>Payment Method:</strong> {booking.paymentMethod}</p>
//           <p><strong>Booking Status:</strong> {booking.bookingStatus}</p>
//           {/* <p><strong>User ID:</strong> {booking.userId}</p> */}
//           {/* <p><strong>Facility ID:</strong> {booking.facilityId}</p> */}
//           {/* <p><strong>Category ID:</strong> {booking.categoryId}</p> */}
//           <button onClick={() => handleUpdate(booking)} className="update-booking-btn">
//              Booking completed
//           </button>
          
//         </div>
//       ))}
//     </div>
//   );
// }




import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/style/UserBooking.css";

export function BookingCard({ categoryId }) {
  const [bookings, setBookings] = useState([]); // ✅ Set initial state to an array
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

  const handleUpdate = (booking) => {
    console.log("Update booking:", booking);
    // Implement update logic (e.g., open a modal to edit details)
  };

  if (loading) return <div>Loading bookings...</div>;
  if (!bookings || bookings.length === 0) return <div>No Booking Data Present !!!</div>;

  return (
    <div className="bookings-grid">
      {bookings.map((booking) => (
        <div key={booking.bookingId} className="booking-card">
          <h3><strong> {booking.bCategoryName}</strong></h3>
          <h4>{booking.fTitle}</h4>
          {booking.fImage && (
            <img src={booking.fImage} alt="Event Image" style={{ width: "410px", height: "260px", objectFit: "cover" }} />
          )}
          <p><strong>User Name:</strong> {booking.uName}</p>
          <p><strong>User Email:</strong> {booking.uEmail}</p>
          <p><strong>Contact Number:</strong> {booking.uContactNumber}</p>
          <p><strong>Event Location:</strong> {booking.eventLocation}</p>
          <p><strong>Pin Code:</strong> {booking.pinCode}</p>
          <p><strong>Base Price:</strong> ₹{booking.fBasePrice}</p>
          <p><strong>Discount:</strong> ₹{booking.fDiscount}</p>
          <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>
          <p><strong>Status:</strong> {booking.bookingStatus}</p>
          <p><strong>Event Date:</strong> {new Date(booking.eventDate).toLocaleDateString()}</p>
          <p><strong>Event Details:</strong> {booking.eventDetails}</p>
          <p><strong>Payment Method:</strong> {booking.paymentMethod}</p>
          <button onClick={() => handleUpdate(booking)} className="update-booking-btn">
            Booking Completed
          </button>
        </div>
      ))}
    </div>
  );
}
