import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/style/Login.css';
import { jwtDecode } from 'jwt-decode';

function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5078/api/Auth', {
        Email,
        Password,
      });

      if (response.status === 200) {
        const token = response.data;
        localStorage.setItem('token', token);

        const decodedToken = token ? jwtDecode(token) : null;
        const userRole = decodedToken?.UserRole;

        console.log("User Role:", userRole);

        if (userRole === 'ADMIN') {
          navigate('/AdminPanel');
        } else if (userRole === 'USER') {
          navigate('/Dashboard');
        } else {
          navigate('/'); // Default fallback
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
