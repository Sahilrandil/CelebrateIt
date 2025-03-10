import React, { useState } from "react";
import "../assets/style/UserDashboard.css";
import { BookingCard } from "./BookingCard";

const categoryMap = {
  1: "Wedding Services",
  2: "Engagement Services",
  3: "Birthday Services",
  4: "Veg Catering Services",
  5: "NonVeg Catering Services",
  6: "Photography Service"
};

function UserBookingsDashboard() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    <div className="user-bookings-dashboard">

       {/* Centered Booking Details Heading */}
       <h1 className="booking-details-title">Booking Details</h1>

      {Object.keys(categoryMap).map((categoryId) => {
        const id = Number(categoryId); // Ensure it's a number
        const categoryName = categoryMap[id];

        return (
          <div key={id} className={`category-section ${categoryName.toLowerCase().replace(/\s/g, "-")}`}>
            <h2>{categoryName}</h2>
            <button className="view-services-btn" onClick={() => handleCategoryClick(id)}>
              {selectedCategoryId === id ? `Hide ${categoryName}` : `View ${categoryName}`}
            </button>
            
            {/* Show BookingCard only if the category is selected */}
            {selectedCategoryId === id && (
              <div className="services-container">
                <BookingCard categoryId={id} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default UserBookingsDashboard;
