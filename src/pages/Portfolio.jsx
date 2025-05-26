import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaFolder } from 'react-icons/fa';
import { getProjects } from '../services/projectService';
// import { addSampleProjects } from '../utils/addSampleProjects';
// import { testFirebaseConnection } from '../utils/testFirebase';
import './css/Portfolio.scss';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [isAdding, setIsAdding] = useState(false);
  // const [isTesting, setIsTesting] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const projectsData = await getProjects();
      setProjects(projectsData);
    } catch (err) {
      setError('Failed to load projects');
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  // Uncomment this function when you need to add more sample projects
  // const handleAddSampleProjects = async () => {
  //   try {
  //     setIsAdding(true);
  //     const result = await addSampleProjects();
  //     await fetchProjects();
  //     
  //     if (result.added > 0) {
  //       alert(`✅ Success! Added ${result.added} new projects. ${result.skipped} projects were skipped (already exist).`);
  //     } else {
  //       alert(`ℹ️ All ${result.total} projects already exist in the database. No new projects were added.`);
  //     }
  //   } catch (error) {
  //     console.error('Error adding sample projects:', error);
  //     alert('Failed to add sample projects. Check console for details.');
  //   } finally {
  //     setIsAdding(false);
  //   }
  // };

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'completed';
      case 'in-progress':
        return 'in-progress';
      case 'planned':
        return 'planned';
      default:
        return 'completed';
    }
  };

  const getStatusText = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return 'Completed';
    }
  };

  if (loading) {
    return (
      <div className="portfolio">
        <div className="container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading our amazing projects...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="portfolio">
        <div className="container">
          <div className="error-state">
            <p className="error-message">{error}</p>
            <button 
              onClick={fetchProjects}
              className="cta-button"
              style={{ marginTop: '1rem' }}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="page-header"
        >
          <h1>Our <span className="highlight">Portfolio</span></h1>
          <p>
            Check out some of our recent projects and see how we've helped our clients achieve their goals 
            through innovative web development and digital marketing solutions.
          </p>
          
          {/* Uncomment this section when you need to add more projects */}
          {/* 
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={handleAddSampleProjects}
              disabled={isAdding}
              style={{
                backgroundColor: '#10b981',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '8px',
                cursor: isAdding ? 'not-allowed' : 'pointer',
                opacity: isAdding ? 0.7 : 1
              }}
            >
              {isAdding ? 'Adding Projects...' : 'Add Sample Projects'}
            </button>
          </div>
          */}
        </motion.div>

        {projects.length > 0 ? (
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`project-card ${project.featured ? 'featured' : ''}`}
              >
                <div className="project-image">
                  <img
                    src={project.image || 'https://via.placeholder.com/600x400?text=Project+Image'}
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400?text=Project+Image';
                    }}
                  />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="view-project"
                        >
                          <FaExternalLinkAlt style={{ marginRight: '0.5rem' }} />
                          View Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className={`project-status ${getStatusClass(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>
                  
                  <p>{project.description}</p>
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="technologies">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link primary"
                      >
                        <FaExternalLinkAlt style={{ marginRight: '0.5rem' }} />
                        Live Site
                      </a>
                    )}
                    {!project.liveUrl && (
                      <span className="project-link secondary" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="empty-state"
          >
            <div className="empty-icon">
              <FaFolder />
            </div>
            <h3>No Projects Yet</h3>
            <p>
              We're currently working on some amazing projects that will be showcased here soon. 
              Stay tuned for updates!
            </p>
            <a href="/contact" className="cta-button">
              Start Your Project
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Portfolio; 