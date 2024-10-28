import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './InfoCards.css'; // Tambahkan CSS untuk styling

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -50 },  // Perubahan x untuk animasi lebih halus
  hiddenRight: { opacity: 0, x: 50 },  // Perubahan x untuk animasi lebih halus
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }, // Durasi animasi lebih lama untuk kesan halus
};

const InfoCard = ({ title, description, link, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start(index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight');
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      className="card"
      initial={index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
      animate={controls}
      variants={cardVariants}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>Read More</a>
    </motion.div>
  );
};

function InfoCards() {
  const cardData = [
    { title: 'Perangkat BUMDes', description: 'Kepala Desa Beserta Perangkatnya.', link: '#' },
    { title: 'Usaha Milik BUMDes', description: 'Badan Usaha Miik Desa.', link: '#' },
    { title: 'Produk Unggulan BUMDes', description: 'Produk-produk Unggulan Desa.', link: '#' },
    { title: 'Potensi Unggulan Desa', description: 'Potensi Pengembangan Produk Unggulan Desa.', link: '#' },
  ];

  return (
    <section className="info-cards">
      <h2>Jelajahi Berbagai Hal di Desa Bangeran</h2>
      <p>Melalui website ini, Anda dapat menelusuri informasi tentang BUMDes dan potensi unggulan desa.</p>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <InfoCard 
            key={index} 
            title={card.title} 
            description={card.description} 
            link={card.link} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}

export default InfoCards;
