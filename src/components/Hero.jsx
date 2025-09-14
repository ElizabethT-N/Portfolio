import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ArrowDown, User } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/constants';
import Button from './ui/Button';

export default function Hero() {
  const scrollToProject = () => {
    document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
    { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-surface-100 dark:from-surface-900 dark:to-surface-950 pt-16">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 flex justify-center items-center"
          >
            <div className="relative w-40 h-40 md:w-60 md:h-60">
              <div className="w-full h-full rounded-full ring-2 ring-primary-400 shadow-xl">
                <div className="w-full h-full rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt={`${PERSONAL_INFO.name} - Profile Photo`}
                    className="w-full h-full rounded-full object-cover object-[50%_22%]"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center text-primary-600 dark:text-primary-400" style={{ display: 'none' }}>
                    <User size={48} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-surface-900 dark:text-surface-100 mb-4"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-primary-600 dark:text-primary-400 mb-6"
          >
            {PERSONAL_INFO.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-surface-600 dark:text-surface-400 mb-8 max-w-2xl mx-auto"
          >
            {PERSONAL_INFO.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button onClick={scrollToProject} size="lg" className="group">
              View Project
              <ArrowDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" download className="inline-flex items-center">
                <Download size={20} className="mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-surface-800 shadow-md hover:shadow-lg transition-shadow text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-surface-400 dark:text-surface-600"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
