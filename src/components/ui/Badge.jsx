import { motion } from 'framer-motion';

export default function Badge({ children, variant = 'default', className = '', ...props }) {
  const variants = {
    default: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
    secondary: 'bg-surface-100 text-surface-800 dark:bg-surface-800 dark:text-surface-200',
    muted: 'bg-muted-100 text-muted-800 dark:bg-muted-800 dark:text-muted-200'
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.span>
  );
}
