// src/pages/Potensi.js
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Potensi.css';

const potensiVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const PotensiSection = ({ title, description, imageUrl, isLeft }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false }); // triggerOnce set to false

  React.useEffect(() => {
    // Start animation when inView changes
    if (inView) {
      controls.start('visible');
    } else {
      controls.start(isLeft ? 'hiddenLeft' : 'hiddenRight');
    }
  }, [controls, inView, isLeft]);

  return (
    <motion.div
      ref={ref}
      className="potensi-section"
      initial={isLeft ? 'hiddenLeft' : 'hiddenRight'}
      animate={controls}
      variants={potensiVariants}
    >
      <img src={imageUrl} alt={title} />
      <div className="potensi-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const Potensi = () => {
  return (
    <div>
      <Header />
      <main>
        <PotensiSection
          title="Cabai"
          description="Deskripsi singkat tentang potensi cabai di desa."
          imageUrl="https://statik.tempo.co/data/2024/07/30/id_1323333/1323333_720.jpg"
          isLeft={true}
        />
        <PotensiSection
          title="Kacang"
          description="Deskripsi singkat tentang potensi kacang di desa."
          imageUrl="https://cdn.digitaldesa.com/uploads/profil/73.14.11.2009/berita/9ffe8bc6985008de0db10e93ad2939ef.jpg"
          isLeft={false}
        />
        <PotensiSection
          title="Jagung"
          description="Deskripsi singkat tentang potensi jagung di desa."
          imageUrl="https://mediaindonesia.com/cdn-cgi/image/width=800,quality=80,format=webp/https://asset.mediaindonesia.com/news/2024/10/16/1729045200_bc831217ab1a8d08a585.jpg"
          isLeft={true}
        />
        <PotensiSection
          title="Produk Bumdes"
          description="Deskripsi singkat tentang produk bumdes di desa."
          imageUrl="https://patrolihukumindonesia.com/wp-content/uploads/2024/05/IMG-20240518-WA0047-1152x1536.jpg"
          isLeft={false}
        />
      </main>
      <Footer />
    </div>
  );
};

const Header = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeInOut' } });
    } else {
      controls.start({ opacity: 0, y: -20 });
    }
  }, [controls, inView]);

  return (
    <motion.header
      ref={ref}
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
    >
      <h1>Potensi Unggulan Desa</h1>
      <div className="header-content">
        <p>
          We take your SaaS idea and make it into reality. We start with going into why and what you are looking for.
          Then after brainstorming on branding and strategy we are going into the details of what and what and why you
          want to create a website.
        </p>
      </div>
    </motion.header>
  );
};

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeInOut' } });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [controls, inView]);

  return (
    <motion.footer
      ref={ref}
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
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
  );
};

export default Potensi;
