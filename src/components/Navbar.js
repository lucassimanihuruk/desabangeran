import React from 'react';
import logo from '../assets/logo.png'; // Ganti dengan path file yang sesuai
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo Desa Bangeran" />
        <span>Pemerintah Desa Bangeran</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bumdes">BUMDes</Link></li>
        <li><Link to="/produk">Produk</Link></li>
        <li><Link to="/potensi">Potensi</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
