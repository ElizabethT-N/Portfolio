import { motion } from 'framer-motion';

export default function TimelineItem({ item, index }) {
  const isExperience = item.type === 'experience';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex items-start group"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center mr-6">
        <div className={`
          w-4 h-4 rounded-full border-2 
          ${isExperience 
            ? 'bg-primary-500 border-primary-500' 
            : 'bg-surface-500 border-surface-500'
          }
          group-hover:scale-110 transition-transform
        `} />
        <div className="w-0.5 h-full bg-surface-200 dark:bg-surface-700 mt-2" />
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="bg-white dark:bg-surface-800 rounded-lg p-6 shadow-sm border border-surface-200 dark:border-surface-700 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100">
              {isExperience ? item.position : item.degree}
            </h3>
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 mt-1 sm:mt-0">
              {item.period}
            </span>
          </div>
          <h4 className="text-base font-medium text-surface-700 dark:text-surface-300 mb-3">
            {isExperience ? item.company : item.institution}
          </h4>
          <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
