import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaQuestionCircle,
  FaRocket
} from 'react-icons/fa';
import { emailjsConfig } from '../config/emailjs';
import './css/Contact.scss';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'fulltechaid@gmail.com',
      description: 'Send us an email anytime',
      link: 'mailto:fulltechaid@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+91 (787) 432-8001',
      description: 'Call us during business hours',
      link: 'tel:+917874328001'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Bengaluru, Karnataka, India',
      description: 'Our base of operations',
      link: '#'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. Simple websites take 1-2 weeks, while complex applications can take 4-8 weeks.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer maintenance packages and ongoing support to keep your website running smoothly and up-to-date.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We specialize in React, Node.js, Python, and modern web technologies. We also provide digital marketing services.'
    },
    {
      question: 'Can you help with existing projects?',
      answer: 'Absolutely! We can help improve, maintain, or add features to your existing websites and applications.'
    }
  ];

  // Validate form fields
  const validateForm = (formData) => {
    const errors = {};
    
    if (!formData.get('name')?.trim()) {
      errors.name = 'Full name is required';
    }
    
    if (!formData.get('email')?.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.get('email'))) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.get('phone')?.trim()) {
      errors.phone = 'Phone number is required';
    }
    
    if (!formData.get('message')?.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };

  // Clear validation error for a specific field
  const clearFieldError = (fieldName) => {
    if (validationErrors[fieldName]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    
    const formData = new FormData(form.current);
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors({});
    setIsSubmitting(true);
    setStatus('sending');

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current,
        emailjsConfig.publicKey
      );
      setStatus('success');
      form.current.reset();
      setHasSubmitted(false);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="page-header"
        >
          <h1>Get in <span className="highlight">Touch</span></h1>
          <p>
            Have a project in mind? Let&apos;s discuss how we can help you achieve your goals 
            with our technical expertise and marketing solutions.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="contact-info"
          >
            <h2>Contact Information</h2>
            <p>
              Ready to start your project? Reach out to us through any of the following methods. 
              We&apos;re here to help bring your ideas to life.
            </p>
            
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="contact-method"
                >
                  <div className="method-icon">
                    {info.icon}
                  </div>
                  <div className="method-content">
                    <h4>{info.title}</h4>
                    <p>
                      {info.link !== '#' ? (
                        <a href={info.link}>{info.content}</a>
                      ) : (
                        info.content
                      )}
                    </p>
                    <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="contact-form"
          >
            <h2>Send us a Message</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className={hasSubmitted && validationErrors.name ? 'error' : ''}
                  onChange={() => clearFieldError('name')}
                />
                {hasSubmitted && validationErrors.name && (
                  <div className="error-message show">{validationErrors.name}</div>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className={hasSubmitted && validationErrors.email ? 'error' : ''}
                  onChange={() => clearFieldError('email')}
                />
                {hasSubmitted && validationErrors.email && (
                  <div className="error-message show">{validationErrors.email}</div>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+91 (123) 456-7890"
                  className={hasSubmitted && validationErrors.phone ? 'error' : ''}
                  onChange={() => clearFieldError('phone')}
                />
                {hasSubmitted && validationErrors.phone && (
                  <div className="error-message show">{validationErrors.phone}</div>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your project or how we can help you..."
                  rows={5}
                  className={hasSubmitted && validationErrors.message ? 'error' : ''}
                  onChange={() => clearFieldError('message')}
                />
                {hasSubmitted && validationErrors.message && (
                  <div className="error-message show">{validationErrors.message}</div>
                )}
              </div>
              
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                <span className={`loading-spinner ${isSubmitting ? 'show' : ''}`}></span>
                {isSubmitting ? 'Sending Message...' : (
                  <>
                    <FaRocket style={{ marginRight: '0.5rem' }} />
                    Send Message
                  </>
                )}
              </button>
              
              <div className={`success-message ${status === 'success' ? 'show' : ''}`}>
                🎉 Thank you for reaching out! We&apos;ve received your message and will get back to you within 24 hours.
              </div>
              
              <div className={`error-message-form ${status === 'error' ? 'show' : ''}`}>
                ❌ Failed to send message. Please try again or contact us directly via email.
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="faq-section"
        >
          <h2>
            <FaQuestionCircle style={{ marginRight: '0.5rem' }} />
            Frequently Asked Questions
          </h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="faq-item"
              >
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;