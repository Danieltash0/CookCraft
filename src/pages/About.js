import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className='about-content'>
      <div className="pagename">
        <h1>Know more about us</h1>
      </div>
      <main>
        <section>
          <h2>Our Mission</h2>
          <p>
            At CookCraft, our mission is to bring the joy of cooking to everyone. We believe that cooking should be fun, easy, and accessible to all.
          </p>
        </section>
        <section>
          <h2>Our Story</h2>
          <p>
            CookCraft was founded in 2023 by a group of passionate chefs and home cooks who wanted to share their love of cooking with the world. Since then, we have grown into a community of food enthusiasts who are dedicated to making cooking a delightful experience.
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or feedback, feel free to reach out to us at <a href="mailto:info@cookcraft.com">info@cookcraft.com</a>.
          </p>
        </section>
      </main>
      
    </div>
  );
};

export default About;
