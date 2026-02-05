import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
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

  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Happy Clients', value: '10+' },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 bg-gradient-to-b from-black via-netflix-darkGray to-black">
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
            About <span className="gradient-text-red">Me</span>
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image Placeholder */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <motion.div
                className="aspect-square rounded-2xl bg-gradient-to-br from-netflix-red/20 to-transparent border border-netflix-red/30 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-netflix-red/50">
                  HBA
                </div>
              </motion.div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-netflix-red/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>

          {/* Right: About Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Information Science Engineering Student
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate developer specializing in <span className="text-netflix-red font-semibold">Artificial Intelligence</span>, 
              <span className="text-netflix-red font-semibold"> Machine Learning</span>, and 
              <span className="text-netflix-red font-semibold"> Full-Stack Development</span>. 
              My journey in technology is driven by curiosity and a desire to build impactful solutions.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in modern web technologies and data science, 
              I create seamless user experiences while leveraging cutting-edge AI/ML algorithms 
              to solve complex problems. I believe in writing clean, maintainable code and 
              continuously learning new technologies.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new frameworks, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>

            {/* Replace the email with your actual email */}
            <motion.a
              href="mailto:your.email@example.com"
              className="inline-block btn-primary mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-6 rounded-xl bg-netflix-gray/50 border border-gray-700 hover:border-netflix-red/50 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(229, 9, 20, 0.2)' }}
            >
              <h4 className="text-4xl md:text-5xl font-bold gradient-text-red mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
