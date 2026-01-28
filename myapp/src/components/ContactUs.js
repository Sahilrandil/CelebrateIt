// import React, { useState } from 'react';
// import '../assets/style/ContactUs.css';
// import img1 from '../images/Home/wedding1.jpg';
// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     Name: '',
//     EmailId: '',
//     //MobileNumber:'',
//     Message: ''
//   });

//   const [errors, setErrors] = useState({
//     Name: '',
//     EmailId: '',
//    // MobileNumber:'',
//     Message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     let formErrors = {};
//     let isValid = true;

//     if (!formData.Name.trim()) {
//       formErrors.Name = 'Name is required';
//       isValid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.EmailId.trim()) {
//       formErrors.EmailId = 'Email is required';
//       isValid = false;
//     } else if (!emailRegex.test(formData.EmailId)) {
//       formErrors.EmailId = 'Invalid email address';
//       isValid = false;
//     }

//     if (!formData.Message.trim()) {
//       formErrors.Message = 'Message is required';
//       isValid = false;
//     }

//     setErrors(formErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       try {
//         const response = await fetch('http://localhost:5078/api/ContactUs', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           alert('Form submitted successfully!');
//           setFormData({ Name: '', EmailId: '', Message: '' });
//         } else {
//           alert('Failed to submit the form. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }
//   };

//   return (
//     <div className="contact-container">
//  <h2 className="contact-title">Plan Your Events With Us</h2>

//       <h2 className="contact-title">Contact Us</h2>

//       <div className="half-containerr">
//     <div className="half-imagee">
//       <img src={img1} alt="Celebrate" className="image" />
//     </div>
//     <div className="half-textt">
//     <form onSubmit={handleSubmit} className="contact-form">
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="Name"
//             value={formData.Name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             required
//           />
//           {errors.Name && <span className="error-message">{errors.Name}</span>}
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="EmailId"
//             value={formData.EmailId}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             required
//           />
//           {errors.EmailId && <span className="error-message">{errors.EmailId}</span>}
//         </div>

      
      

// <div className="form-group">
//   <label htmlFor="mobileNumber">Mobile Number</label>
//   <input
//     type="text"
//     id="mobileNumber"
//     name="mobileNumber"
//     value={formData.mobileNumber}
//     onChange={handleChange}
//     placeholder="Enter your mobile number"
//     required
//   />
//   {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}
// </div>


        
//         <div className="form-group">
//           <label htmlFor="Message">Message</label>
//           <textarea
//             id="Message"
//             name="Message"
//             value={formData.Message}
//             onChange={handleChange}
//             placeholder="Your message"
//             rows="5"
//             required
//           ></textarea>
//           {errors.Message && <span className="error-message">{errors.Message}</span>}
//         </div>
        
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//   </div>

      
//     </div>
//   );
// };

// export default ContactUs;




import React, { useState } from 'react';
import '../assets/style/ContactUs.css';
import img1 from '../images/Home/eng8.jpg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: '',
    EmailId: '',
    MobileNumber: '',
    Message: ''
  });

  const [errors, setErrors] = useState({
    Name: '',
    EmailId: '',
    MobileNumber: '',
    Message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Name Validation (Only letters and spaces)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.Name.trim()) {
      formErrors.Name = 'Name is required';
      isValid = false;
    } else if (!nameRegex.test(formData.Name)) {
      formErrors.Name = 'Name can only contain letters and spaces';
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.EmailId.trim()) {
      formErrors.EmailId = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.EmailId)) {
      formErrors.EmailId = 'Invalid email address';
      isValid = false;
    }

    // Mobile Number Validation (Only digits, must be 10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.MobileNumber.trim()) {
      formErrors.MobileNumber = 'Mobile number is required';
      isValid = false;
    } else if (!mobileRegex.test(formData.MobileNumber)) {
      formErrors.MobileNumber = 'Mobile number must be 10 digits';
      isValid = false;
    }

    // Message Validation (Only characters and spaces)
    const messageRegex = /^[A-Za-z\s]+$/;
    if (!formData.Message.trim()) {
      formErrors.Message = 'Message is required';
      isValid = false;
    } else if (!messageRegex.test(formData.Message)) {
      formErrors.Message = 'Message can only contain letters and spaces';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5078/api/ContactUs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Form submitted successfully!');
          setFormData({ Name: '', EmailId: '', MobileNumber: '', Message: '' });
        } else {
          alert('Failed to submit the form. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Plan Your Events With Us</h2>
      <h2 className="contact-title">Contact Us</h2>

      <div className="half-containerr">
        <div className="half-imagee">
          <img src={img1} alt="Celebrate" className="image" />
        </div>
        <div className="half-textt">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
              {errors.Name && <span className="error-message">{errors.Name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="EmailId"
                value={formData.EmailId}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              {errors.EmailId && <span className="error-message">{errors.EmailId}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="MobileNumber">Mobile Number</label>
              <input
                type="text"
                id="MobileNumber"
                name="MobileNumber"
                value={formData.MobileNumber}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                required
              />
              {errors.MobileNumber && <span className="error-message">{errors.MobileNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="Message">Message</label>
              <textarea
                id="Message"
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                placeholder="Your message"
                rows="5"
                required
              ></textarea>
              {errors.Message && <span className="error-message">{errors.Message}</span>}
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
