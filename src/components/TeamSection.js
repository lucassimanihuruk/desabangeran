import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './TeamSection.css';

const teamMemberVariants = {
  hiddenLeft: { opacity: 0, x: -50 },  // Mengurangi jarak untuk animasi lebih halus
  hiddenRight: { opacity: 0, x: 50 },  // Mengurangi jarak untuk animasi lebih halus
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }, // Menambah durasi untuk efek halus
};

function TeamMember({ src, name, title, isLeft }) {
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
      <p>{name}<br />{title}</p>
    </motion.div>
  );
}

function TeamSection() {
  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>
      <div className="team-members">
        <TeamMember
          src="https://bidiknasional.com/wp-content/uploads/2023/08/IMG-20230819-WA0020-627x470.jpg"
          name="Al Adzim, M.Si"
          title="Kepala Desa"
          isLeft={true}
        />
        <TeamMember
          src="https://bidiknasional.com/wp-content/uploads/2023/08/IMG-20230819-WA0020-627x470.jpg"
          name="Bang Joss"
          title="CEO & Founder BUMDes"
          isLeft={false}
        />
        {/* Tambahkan anggota tim lain di sini */}
      </div>
    </section>
  );
}

export default TeamSection;