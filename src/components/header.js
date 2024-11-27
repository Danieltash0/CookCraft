import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src="../assets/logo1.png" alt="CookCraft Logo" />
        </Link>
        <h1>CookCraft</h1>
      </div>
      <div className="menu">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign-Up</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
