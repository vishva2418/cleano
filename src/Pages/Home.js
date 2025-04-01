import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/Home.css"; 
import slide1 from "../Images/image-11.jpeg"; 
import slide2 from "../Images/image-3.jpg"; 
import slide3 from "../Images/image-4.jpg"; 
import Videos from "../Videos/video-2.mp4"; 
import Marquee from "react-fast-marquee"; 

function Home(){
  return (
    <div className="home-container">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={Videos} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <header className="home-hero">
        <h1>Welcome to Our Cleaning Services</h1>
        <p>Your trusted partner for professional and reliable cleaning solutions.</p>
      </header>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="hero-slider"
      >
        <SwiperSlide>
          <img src={slide1} alt="Cleaning Service 1" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Cleaning Service 2" className="slider-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Cleaning Service 3" className="slider-image" />
        </SwiperSlide>
      </Swiper>
  

<section className="services">
  <h2>Our Cleaning Services</h2>
  <p>We offer a variety of professional cleaning services to keep your home and office spotless.</p>
  <div className="services-grid">
    <div className="service-item">
      <Link to="/services1">
        <img src={slide1} alt="Home Cleaning" />
        <h3>Home Cleaning</h3>
        </Link>
        <p>We provide deep cleaning for your home to keep it fresh and tidy.</p>
     
    </div>
    <div className="service-item">
      <Link to="/services2">
        <img src={slide2} alt="Office Cleaning" />
        <h3>Office Cleaning</h3>
        </Link>
        <p>Maintain a clean and professional workspace with our services.</p>
   
    </div>
    <div className="service-item">
      <Link to="/services3">
        <img src={slide3} alt="Carpet Cleaning" />
        <h3>Carpet Cleaning</h3>
        </Link>
        <p>We remove stains and dirt, making your carpets look brand new.</p>
     
    </div>
    <div className="service-item">
      <Link to="/services/window-cleaning">
        <img src={slide1} alt="Window Cleaning" />
        <h3>Window Cleaning</h3>
        </Link>
        <p>Crystal-clear windows with our professional cleaning service.</p>
     
    </div>
    <div className="service-item">
      <Link to="/services/upholstery-cleaning">
        <img src={slide2} alt="Upholstery Cleaning" />
        <h3>Upholstery Cleaning</h3>
        </Link>
        <p>Refresh and restore your furniture with our expert cleaning.</p>
    
    </div>
  </div>
</section>



      {/* Marquee Section  */}
      <Marquee pauseOnHover speed={60} className="marquee">
        Home Cleaning &nbsp; | &nbsp; Office Cleaning &nbsp; | &nbsp;  Upholstery Cleaning &nbsp; | &nbsp;  Window Cleaning &nbsp; | &nbsp;  Carpet Cleaning  &nbsp; | &nbsp;
      </Marquee>

      <section className="about-us">
        <h2>Why Choose Us?</h2>
        <p>We provide top-notch cleaning services tailored to your needs.</p>
        <ul>
          <li>✔ Experienced and Professional Cleaners</li>
          <li>✔ Eco-Friendly Cleaning Products</li>
          <li>✔ Affordable and Transparent Pricing</li>
          <li>✔ 100% Customer Satisfaction Guaranteed</li>
          <li>✔ Flexible Scheduling and On-Time Service</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
