import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, Zap, FolderOpen, Heart, Briefcase, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'Skills', href: '#skills', icon: Zap },
  { name: 'Project', href: '#featured-project', icon: FolderOpen },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Hobbies', href: '#hobbies', icon: Heart },
  { name: 'Contact', href: '#contact', icon: Mail }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-surface-900/80 backdrop-blur-md border-b border-surface-200 dark:border-surface-700"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="text-xl font-bold text-surface-900 dark:text-surface-100"
            whileHover={{ scale: 1.05 }}
          >
            EN
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 hover:bg-surface-100 dark:hover:bg-surface-800 ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-surface-600 dark:text-surface-400'
                }`}
                whileHover={{ y: -2 }}
                aria-label={item.name}
              >
                <item.icon size={18} />
                <span className="hidden lg:block">{item.name}</span>
              </motion.a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                    : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800'
                }`}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
