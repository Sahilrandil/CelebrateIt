// import React, { useState } from "react";
// import { Navbar, Nav, Container, Dropdown, Row, Col, Card, Form, InputGroup, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Calendar } from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import './Dashboard.css';

// const Dashboard = () => {
//   const [date, setDate] = useState(new Date());

//   return (
//     <div>
//       {/* Top Navbar */}
//       <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
//         <Container fluid>
//           <Navbar.Brand href="#">CELEBRATEIT</Navbar.Brand>
//           <Form className="d-flex me-auto mx-3" style={{ width: "40%" }}>
//             <InputGroup>
//               <Form.Control type="search" placeholder="Search" />
//               <Button variant="outline-light">Search</Button>
//             </InputGroup>
//           </Form>
//           <Navbar.Toggle aria-controls="navbar-nav" />
//           <Navbar.Collapse id="navbar-nav" className="justify-content-end">
//             <Dropdown>
//               <Dropdown.Toggle variant="light" id="admin-dropdown">
//                 Admin Profile
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item href="#">Add Admin</Dropdown.Item>
//                 <Dropdown.Item href="#">Logout</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Container fluid>
//         <Row>
//           {/* Left Sidebar */}
//           <Col md={2} className="bg-dark text-white sidebar">
//             <Nav className="flex-column p-3">
//               <Nav.Link href="#" className="text-white">Dashboard</Nav.Link>
//               <Dropdown className="mb-2">
//                 <Dropdown.Toggle variant="dark" id="decoration-dropdown" className="w-100">
//                   Add Decoration
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#">Wedding</Dropdown.Item>
//                   <Dropdown.Item href="#">Engagement</Dropdown.Item>
//                   <Dropdown.Item href="#">Haldi/Mehndi</Dropdown.Item>
//                   <Dropdown.Item href="#">Birthday</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//               <Dropdown className="mb-2">
//                 <Dropdown.Toggle variant="dark" id="catering-dropdown" className="w-100">
//                   Add Catering
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item href="#">Veg</Dropdown.Item>
//                   <Dropdown.Item href="#">Non-Veg</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//               <Nav.Link href="#">Add Photographer</Nav.Link>
//               <Nav.Link href="#">Show Booking</Nav.Link>
//               <Nav.Link href="#">View Feedback</Nav.Link>
//               <Nav.Link href="#">Queries</Nav.Link>
//               <Nav.Link href="#">Upcoming Events</Nav.Link>
//               <Nav.Link href="#">Calendar</Nav.Link>
//             </Nav>
//           </Col>

          // {/* Main Content */}
          // <Col md={10}>
          //   <Row>
          //     <Col md={12} className="mb-3">
          //       <Card>
          //         <Card.Body>
          //           <Card.Title>Upcoming Events</Card.Title>
          //           <Calendar value={date} onChange={setDate} />
          //         </Card.Body>
          //       </Card>
          //     </Col>
          //   </Row>
          //   <Row>
          //     <Col md={4}>
          //       <Card className="mb-3">
          //         <Card.Body>
          //           <Card.Title>Customers</Card.Title>
          //           <Card.Text>45679</Card.Text>
          //         </Card.Body>
          //       </Card>
          //     </Col>
          //     <Col md={4}>
          //       <Card className="mb-3">
          //         <Card.Body>
          //           <Card.Title>Orders</Card.Title>
          //           <Card.Text>80927</Card.Text>
          //         </Card.Body>
          //       </Card>
          //     </Col>
          //     <Col md={4}>
          //       <Card className="mb-3">
          //         <Card.Body>
          //           <Card.Title>Bookings</Card.Title>
          //           <Card.Text>22339</Card.Text>
          //         </Card.Body>
          //       </Card>
          //     </Col>
          //   </Row>
          // </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Dashboard;






import React, { useState } from "react";
import { Navbar, Nav, Container, Dropdown, Row, Col, Card, Form, InputGroup, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import '../assets/style/AdminDashboard1.css';

const AdminDashboard1 = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState("");

  // Open modal on date click
  const handleDateClick = (value) => {
    setDate(value);
    setShowModal(true);
  };

  // Add event to the selected date
  const handleAddEvent = () => {
    const formattedDate = date.toDateString();
    setEvents((prevEvents) => ({
      ...prevEvents,
      [formattedDate]: [...(prevEvents[formattedDate] || []), newEvent],
    }));
    setNewEvent(""); // Clear input
    setShowModal(false); // Close modal
  };

  return (
    <div>
      {/* Top Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-3 dash">
        <Container fluid>
          <Navbar.Brand href="#">CELEBRATEIT</Navbar.Brand>
          <Form className="d-flex me-auto mx-3" style={{ width: "40%" }}>
            <InputGroup>
              <Form.Control type="search" placeholder="Search" />
              <Button variant="outline-light">Search</Button>
            </InputGroup>
          </Form>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="admin-dropdown">
                Admin Profile
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Add Admin</Dropdown.Item>
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Left Sidebar   bg-dark text-white */}
          <Col md={2} className=" bg-dark text-white sidebar">
            <Nav className="flex-column p-3">
              <Nav.Link href="#" className="text-white">Dashboard</Nav.Link>
              <Nav.Link href="#">Add Decoration</Nav.Link>
              <Nav.Link href="#">Add catering</Nav.Link>
              {/* <Dropdown className="mb-2">
                <Dropdown.Toggle variant="dark" id="decoration-dropdown" className="w-100">
                  Add Decoration
                </Dropdown.Toggle> */}
                {/* <Dropdown.Menu>
                  <Dropdown.Item href="#">Wedding</Dropdown.Item>
                  <Dropdown.Item href="#">Engagement</Dropdown.Item>
                  <Dropdown.Item href="#">Haldi/Mehndi</Dropdown.Item>
                  <Dropdown.Item href="#">Birthday</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              {/* <Dropdown className="mb-2">
                <Dropdown.Toggle variant="dark" id="catering-dropdown" className="w-100">
                  Add Catering
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Veg</Dropdown.Item>
                  <Dropdown.Item href="#">Non-Veg</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <Nav.Link href="#">Add Photographer</Nav.Link>
              <Nav.Link href="#">Show Booking</Nav.Link>
              <Nav.Link href="#">View Feedback</Nav.Link>
              <Nav.Link href="#">Queries</Nav.Link>
              <Nav.Link href="#">Upcoming Events</Nav.Link>
              <Nav.Link href="#">Calendar</Nav.Link>
            </Nav>
          </Col>

          {/* Main Content */}
          {/* Main Content */}
          
          {/* <Col md={8}>
            {/* <Row>
              <Col md={12} className="mb-2">
                <Card>
                  <Card.Body>
                    <Card.Title>Upcoming Events</Card.Title>
                    <Calendar value={date} onChange={setDate} />
                  </Card.Body>
                </Card>
              </Col>
            </Row> */}
            {/* <Row>
              <Col md={4}>
                <Card className="mb-2">
                  <Card.Body>
                    <Card.Title>Customers</Card.Title>
                    <Card.Text>45679</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-2">
                  <Card.Body>
                    <Card.Title>Orders</Card.Title>
                    <Card.Text>80927</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-2">
                  <Card.Body>
                    <Card.Title>Bookings</Card.Title>
                    <Card.Text>22339</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>  */}

          <Col md={8}>
            <Row>
              <Col md={12} className="mb-3">
                <Card style={{ fontsize: "1.2rem"}}>
                  <Card.Body>
                    <Card.Title style={{ fontsize: "1.3rem",fontweight: "bold" }}>Upcoming Events</Card.Title>
                    <Calendar
                      onClickDay={handleDateClick}
                      value={date}
                    />
                    <div className="mt-3">
                      <h5>Events on {date.toDateString()}:</h5>
                      <ul>
                        {events[date.toDateString()]?.map((event, index) => (
                          <li key={index}>{event}</li>
                        ))}
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Add Event Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Event Details</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event description"
                value={newEvent}
                onChange={(e) => setNewEvent(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddEvent}>
              Add Event
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminDashboard1;
