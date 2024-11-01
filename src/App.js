import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoCards from './components/InfoCards';
import TeamSection from './components/TeamSection';
import StepsSection from './components/StepsSection';
import BUMDes from './components/BUMDes';
import Potensi from './components/Potensi';
import Footer from './components/footer'
import ContactUs from './components/ContactUs'; // Import ContactUs component
import Product from './components/Product';
import './App.css';

function App() {
  const location = useLocation();

  // Show content on the main page only
  const isMainPage = location.pathname === '/';

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/bumdes" element={<BUMDes />} />
        <Route path="/potensi" element={<Potensi />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/perangkat" element={<TeamSection />} />
      </Routes>

      {/* Conditionally render components for main page */}
      {isMainPage && (
        <>
          <InfoCards />
          <TeamSection />
          <StepsSection />
        </>
      )}

      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;