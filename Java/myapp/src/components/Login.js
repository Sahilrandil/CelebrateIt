

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

    const formData = {
      email : Email,
      password: Password
    }

    console.log(formData);

    try {
      const response = await axios.post('http://localhost:8080/auth/login', formData);

      // Assuming the token is returned on successful login
      if (response.status === 200) {
      const token = response.data;
      localStorage.setItem('token', token); // Save token in localStorage

      const decodedToken = token ? jwtDecode(token) : null;
      const userRole = decodedToken?.role;
      // Redirect based on user role (you can add your own logic here)
      // const userRole = response.data.role; // Example: response contains a user role
      console.log(userRole);
      if (userRole === 'ADMIN') {
        navigate('/AdminPanel');
        //navigate('/admindashboard');
      } else if(userRole==="USER"){
        navigate('/dashboard');
      }
    }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
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
