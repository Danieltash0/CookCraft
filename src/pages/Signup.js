import React, { useState } from 'react';
import '../styles/signup.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log({ username, email, password, confirmPassword });
  };

  return (
    <div className="signup-page">
      <div className="pagename">
        <h1>Register and Create Your Own Recipes</h1>
      </div>

      <div className="content">
        <h1>Create a CookCraft Account</h1>
        <form id="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Create Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
          <p>
            Already have an account with us? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

