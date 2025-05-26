import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaDatabase, FaDesktop, FaBug, FaBullhorn, FaShareAlt, FaChartLine, FaInstagram } from 'react-icons/fa';
import './css/Services.scss';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Custom websites and web applications using modern frameworks like React, Next.js, and Vue.js.',
      price: 'Starting from $111'
    },
    {
      icon: <FaMobile />,
      title: 'Responsive Design',
      description: 'Mobile-first, responsive designs that work seamlessly across all devices and screen sizes.',
      price: 'Starting from $89'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Robust server-side solutions using Node.js, Python, and other modern technologies.',
      price: 'Starting from $144'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Design',
      description: 'Efficient database architecture and optimization for better performance.',
      price: 'Starting from $100'
    },
    {
      icon: <FaDesktop />,
      title: 'Technical Support',
      description: 'Ongoing maintenance and support for your web applications and systems.',
      price: 'Starting from $55/month'
    },
    {
      icon: <FaBug />,
      title: 'Bug Fixing',
      description: 'Quick and efficient debugging services to keep your applications running smoothly.',
      price: 'Starting from $33'
    },
    {
      icon: <FaBullhorn />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and reach your target audience.',
      price: 'Starting from $89'
    },
    {
      icon: <FaShareAlt />,
      title: 'Social Media Management',
      description: 'Complete social media management including content creation, posting schedules, and community engagement.',
      price: 'Starting from $67/month'
    },
    {
      icon: <FaChartLine />,
      title: 'SEO & Analytics',
      description: 'Search engine optimization and detailed analytics to improve your website visibility and performance.',
      price: 'Starting from $78'
    },
    {
      icon: <FaInstagram />,
      title: 'Content Creation',
      description: 'Engaging content creation for social media platforms, blogs, and marketing campaigns.',
      price: 'Starting from $56'
    }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="header"
        >
          <h1>Our Services</h1>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card"
            >
              <div className="card-content">
                <div className="icon-wrapper">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p className="description">{service.description}</p>
                <div className="price">{service.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 