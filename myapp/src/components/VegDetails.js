
import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col, Image, Toast, ToastContainer } from "react-bootstrap";
import '../assets/style/VegDetails.css';
import img1 from '../images/Home/veg1.jpg';
import { FaCreditCard, FaGooglePay, FaQrcode } from "react-icons/fa";
import { Link } from 'react-router-dom'; 

const VegDetails = () => {
  const [validated, setValidated] = useState(false);
  const [showBilling, setShowBilling] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [numThalis, setNumThalis] = useState(1); // State for number of thalis

  const basePrice = 500; // ₹ 1 Lakh
  const discount = 5; // 8% Discount
  const discountAmount = (basePrice * discount) / 100;
  const totalPrice = basePrice - discountAmount;

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
    event.preventDefault();
    alert(`Payment completed via ${paymentMethod}`);
  };

  const handleNumThalisChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumThalis(value > 0 ? value : 1); // Ensure the number of thalis is at least 1
  };

  return (
    <div className="mt-4">
      <Row>
        <Col md={6}>
          <Card>
            <Image
              src={img1}
              alt="Event Decoration"
              fluid
              className="rounded-top1"
            />
            <Card.Body>
              <Card.Title>VEG THALI</Card.Title>
              <Card.Text>
                <strong> Price:</strong> ₹ {basePrice.toLocaleString()}
              </Card.Text>
              <Card.Text>
                <strong>Discount:</strong> {discount}%
              </Card.Text>
              <Card.Text>
                <strong>Rating:</strong> 4.8 <span>(14 reviews)</span>
              </Card.Text>
              <Card.Text>
                <strong>Items:</strong> <span>Paneer, Roti</span>
              </Card.Text>

              <Link as={Link} to="/contactus">
                <Button variant="success" className="me-2">
                  Contact
                </Button>
              </Link>

              <Link as={Link} to="/gallery">
                <Button variant="primary">View More Photos</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          {!showBilling ? (
            <Card>
              <Card.Body>
                <Card.Title>Veg Thali</Card.Title>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  {/* Other form fields */}


                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your name"
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
                      placeholder="Enter your email"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  



                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Mobile number</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter your number"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your number.
                    </Form.Control.Feedback>
                  </Form.Group>


                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your address"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your address.
                    </Form.Control.Feedback>
                  </Form.Group>


              

                

                  <Form.Group controlId="formPin" className="mb-3">
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter your pin code"
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
                    />
                    <Form.Control.Feedback type="invalid">
                      Please select an event date.
                    </Form.Control.Feedback>
                  </Form.Group>



                  <Form.Group controlId="formNumThalis" className="mb-3">
                    <Form.Label>Number of Thalis required</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter the number of thalis"
                      value={numThalis}
                      onChange={handleNumThalisChange}
                    />





                    <Form.Control.Feedback type="invalid">
                      Please enter the number of thalis required.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Proceed to Payment
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          ) : (
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Billing Details</Card.Title>
                <Card.Text>
                  <strong>Base Price:</strong> ₹ {basePrice.toLocaleString()}
                </Card.Text>
                <Card.Text>
                  <strong>Discount:</strong> {discount}% (₹ {discountAmount.toLocaleString()})
                </Card.Text>
                <Card.Text>
                  <strong>Price Per Thali After Discount:</strong> ₹ {totalPrice.toLocaleString()}
                </Card.Text>
                <Card.Text>
                  <strong>Total Price for {numThalis} Thali(s):</strong> ₹ {(totalPrice * numThalis).toLocaleString()}
                </Card.Text>

                <Form.Group className="mt-4">
                  <Form.Label><strong>Payment Method</strong></Form.Label>
                  <div className="d-flex gap-3">
                    <Button
                      variant="outline-primary"
                      className={`payment-option ${paymentMethod === "card" ? "active" : ""}`}
                      onClick={() => setPaymentMethod("card")}
                    >
                      <FaCreditCard className="me-2" /> By Card
                    </Button>
                    <Button
                      variant="outline-primary"
                      className={`payment-option ${paymentMethod === "upi" ? "active" : ""}`}
                      onClick={() => setPaymentMethod("upi")}
                    >
                      <FaGooglePay className="me-2" /> UPI (GPay/PhonePe)
                    </Button>
                  </div>
                </Form.Group>

                {paymentMethod === "card" && (
                  <Form className="mt-4">
                    <Form.Group controlId="formCardNumber" className="mb-3">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your card number"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                )}

                {paymentMethod === "upi" && (
                  <div className="text-center mt-4">
                    <FaQrcode size={100} />
                    <p>Scan this QR code to complete the payment</p>
                  </div>
                )}

                <Button
                  variant="success"
                  className="w-100 mt-3"
                  disabled={!paymentMethod || (paymentMethod === "card" && !cardNumber)}
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
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Payment Status</strong>
          </Toast.Header>
          <Toast.Body>Payment Successful!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default VegDetails;

