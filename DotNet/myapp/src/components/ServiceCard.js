import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateServiceForm from './UpdateServiceForm';

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
            // Refresh the services list
            fetchData();
            handleFormClose();
        } catch (error) {
            console.error("Error updating service:", error);
        }
    };

    if (services.length === 0) {
        return (
            <div>
                No Service Data Present !!!
            </div>
        );
    }

    return (
        <div>
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
                        <button onClick={() => handleUpdate(service)} className="update-service-btn">
                            Update
                        </button>
                        <button onClick={() => handleDelete(service.facilityId)} className="delete-service-btn">
                            Delete
                        </button>
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
