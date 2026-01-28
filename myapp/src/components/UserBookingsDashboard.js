import React, { useState } from "react";
import "../assets/style/AdminPanel.css";
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
    <div className="admin-bookings-content">
      <div className="row">
        {Object.keys(categoryMap).map((categoryId) => {
          const id = Number(categoryId);
          const categoryName = categoryMap[id];

          // Ensure category name is safe for class usage
          const sectionClass = categoryName ? categoryName.toLowerCase().replace(/\s/g, "-") : "category-section";

          return (
            <div key={id} className="col-12 mb-4">
              <div className={`p-3 border rounded bg-white shadow-sm ${sectionClass}`}>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0 text-secondary">{categoryName}</h5>
                  <button
                    className="btn btn-sm btn-outline-dark"
                    onClick={() => handleCategoryClick(id)}
                  >
                    {selectedCategoryId === id ? `Hide Bookings` : `View Bookings`}
                  </button>
                </div>

                {/* Show BookingCard only if the category is selected */}
                {selectedCategoryId === id && (
                  <div className="mt-4">
                    <BookingCard categoryId={id} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserBookingsDashboard;
