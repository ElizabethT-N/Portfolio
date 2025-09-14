import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FORMSPREE_ID } from '../lib/constants';
import Button from './ui/Button';
import Card, { CardContent, CardHeader } from './ui/Card';
import Section from './ui/Section';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Section id="contact" background="muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-surface-900 dark:text-surface-100 mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. Let's connect!
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold text-surface-900 dark:text-surface-100">
              Send me a message
            </h3>
          </CardHeader>
          <CardContent>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                role="alert"
                aria-live="polite"
              >
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span className="text-green-700 dark:text-green-300">
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                role="alert"
                aria-live="polite"
              >
                <div className="flex items-center">
                  <AlertCircle className="text-red-500 mr-2" size={20} />
                  <span className="text-red-700 dark:text-red-300">
                    Sorry, there was an error sending your message. Please try again.
                  </span>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2"
                  >
                    Name <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors
                      ${errors.name 
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                        : 'border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800'
                      }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2"
                  >
                    Email <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors
                      ${errors.email 
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                        : 'border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800'
                      }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2"
                >
                  Subject <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors
                    ${errors.subject 
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                      : 'border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800'
                    }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2"
                >
                  Message <span className="text-red-500" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical
                    ${errors.message 
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
                      : 'border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-800'
                    }`}
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full"
                aria-describedby={status === 'loading' ? 'loading-message' : undefined}
              >
                {status === 'loading' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="mr-2"
                    >
                      <Send size={20} />
                    </motion.div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              {status === 'loading' && (
                <div id="loading-message" aria-live="polite" className="sr-only">
                  Please wait while we send your message
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
