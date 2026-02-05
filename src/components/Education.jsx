import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBook, FiCalendar } from 'react-icons/fi';

const Education = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Replace with your actual education data
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Engineering',
      field: 'Information Science and Engineering',
      institution: 'Your University Name',
      location: 'Bangalore, India',
      period: '2020 - 2024',
      grade: 'CGPA: 8.5/10',
      highlights: [
        'Relevant Coursework: Data Structures, Algorithms, Machine Learning, Database Systems, Web Development',
        'Final Year Project: AI-based recommendation system',
        'Active member of coding club and tech community',
      ],
    },
    {
      id: 2,
      degree: 'Pre-University Course (PUC)',
      field: 'Science (PCMC)',
      institution: 'Your College Name',
      location: 'Your City, India',
      period: '2018 - 2020',
      grade: 'Percentage: 90%',
      highlights: [
        'Focused on Physics, Chemistry, Mathematics, and Computer Science',
        'Participated in various science exhibitions and coding competitions',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Machine Learning Specialization',
      issuer: 'Coursera (Stanford University)',
      year: '2023',
    },
    {
      name: 'Full-Stack Web Development',
      issuer: 'Udemy',
      year: '2023',
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2022',
    },
    {
      name: 'Python for Data Science',
      issuer: 'IBM',
      year: '2022',
    },
  ];

  return (
    <section ref={sectionRef} id="education" className="py-20 md:py-32 bg-gradient-to-b from-black via-netflix-darkGray to-black">
      <motion.div
        ref={ref}
        style={{ scale, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">
            Education & <span className="gradient-text-red">Certifications</span>
          </h2>
          <p className="section-subtitle">My academic background</p>
        </motion.div>

        {/* Education Cards */}
        <motion.div variants={containerVariants} className="space-y-6 lg:space-y-8 mb-16 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="bg-netflix-gray/30 rounded-xl p-6 md:p-8 border border-gray-800 hover:border-netflix-red/50 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(229, 9, 20, 0.2)' }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                {/* Left: Degree Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 bg-netflix-red/20 rounded-lg mt-1">
                      <FiBook className="text-netflix-red" size={20} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-netflix-red font-semibold">
                        {edu.field}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={14} />
                      {edu.period}
                    </span>
                    <span>📍 {edu.location}</span>
                  </div>
                </div>

                {/* Right: Grade */}
                <div className="md:text-right">
                  <div className="inline-block px-4 py-2 bg-netflix-red/20 rounded-lg border border-netflix-red/30">
                    <p className="text-netflix-red font-bold text-lg">{edu.grade}</p>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-netflix-red mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div variants={itemVariants}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              Certifications
            </h3>
            <p className="text-gray-400">Professional courses and achievements</p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-5xl mx-auto"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-netflix-gray/30 rounded-xl p-6 border border-gray-800 hover:border-netflix-red/50 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(229, 9, 20, 0.2)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-netflix-red/20 rounded-lg">
                    <FiAward className="text-netflix-red" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-netflix-red text-sm font-semibold">{cert.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
