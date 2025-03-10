



// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import '../assets/style/AppNavbar.css';
// //import { Dropdown } from 'react-bootstrap';



// function AppNavbar() {
//   return (
//     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
//       <Container>


//       <Navbar.Brand href="#home">
//           <img
//             src="https://i.postimg.cc/g26cw8RN/logo.png" // Replace with your logo image URL
//             alt="Logo"
//             style={{ width: '90px',height:'80px', borderRadius: '50%',marginLeft:'100px' }}
//           />
//         </Navbar.Brand>
//         {/* ----- */}
//         {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#aboutus">About</Nav.Link>
           

//             <NavDropdown title="Services" id="services-dropdown">
//               {/* Decoration Dropdown */}
//               <NavDropdown title="Decoration" id="decoration-dropdown" drop="end">
//                 <NavDropdown.Item href="#wedding">Wedding</NavDropdown.Item>
//                 <NavDropdown.Item href="#engagement">Engagement</NavDropdown.Item>
//                 <NavDropdown.Item href="#haldi">Haldi</NavDropdown.Item>
//                 <NavDropdown.Item href="#mehandi">Mehandi</NavDropdown.Item>
//                 <NavDropdown.Item href="#birthday">Birthday</NavDropdown.Item>
//               </NavDropdown>
//               {/* Photography & Video Dropdown */}
//               <NavDropdown title="Photography & Video" id="photography-dropdown" drop="end">
//                 <NavDropdown.Item href="#prewedding">Pre-Wedding</NavDropdown.Item>
//                 <NavDropdown.Item href="#wedding-photo">Wedding</NavDropdown.Item>
//               </NavDropdown>

//               {/* Catering Dropdown */}
//               <NavDropdown title="Catering" id="catering-dropdown" drop="end">
//                 <NavDropdown.Item href="#veg">Veg</NavDropdown.Item>
//                 <NavDropdown.Item href="#nonveg">Non-Veg</NavDropdown.Item>
//                 <NavDropdown.Item href="#sweet">Sweet</NavDropdown.Item>
//               </NavDropdown>
//             </NavDropdown>
            
//             <Nav.Link href="#gallery">Gallery</Nav.Link>
//             <Nav.Link href="#contactus">Contact</Nav.Link>
//             <Nav.Link href="Registration.js">Login</Nav.Link>
             
//             <NavDropdown title="Profile" id="Profile-dropdown" drop="end">
//                 <NavDropdown.Item href="#veg">SignUp</NavDropdown.Item>
//                 <NavDropdown.Item href="#nonveg">My Orders</NavDropdown.Item>
                
//               </NavDropdown>

//           </Nav>
//           <Nav>
//             {/* <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
//             </Nav.Link> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import '../assets/style/AppNavbar.css';

// function AppNavbar() {
//   return (
//     <Navbar collapseOnSelect expand="lg" className="custom-navbar">
//       <Container className="container1">
//         <Navbar.Brand href="#home">
//           <img
//             src="https://i.postimg.cc/g26cw8RN/logo.png"
//             alt="Logo"
//             style={{ width: '90px', height: '80px', borderRadius: '50%', marginLeft: '100px' }}
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#aboutus">About</Nav.Link>
//             <NavDropdown title="Services" id="services-dropdown">
//               <NavDropdown title="Decoration" id="decoration-dropdown" drop="end">
//                 <NavDropdown.Item href="#wedding">Wedding</NavDropdown.Item>
//                 <NavDropdown.Item href="#engagement">Engagement</NavDropdown.Item>
//                 <NavDropdown.Item href="#haldi">Haldi</NavDropdown.Item>
//                 <NavDropdown.Item href="#mehandi">Mehandi</NavDropdown.Item>
//                 <NavDropdown.Item href="#birthday">Birthday</NavDropdown.Item>
//               </NavDropdown>
//               <NavDropdown title="Photography & Video" id="photography-dropdown" drop="end">
//                 <NavDropdown.Item href="#prewedding">Pre-Wedding</NavDropdown.Item>
//                 <NavDropdown.Item href="#wedding-photo">Wedding</NavDropdown.Item>
//               </NavDropdown>
//               <NavDropdown title="Catering" id="catering-dropdown" drop="end">
//                 <NavDropdown.Item href="#veg">Veg</NavDropdown.Item>
//                 <NavDropdown.Item href="#nonveg">Non-Veg</NavDropdown.Item>
//                 <NavDropdown.Item href="#sweet">Sweet</NavDropdown.Item>
//               </NavDropdown>
//             </NavDropdown>
//             <Nav.Link href="#gallery">Gallery</Nav.Link>
//             <Nav.Link href="#contactus">Contact</Nav.Link>
//             <Nav.Link href="Registration.js">Login</Nav.Link>
//             <NavDropdown title="Profile" id="Profile-dropdown" drop="end">
//               <NavDropdown.Item href="#veg">SignUp</NavDropdown.Item>
//               <NavDropdown.Item href="#nonveg">My Orders</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default AppNavbar;



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import '../assets/style/AppNavbar.css';

function AppNavbar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg"className="nav-style" style={{ backgroundColor: "#fff" }}>
      <Container className="container1"style={{ backgroundColor: "#fff" }}>
        <Navbar.Brand>
          <img
           // src="https://i.postimg.cc/g26cw8RN/logo.png"
           src="https://i.ibb.co/3WrgSW6/celi.png"
            alt="Logo"
            style={{ width: '90px', height: '80px', borderRadius: '50%', marginLeft: '100px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">About</Nav.Link>

            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown title="Decoration" id="decoration-dropdown" drop="end">
                <NavDropdown.Item as={Link} to="/WeddingSection">Wedding</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/EngagementSection">Engagement</NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} to="/haldi">Haldi and Mehandi</NavDropdown.Item> */}
                {/* <NavDropdown.Item as={Link} to="/mehandi">Mehandi</NavDropdown.Item> */}
                <NavDropdown.Item as={Link} to="/birthdaySection">Birthday</NavDropdown.Item>
              </NavDropdown>
             
              <NavDropdown title="Catering" id="catering-dropdown" drop="end">
                <NavDropdown.Item as={Link} to="/vegSection">Veg</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nonvegSection">Non-Veg</NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} to="/sweetSection">Sweet</NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link as={Link} to="/photoSection">Photography & Video</Nav.Link>
              {/* <NavDropdown title="Photography & Video" id="photography-dropdown" drop="end">
                <NavDropdown.Item as={Link} to="/prewedding">Pre-Wedding</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/wedding-photo">Wedding</NavDropdown.Item>
              </NavDropdown> */}
            </NavDropdown>

            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/ContactUs">Contact</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>

            <NavDropdown title="Profile" id="Profile-dropdown" drop="end">
              <NavDropdown.Item as={Link} to="/Registration">SignUp</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Dashboard">My Bookings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default AppNavbar;
