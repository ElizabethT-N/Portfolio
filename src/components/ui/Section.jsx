import { motion } from 'framer-motion';

export default function Section({ 
  id, 
  children, 
  className = '', 
  background = 'default',
  ...props 
}) {
  const backgrounds = {
    default: 'bg-white dark:bg-surface-900',
    muted: 'bg-surface-50 dark:bg-surface-950',
    primary: 'bg-primary-50 dark:bg-primary-950'
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`py-16 lg:py-24 ${backgrounds[background]} ${className}`}
      {...props}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </motion.section>
  );
}
