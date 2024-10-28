import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ContactSection.css'; // Tambahkan CSS untuk styling

const contactVariants = {
  hiddenLeft: { opacity: 0, x: -50 },  // Mengatur posisi awal dari kiri
  hiddenRight: { opacity: 0, x: 50 },  // Mengatur posisi awal dari kanan
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }, // Durasi transisi yang lebih halus
};

function ContactSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hiddenLeft');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      className="contact-section"
      initial="hiddenLeft"
      animate={controls}
      variants={contactVariants}
    >
      <h3>Interested to work with us?</h3>
      <p>Hubungi email dibawah ini</p>
      <button>Email: bumdes@desa.id</button>
    </motion.section>
  );
}

export default ContactSection;
