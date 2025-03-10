import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/style/AdminDashboard.css";
import { ServiceCard } from "./ServiceCard";

// const BASE_URL = "http://localhost:5078/api";
const BASE_URL = "http://localhost:8080";

function AdminDashboard() {
  const categoryMap = {
    1: "Wedding Services",
    2: "Engagement Services",
    3: "Birthday Services",
    4: "Veg Catering Services",
    5: "NonVeg Catering Services",
    6: "Photography Service"
  };

  const [services, setServices] = useState({
    wedding: [],
    engagement: [],
    Birthday: [],
    veg: [],
    nonveg: [],
    photography:[]
  });

  const [newService, setNewService] = useState({
    title: "",
    description: "",
    basePrice: "",
    rating: "",
    discount: "",
    image: "",
    categoryId: 1, // Default to Wedding category
  });

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedcategoryId, setSelectedcategoryId] = useState(null); // To track selected category
  const [categoryServices, setCategoryServices] = useState({}); // Store services for each category

  // Handle input changes for the form
  const handleServiceInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };


  // Fetch services for all categories
  const fetchAllServices = async () => {
    try {
      const updatedServices = {
        wedding: [],
        engagement: [],
        birthday: [],
        veg: [],
        nonveg: [],
        photography:[]
      };
  
      for (const [key, categoryName] of Object.entries(categoryMap)) {
        const url = `${BASE_URL}/services/category/${key}`;
        const response = await axios.get(url);
        
        if (response.data && response.data.length > 0) {
          updatedServices[categoryName.toLowerCase().replace(/\s/g, "")] = response.data;
        }
      }
  
      setServices(updatedServices);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };
  
  
    // Fetch services for a specific category when the button is clicked
    const fetchServicesByCategory = async (categoryId) => {
      try {
        const url = `${BASE_URL}/services/category/${categoryId}`;
        const response = await axios.get(url);
  
        setCategoryServices((prevServices) => ({
          ...prevServices,
          [categoryId]: response.data || [],
        }));
  
        setSelectedcategoryId(categoryId);
      } catch (error) {
        console.error(`Error fetching services for category ${categoryId}:`, error);
      }
    };
  
    // Add a new service and refresh the respective category
    const handleAddService = async () => {
      try {
        // Add the service to the backend
        await axios.post(`${BASE_URL}/services/add`, newService);
  
        alert(`Service added successfully to ${categoryMap[newService.categoryId]}!`);
  
        // Update services locally without re-fetching all data
        const updatedServices = { ...services };
        const categoryName = categoryMap[newService.categoryId];
        updatedServices[categoryName].push(newService); // Add the new service to the relevant category
  
        setServices(updatedServices); // Update the state
  
        // Clear the form and hide it
        setNewService({
          title: "",
          description: "",
          basePrice: "",
          rating: "",
          discount: "",
          image: "",
          categoryId: 1, // default to Wedding
        });
  
        setIsFormVisible(false); // Hide the form
      } catch (error) {
        console.error("Error adding service:", error);
        //alert("Failed to add service.");
      }
    };
  
    // Fetch all services on component mount
    useEffect(() => {
      fetchAllServices();
    }, []);

  return (
    <div className="admin-dashboard">
     {/* Button to show form */}
     {!isFormVisible && (
        <button
          onClick={() => setIsFormVisible(true)}
          className="add-service-btn"
          style={{ marginBottom: "20px" }}
        >
          Add Service
        </button>
      )}

      {/* Add/Edit Service Form */}
      {isFormVisible && (
        <div className="add-service-form">
          <h2>Add Service</h2>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={newService.title} onChange={handleServiceInputChange} />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea name="description" value={newService.description} onChange={handleServiceInputChange} />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input type="text" name="basePrice" value={newService.basePrice} onChange={handleServiceInputChange} />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <input type="text" name="rating" value={newService.rating} onChange={handleServiceInputChange} />
          </div>
          <div className="form-group">
            <label>Discount:</label>
            <input type="text" name="discount" value={newService.discount} onChange={handleServiceInputChange} />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input type="text" name="image" value={newService.image} onChange={handleServiceInputChange} />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <select name="categoryId" value={newService.categoryId} onChange={handleServiceInputChange}>
              <option value="1">Wedding Services</option>
              <option value="2">Engagement Services</option>
              <option value="3">Birthday Services</option>
              <option value="4">Veg Catering Services</option>
              <option value="5">NonVeg Catering Services</option>
              <option value="6">Photography Services</option>
            </select>
          </div>
          <button onClick={handleAddService} className="add-service-btn">
            Add Service
          </button>
        </div>
      )}

      {/* Display All Categories and Their Services */}
      {Object.keys(categoryMap).map((categoryId) => {
        const categoryName = categoryMap[categoryId];
        return (
          <div key={categoryId} className={`${categoryName.toLowerCase().replace(/\s/g, "-")}-section`}>
            <h2>{categoryName}</h2>
            <button
              className="view-services-btn"
              onClick={() => fetchServicesByCategory(categoryId)}
            >
              {selectedcategoryId === categoryId ? `Hide ${categoryName}` : `View ${categoryName}`}
            </button>
            {selectedcategoryId === categoryId && (
              <div className="services-container">
                <ServiceCard categoryId={categoryId} />
              </div>
            )}
          </div>
        );
      })}

      {/* <Link to="/eventdetailscard">
        <button className="event-button">View Details</button>
      </Link> */}
    </div>
  );
}
export default AdminDashboard;