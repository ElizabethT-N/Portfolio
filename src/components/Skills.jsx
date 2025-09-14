import { motion } from 'framer-motion';
import { SKILLS } from '../lib/constants';
import Badge from './ui/Badge';
import Section from './ui/Section';

export default function Skills() {
  return (
    <Section id="skills" background="muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">
          Skills & Technologies
        </h2>
        <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
          A comprehensive toolkit for building modern web applications
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <Badge 
              className="w-full justify-center py-3 cursor-help"
              title={skill.description}
            >
              {skill.name}
            </Badge>
            
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-surface-900 dark:bg-surface-100 text-surface-100 dark:text-surface-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 max-w-xs text-center">
              {skill.description}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-surface-900 dark:border-t-surface-100"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
