import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null); 
  };

  // Handle Dropdown Opening & Closing
  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">CleanO</Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="nav-toggle" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>

        {/* About Dropdown */}
        <li 
          className="nav-item dropdown"
          onMouseEnter={() => setOpenDropdown("about")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link to="/about" onClick={() => handleDropdown("about")}>
            About ▾
          </Link>
          {openDropdown === "about" && (
            <ul className="dropdown-menu">
              <li><Link to="/about1" onClick={toggleMenu}>Our Team</Link></li>
            </ul>
          )}
        </li>

        {/* Services Dropdown */}
        <li 
          className="nav-item dropdown"
          onMouseEnter={() => setOpenDropdown("services")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link to="/services" onClick={() => handleDropdown("services")}>
            Services ▾
          </Link>
          {openDropdown === "services" && (
            <ul className="dropdown-menu">
              <li><Link to="/services1" onClick={toggleMenu}>Home Cleaning</Link></li>
              <li><Link to="/services2" onClick={toggleMenu}>Office Cleaning</Link></li>
              <li><Link to="/services3" onClick={toggleMenu}>Carpet Cleaning</Link></li>
              <li><Link to="/services3" onClick={toggleMenu}>Window Cleaning</Link></li>
              <li><Link to="/services3" onClick={toggleMenu}>Upholstery Cleaning</Link></li>

            </ul>
          )}
        </li>

        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
