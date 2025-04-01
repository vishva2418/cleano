import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Pages/Nav';
import About from './Pages/About';
import Home from './Pages/Home';
import Home1 from './Component/Home1';
import Cleaning2 from './Component/Cleaning2';
import Carpet3 from './Component/Carpet3';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Ourteam from './Pages/Ourteam';
import BookingPage from './Component/Bookingpage';
import Footer from './Pages/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services1" element={<Home1 />} />
        <Route path="/services2" element={<Cleaning2 />} />
        <Route path="/services3" element={<Carpet3 />} />
        <Route path="/about1" element={<Ourteam />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
