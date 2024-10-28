import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './HeroSection.css'; // Tambahkan CSS untuk styling
import view from '../assets/view.png'; // Ganti dengan path file yang sesuai

const heroVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
};

function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Set to false to allow the animation to repeat
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <section className="hero" ref={ref}>
      <motion.div
        className="hero-content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Trigger animation on visibility
        variants={heroVariants}
      >
        <h1>Desa Bangeran</h1>
        <p>Kecamatan Dawarblandong, Kabupaten Mojokerto</p>
        <div className="hero-buttons">
          <button>Get Started</button>
          <button>Contact Us</button>
        </div>
      </motion.div>
      <motion.img
        className="hero-image"
        src={view}
        alt="Desa Bangeran"
        initial="hidden"
        animate={inView ? "visible" : "hidden"} // Trigger animation on visibility
        variants={imageVariants}
      />
    </section>
  );
}

export default HeroSection;
