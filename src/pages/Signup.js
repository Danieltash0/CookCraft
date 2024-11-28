import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    try {
      const response = await axios.post('http://localhost:5000/signup', { username, email, password });

      if (response.data.success) {
        const token = response.data.token; // Token for authenticated requests
        navigate(`/RegisteredUser?token=${token}`);
      } else {
        setError('Error creating account');
      }
    } catch (err) {
      console.error(err.response?.data?.message || 'An error occurred');
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="signup-page">
      <div className="pagename">
        <h1>Register and Create Your Own Recipes</h1>
      </div>
      <div className="content">
        <h1>Create a CookCraft Account</h1>
        {error && <div className="error">{error}</div>}
        <form id="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Create Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
          <p>Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
