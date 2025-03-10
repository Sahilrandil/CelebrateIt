import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateServiceForm from './UpdateServiceForm';

export function ServiceCard({ categoryId }) {
    const [services, setServices] = useState([]);
    const [selectedService, setSelectedService] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Fetch services from the API
    async function fetchData() {
        try {
            const response = await axios.get(`http://localhost:8080/services/category/${categoryId}`);
            setServices(response.data);
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [categoryId]);

    // Handle service deletion
    const handleDelete = async (serviceid) => {
        if (!serviceid) {
            console.error("Invalid serviceId");
            return;
        }
        try {
            await fetch(`http://localhost:8080/services/${serviceid}`, { method: "DELETE" });
            fetchData(); // Refresh services after deletion
        } catch (error) {
            console.error("Error deleting service:", error);
        }
    };

    // Handle service update
    const handleUpdate = (service) => {
        setSelectedService(service);
        setIsFormVisible(true);
    };

    // Close update form
    const handleFormClose = () => {
        setIsFormVisible(false);
        setSelectedService(null);
    };

    // Save updated service
    const handleFormSave = async (updatedService) => {
        if (!updatedService.serviceId) {
            console.error("Invalid serviceId for update");
            return;
        }
        try {
            await axios.put(`http://localhost:8080/services/${updatedService.serviceId}`, updatedService);
            fetchData(); // Refresh services after update
            handleFormClose();
        } catch (error) {
            console.error("Error updating service:", error);
        }
    };

    if (services.length === 0) {
        return <div>No Service Data Present !!!</div>;
    }

    return (
        <div>
            <div className="services-grid">
                {services.map((service) => (
                    <div key={service.serviceId} className="service-card">
                        <img src={service.image} alt={service.title} className="service-image" />
                        <h3>{service.title}</h3>
                        <p><strong>Description:</strong> {service.description}</p>
                        <p><strong>Price:</strong> ₹{service.basePrice}</p>
                        <p><strong>Rating:</strong> {service.rating} / 5</p>
                        <p><strong>Discount:</strong> {service.discount}%</p>
                        <button onClick={() => handleUpdate(service)} className="update-service-btn">Update</button>
                        <button onClick={() => handleDelete(service.serviceid)} className="delete-service-btn">Delete</button>
                    </div>
                ))}
            </div>
            {isFormVisible && (
                <UpdateServiceForm service={selectedService} onClose={handleFormClose} onSave={handleFormSave} />
            )}
        </div>
    );
}
