import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { featuredProject } from '../data/projects';
import Card, { CardContent, CardHeader } from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';
import Modal from './ui/Modal';
import Section from './ui/Section';

export default function FeaturedProject() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section id="featured-project">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">
          Featured Project
        </h2>
        <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
          A showcase of modern web development skills and best practices
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-surface-900 dark:text-surface-100 mb-2">
                  {featuredProject.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsModalOpen(true)}
                  className="group"
                >
                  <Eye size={16} className="mr-2" />
                  Case Study
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <a
                    href={featuredProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Site
                  </a>
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-surface-600 dark:text-surface-400 leading-relaxed mb-6">
              {featuredProject.summary}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-surface-900 dark:text-surface-100 mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {featuredProject.techStack.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="flex-1"
              >
                View Case Study
              </Button>
              <Button
                variant="outline"
                asChild
                className="flex-1"
              >
                <a
                  href={featuredProject.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Visit Live Site
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Case Study Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={featuredProject.title}
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
              Project Overview
            </h3>
            <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
              {featuredProject.summary}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
              Key Responsibilities
            </h3>
            <ul className="space-y-2">
              {featuredProject.caseStudy.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-500 mr-2 mt-1">•</span>
                  <span className="text-surface-600 dark:text-surface-400">
                    {responsibility}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
              Project Highlights
            </h3>
            <ul className="space-y-2">
              {featuredProject.caseStudy.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-500 mr-2 mt-1">•</span>
                  <span className="text-surface-600 dark:text-surface-400">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {featuredProject.techStack.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              asChild
              className="flex-1"
            >
              <a
                href={featuredProject.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <ExternalLink size={20} className="mr-2" />
                Visit Live Site
              </a>
            </Button>
            {featuredProject.links.repo !== '#' && (
              <Button
                variant="outline"
                asChild
                className="flex-1"
              >
                <a
                  href={featuredProject.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <Github size={20} className="mr-2" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </Section>
  );
}
