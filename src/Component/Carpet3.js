import React from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "../css/Carpet3.css";
import Images from "../Images/image-4.jpg";

const CarpetCleaning = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleBooking = () => {
    navigate("/booking"); // Redirect to the booking page
  };

  return (
    <div className="carpet-cleaning-container">
      <header className="carpet-cleaning-hero">
        <h1>Carpet Cleaning Services</h1>
        <p>Deep cleaning solutions for fresh and stain-free carpets.</p>
      </header>

      <section className="carpet-cleaning-content">
        <div className="carpet-cleaning-text">
          <h2>Why Choose Our Carpet Cleaning Service?</h2>
          <p>
            Our professional carpet cleaning service removes stains, dust, and allergens, 
            making your carpets look and feel brand new. We use advanced techniques and 
            eco-friendly products for the best results.
          </p>
          <ul>
            <li>✔ Deep Steam Cleaning & Stain Removal</li>
            <li>✔ Safe for Pets & Kids</li>
            <li>✔ Quick Drying Technology</li>
            <li>✔ 100% Customer Satisfaction Guaranteed</li>
            <li>✔ Odor Elimination & Fresh Scent Treatment</li>
            <li>✔ Dust Mite & Allergen Removal</li>
            <li>✔ Professional Carpet Protection & Maintenance</li>
            <li>✔ Eco-Friendly & Non-Toxic Cleaning Solutions</li>
          </ul>
          <button className="carpet-cleaning-btn" onClick={handleBooking}>
            Book a Service
          </button>
        </div>
        <div className="carpet-cleaning-image">
          <img src={Images} alt="Carpet Cleaning Service" />
        </div>
      </section>

      <section className="carpet-cleaning-services">
        <h2>Our Carpet Cleaning Services Include:</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Deep Steam Cleaning</h3>
            <p>Removes deep-seated dirt, bacteria, and stains for a fresh and clean carpet.</p>
          </div>
          <div className="service-item">
            <h3>Spot & Stain Treatment</h3>
            <p>Specialized stain removal techniques for coffee, wine, pet stains, and more.</p>
          </div>
          <div className="service-item">
            <h3>Allergen & Dust Mite Removal</h3>
            <p>Helps reduce allergens and improve indoor air quality.</p>
          </div>
          <div className="service-item">
            <h3>Pet Odor & Stain Removal</h3>
            <p>Eliminates pet odors and removes stains effectively.</p>
          </div>
          <div className="service-item">
            <h3>Eco-Friendly Carpet Cleaning</h3>
            <p>Uses non-toxic, biodegradable cleaning solutions for a safe home.</p>
          </div>
          <div className="service-item">
            <h3>Carpet Protection Treatment</h3>
            <p>Protects your carpets from future stains and wear.</p>
          </div>
          <div className="service-item">
            <h3>Quick Drying Technology</h3>
            <p>Advanced methods ensure minimal drying time.</p>
          </div>
          <div className="service-item">
            <h3>Commercial & Residential Cleaning</h3>
            <p>Customized cleaning solutions for homes, offices, and businesses.</p>
          </div>
          <div className="service-item">
            <h3> Shampoo Carpet Cleaning</h3>
            <p>Uses foamy detergent and scrubbing machine,Loosens dirt and grime from carpet fibers.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarpetCleaning;
