import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footertext">
        <p>Address: Westlands tower building</p>
        <p>P.O Box 341</p>
        <div className="footerline"></div>
        <p>Contact us:</p>
        <ul>
          <li><a href="mailto:cookcraft@gmail.com">cookcraft@gmail.com</a></li>
          <li><a href="tel:+254711561414">+254711561414</a></li>
          <li><a href="https://www.instagram.com/deliciousrecipes">Instagram</a></li>
        </ul>
      </div>
      <div className="footerpics">
        <img src="../assets/gmail.png" alt="Gmail" />
        <img src="../assets/phone.png" alt="Phone" />
        <img src="../assets/whatsapp.png" alt="WhatsApp" />
        <img src="../assets/instagram.png" alt="Instagram" />
      </div>
    </footer>
  );
};

export default Footer;
