import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoCards from './components/InfoCards';
import TeamSection from './components/TeamSection';
import StepsSection from './components/StepsSection';
import BUMDes from './components/BUMDes';
import Blog from './components/Blog'; // Import the new Blog component
import ContactSection from './components/ContactSection';
import './App.css';
import Potensi from './components/Potensi';

function App() {
  const location = useLocation();

  // Check if the current path is not "/bumdes" or "/produk"
  const shouldShowContent = !['/bumdes', '/produk', '/potensi'].includes(location.pathname);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/bumdes" element={<BUMDes />} />
        <Route path="/produk" element={<Blog />} />
        <Route path="/potensi" element={<Potensi />} />
      </Routes>

      {/* Conditionally render these components */}
      {shouldShowContent && (
        <>
          <InfoCards />
          <  TeamSection />
          <StepsSection />
          <ContactSection />
        </>
      )}
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
