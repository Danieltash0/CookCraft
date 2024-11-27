import React from 'react';
import '../styles/login.css'; // Import the relevant CSS file

function Login() {
  return (
    <div className="login-page">
      <div className="pagename">
        <h1>Welcome Back!</h1>
      </div>

      <div className="content">
        <h1>Login to Your Account</h1>
        <form id="login-form">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>
          <p>
            Don't have a CookCraft account yet?{' '}
            <a href="/signup">Sign Up Here</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
