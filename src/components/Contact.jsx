import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., EmailJS, Formspree, etc.)
    setFormStatus('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormStatus(''), 5000);
  };

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

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Bangalore, India',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: 'GitHub',
      link: 'https://github.com/himanshu-b-a',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/himanshu-b-a',
    },
    {
      icon: FiTwitter,
      label: 'Twitter',
      link: 'https://twitter.com/himanshu-b-a',
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-netflix-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-netflix-red/5 rounded-full blur-3xl"></div>

      <motion.div
        ref={ref}
        style={{ y, scale }}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title">
            Get In <span className="gradient-text-red">Touch</span>
          </h2>
          <p className="section-subtitle">Let's build something amazing together</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's talk about everything!
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out.
                I'm always open to discussing new opportunities, creative ideas, or
                collaborations.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-netflix-gray/30 rounded-xl border border-gray-800 hover:border-netflix-red/50 transition-all duration-300"
                >
                  <div className="p-3 bg-netflix-red/20 rounded-lg">
                    <info.icon className="text-netflix-red" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white font-medium hover:text-netflix-red transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-netflix-gray/30 rounded-lg border border-gray-800 hover:border-netflix-red hover:bg-netflix-red/10 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-gray-400 hover:text-netflix-red transition-colors" size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div variants={itemVariants}>
            <form
              onSubmit={handleSubmit}
              className="bg-netflix-gray/30 rounded-2xl p-8 border border-gray-800"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-netflix-red transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-netflix-red transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-netflix-red transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-netflix-red transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend size={20} />
                  Send Message
                </motion.button>

                {/* Form Status */}
                {formStatus && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-500 font-medium"
                  >
                    {formStatus}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
