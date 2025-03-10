import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Card,
  Row,
  Col,
  Image,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import "../assets/style/WeddingDetails.css";
import img1 from "../images/Home/wedding1.jpg";
import { FaCreditCard, FaGooglePay, FaQrcode } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const WeddingDetails = () => {
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwtDecode(token) : null;
  const id = decodedToken?.userId;

  const [validated, setValidated] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardHolderError, setCardHolderError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");
  const [cvvError, setCvvError] = useState("");
  const [cvv, setCvv] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [userDetails, setUserDetails] = useState(null);
  const [serviceDetails, setServiceDetails] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    "bookingid": 0,
  "eventLocation": "",
  "pinCode": "",
  "eventdate": "",
  "eventdetails": "",
  "totalPrice": 0,
  "bookingstatus": "CONFIRMED",
  "paymentmethod": "CARD",
    "userid": id,
    "serviceid": serviceDetails?.serviceid || -1,
    "categorieid": serviceDetails?.categorieid || -1
  });

  const location = useLocation();
  const serviceId = location.state.serviceId;
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodeToken = token ? jwtDecode(token) : null;
    const id = decodeToken.userId;
    console.log("user id:", id);
    setUserId(id);
    setFormData({ ...formData, ["userid"]: id });
    getUserData(id); // Pass userId to getData()
    getFacilityData();
  }, []);

  function getUserData(id) {
    try {
      axios.get(`http://localhost:8080/users/${parseInt(id)}`)
      .then(response => {
        const data = response.data;
        console.log(data);
        setUserDetails(data); // Set userDetails only after data is fetched
        //console.log("User Details: ", userDetails);
      });

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  function getFacilityData(){
    console.log("ServiseId:",serviceId);
    try {
      axios.get(`http://localhost:8080/services/${serviceId}`)
      .then(response => {
        const data = response.data;
        console.log("Category Details: ", data);
        setServiceDetails(data); // Set userDetails only after data is fetched
        //console.log("Category Details: ", categoryDetails);
        setBasePrice(data.basePrice); // ₹ 1 Lakh
        setDiscountAmount((data.basePrice * data.discount) / 100); // 8% Discount
        setTotalPrice(data.basePrice - ((data.basePrice * data.discount) / 100));
        //const id = userId;
        //console.log("SamiCutie",userId);
        //console.log("Service",serviceId);
        //console.log("category",categoryId);
        const price = data.basePrice - ((data.basePrice * data.discount) / 100);
        console.log(totalPrice, discountAmount);
        setFormData({ ...formData, ["serviceid"]: data.serviceid, ["categorieid"]: data.categorieid, ["totalPrice"]: price});
      });

    } catch (error) {
      console.error("Error fetching Category data:", error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setShowBilling(true); // Show billing details
    }
    setValidated(true);
  };

  const handlePayment = (event) => {
    // event.preventDefault();
    // alert(`Payment completed via ${paymentMethod}`);
    // const orderData = {
    //   "eventLocation": event.eventLocation,
    //   "pinCode": event.pinCode,
    //   "eventDate": event.eventDate,
    //   "eventDetails": event.eventDetails,
    //   "totalPrice": totalPrice,
    //   "paymentMethod": event.paymentMethod,
    //   "bookingStatus": event.bookingStatus,
    //   "userId": userId,
    //   "facilityId": facilityDetails.facilityId,
    //   "categoryId": facilityDetails.categoryId
    // };
    console.log(formData)

    try {
      axios.post(`http://localhost:8080/bookings/add`, formData)
      .then(response => {
        if(response.status == 200){
          alert("Order placed successfully");
          console.log(response.data);
          navigate("/servicebill",{state : response.data});
        }
        else{
          alert("Something went wrong, please try again");
        }
      });

    } catch (error) {
      console.error("Error: ", error);
    }

  };

  // const handlePaymentt = () => {
  //   setShowToast(true); // Show toast notification
  // };


  //const rating = 4;
  //const description =
  //  "The stage is the heart of the décor, designed with cascading floral backdrops, crystal chandeliers, and warm ambient lighting to frame the couple beautifully.";
  const handleValidation = () => {
    if (
      paymentMethod === "card" &&
      cardHolderName &&
      cardNumber.length === 16 &&
      expiryDate.match(/^(0[1-9]|1[0-2])\/(\d{2})$/) &&
      cvv.length === 3 &&
      !cardHolderError &&
      !cardNumberError &&
      !expiryDateError &&
      !cvvError
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };


  
  return (
    <div className="mt-4">
      <Row>
        <Col md={6}>
          <Card>
            <Image
              src={serviceDetails?.image || ""}
              alt="Event Decoration"
              fluid
              className="rounded-top"
            />
            <Card.Body>
              <Card.Title>{serviceDetails?.title || ""}</Card.Title>
              <Card.Text>
                <strong>Description:</strong> {serviceDetails?.description || ""}
              </Card.Text>
              <Card.Text>
                <strong> Price:</strong> ₹ {serviceDetails?.basePrice || ""}
              </Card.Text>
              <Card.Text>
                <strong>Discount:</strong> {serviceDetails?.discount || ""}%
              </Card.Text>
              <Card.Text>
                <strong>Rating:</strong> {serviceDetails?.rating || ""}
                <span></span>
              </Card.Text>

              <Link as={Link} to="/contactus">
                <Button variant="success" className="me-2">
                  Contact
                </Button>
              </Link>

              {/* <Button variant="success" className="me-2">
                Contact
              </Button> */}

              <Link as={Link} to="/gallery">
                <Button variant="primary">View More Photos</Button>
              </Link>
              {/* <Button variant="primary">View More Photos</Button> */}
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          {!showBilling ? (
            <Card>
              <Card.Body>
                <Card.Title>Contact CelebrateIt</Card.Title>
                {!userDetails ? (
                  <p>Loading user details...</p>
                ) : (
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Form.Group controlId="formName" className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={userDetails?.userName || ""}
                        readOnly
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your name.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        value={userDetails?.email || ""}
                        readOnly
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid email address.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formContactNumber" className="mb-3">
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={userDetails?.contact_number || ""}
                        readOnly
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid Contact Number.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formLocation" className="mb-3">
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter your location"
                        name="eventLocation"
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your location.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formPin" className="mb-3">
                      <Form.Label>Pin Code</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter your pin code"
                        name="pinCode"
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid pin code.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formDate" className="mb-3">
                      <Form.Label>Event Date</Form.Label>
                      <Form.Control 
                      required 
                      type="date"
                      name="eventdate"
                      onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please select an event date.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formDetails" className="mb-3">
                      <Form.Label>Event Details</Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        placeholder="Describe the decoration and event specifications"
                        name="eventdetails"
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide event details.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Proceed to Payment
                    </Button>
                  </Form>
                )}
              </Card.Body>
            </Card>
          ) : (
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Billing Details</Card.Title>
                <Card.Text>
                  <strong>Base Price:</strong> ₹ {serviceDetails?.basePrice.toLocaleString() || ""}
                </Card.Text>
                <Card.Text>
                  <strong>Discount:</strong> {serviceDetails.discount}% (₹{" "}
                  {discountAmount.toLocaleString()})
                </Card.Text>
                <Card.Text>
                  <strong>Total Price After Discount:</strong> ₹{" "}
                  {totalPrice.toLocaleString()}
                </Card.Text>

                <Form.Group className="mt-4">
                  <Form.Label>
                    <strong>Payment Method</strong>
                  </Form.Label>
                  <div className="d-flex gap-3">
                    <Button
                      variant="outline-primary"
                      className={`payment-option ${
                        paymentMethod === "card" ? "active" : ""
                      }`}
                      onClick={() => {setPaymentMethod("card"); setFormData({ ...formData, ["paymentMethod"]: "card" }); }}
                    >
                      <FaCreditCard className="me-2" /> By Card
                    </Button>
                    <Button
                      variant="outline-primary"
                      className={`payment-option ${
                        paymentMethod === "upi" ? "active" : ""
                      }`}
                      onClick={() => {setPaymentMethod("upi"); setFormData({ ...formData, ["paymentMethod"]: "upi" }); }}
                    >
                      <FaGooglePay className="me-2" /> UPI (GPay/PhonePe)
                    </Button>
                  </div>
                </Form.Group>

                {paymentMethod === "card" && (
                 <Form className="mt-4">
                 {/* Card Holder Name */}
                 <Form.Group className="mb-3">
                   <Form.Label>Card Holder Name</Form.Label>
                   <Form.Control
                     type="text"
                     placeholder="Enter card holder name"
                     value={cardHolderName}
                     onChange={(e) => {
                       const input = e.target.value;
                       const regex = /^[A-Za-z][A-Za-z\s]*$/;
                       if (regex.test(input) || input === "") {
                         setCardHolderName(input);
                         setCardHolderError("");
                       } else {
                         setCardHolderError("Invalid name. Avoid leading spaces.");
                       }
                       handleValidation();
                     }}
                   />
                   {cardHolderError && <small className="text-danger">{cardHolderError}</small>}
                 </Form.Group>

                 {/* Card Number */}
                 <Form.Group className="mb-3">
                   <Form.Label>Card Number</Form.Label>
                   <Form.Control
                     type="text"
                     placeholder="Enter card number"
                     value={cardNumber}
                     maxLength={16}
                     onChange={(e) => {
                       const input = e.target.value.replace(/\D/g, "");
                       setCardNumber(input);
                       if (input.length === 16) {
                         setCardNumberError("");
                       } else {
                         setCardNumberError("Card number must be exactly 16 digits.");
                       }
                       handleValidation();
                     }}
                   />
                   {cardNumberError && <small className="text-danger">{cardNumberError}</small>}
                 </Form.Group>

                 {/* Expiry Date */}
                 <Form.Group className="mb-3">
                   <Form.Label>Expiry Date (MM/YY)</Form.Label>
                   <Form.Control
                     type="text"
                     placeholder="MM/YY"
                     value={expiryDate}
                     maxLength={5}
                     onChange={(e) => {
                       let input = e.target.value.replace(/\D/g, "");
                       if (input.length > 4) return;

                       if (input.length >= 2) {
                         input = input.substring(0, 2) + "/" + input.substring(2);
                       }

                       if (/^(0[1-9]|1[0-2])\/(\d{2})$/.test(input)) {
                         const [month, year] = input.split("/").map(Number);
                         const currentYear = new Date().getFullYear() % 100;
                         const currentMonth = new Date().getMonth() + 1;

                         if (year > currentYear || (year === currentYear && month >= currentMonth)) {
                           setExpiryDate(input);
                           setExpiryDateError("");
                         } else {
                           setExpiryDateError("Expiry date must be in the future.");
                         }
                       } else {
                         setExpiryDateError("Invalid format. Use MM/YY.");
                       }
                       setExpiryDate(input);
                       handleValidation();
                     }}
                   />
                   {expiryDateError && <small className="text-danger">{expiryDateError}</small>}
                 </Form.Group>

                 {/* CVV */}
                 <Form.Group className="mb-3">
                   <Form.Label>CVV</Form.Label>
                   <Form.Control
                     type="password"
                     placeholder="Enter CVV"
                     maxLength={3}
                     value={cvv}
                     onChange={(e) => {
                       const input = e.target.value.replace(/\D/g, "");
                       setCvv(input);
                       if (input.length === 3) {
                         setCvvError("");
                       }
                       handleValidation();
                     }}
                     onBlur={() => {
                       if (cvv.length !== 3) {
                         setCvvError("CVV must be exactly 3 digits.");
                       }
                     }}
                   />
                   {cvvError && <small className="text-danger">{cvvError}</small>}
                 </Form.Group>
                  </Form>
                )}

                {paymentMethod === "upi" && (
                  <div className="text-center mt-4">
                    <FaQrcode size={100} />
                    <p>Scan this QR code to complete the payment</p>
                    <strong>
                      Total Price: ₹ {totalPrice.toLocaleString()}
                    </strong>
                  </div>
                )}

                <Button
                  variant="success"
                  className="w-100 mt-3"
                  disabled={
                    !paymentMethod || 
                    (paymentMethod === "card" && 
                      (!cardHolderName || 
                       !cardNumber || 
                       !expiryDate || 
                       !cvv || 
                       cardHolderError || 
                       cardNumberError || 
                       expiryDateError || 
                       cvvError))
                  } 
                  onClick={handlePayment}
                >
                  Pay Now
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Payment Status</strong>
          </Toast.Header>
          <Toast.Body>Payment Successful!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default WeddingDetails;
