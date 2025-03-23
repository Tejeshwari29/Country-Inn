import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBed, FaUtensils, FaPhone, FaCalendarCheck, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1><span style={{color:'white'}}>Country-</span><span style={{color:'orange'}}>Inn :)</span></h1>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={toggleMenu}><FaHome /> Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}><FaInfoCircle /> About</Link></li>
        <li><Link to="/room" onClick={toggleMenu}><FaBed /> Rooms</Link></li>
        <li><Link to="/food" onClick={toggleMenu}><FaUtensils /> Food</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}><FaPhone /> Contact</Link></li>
        <li><Link to="/BookNow" onClick={toggleMenu}><FaCalendarCheck /> Reserve</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
