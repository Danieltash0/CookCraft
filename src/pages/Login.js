import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });

      // If login is successful, redirect with a token from the backend
      if (response.data.success) {
        const token = response.data.token; // Token for authenticated requests
        // Redirect to RegisteredUser with the token passed as part of the URL
        navigate(`/RegisteredUser?token=${token}`);
      } else {
        setErrorMessage('Invalid email or password');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <div className="pagename">
        <h1>Welcome Back!</h1>
      </div>
      <div className="content">
        <h1>Login to Your Account</h1>
        <form id="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
