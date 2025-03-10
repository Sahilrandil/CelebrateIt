// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// export function ServiceCard1({ categoryId }) {
//   const [services, setServices] = useState([]);
//   const navigate = useNavigate(); // Initialize navigation

//   async function fetchData() {
//     try {
//       const response = await axios.get(`http://localhost:5078/api/Facilities/GetByCategory/${categoryId}`);
//       setServices(response.data);
//     } catch (error) {
//       console.error("Error fetching services:", error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, [categoryId]);

//   const handleViewDetails = (facilityId) => {
//     // Redirect to the WeddingDetails page with facilityId as a URL parameter
//     navigate(`/weddingDetails/${facilityId}`);
//   };

//   if (services.length === 0) {
//     return <p>No Service Data Present !!!</p>;
//   }

//   return (
//     <div className="services-grid">
//       {services.map((service) => (
//         <div key={service.facilityId} className="service-card">
//           <img
//             src={service.image}
//             alt={service.title}
//             className="service-image"
//           />
//           <h3>{service.title}</h3>
//           <p>
//             <strong>Description:</strong> {service.description}
//           </p>
//           <p>
//             <strong>Price:</strong> ₹{service.basePrice}
//           </p>
//           <p>
//             <strong>Rating:</strong> {service.rating} / 5
//           </p>
//           <p>
//             <strong>Discount:</strong> {service.discount}%
//           </p>
//           <button className="view-details-btn" onClick={() => handleViewDetails(service.facilityId)}>
//             View Details
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }


import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const handleDelete = async (facilityId) => {
    try {
      console.log(`Attempting to delete facility with ID: ${facilityId}`);
      await axios.delete(`http://localhost:5078/api/Facilities/Delete/${facilityId}`);
      console.log(`Successfully deleted facility with ID: ${facilityId}`);
      // Refresh the services list
      fetchData();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  const handleUpdate = (service) => {
    // Handle update logic here (e.g., show update form, pre-fill form with service data, etc.)
    console.log("Update service:", service);
  };

  if (services.length === 0) {
    return (
      <>
        No Service Data Present !!!
      </>
    );
  }

  return (
    <div className="services-grid">
      {services.map((service) => (
        <div key={service.facilityId} className="service-card">
          <img
            src={service.image}
            alt={service.title}
            className="service-image"
          />
          <h3>{service.title}</h3>
          <p>
            <strong>Description:</strong> {service.description}
          </p>
          <p>
            <strong>Price:</strong> ₹{service.basePrice}
          </p>
          <p>
            <strong>Rating:</strong> {service.rating} / 5
          </p>
          <p>
            <strong>Discount:</strong> {service.discount}%
          </p>
          <button  className="update-service-btn" onClick={ ()=> navigate("/WeddingDetails", { state: {facilityId : service.facilityId} })}>
            View Details
          </button>
          
        </div>
      ))}
    </div>
  );
}
