// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import '../assets/style/VerificationCode.css';

// const VerificationCode = () => {
//   const [code, setCode] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Verification Code Submitted: ${code}`);
//   };

//   const handleRequestNewCode = () => {
//     alert('New code requested.');
//   };

//   return (
//     <Container className="verification-container">
//       <Row className="justify-content-md-center">
//         <Col md="6">
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="verificationCode">
//               <Form.Label>Your code was sent to you via email</Form.Label>
//               <Row>
//                 {[...Array(6)].map((_, index) => (
//                   <Col key={index}>
//                     <Form.Control
//                       className="verification-input"
//                       type="text"
//                       maxLength="1"
//                       value={code[index] || ''}
//                       onChange={(e) => {
//                         const newCode = code.split('');
//                         newCode[index] = e.target.value;
//                         setCode(newCode.join(''));
//                       }}
//                       required
//                     />
//                   </Col>
//                 ))}
//               </Row>
//             </Form.Group>
//             <Button variant="primary" type="submit" className="verify-button">
//               Verify
//             </Button>
//           </Form>
//           <Button variant="link" onClick={handleRequestNewCode} className="request-code-button">
//             Didn't receive code? Request again
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default VerificationCode;





// import React, { useState, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import '../assets/style/VerificationCode.css';

// const VerificationCode = () => {
//   const { email } = 
//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const inputRefs = useRef([]);
//   const navigate = useNavigate();

//   const handleChange = (index, event) => {
//     const value = event.target.value;
//     if (/^[0-9]?$/.test(value)) {
//       let newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       if (value && index < 5) {
//         inputRefs.current[index + 1].focus();
//       }
//     }
//   };

//   const handleKeyDown = (index, event) => {
//     if (event.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const otpValue = otp.join("");

//     if (otpValue.length === 6) {
//       setIsSubmitting(true);
//       try {
//         const response = await axios.post("http://localhost:5078/validate_email", {
//           Email: email,
//           Otp: otpValue,
//         });

//         if (response.data.status === "success") {
//           alert("OTP Verified Successfully!");
//           // Redirect to login or home page
//           navigate("/login");
//         } else {
//           setError("Invalid OTP. Please try again.");
//         }
//       } catch (error) {
//         setError("Error verifying OTP. Please try again later.");
//       } finally {
//         setIsSubmitting(false);
//       }
//     } else {
//       setError("Please enter a valid 6-digit OTP.");
//     }
//   };

//   const handleReset = () => {
//     setOtp(["", "", "", "", "", ""]);
//     setError("");
//     inputRefs.current[0].focus();
//   };

//   return (
//     <div className="container otp-container">
//       <h2 className="text-center">Email Verification</h2>
//       <p className="text-center">Enter the 6-digit OTP sent to your email {email}.</p>
//       <form onSubmit={handleSubmit} className="otp-form">
//         <div className="d-flex justify-content-center">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               type="text"
//               className="otp-input form-control"
//               value={digit}
//               onChange={(e) => handleChange(index, e)}
//               onKeyDown={(e) => handleKeyDown(index, e)}
//               ref={(el) => (inputRefs.current[index] = el)}
//               maxLength="1"
//             />
//           ))}
//         </div>
//         {error && <p className="text-danger text-center">{error}</p>}
//         <div className="text-center mt-3">
//           <button type="submit" className="btn btn-primary me-2" disabled={isSubmitting}>
//             {isSubmitting ? "Verifying..." : "Submit"}
//           </button>
//           <button type="button" className="btn btn-secondary" onClick={handleReset}>
//             Reset OTP
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default VerificationCode;

import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/style/VerificationCode.css';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const VerificationCode = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (/^[0-9]?$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = location.state;
    const otpValue = otp.join("");
    const data = { email: email, otp: otpValue };

    if (otpValue.length === 6) {
      try {
        const response = await axios.post("http://localhost:8080/auth/verify", data, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          toast.success("OTP Verified Successfully!", { position: "top-center" });
          setTimeout(() => {
            navigate("/login"); // Redirect to login after success
          }, 2000); // Delay for user experience
        } else {
          toast.error("Invalid OTP. Please try again.", { position: "top-center" });
        }
      } catch (error) {
        toast.error("An error occurred. Please try again later.", { position: "top-center" });
        console.error("Error during OTP verification:", error);
      }
    } else {
      setError("Please enter a valid 6-digit OTP.");
    }
  };

  const handleReset = () => {
    setOtp(["", "", "", "", "", ""]);
    setError("");
    inputRefs.current[0].focus();
  };

  return (
    <div className="container otp-container">
      <h2 className="text-center">Email Verification</h2>
      <p className="text-center">Enter the 6-digit OTP sent to your email.</p>
      <form onSubmit={handleSubmit} className="otp-form">
        <div className="d-flex justify-content-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              className="otp-input form-control"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
              maxLength="1"
            />
          ))}
        </div>
        {error && <p className="text-danger text-center">{error}</p>}
        <div className="text-center mt-3">
          <button type="submit" className="btn btn-primary me-2">
            Submit
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>
            Reset OTP
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerificationCode;
