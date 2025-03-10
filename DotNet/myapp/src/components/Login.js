// import React, { useState } from 'react';
// import '../assets/style/Login.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function Login() {
//   // State to hold form input values
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
  
//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();  // Prevent default form submission
    
//     try {
//       const response = await axios.post(
//         'http://localhost:5078/api/Auth', // Your backend login endpoint
//         { email, password } // Send email and password as request body
//       );
      
//       // Handle the success response
//       const token = response.data; // Assuming the response contains the token
//       localStorage.setItem('token', token); // Save token in localStorage
//       window.location.href = '/dashboard'; // Redirect to dashboard or desired route
//     } catch (error) {
//       // Handle errors (e.g., invalid credentials)
//       if (error.response) {
//         setError(error.response.data.error || 'Login failed');
//       } else {
//         setError('Network error');
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       {error && <p className="error">{error}</p>} {/* Display error if present */}
//       <form className="login-form" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email Address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Forgot Password? <a href="/reset-password">Reset here</a>
//       </p>
//       <p>
//         New here? <Link to="/registration">Create an account</Link>
//       </p>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/style/Login.css';
import { jwtDecode } from 'jwt-decode';

function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to programmatically navigate after login

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5078/api/Auth', {
        Email,
        Password,
      });

      // Assuming the token is returned on successful login
      if (response.status === 200) {
      const token = response.data;
      localStorage.setItem('token', token); // Save token in localStorage

      const decodedToken = token ? jwtDecode(token) : null;
      const userRole = decodedToken?.UserRole;
      // Redirect based on user role (you can add your own logic here)
      // const userRole = response.data.role; // Example: response contains a user role
 console.log(userRole);
      if (userRole === 'ADMIN') {
        navigate('/AdminPanel');
      } else if(userRole==="USER"){
        navigate('/Dashboard');
      }
    }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error || 'Login failed');
      } else {
        setError('Network error');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Forgot Password? <a href="/reset-password">Reset here</a>
      </p>
      <p>
        New here? <Link to="/registration">Create an account</Link>
      </p>
    </div>
  );
}

export default Login;
