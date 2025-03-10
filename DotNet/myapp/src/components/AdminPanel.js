import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown, Row, Col, Card, Form, InputGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../assets/style/AdminDashboardNew.css";
import { Link } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import UserBookingsDashboard from "./UserBookingsDashboard"; // Import UserBookingsDashboard
import { ContactUsCard } from "./ContactUsCard"; // Import ContactUsCard
import {FeedbackCard} from "./FeedbackCard";
import AdminProfile from "./AdminProfile";
import { useNavigate } from "react-router-dom";
const AdminPanel = () => {
  const [date, setDate] = useState(new Date());
  const [showSection, setShowSection] = useState("dashboard");
  const navigate = useNavigate();

  return (
    <div>
      {/* Fixed Navbar */}
      <Navbar
  expand="lg"
  className="mb-3 fixed-top"
  style={{
    display: "flex",
    flexWrap: "inherit",
    alignItems: "center",
    height: "80px",
    backgroundColor: "darkcyan",
    justifyContent: "space-between",
  }}
>
  <Container fluid>
    <Navbar.Brand href="/dashboardadmin" style={{ color: "white" }}>
      CELEBRATEIT
    </Navbar.Brand>
    <Form className="d-flex me-auto mx-3" style={{ width: "40%" }}>
      <InputGroup>
        <Form.Control type="search" placeholder="Search" />
        <Button variant="outline-light">Search</Button>
      </InputGroup>
    </Form>
    <Button variant="light" onClick={() => navigate("/")} className="me-3">
          Home
        </Button>
    <Dropdown>
      <Dropdown.Toggle variant="light">Admin Profile</Dropdown.Toggle>
      <Dropdown.Menu>
        {/* <Dropdown.Item href="#">View Profile</Dropdown.Item> */}
        <Nav.Link onClick={() => setShowSection("Profile")}> Profile</Nav.Link>
        <Dropdown.Item href="#">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Container>
</Navbar>


      <Container fluid className="mt-5" style={{ backgroundColor: "#f8f9fa" }}>
        <Row>
          {/* Fixed Sidebar */}
          <Col md={2} className="sidebar position-fixed vh-100 p-3">
            <Nav className="flex-column"style={{ marginTop: "60px" }} >
              <Nav.Link onClick={() => setShowSection("dashboard")}>Dashboard</Nav.Link>
              <Nav.Link onClick={() => setShowSection("addService")}>Add Services</Nav.Link>
              <Nav.Link onClick={() => setShowSection("showBooking")}>Show Booking</Nav.Link>
              <Nav.Link onClick={() => setShowSection("feedback")}>View Feedback</Nav.Link>

              {/* <Nav.Link as={Link} to="/FeedbackCard">c</Nav.Link> */}
              <Nav.Link onClick={() => setShowSection("queries")}>Queries</Nav.Link>
              {/* <Nav.Link onClick={() => setShowSection("Profile")}>Profile</Nav.Link> */}
              {/* <Nav.Link href="#">Upcoming Events</Nav.Link> */}
              {/* <Nav.Link href="#">Calendar</Nav.Link> */}
            </Nav>
          </Col>

          {/* Main Content */}
          <Col md={{ span: 10, offset: 2 }} className="p-4 overflow-auto" style={{ marginTop: "56px" }}>
            {showSection === "dashboard" && (
              <Card>
                <Card.Body>
                  <Card.Title>Upcoming Events</Card.Title>
                  <Calendar onClickDay={(value) => setDate(value)} value={date} />
                </Card.Body>
              </Card>
            )}

            {showSection === "addService" && <AdminDashboard />}
            {showSection === "showBooking" && <UserBookingsDashboard />}
            {showSection === "feedback" && <FeedbackCard />}
            {/* {showSection === "feedback" && <Card><Card.Body><Card.Title>Feedback Section</Card.Title></Card.Body></Card>} */}
            {showSection === "queries" && <ContactUsCard />}
            {showSection === "Profile" && <AdminProfile />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminPanel;
