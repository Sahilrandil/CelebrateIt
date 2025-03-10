import React, { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";

const AdminProfile = () => {
  // State to manage profile details
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@example.com",
    contact: "9876543210",
  });

  // Handle input change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "600px", padding: "20px", backgroundColor: "#f8f9fa" }}>
        <Card.Body>
          <Card.Title className="text-center">Admin Profile</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={profile.contact}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </Form.Group>

            <div className="text-center">
              <Button variant={isEditing ? "success" : "primary"} onClick={toggleEdit}>
                {isEditing ? "Save" : "Edit Profile"}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AdminProfile;
