import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaServer, FaMobile, FaDatabase, FaDesktop, FaBug, FaBullhorn, FaShareAlt, FaChartLine, FaInstagram } from 'react-icons/fa';
import './css/Services.scss';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Custom websites and web applications using modern frameworks like React, Next.js, and Vue.js.',
      features: [
        'Custom Web Applications',
        'React & Next.js Development',
        'API Integration',
        'Performance Optimization'
      ],
      price: '$111',
      period: '',
      note: 'Starting price for basic projects',
      featured: true
    },
    {
      icon: <FaMobile />,
      title: 'Responsive Design',
      description: 'Mobile-first, responsive designs that work seamlessly across all devices and screen sizes.',
      features: [
        'Mobile-First Approach',
        'Cross-Browser Compatibility',
        'Touch-Friendly Interface',
        'Flexible Grid Systems'
      ],
      price: '$89',
      period: '',
      note: 'Per design project'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Robust server-side solutions using Node.js, Python, and other modern technologies.',
      features: [
        'RESTful API Development',
        'Database Integration',
        'Authentication Systems',
        'Server Configuration'
      ],
      price: '$144',
      period: '',
      note: 'Starting price for backend services'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'Efficient database architecture and optimization for better performance.',
      features: [
        'Database Schema Design',
        'Query Optimization',
        'Data Migration',
        'Backup Solutions'
      ],
      price: '$100',
      period: '',
      note: 'Per database project'
    },
    {
      icon: <FaDesktop />,
      title: 'Technical Support',
      description: 'Ongoing maintenance and support for your web applications and systems.',
      features: [
        '24/7 Monitoring',
        'Bug Fixes & Updates',
        'Performance Monitoring',
        'Security Updates'
      ],
      price: '$55',
      period: '/month',
      note: 'Monthly support package'
    },
    {
      icon: <FaBug />,
      title: 'Bug Fixing',
      description: 'Quick and efficient debugging services to keep your applications running smoothly.',
      features: [
        'Error Diagnosis',
        'Code Debugging',
        'Performance Issues',
        'Quick Turnaround'
      ],
      price: '$33',
      period: '',
      note: 'Per bug fix'
    },
    {
      icon: <FaBullhorn />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and reach your target audience.',
      features: [
        'Marketing Strategy',
        'Campaign Management',
        'Brand Development',
        'Market Analysis'
      ],
      price: '$89',
      period: '',
      note: 'Starting price for campaigns',
      featured: true
    },
    {
      icon: <FaShareAlt />,
      title: 'Social Media Management',
      description: 'Complete social media management including content creation, posting schedules, and community engagement.',
      features: [
        'Content Planning',
        'Daily Posting',
        'Community Management',
        'Analytics Reporting'
      ],
      price: '$67',
      period: '/month',
      note: 'Monthly management package'
    },
    {
      icon: <FaChartLine />,
      title: 'SEO & Analytics',
      description: 'Search engine optimization and detailed analytics to improve your website visibility and performance.',
      features: [
        'Keyword Research',
        'On-Page SEO',
        'Analytics Setup',
        'Performance Reports'
      ],
      price: '$78',
      period: '',
      note: 'Per SEO project'
    },
    {
      icon: <FaInstagram />,
      title: 'Content Creation',
      description: 'Engaging content creation for social media platforms, blogs, and marketing campaigns.',
      features: [
        'Social Media Content',
        'Blog Writing',
        'Visual Content',
        'Content Strategy'
      ],
      price: '$56',
      period: '',
      note: 'Per content package'
    }
  ];

  return (
    <div className="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="page-header"
        >
          <h1>Our <span className="highlight">Services</span></h1>
          <p>
            We offer a comprehensive range of technical and marketing services to help you build, maintain, and grow your digital presence. 
            Adarsh specializes in technical development while Shobhit excels in marketing and social media strategy.
          </p>
        </motion.div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`service-card ${service.featured ? 'featured' : ''}`}
            >
              {service.featured && (
                <div className="featured-badge">Popular</div>
              )}
              
              <div className="service-icon">
                {service.icon}
              </div>
              
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <ul className="features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                
                <div className="price-section">
                  <div className="price">
                    <span className="currency">$</span>
                    {service.price.replace('$', '')}
                    {service.period && <span className="period">{service.period}</span>}
                  </div>
                  <div className="price-note">{service.note}</div>
                </div>
                
                <Link to="/contact" className="cta-button">
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="services-cta"
        >
          <h2>Need a Custom Solution?</h2>
          <p>
            Don't see exactly what you're looking for? We specialize in creating custom solutions 
            tailored to your specific needs. Let's discuss your project and find the perfect approach.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Discuss Your Project
            </Link>
            <Link to="/portfolio" className="btn btn-secondary">
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services; 