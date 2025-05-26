import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './css/About.scss';
import adarsh from '../assets/adarsh.png';
import shobhit from '../assets/shobhit.png';

const About = () => {
  const team = [
    {
      name: 'Adarsh',
      role: 'Full Stack Developer',
      description: 'Passionate about building innovative solutions and helping clients achieve their tech goals. Experienced in modern web technologies and best practices.',
      image: adarsh,
      skills: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB'],
      social: {
        linkedin: 'https://www.linkedin.com/in/g-adarsh-sonu/',
        github: 'https://github.com/gadarsh043?tab=repositories',
        instagram: 'https://www.instagram.com/g_adarsh_sonu/'
      }
    },
    {
      name: 'Shobhit',
      role: 'Marketing & Social Media Expert',
      description: 'Specialized in digital marketing strategies and social media management. Expert at building brand presence, creating engaging content, and driving online growth for businesses.',
      image: shobhit,
      skills: ['Digital Marketing', 'Social Media Strategy', 'Content Creation', 'SEO', 'Brand Management'],
      social: {
        linkedin: 'https://www.linkedin.com/in/shobhit-gupta-b9294975/',
        instagram: 'https://www.instagram.com/shobhit_gupta_007/'
      }
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="header"
        >
          <h1>About Us</h1>
          <p>We&apos;re a dynamic team combining technical expertise and marketing prowess to deliver comprehensive digital solutions for your business.</p>
        </motion.div>

        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="team-card"
            >
              <img
                className="profile-image"
                src={member.image}
                alt={member.name}
              />
              <div className="card-content">
                <div className="role">{member.role}</div>
                <h2>{member.name}</h2>
                <p className="description">{member.description}</p>
                
                <div className="skills">
                  {member.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="social-links">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  )}
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mission-section"
        >
          <h2>Our Mission</h2>
          <p>
            We strive to deliver exceptional technical solutions and marketing strategies that help businesses grow and succeed in the digital world. Our commitment to quality, innovation, and client satisfaction drives everything we do.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 