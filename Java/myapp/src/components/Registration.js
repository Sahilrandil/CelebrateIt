import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/style/Registration.css";

function Registration() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    contact_number: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
    role: 0, // Default user role
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Validate Full Name (only letters and spaces allowed)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.userName.trim()) {
      formErrors.userName = "Full Name is required";
      isValid = false;
    } else if (!nameRegex.test(formData.userName)) {
      formErrors.userName = "Full Name should only contain letters and spaces";
      isValid = false;
    }

    // Validate Email (must follow a valid email format)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate Mobile Number (only numbers and 10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.contact_number.trim()) {
      formErrors.contact_number = "Mobile Number is required";
      isValid = false;
    } else if (!mobileRegex.test(formData.contact_number)) {
      formErrors.contact_number = "Mobile Number must be 10 digits";
      isValid = false;
    }

    // Validate Password (must be at least 6 characters long)
    if (!formData.password.trim()) {
      formErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    // Validate Confirm Password (must match the password)
    if (!formData.confirmPassword.trim()) {
      formErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (formData.confirmPassword !== formData.password) {
      formErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    // Validate Terms and Conditions acceptance
    if (!formData.termsAccepted) {
      formErrors.termsAccepted = "You must accept the terms and conditions";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await axios.post("http://localhost:8080/auth/signup", {
          userName: formData.userName,
          email: formData.email,
          contact_number: formData.contact_number,
          password: formData.password,
          role: formData.role,
        });

        if (response.status === 200) {
          toast.success("Registration successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });

          // Redirect to the OTP verification page
          navigate("/VerificationCode", { state: formData.email });
        }
      } catch (error) {
        if (error.response) {
          setErrors({ form: error.response.data.message || "Registration failed" });
        } else {
          setErrors({ form: "Network error" });
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      {errors.form && <p className="error">{errors.form}</p>}
      <form className="registration-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Full Name"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        {errors.userName && <span className="error-message">{errors.userName}</span>}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <input
          type="text"
          name="contact_number"
          placeholder="Mobile Number"
          value={formData.contact_number}
          onChange={handleChange}
          required
        />
        {errors.contact_number && <span className="error-message">{errors.contact_number}</span>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="error-message">{errors.password}</span>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}

        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          I agree to the Terms and Conditions
        </label>
        {errors.termsAccepted && <span className="error-message">{errors.termsAccepted}</span>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>

      <ToastContainer />
    </div>
  );
}

export default Registration;
