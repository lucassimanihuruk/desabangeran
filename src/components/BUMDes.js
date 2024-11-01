// components/BUMDes.js
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './BUMDes.css';

const sectionVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
};

function BUMDes() {
  const [headerRef, headerInView] = useInView({ triggerOnce: false });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: false });
  const [contactRef, contactInView] = useInView({ triggerOnce: false });
  const [onlinePresenceRef, onlinePresenceInView] = useInView({ triggerOnce: false });
  const [footerRef, footerInView] = useInView({ triggerOnce: false });

  const headerControls = useAnimation();
  const servicesControls = useAnimation();
  const contactControls = useAnimation();
  const onlinePresenceControls = useAnimation();
  const footerControls = useAnimation();

  React.useEffect(() => {
    if (headerInView) {
      headerControls.start('visible');
    } else {
      headerControls.start('hiddenLeft');
    }
  }, [headerControls, headerInView]);

  React.useEffect(() => {
    if (servicesInView) {
      servicesControls.start('visible');
    } else {
      servicesControls.start('hiddenRight');
    }
  }, [servicesControls, servicesInView]);

  React.useEffect(() => {
    if (contactInView) {
      contactControls.start('visible');
    } else {
      contactControls.start('hiddenLeft');
    }
  }, [contactControls, contactInView]);

  React.useEffect(() => {
    if (onlinePresenceInView) {
      onlinePresenceControls.start('visible');
    } else {
      onlinePresenceControls.start('hiddenRight');
    }
  }, [onlinePresenceControls, onlinePresenceInView]);

  React.useEffect(() => {
    if (footerInView) {
      footerControls.start('visible');
    } else {
      footerControls.start('hiddenLeft');
    }
  }, [footerControls, footerInView]);

  // Array untuk setiap layanan beserta deskripsi dan tautan
  const services = [
    {
      title: "Usaha Milik BUMDes",
      description: "Menyediakan berbagai usaha milik desa yang dikelola untuk kesejahteraan masyarakat.",
      link: "#usaha-bumdes"
    },
    {
      title: "Produk Unggulan",
      description: "Produk terbaik desa, mulai dari olahan pertanian hingga peternakan.",
      link: "#produk-unggulan"
    },
    {
      title: "Pelatihan SDM",
      description: "Program pelatihan untuk meningkatkan kapasitas sumber daya manusia desa.",
      link: "#pelatihan-sdm"
    },
    {
      title: "Pemasaran Digital",
      description: "Strategi pemasaran digital untuk memperluas jangkauan pasar produk desa hingga keluar desa.",
      link: "#pemasaran-digital"
    },
    {
      title: "Layanan Konsultasi",
      description: "Konsultasi usaha dan manajemen untuk warga yang ingin memulai usaha.",
      link: "#layanan-konsultasi"
    }
  ];

  return (
    <div className="bumdes">
      {/* Header */}
      <motion.header
        ref={headerRef}
        className="header"
        initial="hiddenLeft"
        animate={headerControls}
        variants={sectionVariants}
      >
        <h1>Usaha dan Produk</h1>
        <p>
        Badan Usaha Milik Desa (BUMDes) merupakan usaha desa yang dikelola oleh Pemerintah Desa, dan berbadan hukum. Pemerintah Desa dapat mendirikan Badan Usaha Milik Desa sesuai dengan kebutuhan dan potensi Desa. Pembentukan Badan Usaha Milik Desa ditetapkan dengan Peraturan Desa. Kepengurusan Badan Usaha Milik Desa terdiri dari Pemerintah Desa dan masyarakat desa setempat. 
        </p>
      </motion.header>

      {/* Our Services */}
      <motion.section
        ref={servicesRef}
        className="services"
        initial="hiddenRight"
        animate={servicesControls}
        variants={sectionVariants}
      >
        <h2>Layanan & Produk </h2>
        <div className="services-list">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-item"
              initial={{ opacity: 0, y: 20 }} // Set initial state for animation
              animate={{ opacity: 1, y: 0 }} // Animate to visible state
              transition={{ duration: 0.4, delay: index * 0.1 }} // Add delay based on index
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p> 
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default BUMDes;