import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
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

  if (loading) {
    return (
      <div className="portfolio-page">
        <div className="container">
          <div className="loading">Loading projects...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="portfolio-page">
        <div className="container">
          <div className="error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="header"
        >
          <h1>Our Portfolio</h1>
          <p>
            Check out some of our recent projects and see how we&apos;ve helped our clients achieve their goals.
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

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="image-container">
                <img
                  src={project.image || 'https://via.placeholder.com/600x400'}
                  alt={project.title}
                />
                <div className="overlay">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <div className="content">
                <h3>{project.title}</h3>
                <p className="description">{project.description}</p>
                <div className="tags">
                  {project.technologies && project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="no-projects">
            <p>No projects found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio; 