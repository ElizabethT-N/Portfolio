import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Card, { CardContent, CardHeader } from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';
import Modal from './ui/Modal';
import Section from './ui/Section';

// Import markdown files
import viteSetupMd from '../content/notes/vite-react-tailwind-setup.md?raw';
import stateVsPropsMd from '../content/notes/react-state-vs-props.md?raw';
import a11yFormsMd from '../content/notes/accessibility-forms-checklist.md?raw';

const parseMarkdown = (content) => {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) return { frontmatter: {}, content };
  
  const frontmatterLines = match[1].split('\n');
  const frontmatter = {};
  
  frontmatterLines.forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      let value = valueParts.join(':').trim();
      
      // Parse arrays
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => item.trim());
      }
      
      frontmatter[key.trim()] = value;
    }
  });
  
  return {
    frontmatter,
    content: match[2]
  };
};

const notes = [
  { ...parseMarkdown(viteSetupMd), id: 'vite-setup' },
  { ...parseMarkdown(stateVsPropsMd), id: 'state-vs-props' },
  { ...parseMarkdown(a11yFormsMd), id: 'a11y-forms' }
];

export default function Notes() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openNote = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  return (
    <Section id="notes" background="muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">
          Learning Notes
        </h2>
        <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
          Documenting my learning journey and sharing insights from web development
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note, index) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center text-sm text-surface-500 dark:text-surface-400">
                    <Calendar size={16} className="mr-2" />
                    {note.frontmatter.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100 mb-3 line-clamp-2">
                  {note.frontmatter.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 line-clamp-3">
                  {note.frontmatter.summary}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {Array.isArray(note.frontmatter.tags) && note.frontmatter.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => openNote(note)}
                    className="group w-full"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Note Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedNote?.frontmatter.title}
        className="max-w-4xl"
      >
        {selectedNote && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-surface-500 dark:text-surface-400 pb-4 border-b border-surface-200 dark:border-surface-700">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {selectedNote.frontmatter.date}
              </div>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(selectedNote.frontmatter.tags) && selectedNote.frontmatter.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="prose prose-surface dark:prose-invert max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {selectedNote.content}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  );
}
