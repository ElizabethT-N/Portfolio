import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../lib/constants';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: PERSONAL_INFO.github, label: 'GitHub' },
    { icon: Linkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-surface-900 via-surface-900 to-surface-800 dark:from-surface-950 dark:via-surface-950 dark:to-surface-900 text-surface-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-surface-100 mb-3">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-surface-300 leading-relaxed max-w-2xl mx-auto">
              Front-End Developer & Entrepreneur building digital experiences with precision and creativity.
            </p>
            <div className="flex items-center justify-center space-x-1 text-surface-400 text-sm">
              <span>📧</span>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-primary-400 transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </motion.div>

          {/* Social Links & Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center space-x-4 mt-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-surface-800/50 hover:bg-surface-700/50 border border-surface-700/50 hover:border-primary-500/50 text-surface-400 hover:text-primary-400 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
            
            <ThemeToggle />
            <motion.button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-primary-600/20 hover:bg-primary-600/30 border border-primary-500/30 hover:border-primary-400/50 text-primary-400 hover:text-primary-300 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-surface-700/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-surface-400 text-sm flex items-center space-x-2">
              <span> {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
            </p>
            <p className="text-surface-500 text-sm flex items-center space-x-1">
              <span>Built with</span>
              <Heart size={14} className="text-red-400 fill-current" />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
