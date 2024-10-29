import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoCards from './components/InfoCards';
import TeamSection from './components/TeamSection';
import StepsSection from './components/StepsSection';
import BUMDes from './components/BUMDes';
import Blog from './components/Blog';
import Potensi from './components/Potensi';
import Footer from './components/footer';
import ContactUs from './components/ContactUs'; // Import ContactUs component
import './App.css';

function App() {
  const location = useLocation();

  // Show content based on path
  const shouldShowContent = !['/bumdes', '/produk', '/potensi', '/contact'].includes(location.pathname);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/bumdes" element={<BUMDes />} />
        <Route path="/produk" element={<Blog />} />
        <Route path="/potensi" element={<Potensi />} />
        <Route path="/contact" element={<ContactUs />} /> {/* Add route for ContactUs */}
      </Routes>

      {/* Conditionally render components */}
      {shouldShowContent && (
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
