import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/style/AdminPanel.css"; // Use correct CSS
import "../assets/style/Cards.css"; // Use shared card styles
import { ServiceCard } from "./ServiceCard";

const BASE_URL = "http://localhost:5078/api";

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
    photography: []
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
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [categoryServices, setCategoryServices] = useState({});

  const handleServiceInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  const fetchAllServices = async () => {
    try {
      const updatedServices = { wedding: [], engagement: [], Birthday: [], veg: [], nonveg: [], photography: [] };
      for (let categoryId in categoryMap) {
        const url = `${BASE_URL}/Facilities/GetByCategory/${categoryId}`;
        const response = await axios.get(url);
        if (response.data && response.data.length > 0) {
          updatedServices[categoryMap[categoryId]] = response.data;
        }
      }
      setServices(updatedServices);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const fetchServicesByCategory = async (categoryId) => {
    if (selectedCategoryId === categoryId) {
      setSelectedCategoryId(null); // Toggle off
      return;
    }

    try {
      const url = `${BASE_URL}/Facilities/GetByCategory/${categoryId}`;
      const response = await axios.get(url);
      setCategoryServices((prevServices) => ({
        ...prevServices,
        [categoryId]: response.data || [],
      }));
      setSelectedCategoryId(categoryId);
    } catch (error) {
      console.error(`Error fetching services for category ${categoryId}:`, error);
    }
  };

  const handleAddService = async () => {
    try {
      if (!newService.title || !newService.basePrice || !newService.image) {
        alert("Please fill in all required fields.");
        return;
      }

      const servicePayload = {
        ...newService,
        basePrice: parseFloat(newService.basePrice) || 0,
        rating: parseFloat(newService.rating) || 0,
        discount: parseFloat(newService.discount) || 0,
        categoryId: parseInt(newService.categoryId)
      };

      await axios.post(`${BASE_URL}/Facilities/Add`, servicePayload);
      alert(`Service added successfully to ${categoryMap[newService.categoryId]}!`);

      // Refresh logic could be here, but for now just clear form
      setNewService({
        title: "",
        description: "",
        basePrice: "",
        rating: "",
        discount: "",
        image: "",
        categoryId: 1,
      });
      setIsFormVisible(false);

      if (selectedCategoryId) {
        fetchServicesByCategory(selectedCategoryId); // Refresh active view
      }

    } catch (error) {
      console.error("Error adding service:", error);
      alert("Failed to add service. Please check check if the input is valid.");
    }
  };

  useEffect(() => {
    fetchAllServices();
  }, []);

  return (
    <div className="admin-dashboard-content">
      {/* Add Service Button */}
      {!isFormVisible && (
        <button
          onClick={() => setIsFormVisible(true)}
          className="btn-admin btn-admin-primary mb-4"
        >
          <i className="bi bi-plus-lg me-2"></i> Add New Service
        </button>
      )}

      {/* Add Service Form */}
      {isFormVisible && (
        <div className="section-card mb-4" style={{ borderLeft: "5px solid #d63384" }}>
          <h5 className="mb-3">Add New Service</h5>
          <div className="row">
            <div className="col-md-6 admin-form-group">
              <label>Title</label>
              <input type="text" className="admin-form-control" name="title" value={newService.title} onChange={handleServiceInputChange} placeholder="e.g. Royal Wedding Decor" />
            </div>
            <div className="col-md-6 admin-form-group">
              <label>Category</label>
              <select className="admin-form-control" name="categoryId" value={newService.categoryId} onChange={handleServiceInputChange}>
                {Object.entries(categoryMap).map(([id, name]) => (
                  <option key={id} value={id}>{name}</option>
                ))}
              </select>
            </div>
            <div className="col-md-12 admin-form-group">
              <label>Description</label>
              <textarea className="admin-form-control" rows="3" name="description" value={newService.description} onChange={handleServiceInputChange} placeholder="Service details..."></textarea>
            </div>
            <div className="col-md-4 admin-form-group">
              <label>Price (₹)</label>
              <input type="number" className="admin-form-control" name="basePrice" value={newService.basePrice} onChange={handleServiceInputChange} />
            </div>
            <div className="col-md-4 admin-form-group">
              <label>Rating (0-5)</label>
              <input type="number" className="admin-form-control" name="rating" value={newService.rating} onChange={handleServiceInputChange} />
            </div>
            <div className="col-md-4 admin-form-group">
              <label>Discount (%)</label>
              <input type="number" className="admin-form-control" name="discount" value={newService.discount} onChange={handleServiceInputChange} />
            </div>
            <div className="col-md-12 admin-form-group">
              <label>Image URL</label>
              <input type="text" className="admin-form-control" name="image" value={newService.image} onChange={handleServiceInputChange} placeholder="http://..." />
            </div>
          </div>

          <div className="d-flex justify-content-end gap-2 mt-3">
            <button onClick={() => setIsFormVisible(false)} className="btn-admin btn-admin-white">Cancel</button>
            <button onClick={handleAddService} className="btn-admin btn-admin-primary">Save Service</button>
          </div>
        </div>
      )}

      {/* Categories List */}
      {Object.keys(categoryMap).map((categoryId) => {
        const categoryName = categoryMap[categoryId];
        return (
          <div key={categoryId} className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2 p-2 bg-light rounded">
              <h5 className="m-0 text-dark">{categoryName}</h5>
              <button
                className="btn btn-sm btn-outline-primary"
                onClick={() => fetchServicesByCategory(categoryId)}
              >
                {selectedCategoryId == categoryId ? 'Hide Services' : 'View Services'}
              </button>
            </div>

            {selectedCategoryId == categoryId && (
              <div className="mt-3">
                <ServiceCard categoryId={categoryId} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default AdminDashboard;
