import { addProject, getProjects } from '../services/projectService';

const sampleProjects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB featuring user authentication, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
    githubUrl: "https://github.com/adarshgella/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true,
    status: "completed"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, team collaboration features, and project tracking.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    githubUrl: "https://github.com/adarshgella/task-manager",
    liveUrl: "https://taskmanager-demo.netlify.app",
    featured: true,
    status: "completed"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website with animations, responsive design, and dynamic content management.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    technologies: ["React", "SCSS", "Framer Motion", "Firebase"],
    githubUrl: "https://github.com/adarshgella/portfolio",
    liveUrl: "https://adarshgella.dev",
    featured: false,
    status: "completed"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with data visualization and performance tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/adarshgella/social-dashboard",
    liveUrl: "https://social-dashboard-demo.herokuapp.com",
    featured: true,
    status: "completed"
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location tracking, forecasts, and weather alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React Native", "Weather API", "Geolocation", "Redux"],
    githubUrl: "https://github.com/adarshgella/weather-app",
    liveUrl: "https://play.google.com/store/apps/details?id=com.weatherapp",
    featured: false,
    status: "completed"
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with CMS integration, SEO optimization, and content management.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    technologies: ["Next.js", "Strapi", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/adarshgella/blog-platform",
    liveUrl: "https://blog-platform-demo.vercel.app",
    featured: false,
    status: "in-progress"
  }
];

export const addSampleProjects = async () => {
  try {
    console.log('🔄 Adding sample projects...');
    
    // First, get existing projects to check for duplicates
    console.log('📖 Checking for existing projects...');
    const existingProjects = await getProjects();
    const existingTitles = existingProjects.map(project => project.title.toLowerCase());
    
    let addedCount = 0;
    let skippedCount = 0;
    
    for (const project of sampleProjects) {
      // Check if project already exists
      if (existingTitles.includes(project.title.toLowerCase())) {
        console.log(`⏭️ Skipping "${project.title}" - already exists`);
        skippedCount++;
        continue;
      }
      
      // Add the project
      const projectId = await addProject(project);
      console.log(`✅ Added project: "${project.title}" with ID: ${projectId}`);
      addedCount++;
    }
    
    console.log(`🎉 Process completed!`);
    console.log(`📊 Summary: ${addedCount} projects added, ${skippedCount} projects skipped (already exist)`);
    
    return {
      added: addedCount,
      skipped: skippedCount,
      total: sampleProjects.length
    };
    
  } catch (error) {
    console.error('❌ Error adding sample projects:', error);
    throw error;
  }
};