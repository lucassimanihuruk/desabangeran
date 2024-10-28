import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './StepsSection.css';

const stepVariants = {
  hiddenLeft: { opacity: 0, x: -50 },  // Mengurangi jarak untuk animasi lebih halus
  hiddenRight: { opacity: 0, x: 50 },  // Mengurangi jarak untuk animasi lebih halus
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }, // Menambah durasi untuk efek halus
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
      <h2>Your Idea into Reality</h2>
      <div className="steps-container">
        <Step
          number="1"
          title="Your Idea"
          description="We listen to your ideas and help you plan a strategy for your project."
          isLeft={true}
        />
        <Step
          number="2"
          title="Strategy Meeting"
          description="We conduct meetings to finalize the plan and start the development process."
          isLeft={false}
        />
        <Step
          number="3"
          title="Agile and Scrum Framework"
          description="We use Agile and Scrum methodologies to ensure efficient project management."
          isLeft={true}
        />
        <Step
          number="4"
          title="Your Website Goes Live"
          description="We launch your website and provide ongoing support."
          isLeft={false}
        />
      </div>
    </section>
  );
}

export default StepsSection;
