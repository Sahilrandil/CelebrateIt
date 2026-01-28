import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateServiceForm from './UpdateServiceForm';
import '../assets/style/Cards.css'; // Import shared styles

export function ServiceCard({ categoryId }) {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);

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
        if (!window.confirm("Are you sure you want to delete this service?")) return;

        try {
            await axios.delete(`http://localhost:5078/api/Facilities/Delete/${facilityId}`);
            fetchData();
        } catch (error) {
            console.error("Error deleting service:", error);
        }
    };

    const handleUpdate = (service) => {
        setSelectedService(service);
        setIsFormVisible(true);
    };

    const handleFormClose = () => {
        setIsFormVisible(false);
        setSelectedService(null);
    };

    const handleFormSave = async (updatedService) => {
        try {
            await axios.put(`http://localhost:5078/api/Facilities/Update/${updatedService.facilityId}`, updatedService);
            fetchData();
            handleFormClose();
        } catch (error) {
            console.error("Error updating service:", error);
        }
    };

    if (!services || services.length === 0) {
        return (
            <div className="text-center mt-5">
                <h4>No Services Found for this Category.</h4>
            </div>
        );
    }

    return (
        <div>
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

                            <div className="app-card-actions">
                                <button onClick={() => handleUpdate(service)} className="btn-card btn-update-card">
                                    Update
                                </button>
                                <button onClick={() => handleDelete(service.facilityId)} className="btn-card btn-danger-card">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isFormVisible && (
                <UpdateServiceForm
                    service={selectedService}
                    onClose={handleFormClose}
                    onSave={handleFormSave}
                />
            )}
        </div>
    );
}
