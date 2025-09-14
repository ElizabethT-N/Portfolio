import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import FeaturedProject from './components/FeaturedProject';
import Hobbies from './components/Hobbies';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize theme on app load
    const savedTheme = localStorage.getItem('theme') || 'system';
    const root = window.document.documentElement;
    
    if (savedTheme === 'dark' || (savedTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-surface-900 text-surface-900 dark:text-surface-100">
      {/* Skip to content link for accessibility */}
      <a href="#hero" className="skip-to-content">
        Skip to content
      </a>
      
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <FeaturedProject />
        <Experience />
        <Hobbies />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
