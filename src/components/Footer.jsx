import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, link: 'https://github.com/himanshu-b-a', label: 'GitHub' },
    { icon: FiLinkedin, link: 'https://linkedin.com/in/himanshu-b-a', label: 'LinkedIn' },
    { icon: FiTwitter, link: 'https://twitter.com/himanshu-b-a', label: 'Twitter' },
    { icon: FiMail, link: 'mailto:your.email@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Brand */}
          <div>
            <motion.h3
              className="text-2xl font-bold font-display mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text-red">Himanshu</span>
              <span className="text-white ml-2">B A</span>
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Information Science Engineer passionate about building innovative solutions
              with AI/ML and full-stack technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-netflix-red transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Newsletter/Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Stay Connected</h4>
            <p className="text-gray-400 mb-4">
              Interested in collaborating? Let's connect and create something amazing!
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-netflix-red text-white rounded-md font-semibold hover:bg-red-700 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Himanshu B A. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Crafted with <FiHeart className="text-netflix-red" size={14} /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
