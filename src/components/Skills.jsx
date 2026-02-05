import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiLayout, 
  FiGitBranch,
  FiCpu,
  FiTool,
  FiCloud
} from 'react-icons/fi';
import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiTensorflow,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiAmazonaws,
  SiTailwindcss,
  SiExpress
} from 'react-icons/si';

const Skills = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax and scale effects
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: FiLayout,
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML/CSS', icon: FiCode, color: '#E34F26' },
      ],
    },
    {
      category: 'Backend Development',
      icon: FiServer,
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'APIs', icon: FiServer, color: '#FF6C37' },
      ],
    },
    {
      category: 'AI/ML & Data Science',
      icon: FiCpu,
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'Machine Learning', icon: FiCpu, color: '#E50914' },
        { name: 'Data Analysis', icon: FiDatabase, color: '#4A90E2' },
      ],
    },
    {
      category: 'Database & Cloud',
      icon: FiDatabase,
      skills: [
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
        { name: 'Cloud Services', icon: FiCloud, color: '#0078D4' },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: FiTool,
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'GitHub', icon: FiGitBranch, color: '#181717' },
        { name: 'CI/CD', icon: FiTool, color: '#2088FF' },
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-netflix-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-netflix-red/10 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div style={{ scale, opacity, rotateX, perspective: 1000 }}>
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">
            Technical <span className="gradient-text-red">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-netflix-gray/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-netflix-red/50 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -10, 
                boxShadow: '0 20px 40px rgba(229, 9, 20, 0.2)' 
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-netflix-red/20 rounded-lg">
                  <category.icon className="text-netflix-red" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                  >
                    <div className="p-2 bg-black/50 rounded-lg group-hover:bg-black transition-colors">
                      <skill.icon 
                        className="transition-colors" 
                        size={20} 
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Other Skills & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Problem Solving',
              'Agile Methodology',
              'REST APIs',
              'Responsive Design',
              'Data Structures',
              'Algorithms',
              'System Design',
              'Testing',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-netflix-gray/50 rounded-full text-gray-300 border border-gray-700 hover:border-netflix-red hover:text-white transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(229, 9, 20, 0.1)' }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
