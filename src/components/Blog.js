import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Blog.css';

function Blog() {
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
          Stay updated with the latest news and articles from our community. Explore, learn, and engage with us!
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
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
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

      {/* Footer Section */}
      <motion.footer ref={footerRef} animate={footerControls} className="blog-footer">
        <div className="footer-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Enter your email address to receive updates.</p>
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </motion.footer>
    </div>
  );
}

export default Blog;