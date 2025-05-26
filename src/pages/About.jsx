import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaEnvelope,
  FaLightbulb,
  FaHandshake,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaHeart
} from 'react-icons/fa';
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
        instagram: 'https://www.instagram.com/g_adarsh_sonu/',
        email: 'mailto:fulltechaid+adarsh@gmail.com'
      }
    },
    {
      name: 'Shobhit',
      role: 'Business Development & Marketing Specialist',
      description: 'Expert in driving business growth through strategic marketing and development initiatives. Skilled in crafting impactful marketing campaigns, fostering partnerships, and expanding brand reach to achieve business objectives.',
      image: shobhit,
      skills: ['Business Development', 'Strategic Marketing', 'Partnership Building', 'Market Research', 'Brand Strategy'],
      social: {
        linkedin: 'https://www.linkedin.com/in/shobhit-gupta-b9294975/',
        instagram: 'https://www.instagram.com/shobhit_310/',
        email: 'mailto:fulltechaid+shobhit@gmail.com'
      }
    }
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex problems.'
    },
    {
      icon: <FaHandshake />,
      title: 'Trust',
      description: 'Building long-term relationships through transparency, reliability, and honest communication.'
    },
    {
      icon: <FaRocket />,
      title: 'Excellence',
      description: 'Delivering high-quality work that exceeds expectations and drives real results.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security',
      description: 'Prioritizing data protection and implementing robust security measures in all projects.'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'Working closely with clients as partners to achieve shared goals and success.'
    },
    {
      icon: <FaHeart />,
      title: 'Passion',
      description: 'Bringing enthusiasm and dedication to every project, no matter the size or complexity.'
    }
  ];

  return (
    <div className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="page-header"
        >
          <h1>About <span className="highlight">Us</span></h1>
          <p>
            We&apos;re a dynamic team combining technical expertise and marketing prowess to deliver 
            comprehensive digital solutions for your business growth and success.
          </p>
        </motion.div>

        <div className="team-section">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="team-member"
              >
                <div className="member-avatar">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.textContent = member.name.charAt(0);
                      }}
                    />
                  ) : (
                    member.name.charAt(0)
                  )}
                </div>
                
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <div className="role">{member.role}</div>
                  <p className="bio">{member.description}</p>
                  
                  <div className="skills">
                    <div className="skills-title">Expertise</div>
                    <div className="skills-list">
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="social-links">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link linkedin"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <FaLinkedin />
                    </a>
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link github"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <FaGithub />
                      </a>
                    )}
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link instagram"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={member.social.email}
                      className="social-link email"
                      aria-label={`Email ${member.name}`}
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="values-section"
        >
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="value-item"
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="about-cta"
        >
          <h2>Ready to Work Together?</h2>
          <p>
            Let&apos;s discuss your project and see how our combined expertise in development 
            and marketing can help your business reach new heights.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">
              Start Your Project
            </Link>
            <Link to="/services" className="btn btn-secondary">
              View Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 