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
          Desa Bangeran, yang terletak di Kecamatan Dawarblandong, Kabupaten Mojokerto, terkenal dengan berbagai usaha produktif yang menjadi tulang punggung ekonomi masyarakatnya. Salah satu andalan desa ini adalah produk olahan pertanian seperti cabai, jagung, dan kacang yang diproses dengan teknik modern untuk menghasilkan produk berkualitas tinggi.
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
        <h2>Our Services</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor invidunt ut labore et.</p>
        <div className="services-list">
          {[
            "Usaha Milik BUMDes", 
            "Produk Unggulan", 
            "Pelatihan SDM", 
            "Pemasaran Digital", 
            "Pengelolaan Keuangan", 
            "Layanan Konsultasi"
          ].map((title, index) => (
            <motion.div
              key={index}
              className="service-item"
              initial={{ opacity: 0, y: 20 }} // Set initial state for animation
              animate={{ opacity: 1, y: 0 }} // Animate to visible state
              transition={{ duration: 0.4, delay: index * 0.1 }} // Add delay based on index
            >
              <h3>{title}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#">Read More</a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        className="contact"
        initial="hiddenLeft"
        animate={contactControls}
        variants={sectionVariants}
      >
        <h2>Interested to work with us?</h2>
        <p>Hubungi Email dibawah ini</p>
        <button>Email: bumdes@desa-bangeran.id</button>
      </motion.section>

      {/* Online Presence Section */}
      <motion.section
        ref={onlinePresenceRef}
        className="online-presence"
        initial="hiddenRight"
        animate={onlinePresenceControls}
        variants={sectionVariants}
      >
        <div className="presence-info">
          <h2>Establishing online presence</h2>
          <p>
            Every SaaS website, regardless of niche, must do one thing brilliantly, which is converting visitors into
            users. At first glance, the site should encourage and guide visitors in a smooth way towards call-to-actions.
          </p>
          <p>This goes hand in hand with a responsive design, meaning it needs to be apt for different devices.</p>
          <p>
            We use a data-driven approach to measure user response when developing the site. This method usually makes the
            site quicker to launch, is more cost-effective, and more successful in the long run.
          </p>
        </div>
        <div className="schedule">
          <h3>Schedule a free session</h3>
          <div className="calendar">
            <p>15 Minutes - Web Development SaaS</p>
            <p>Available Dates: August 2021</p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        ref={footerRef}
        className="footer"
        initial="hiddenLeft"
        animate={footerControls}
        variants={sectionVariants}
      >
        <div className="footer-section">
          <h3>Pemerintah Desa Bangeran</h3>
          <p>Alamat: Jl. Desa Bangeran No.1, Kec. Sumber, Kab. Rembang</p>
          <p>Website resmi pemerintah desa untuk mendukung pembangunan desa.</p>
        </div>
        <div className="footer-section">
          <h3>Tentang Kami</h3>
          <p>BUMDes Bangeran adalah Badan Usaha Milik Desa yang berdedikasi untuk mengembangkan perekonomian desa.</p>
        </div>
        <div className="footer-section">
          <h3>Hubungi Kami</h3>
          <p>Email: bumdes@desa-bangeran.id</p>
          <p>Telepon: (021) 12345678</p>
        </div>
        <div className="footer-section">
          <h3>Business Solution</h3>
          <p>Kami menawarkan berbagai solusi bisnis untuk meningkatkan pendapatan dan kesejahteraan masyarakat desa.</p>
        </div>
      </motion.footer>
    </div>
  );
}

export default BUMDes;
