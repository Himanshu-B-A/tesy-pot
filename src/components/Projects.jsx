import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Replace this data with your actual projects
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Chatbot',
      category: 'Machine Learning',
      description: 'An intelligent chatbot using natural language processing to provide contextual responses. Built with Python and TensorFlow.',
      fullDescription: 'This project implements a sophisticated AI chatbot that uses transformer-based models for natural language understanding. The system can handle complex queries, maintain conversation context, and provide accurate, helpful responses. Deployed using Docker and integrated with multiple platforms.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
      tech: ['Python', 'TensorFlow', 'NLP', 'Docker', 'FastAPI'],
      github: 'https://github.com/himanshu-b-a/project1',
      live: 'https://project1.demo.com',
      featured: true,
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'Full-Stack',
      description: 'A complete e-commerce solution with admin dashboard, payment integration, and real-time inventory management.',
      fullDescription: 'Full-featured e-commerce platform with user authentication, product catalog, shopping cart, order management, and payment processing. Admin panel for inventory management, sales analytics, and customer management. Built with modern web technologies for optimal performance.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/himanshu-b-a/project2',
      live: 'https://project2.demo.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Prediction ML Model',
      category: 'Data Science',
      description: 'Machine learning model for weather prediction using historical data and multiple regression algorithms.',
      fullDescription: 'Advanced weather prediction system using ensemble machine learning models. Analyzes historical weather patterns, atmospheric conditions, and multiple variables to provide accurate forecasts. Features data visualization dashboards and API for integration.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Flask'],
      github: 'https://github.com/himanshu-b-a/project3',
      live: null,
      featured: true,
    },
    {
      id: 4,
      title: 'Task Management App',
      category: 'Web Development',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      fullDescription: 'Real-time task management application enabling teams to collaborate efficiently. Features include task assignment, progress tracking, deadline management, file attachments, and real-time notifications. Built with WebSocket for live updates.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'WebSocket'],
      github: 'https://github.com/himanshu-b-a/project4',
      live: 'https://project4.demo.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Analytics Dashboard',
      category: 'Data Visualization',
      description: 'Interactive dashboard for tracking website analytics with beautiful charts and real-time data.',
      fullDescription: 'Comprehensive analytics dashboard providing insights into website performance, user behavior, and key metrics. Features interactive charts, real-time data updates, customizable widgets, and export capabilities. Optimized for performance with large datasets.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/himanshu-b-a/project5',
      live: 'https://project5.demo.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Image Recognition System',
      category: 'Computer Vision',
      description: 'Deep learning model for image classification and object detection using CNN architecture.',
      fullDescription: 'Advanced image recognition system using convolutional neural networks for multi-class classification and object detection. Achieves high accuracy on custom datasets and provides real-time inference. Includes model training pipeline and deployment scripts.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop',
      tech: ['Python', 'PyTorch', 'OpenCV', 'NumPy', 'Docker'],
      github: 'https://github.com/himanshu-b-a/project6',
      live: null,
      featured: false,
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 md:py-32 bg-gradient-to-b from-black via-netflix-darkGray to-black relative overflow-hidden">
      <motion.div
        ref={ref}
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="gradient-text-red">Projects</span>
          </h2>
          <p className="section-subtitle">My latest work and creations</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-netflix-gray/30 rounded-xl overflow-hidden border border-gray-800 hover:border-netflix-red/50 transition-all duration-300 cursor-pointer"
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-netflix-red rounded-full text-xs font-semibold">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-netflix-red transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-black/50 rounded text-xs text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-black/50 rounded text-xs text-netflix-red">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub size={16} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-netflix-red transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-netflix-red/0 group-hover:bg-netflix-red/5 transition-colors pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-netflix-darkGray rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 md:h-96">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-netflix-darkGray via-netflix-darkGray/50 to-transparent"></div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black transition-colors"
                >
                  <FiX size={24} />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-netflix-red rounded-full text-xs font-semibold mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedProject.fullDescription}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-black/50 rounded-lg text-sm text-gray-300 border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center gap-2"
                    >
                      <FiGithub size={20} />
                      View Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      <FiExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
