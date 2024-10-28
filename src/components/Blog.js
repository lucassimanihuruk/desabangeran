// src/components/Blog.js
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Blog.css';

function Blog() {
  // Animation controls for header, grid items, and footer
  const [headerRef, headerInView] = useInView({ triggerOnce: false });
  const [footerRef, footerInView] = useInView({ triggerOnce: false });

  const headerControls = useAnimation();
  const footerControls = useAnimation();

  React.useEffect(() => {
    if (headerInView) {
      headerControls.start({ opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } });
    } else {
      headerControls.start({ opacity: 0, x: -50 });
    }
  }, [headerControls, headerInView]);

  React.useEffect(() => {
    if (footerInView) {
      footerControls.start({ opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } });
    } else {
      footerControls.start({ opacity: 0, x: 50 });
    }
  }, [footerControls, footerInView]);

  return (
    <div className="blog-container">
      {/* Header Section */}
      <motion.header
        ref={headerRef}
        className="blog-header"
        initial={{ opacity: 0, x: -50 }}
        animate={headerControls}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <h1 className="blog-title">News & Articles</h1>
        <p className="blog-description">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Search blog..." />
          <button type="submit">🔍</button>
        </div>
      </motion.header>

      {/* Blog Grid */}
      <div className="blog-grid">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="blog-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Animate from left or right
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } }} // Animate to visible state
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="blog-image" style={{ backgroundImage: `url(https://via.placeholder.com/150)` }}></div>
            <span className="blog-date">July 15</span>
            <h2>Do millennials care about saving?</h2>
            <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque eu urna.</p>
            <button className="read-more">Read More</button>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.footer
        ref={footerRef}
        className="blog-footer"
        initial={{ opacity: 0, x: 50 }}
        animate={footerControls}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <div className="footer-logo">
          <h2>Logo</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>
        <div className="footer-links">
          <div>
            <h3>Work</h3>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#how-we-work">How We Work</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              <li><a href="#marketing">Marketing Strategy</a></li>
              <li><a href="#website-optimization">Website Optimization</a></li>
              <li><a href="#email">Email Marketing</a></li>
            </ul>
          </div>
          <div>
            <h3>Business Solution</h3>
            <ul>
              <li><a href="#about-project">About Project</a></li>
              <li><a href="#corporate">Corporate</a></li>
            </ul>
          </div>
          <div>
            <h3>Language</h3>
            <select>
              <option>English</option>
              <option>Indonesia</option>
              <option>Jawa</option>
            </select>
          </div>
        </div>

        <div className="footer-copyright">
          © CoDecode, 2020
        </div>
      </motion.footer>
    </div>
  );
}

export default Blog;
