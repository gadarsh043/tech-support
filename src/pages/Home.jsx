import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './css/Home.scss';

const Home = () => {
    return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Transform Your Tech Vision Into Reality</h1>
            <p>Professional web development and technical support services</p>
            <Link to="/contact" className="cta-button">
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us?</h2>
          </div>
          <div className="features-grid">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="feature-card"
            >
              <h3>Expert Development</h3>
              <p>
                Professional web development with modern technologies and best practices.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="feature-card"
            >
              <h3>Technical Support</h3>
              <p>
                Comprehensive technical support and maintenance services.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="feature-card"
            >
              <h3>Custom Solutions</h3>
              <p>
                Tailored solutions to meet your specific business needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;