import { motion } from 'framer-motion';
import { timeline } from '../data/experience';
import TimelineItem from './ui/TimelineItem';
import Section from './ui/Section';

export default function Experience() {
  return (
    <Section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">
          Experience & Education
        </h2>
        <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
          My professional journey from automotive expertise to web development
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {timeline.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
