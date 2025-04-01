import React from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "../css/Home1.css";
import Images from "../Images/image-2.jpg";

const HomeCleaning = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleBooking = () => {
    navigate("/booking"); // Redirect to the booking page
  };

  return (
    <div className="home-cleaning-container">
      <header className="home-cleaning-hero">
        <h1>Home Cleaning Services</h1>
        <p>Professional and reliable cleaning services for your home.</p>
      </header>

      <section className="home-cleaning-content">
        <div className="home-cleaning-text">
          <h2>Why Choose Our Home Cleaning Service?</h2>
          <p>
            Our expert cleaning team ensures your home stays clean, fresh, and hygienic.
            We provide deep cleaning, dusting, mopping, and sanitization to give your home the perfect shine.
          </p>
          <ul>
            <li> Professional & Experienced Cleaners</li>
            <li> Eco-Friendly Cleaning Products</li>
            <li> Affordable & Reliable Services</li>
            <li> 100% Satisfaction Guaranteed</li>
            <li> Flexible Scheduling for Your Convenience</li>
            <li> Advanced Equipment for Deep Cleaning</li>
          </ul>
          <button className="home-cleaning-btn" onClick={handleBooking}>Book a Service</button>
        </div>
        <div className="home-cleaning-image">
          <img src={Images} alt="Home Cleaning Service" />
        </div>
      </section>
      

      <section className="home-cleaning-services">
        <h2>Our Cleaning Services Include:</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Regular Home Cleaning</h3>
            <p>Includes dusting, vacuuming, mopping, and general tidying up.</p>
          </div>
          <div className="service-item">
            <h3>Deep Cleaning</h3>
            <p>Thorough cleaning of hard-to-reach areas, appliances, and surfaces.</p>
          </div>
          <div className="service-item">
            <h3>Move-In/Move-Out Cleaning</h3>
            <p>Comprehensive cleaning for tenants and homeowners moving in or out.</p>
          </div>
          <div className="service-item">
            <h3>Carpet & Upholstery Cleaning</h3>
            <p>Specialized treatment for carpets, sofas, and furniture fabrics.</p>
          </div>
          <div className="service-item">
            <h3>Kitchen & Bathroom Cleaning</h3>
            <p>Detailed scrubbing, disinfecting, and sanitizing of kitchens and bathrooms.</p>
          </div>
          <div className="service-item">
            <h3>Post-Construction Cleaning</h3>
            <p>Removing debris, dust, and residues after home renovation or construction.</p>
          </div>
          <div className="service-item">
            <h3> Seasonal or Spring Cleaning</h3>
            <p> Deep cleaning after winter or before a new season ,Decluttering and organizing spaces Washing curtains.</p>
          </div>
          <div className="service-item">
            <h3>Eco-Friendly (Green) Cleaning</h3>
            <p>Using non-toxic, biodegradable cleaning products,Ideal for homes with kids, pets, or allergy sufferers.</p>
          </div>
          <div className="service-item">
            <h3>Airbnb or Rental Property Cleaning</h3>
            <p>Quick turnover cleaning between guests.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCleaning;