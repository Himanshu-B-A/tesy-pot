import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const { scrollY } = useScroll();
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  // Parallax effects
  const y = useTransform(scrollY, [0, windowHeight], [0, 200]);
  const opacity = useTransform(scrollY, [0, windowHeight * 0.5], [1, 0]);
  const scale = useTransform(scrollY, [0, windowHeight], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-netflix-black to-black">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(229, 9, 20, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(229, 9, 20, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(229, 9, 20, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
      >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          variants={itemVariants}
          className="text-netflix-red text-lg md:text-xl font-semibold mb-4 tracking-wide"
        >
          WELCOME TO MY PORTFOLIO
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-display mb-6"
        >
          <span className="gradient-text">Himanshu B A</span>
        </motion.h1>

        {/* Role with typing effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-2">
            Information Science Engineer
          </h2>
          <p className="text-xl md:text-2xl text-netflix-lightGray">
            Passionate about <span className="text-netflix-red font-semibold">AI/ML</span> & 
            <span className="text-netflix-red font-semibold"> Full-Stack Development</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Crafting intelligent solutions and seamless digital experiences.
          From machine learning models to responsive web applications,
          I bring ideas to life with code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            className="btn-primary w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-secondary w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            className="btn-secondary w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center mb-12"
        >
          {[
            { icon: FiGithub, href: 'https://github.com/himanshu-b-a', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com/in/himanshu-b-a', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-netflix-red transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={28} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center text-gray-500 hover:text-white transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FiArrowDown size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
