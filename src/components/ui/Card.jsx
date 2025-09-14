import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -2 } : {}}
      className={`
        bg-white dark:bg-surface-800 rounded-lg shadow-sm border border-surface-200 dark:border-surface-700
        transition-shadow hover:shadow-md
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 border-b border-surface-200 dark:border-surface-700 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`px-6 py-4 border-t border-surface-200 dark:border-surface-700 ${className}`}>
      {children}
    </div>
  );
}
