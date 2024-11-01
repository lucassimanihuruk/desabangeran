import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './TeamSection.css';
import Kades from "../assets/kepaladesa.jpg";

const teamMemberVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

function TeamMember({ src, name, title, description, whatsapp, facebook, instagram, isLeft }) {
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
      className="team-member"
      initial={isLeft ? 'hiddenLeft' : 'hiddenRight'}
      animate={controls}
      variants={teamMemberVariants}
    >
      <img src={src} alt={name} />
      <div className="member-info">
        <p className="member-name">{name}</p>
        <p className="member-title">{title}</p>
        <p className="member-description">{description}</p>
        <div className="social-links">
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp"></i>
        </a>
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        </div>
      </div>
    </motion.div>
  );
}

function TeamSection() {
  return (
    <section className="team-section">
      <h2>Perangkat BUMDes</h2>
      <p>Perangkat BUMDes bertugas untuk mengelola dan mengembangkan usaha desa dalam meningkatkan ekonomi lokal.</p>
      <div className="team-members">
        <TeamMember
          src={Kades}
          name="Al Adzim, M.Si"
          title="Kepala Desa"
          description="Memimpin dan mengawasi seluruh kegiatan BUMDes untuk kesejahteraan desa."
          whatsapp="https://wa.me/123456789"
          facebook="https://facebook.com/example"
          instagram="https://instagram.com/example"
          isLeft={true}
        />
        <TeamMember
          src="image2.jpg"
          name="Sofwan Hadi"
          title="Ketua BUMDes"
          description="Mengelola operasional BUMDes serta memastikan perkembangan usaha yang berkelanjutan."
          whatsapp="https://wa.me/123456789"
          facebook="https://facebook.com/example"
          instagram="https://instagram.com/example"
          isLeft={false}
        />
        <TeamMember
          src="image3.jpg"
          name="Basori"
          title="Sekretaris BUMDes"
          description="Mengelola administrasi dan dokumentasi BUMDes."
          whatsapp="https://wa.me/123456789"
          facebook="https://facebook.com/example"
          instagram="https://instagram.com/example"
          isLeft={false}
        />
        <TeamMember
          src="image4.jpg"
          name="Jainul"
          title="Bendahara BUMDes"
          description="Mengelola keuangan dan laporan keuangan BUMDes."
          whatsapp="https://wa.me/123456789"
          facebook="https://facebook.com/example"
          instagram="https://instagram.com/example"
          isLeft={false}
        />
        <TeamMember
          src="image5.jpg"
          name="H. Suntari"
          title="Pengawas"
          description="Memastikan pengelolaan BUMDes berjalan sesuai peraturan dan rencana kerja."
          whatsapp="https://wa.me/123456789"
          facebook="https://facebook.com/example"
          instagram="https://instagram.com/example"
          isLeft={false}
        />
        <TeamMember
          src="image6.jpg"
          name="Zainul Arifin"
          title="Pengawas"
          description="Memastikan pengelolaan BUMDes berjalan sesuai peraturan dan rencana kerja."
          whatsapp="https://wa.me/123456789"
          facebook="https://facebook.com/example"
          instagram="https://instagram.com/example"
          isLeft={false}
        />
      </div>
    </section>
  );
}

export default TeamSection;