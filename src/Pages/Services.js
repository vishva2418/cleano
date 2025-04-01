import React, { useState } from "react";
import "../css/Services.css";
import Images from "../Images/image-8.jpeg";
import Images1 from "../Images/image-9.webp";
import { Link } from 'react-router-dom';

const serviceList = [
  { img: Images, title: "Home Cleaning", desc: "Thorough cleaning for your entire home, ensuring a fresh and healthy environment." },
  { img: Images1, title: "Office Cleaning", desc: "Professional cleaning services to maintain a productive and clean workspace." },
  { img: Images, title: "Carpet Cleaning", desc: "Deep cleaning of carpets to remove dust, dirt, and allergens, ensuring a fresh look." },
  { img: Images, title: "Window Cleaning", desc: "Spotless, streak-free windows for a clearer and brighter view." },
  { img: Images, title: "Upholstery Cleaning", desc: "Refresh and restore your furniture with our expert cleaning." },
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const handleBooking = (serviceName) => {
    setSelectedService(serviceName);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
    setFormData({ name: "", email: "", date: "", time: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${selectedService} on ${formData.date} at ${formData.time}`);
    handleCloseModal();
  };

  return (
    <div className="services-container">
      <header className="services-hero">
        <h1>Our Cleaning Services</h1>
        <p>Premium cleaning services to keep your space fresh, spotless, and hygienic.</p>
      </header>

      <section className="services-list">
        {serviceList.map((service, index) => (
          <div className="service-item" key={index}>
            <img src={service.img} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            {/* <button className="book-btn" onClick={() => handleBooking(service.title)}>Book Now</button> */}
             
      {/* Book Me button */}
      <Link to="/booking">
        <button>Book Me Now</button>
      </Link>
          </div>
        ))}
      </section>

      {/* Booking Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Book {selectedService}</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
              <input type="date" name="date" required value={formData.date} onChange={handleChange} />
              <input type="time" name="time" required value={formData.time} onChange={handleChange} />
              <button type="submit">Confirm Booking</button>
              <button type="button" className="close-btn" onClick={handleCloseModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      <section className="available-hours">
        <h2>Our Available Hours</h2>
        <p>We are available for bookings at the following times:</p>
        <ul>
          <li>Monday to Friday: 8:00 AM - 6:00 PM</li>
          <li>Saturday: 9:00 AM - 5:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </section>

      <section className="contact-details">
        <h2>Contact Us</h2>
        <p>If you have any questions or want to book a service, feel free to reach out to us:</p>
        <ul>
          <li><strong>Email:</strong> info@cleaningservices.com</li>
          <li><strong>Phone:</strong> +123 456 7890</li>
          <li><strong>Address:</strong> 123 Clean Street, City, Country</li>
        </ul>
      </section>
    </div>
  );
}

export default Services;
