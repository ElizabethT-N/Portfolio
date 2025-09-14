export const PERSONAL_INFO = {
  name: 'Elizabeth Nguyen',
  title: 'Front-End Developer',
  subtitle: 'JavaScript • React • Redux • HTML • CSS • Tailwind • Vite',
  email: import.meta.env.VITE_EMAIL || 'ElizabethTallentNguyen@gmail.com',
  github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/ElizabethT-N',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/elizabeth-nguyen-028644227/',
};

export const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'meolwqkl';

export const SKILLS = [
  {
    name: 'JavaScript (ES6+)',
    description: 'Proficient in modern JavaScript features including async/await, ES modules, and destructuring for clean, maintainable code.'
  },
  {
    name: 'React',
    description: 'Experience building component-based UIs with hooks, state management, and reusable functional components.'
  },
  {
    name: 'Redux Toolkit',
    description: 'Implement predictable global state management and async data fetching in React applications.'
  },
  {
    name: 'HTML',
    description: 'Write semantic, accessible markup following W3C standards and best practices.'
  },
  {
    name: 'CSS',
    description: 'Design responsive layouts using flexbox and grid with animations and accessibility in mind.'
  },
  {
    name: 'Tailwind CSS',
    description: 'Develop mobile-first, responsive UIs quickly with a utility-first CSS framework.'
  },
  {
    name: 'Vite',
    description: 'Use a modern, fast build tool and dev server optimized for React and Tailwind workflows.'
  },
  {
    name: 'Git & GitHub',
    description: 'Version control, branching strategies, and collaboration through pull requests and code reviews.'
  },
  {
    name: 'REST APIs',
    description: 'Integrate external services and handle data fetching, error handling, and JSON parsing.'
  },
  {
    name: 'Firebase',
    description: 'Use backend-as-a-service for authentication, real-time data, and deployment solutions.'
  },
  {
    name: 'Google Cloud',
    description: 'Leverage cloud hosting, deployment pipelines, and scalable infrastructure services.'
  }
];
