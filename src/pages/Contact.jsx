import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { emailjsConfig } from '../config/emailjs';
import './css/Contact.scss';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'fulltechaid@gmail.com',
      link: 'mailto:fulltechaid@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+91 (787) 432-8001',
      link: 'tel:+917874328001'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Bengaluru, Karnataka, India',
      link: '#'
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      form.current,
      emailjsConfig.publicKey
    )
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
      });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="header"
        >
          <h1>Get in Touch</h1>
          <p>
            Have a project in mind? Let&apos;s discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="contact-info"
          >
            <h2>Contact Information</h2>
            <div className="info-list">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="info-item"
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="icon-wrapper">
                    {info.icon}
                  </div>
                  <div className="content">
                    <h3>{info.title}</h3>
                    <p>{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="contact-form"
          >
            <h2>Send us a Message</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="+1 (123) 456-7890"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message"
                  rows={4}
                />
              </div>
              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="status-message success"
                >
                  🎉 Thank you for reaching out! We&apos;ve received your message and will get back to you within 24 hours.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="status-message error"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 