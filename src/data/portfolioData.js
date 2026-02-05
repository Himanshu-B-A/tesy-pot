// Portfolio Data Configuration
// Update this file with your personal information

export const personalInfo = {
  name: 'Himanshu B A',
  role: 'Information Science Engineer',
  tagline: 'Passionate about AI/ML & Full-Stack Development',
  bio: `Crafting intelligent solutions and seamless digital experiences.
From machine learning models to responsive web applications,
I bring ideas to life with code.`,
  email: 'your.email@example.com',
  phone: '+91 XXXXX XXXXX',
  location: 'Bangalore, India',
  resumeUrl: '/resume.pdf',
};

export const socialLinks = {
  github: 'https://github.com/himanshu-b-a',
  linkedin: 'https://linkedin.com/in/himanshu-b-a',
  twitter: 'https://twitter.com/himanshu-b-a',
};

export const about = {
  description: [
    `I'm a passionate developer specializing in Artificial Intelligence, Machine Learning, and Full-Stack Development. My journey in technology is driven by curiosity and a desire to build impactful solutions.`,
    `With a strong foundation in modern web technologies and data science, I create seamless user experiences while leveraging cutting-edge AI/ML algorithms to solve complex problems. I believe in writing clean, maintainable code and continuously learning new technologies.`,
    `When I'm not coding, you'll find me exploring new frameworks, contributing to open-source projects, or sharing knowledge with the developer community.`,
  ],
  stats: [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Happy Clients', value: '10+' },
  ],
};

export const skills = {
  categories: [
    {
      category: 'Frontend Development',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs'],
    },
    {
      category: 'AI/ML & Data Science',
      skills: ['TensorFlow', 'Python', 'Machine Learning', 'Data Analysis'],
    },
    {
      category: 'Database & Cloud',
      skills: ['MongoDB', 'PostgreSQL', 'AWS', 'Cloud Services'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'GitHub', 'CI/CD'],
    },
  ],
  additional: [
    'Problem Solving',
    'Agile Methodology',
    'REST APIs',
    'Responsive Design',
    'Data Structures',
    'Algorithms',
    'System Design',
    'Testing',
  ],
};

// Add your actual projects here
export const projects = [
  {
    id: 1,
    title: 'AI-Powered Chatbot',
    category: 'Machine Learning',
    description: 'An intelligent chatbot using natural language processing to provide contextual responses.',
    fullDescription: 'This project implements a sophisticated AI chatbot that uses transformer-based models for natural language understanding. The system can handle complex queries, maintain conversation context, and provide accurate, helpful responses.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    tech: ['Python', 'TensorFlow', 'NLP', 'Docker', 'FastAPI'],
    github: 'https://github.com/himanshu-b-a/project1',
    live: 'https://project1.demo.com',
    featured: true,
  },
  // Add more projects...
];

export const experience = [
  {
    id: 1,
    title: 'Full-Stack Developer Intern',
    company: 'Tech Solutions Inc.',
    location: 'Bangalore, India',
    period: 'Jun 2023 - Aug 2023',
    description: 'Developed and maintained web applications using React and Node.js.',
    achievements: [
      'Built responsive UI components reducing load time by 40%',
      'Implemented RESTful APIs for data management',
      'Contributed to code reviews and improved code quality',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  // Add more experience...
];

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Engineering',
    field: 'Information Science and Engineering',
    institution: 'Your University Name',
    location: 'Bangalore, India',
    period: '2020 - 2024',
    grade: 'CGPA: 8.5/10',
    highlights: [
      'Relevant Coursework: Data Structures, Algorithms, Machine Learning, Database Systems',
      'Final Year Project: AI-based recommendation system',
      'Active member of coding club and tech community',
    ],
  },
  // Add more education...
];

export const certifications = [
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
  // Add more certifications...
];
