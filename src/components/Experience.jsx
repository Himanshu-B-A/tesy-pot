import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.4]);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Replace with your actual experience data
  const experiences = [
    {
      id: 1,
      title: 'Full-Stack Developer Intern',
      company: 'Tech Solutions Inc.',
      location: 'Bangalore, India',
      period: 'Jun 2023 - Aug 2023',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality features.',
      achievements: [
        'Built responsive UI components reducing load time by 40%',
        'Implemented RESTful APIs for data management',
        'Contributed to code reviews and improved code quality',
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      id: 2,
      title: 'Machine Learning Intern',
      company: 'AI Innovations Lab',
      location: 'Remote',
      period: 'Jan 2023 - May 2023',
      description: 'Worked on machine learning models for predictive analytics. Conducted research on deep learning algorithms and implemented solutions.',
      achievements: [
        'Developed ML models with 92% accuracy for customer churn prediction',
        'Processed and analyzed large datasets using Python',
        'Presented findings to stakeholders and technical teams',
      ],
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas'],
    },
    {
      id: 3,
      title: 'Web Development Volunteer',
      company: 'NGO Tech Initiative',
      location: 'Bangalore, India',
      period: 'Sep 2022 - Dec 2022',
      description: 'Volunteered to build and maintain websites for non-profit organizations. Focused on creating accessible and user-friendly interfaces.',
      achievements: [
        'Created responsive websites for 3 NGOs',
        'Improved website accessibility scores by 50%',
        'Trained team members on web development basics',
      ],
      tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-netflix-red/5 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">
            Work <span className="gradient-text-red">Experience</span>
          </h2>
          <p className="section-subtitle">My professional journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-netflix-red via-gray-700 to-transparent"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-netflix-red rounded-full border-4 border-black z-10">
                  <div className="absolute inset-0 bg-netflix-red rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    className="bg-netflix-gray/30 rounded-xl p-6 border border-gray-800 hover:border-netflix-red/50 transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(229, 9, 20, 0.2)' }}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        <div className="p-2 bg-netflix-red/20 rounded-lg">
                          <FiBriefcase className="text-netflix-red" size={20} />
                        </div>
                      </div>
                      <p className="text-xl text-netflix-red font-semibold mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <FiCalendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiMapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="text-netflix-red mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-black/50 rounded-full text-xs text-gray-300 border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Want to know more about my experience?</p>
          <motion.a
            href="/resume.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Full Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
