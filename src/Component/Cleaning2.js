import React from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import "../css/Cleaning2.css";
import Images from "../Images/image-3.jpg";

const OfficeCleaning = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleBooking = () => {
    navigate("/booking"); // Redirect to the booking page
  };

  return (
    <div className="office-cleaning-container">
      <header className="office-cleaning-hero">
        <h1>Office Cleaning Services</h1>
        <p>Keep your workspace clean, hygienic, and productive.</p>
      </header>

      <section className="office-cleaning-content">
        <div className="office-cleaning-text">
          <h2>Why Choose Our Office Cleaning Service?</h2>
          <p>
            A clean office enhances productivity and employee well-being. Our professional 
            cleaning team ensures a spotless and sanitized workplace for your employees and clients.
          </p>
          <ul>
            <li>✔ Daily, Weekly & Monthly Cleaning Plans</li>
            <li>✔ Professional & Trained Cleaning Staff</li>
            <li>✔ Eco-Friendly Cleaning Products</li>
            <li>✔ Affordable & Customized Packages</li>
            <li>✔ High-Touch Surface Disinfection</li>
            <li>✔ Carpet & Upholstery Cleaning</li>
            <li>✔ Restroom Sanitization & Maintenance</li>
            <li>✔ Window & Glass Cleaning</li>
          </ul>
          <button className="office-cleaning-btn" onClick={handleBooking}>Book a Service</button>
        </div>
        <div className="office-cleaning-image">
          <img src={Images} alt="Office Cleaning Service" />
        </div>
      </section>

      <section className="office-cleaning-services">
        <h2>Our Office Cleaning Services Include:</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>General Office Cleaning</h3>
            <p>Regular dusting, vacuuming, and organizing office spaces.</p>
          </div>
          <div className="service-item">
            <h3>Deep Office Cleaning</h3>
            <p>Thorough cleaning of hard-to-reach areas, carpets, and furniture.</p>
          </div>
          <div className="service-item">
            <h3>Restroom Cleaning & Sanitation</h3>
            <p>Disinfecting toilets, sinks, and common areas for hygiene.</p>
          </div>
          <div className="service-item">
            <h3>Conference Room & Reception Area Cleaning</h3>
            <p>Keeping key areas spotless for visitors and meetings.</p>
          </div>
          <div className="service-item">
            <h3>Electronic Equipment Cleaning</h3>
            <p>Safe cleaning of computers, printers, and office devices.</p>
          </div>
          <div className="service-item">
            <h3>Floor & Carpet Maintenance</h3>
            <p>Vacuuming, steam cleaning, and stain removal.</p>
          </div>
          <div className="service-item">
            <h3>Glass & Window Cleaning</h3>
            <p>Streak-free glass cleaning for windows and partitions.</p>
          </div>
          <div className="service-item">
            <h3>Waste Management & Disposal</h3>
            <p>Proper waste segregation and disposal for a clean workspace.</p>
          </div>
          <div className="service-item">
            <h3>Night Cleaning Services</h3>
            <p>Cleaning after office hours to avoid disruption, Preparing the office for the next working day.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfficeCleaning;
