import { motion } from 'framer-motion';
import { Car, Utensils, Globe, Music, Dumbbell, Briefcase } from 'lucide-react';
import Card, { CardContent } from './ui/Card';
import Section from './ui/Section';

const hobbies = [
  {
    id: 'automotive',
    icon: Car,
    title: 'Automotive Enthusiast',
    description: 'Former Ferrari Master Technician turned entrepreneur. I still enjoy working on exotic cars, exploring interior trim restoration, and keeping up with innovations in performance and design.'
  },
  {
    id: 'foodie',
    icon: Utensils,
    title: 'Foodie',
    description: 'I enjoy exploring different cuisines, from local hidden gems to new cultural flavors. Food is one of my favorite ways to connect with people and experiences.'
  },
  {
    id: 'travel',
    icon: Globe,
    title: 'Travel',
    description: 'Traveling gives me fresh perspectives and inspiration. Whether it’s a road trip or exploring new cities, I love experiencing new cultures and environments.'
  },
  {
    id: 'music',
    icon: Music,
    title: 'Music',
    description: 'A mix of instrumental focus music for coding sessions and upbeat playlists in the garage or gym. Music helps me concentrate, reset, and fuel creativity.'
  },
  {
    id: 'fitness',
    icon: Dumbbell,
    title: 'Fitness & Gym',
    description: 'Staying active through weight training, cardio, and step tracking. The discipline of fitness helps me stay sharp and focused in both coding and business.'
  },
  {
    id: 'entrepreneurship',
    icon: Briefcase,
    title: 'Entrepreneurship',
    description: 'Building and growing my luxury interior trim restoration business, Le Reserve Motorworks LLC. I enjoy combining craftsmanship, client relationships, and branding into something meaningful.'
  }
];

export default function Hobbies() {
  return (
    <Section id="hobbies" background="muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">
          Hobbies & Interests
        </h2>
        <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
          Beyond coding, here's what keeps me inspired and motivated
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={hobby.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 mr-4">
                    <hobby.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-surface-900 dark:text-surface-100">
                    {hobby.title}
                  </h3>
                </div>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                  {hobby.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
