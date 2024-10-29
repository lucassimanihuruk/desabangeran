import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import view from "../assets/view.png";

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
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="hero" ref={ref}>
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
      <motion.img
        className="hero-image"
        src={view}
        alt="Desa Bangeran"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={imageVariants}
      />
    </section>
  );
}

export default HeroSection;