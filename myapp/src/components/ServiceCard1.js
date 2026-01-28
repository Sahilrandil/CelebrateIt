import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/style/Cards.css"; // Use shared styles

export function ServiceCard1({ categoryId }) {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  async function fetchData() {
    try {
      const response = await axios.get(`http://localhost:5078/api/Facilities/GetByCategory/${categoryId}`);
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  if (!services || services.length === 0) {
    return (
      <div className="text-center mt-5">
        <h4>No Services Found for this Category.</h4>
      </div>
    );
  }

  return (
    <div className="cards-grid">
      {services.map((service) => (
        <div key={service.facilityId} className="app-card">
          <img
            src={service.image}
            alt={service.title}
            className="app-card-image"
          />
          <div className="app-card-content">
            <h3 className="app-card-title">{service.title}</h3>
            <p className="app-card-subtitle">{service.description.substring(0, 100)}...</p>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="app-card-price">₹{service.basePrice}</span>
              <span className="badge badge-warning">⭐ {service.rating} / 5</span>
            </div>

            {service.discount > 0 && (
              <p className="text-success mt-1"><small>{service.discount}% OFF</small></p>
            )}

            <div className="app-card-actions mt-3">
              <button
                className="btn-card btn-primary-card"
                onClick={() => navigate("/WeddingDetails", { state: { facilityId: service.facilityId } })}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
