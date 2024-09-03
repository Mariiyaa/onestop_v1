import React from 'react';
// import './Footer.css'; // Make sure to create a corresponding CSS file for styling
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h2>One Stop Events</h2>
          <p>We bring your events to life!</p>
          <p>Located in Vadodara, India</p>
          <div className="footer-links">
          <Link to="/AboutUs">About Us</Link>
          <Link to="/Services">Services</Link>
           
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p>&copy; {new Date().getFullYear()} One Stop Events. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
