import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaTools, 
  FaRocket, 
  FaMobile, 
  FaShieldAlt, 
  FaHeadset 
} from 'react-icons/fa';
import './css/Home.scss';

const Home = () => {
  const features = [
    {
      icon: <FaCode />,
      title: "Expert Development",
      description: "Professional web development with modern technologies and best practices."
    },
    {
      icon: <FaTools />,
      title: "Technical Support",
      description: "Comprehensive technical support and maintenance services for your projects."
    },
    {
      icon: <FaRocket />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or functionality."
    },
    {
      icon: <FaMobile />,
      title: "Mobile-First Design",
      description: "Responsive designs that work perfectly on all devices and screen sizes."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Solutions",
      description: "Security-focused development with industry-standard best practices."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your business never stops running."
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Transform Your <span className="highlight">Tech Vision</span> Into Reality
            </h1>
            <p>
              Professional web development, technical support, and digital marketing services 
              to help your business thrive in the digital world.
            </p>
            <Link to="/contact" className="cta-button">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us?</h2>
            <p>
              We combine technical expertise with creative solutions to deliver 
              exceptional results for your business.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss your project and turn your ideas into reality. 
              Contact us today for a free consultation.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;