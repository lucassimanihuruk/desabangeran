import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo Desa Bangeran" />
        <span>BUMDes Bangeran</span>
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bumdes">BUMDes</Link></li>
          <li><Link to="/potensi">Potensi</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <div className={`burger ${isOpen ? "toggle" : ""}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;