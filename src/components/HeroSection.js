import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import bumdes1 from "../assets/bumdes.jpg";
import bumdes2 from "../assets/bumdes2.jpg";

const heroVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const backgroundImages = [bumdes1, bumdes2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Ganti latar belakang setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Ganti setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      ref={ref}
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="hero-content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={heroVariants}
      >
        <h1>Desa Bangeran</h1>
        <p>Kecamatan Dawarblandong, Kabupaten Mojokerto</p>
        <div className="hero-buttons">
          <Link to="/contact">Contact Us</Link>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;