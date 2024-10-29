import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './StepsSection.css';

const stepVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

function Step({ number, title, description, isLeft }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start(isLeft ? 'hiddenLeft' : 'hiddenRight');
    }
  }, [controls, inView, isLeft]);

  return (
    <motion.div
      ref={ref}
      className="step"
      initial={isLeft ? 'hiddenLeft' : 'hiddenRight'}
      animate={controls}
      variants={stepVariants}
    >
      <div className="step-number">{number}</div>
      <div className="step-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

function StepsSection() {
  return (
    <section className="steps-section">
      <div className="steps-container">
        <div className="steps-title">VISI & MISI</div>
        <Step
          number="1"
          title=""
          description="'Terwujudnya masyarakat Desa Senggigi yang Bersih, Relegius, Sejahtera, Rapi dan Indah melalui Akselerasi Pembangunan yang berbasis Keagamaan, Budaya Hukum dan Berwawasan Lingkungan dengan berorentasi pada peningkatan Kinerja Aparatur dan Pemberdayaan Masyarakat'"
          isLeft={true}
        />
        <Step
          number="2"
          title="Pembangunan Jangka Panjang"
          description="Meningkatkan kesejahtraan masyarakat desa dengan meningkatkan sarana dan prasarana ekonomi warga."
          isLeft={false}
        />
        <Step
          number="3"
          title="Pembangunan Jangka Pendek"
          description="Meningkatkan pelayanan dalam bidang pemerintahan kepada warga masyarakat."
          isLeft={true}
        />
        <Step
          number="4"
          title="SENGGIGI BERSERI"
          description="(Bersih, Relegius, Sejahtera, Rapi, dan Indah)"
          isLeft={false}
        />
      </div>
    </section>
  );
}

export default StepsSection;
