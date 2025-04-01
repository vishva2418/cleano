import React from "react";
import "../css/About.css";
import Images from "../Images/team2.webp";
function About() {
  return (
    <div className="about-container">
      
      {/* Hero Section */}
      <header className="about-hero">
        <h1>About Us</h1>
        <p>Providing high-quality cleaning services for a spotless environment.</p>
      </header>

      {/* Who We Are Section */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            CleanO is a professional cleaning service provider specializing in 
            residential and commercial cleaning. Our mission is to ensure that 
            every home and workspace remains clean, fresh, and hygienic.
          </p>
          <p>
            With a team of skilled professionals and the latest eco-friendly 
            cleaning techniques, we guarantee exceptional service and customer satisfaction.
          </p>
        </div>
        <div className="about-image">
          <img src={Images} alt="Cleaning Team" />
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="about-mission">
        <h2>Our Mission, Vision & Values</h2>
        <div className="mission-grid">
          <div className="mission-item">
            <h3>🌟 Our Mission</h3>
            <p>
              To provide top-notch cleaning services that create healthier and 
              cleaner environments for our customers.
            </p>
          </div>
          <div className="mission-item">
            <h3>🎯 Our Vision</h3>
            <p>
              To become a leading cleaning service provider known for 
              innovation, sustainability, and customer satisfaction.
            </p>
          </div>
          <div className="mission-item">
            <h3>💡 Our Values</h3>
            <ul>
              <p>✔ Customer First Approach</p>
              <p>✔ Integrity & Honesty</p>
              {/* <p>✔ Eco-Friendly Cleaning</p>
              <p>✔ Continuous Improvement</p> */}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <h2>Why Choose CleanO?</h2>
        <div className="choose-grid">
          <div className="choose-item">
            <h3>✅ Professional Staff</h3>
            <p>Our trained experts deliver outstanding cleaning services.</p>
          </div>
          <div className="choose-item">
            <h3>✅ Eco-Friendly Products</h3>
            <p>We use non-toxic and safe cleaning solutions.</p>
          </div>
          <div className="choose-item">
            <h3>✅ Affordable Pricing</h3>
            <p>Premium cleaning services at competitive prices.</p>
          </div>
          <div className="choose-item">
            <h3>✅ 24/7 Availability</h3>
            <p>We are available anytime to meet your cleaning needs.</p>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-item">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"CleanO transformed my office! The staff is professional and reliable."</p>
            <h4>- Sarah M.</h4>
          </div>
          <div className="testimonial-item">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"I love how fresh and clean my home feels after every visit. Highly recommended!"</p>
            <h4>- James R.</h4>
          </div>
          <div className="testimonial-item">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Eco-friendly products and professional service! Best cleaning company ever."</p>
            <h4>- Emily W.</h4>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="company-timeline">
        <h2>Our Journey</h2>
        <ul>
          <li><span>2015</span> - CleanO was founded with a vision to provide top-quality cleaning services.</li>
          <li><span>2017</span> - Expanded to commercial cleaning services for offices and businesses.</li>
          <li><span>2019</span> - Introduced eco-friendly cleaning solutions and green cleaning initiatives.</li>
          <li><span>2021</span> - Reached 10,000+ satisfied customers with excellent service ratings.</li>
          <li><span>2023</span> - Launched a 24/7 customer support system and same-day cleaning services.</li>
        </ul>
      </section>

    </div>
  );
};

export default About;
