import React from "react";
import "../css/Contact.css";
function Contact(){
  return (
    <div className="contact-container">
   
      <header className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Get in touch with us today.</p>
      </header>

    
      <section className="contact-content">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>📍 Address: 123 Clean Street, City, Country</p>
          <p>📞 Phone: +1 234 567 890</p>
          <p>📧 Email: support@cleano.com</p>
          <p>🕒 Working Hours: Mon - Sat (9 AM - 6 PM)</p>
        </div>
      </section>

      <section className="contact-map">
        <h2>Find Us on the Map</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509367!2d144.95565131558536!3d-37.81720997975126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770c1a08bba3f2!2sCleanO%20Office!5e0!3m2!1sen!2sus!4v1638265744727"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
