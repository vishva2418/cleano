import React from "react";
import "../css/Footer.css"; 
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer(){
  return (
    <footer className="footer">
      <div className="footer-container">
     
        <div className="footer-section about">
          <h2>CleanO</h2>
          <p>Your trusted cleaning service provider. We ensure a spotless and hygienic environment.</p>
          <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
  <FaFacebook />
</a>
<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
  <FaInstagram />
</a>
<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
  <FaTwitter />
</a>

          </div>
        </div>

   
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p><FaMapMarkerAlt /> 123 Clean Street, City, Country</p>
          <p><FaPhone /> +1 234 567 890</p>
          <p><FaEnvelope /> support@cleano.com</p>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CleanO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
