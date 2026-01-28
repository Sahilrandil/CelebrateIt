import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown, Form, InputGroup, Button, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../assets/style/AdminPanel.css"; // New CSS
import { useNavigate } from "react-router-dom";

// Child Components
import AdminDashboard from "./AdminDashboard"; // Add Services
import UserBookingsDashboard from "./UserBookingsDashboard"; // View Bookings
import { ContactUsCard } from "./ContactUsCard"; // Queries
import { FeedbackCard } from "./FeedbackCard"; // Feedback
import AdminProfile from "./AdminProfile";

const AdminPanel = () => {
  const [date, setDate] = useState(new Date());
  const [activeSection, setActiveSection] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  return (
    <div className="admin-panel">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <div className="sidebar-header">
          <h3>CelebrateIt</h3>
          <p className="text-muted small mb-0">Admin Portal</p>
        </div>
        <Nav className="flex-column mt-4">
          <Nav.Link
            className={activeSection === "dashboard" ? "active" : ""}
            onClick={() => setActiveSection("dashboard")}
          >
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Nav.Link>
          <Nav.Link
            className={activeSection === "addService" ? "active" : ""}
            onClick={() => setActiveSection("addService")}
          >
            <i className="bi bi-plus-square me-2"></i> Manage Services
          </Nav.Link>
          <Nav.Link
            className={activeSection === "showBooking" ? "active" : ""}
            onClick={() => setActiveSection("showBooking")}
          >
            <i className="bi bi-calendar-check me-2"></i> Bookings
          </Nav.Link>
          <Nav.Link
            className={activeSection === "feedback" ? "active" : ""}
            onClick={() => setActiveSection("feedback")}
          >
            <i className="bi bi-chat-dots me-2"></i> Feedback
          </Nav.Link>
          <Nav.Link
            className={activeSection === "queries" ? "active" : ""}
            onClick={() => setActiveSection("queries")}
          >
            <i className="bi bi-question-circle me-2"></i> Inquiries
          </Nav.Link>
        </Nav>
      </div>

      {/* Main Content Wrapper */}
      <div className="admin-content">
        {/* Top Navbar */}
        <Navbar className="admin-navbar" bg="white" expand="lg">
          <Container fluid>
            <span className="navbar-brand mb-0 h1">
              {activeSection === "dashboard" && "Dashboard Overview"}
              {activeSection === "addService" && "Service Management"}
              {activeSection === "showBooking" && "Booking Management"}
              {activeSection === "feedback" && "User Feedback"}
              {activeSection === "queries" && "User Inquiries"}
              {activeSection === "Profile" && "Admin Profile"}
            </span>

            <div className="d-flex align-items-center">
              <Button variant="outline-secondary" size="sm" className="me-3" onClick={() => navigate("/")}>
                View Site
              </Button>
              <Dropdown align="end">
                <Dropdown.Toggle variant="light" id="dropdown-basic" className="user-dropdown">
                  <i className="bi bi-person-circle me-1"></i> Admin
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setActiveSection("Profile")}>Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout} className="text-danger">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Container>
        </Navbar>

        {/* Dynamic Content Area */}
        <div className="admin-main">
          {activeSection === "dashboard" && (
            <Row>
              <Col md={8}>
                <div className="section-card">
                  <h4 className="section-title">Welcome Admin!</h4>
                  <p>Here is an overview of your upcoming events schedule.</p>
                  <Calendar
                    onChange={setDate}
                    value={date}
                    className="w-100 border-0"
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="section-card">
                  <h5>Quick Actions</h5>
                  <div className="d-grid gap-2 mt-3">
                    <Button variant="primary" onClick={() => setActiveSection("addService")}>Add New Service</Button>
                    <Button variant="outline-primary" onClick={() => setActiveSection("showBooking")}>View Bookings</Button>
                  </div>
                </div>
              </Col>
            </Row>
          )}

          {activeSection === "addService" && (
            <div className="section-card">
              <h4 className="section-title">Manage Services</h4>
              <AdminDashboard />
            </div>
          )}

          {activeSection === "showBooking" && (
            <div className="section-card">
              <h4 className="section-title">All Bookings</h4>
              <UserBookingsDashboard />
            </div>
          )}

          {activeSection === "feedback" && (
            <div className="section-card">
              <h4 className="section-title">Customer Feedback</h4>
              <FeedbackCard />
            </div>
          )}

          {activeSection === "queries" && (
            <div className="section-card">
              <h4 className="section-title">Contact Inquiries</h4>
              <ContactUsCard />
            </div>
          )}

          {activeSection === "Profile" && (
            <div className="section-card">
              <AdminProfile />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
