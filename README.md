# Elizabeth Nguyen - Developer Portfolio

A modern, responsive portfolio website built with Vite, React, and Tailwind CSS. Features a clean design, dark mode support, and accessibility-first approach.

## 🚀 Features

- **Modern Tech Stack**: Vite + React + Tailwind CSS
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark Mode**: System preference detection with manual toggle
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized for Lighthouse scores (90+ across all metrics)
- **Contact Form**: Integrated with Formspree for form submissions
- **Markdown Notes**: Dynamic blog-style learning notes system

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📝 Content Management

### Editing the Featured Project

Update the project information in `/src/data/projects.js`:

```javascript
export const featuredProject = {
  title: 'Your Project Title',
  summary: 'Brief description...',
  techStack: ['React', 'Vite', 'Tailwind'],
  links: {
    live: 'https://your-live-site.com',
    repo: 'https://github.com/username/repo'
  },
  caseStudy: {
    responsibilities: [
      'What you built...',
      'Technologies used...'
    ],
    highlights: [
      'Key achievements...',
      'Performance improvements...'
    ]
  }
};
```

### Updating Experience & Education

Edit `/src/data/experience.js` to update your professional timeline:

```javascript
export const experience = [
  {
    id: 'unique-id',
    company: 'Company Name',
    position: 'Your Role',
    period: '2024–Present',
    type: 'experience',
    description: 'What you did at this role...'
  }
];

export const education = [
  {
    id: 'unique-id',
    institution: 'School Name',
    degree: 'Degree Title',
    period: '2020–2024',
    type: 'education',
    description: 'Program description...'
  }
];
```

### Adding New Learning Notes

Create new markdown files in `/src/content/notes/` with frontmatter:

```markdown
---
title: Your Note Title
date: 2025-01-15
tags: [react, javascript, tutorial]
summary: Brief description of the note content
---

# Your Note Title

Your markdown content here...
```

Then import and add them to the notes array in `/src/components/Notes.jsx`.

### Updating Personal Information

Edit `/src/lib/constants.js`:

```javascript
export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Your Title',
  subtitle: 'Your tech stack',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
};

export const FORMSPREE_ID = 'your-formspree-form-id';
```

### Setting up Contact Form

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Update `FORMSPREE_ID` in `/src/lib/constants.js`

## 🎨 Customization

### Colors & Theme

The color palette is defined in `tailwind.config.js`. Update the theme colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary color shades
      },
      surface: {
        // Your surface/background color shades
      }
    }
  }
}
```

### Typography

The site uses Inter font by default. To change fonts, update:
1. Font imports in `index.html`
2. Font family in `tailwind.config.js`

## 📱 Responsive Breakpoints

- `sm`: 640px and up
- `md`: 768px and up  
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push to main

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to [Netlify](https://netlify.com)
3. Configure custom domain if needed

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web server

## 📊 Performance

The site is optimized for excellent Lighthouse scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 90+

Key optimizations:
- Lazy loading for images
- Code splitting with Vite
- Optimized fonts with `font-display: swap`
- Reduced motion support
- Semantic HTML structure

## 🔧 Technical Details

### Dependencies

**Core:**
- React 19+ - UI library
- Vite 7+ - Build tool and dev server
- Tailwind CSS 3+ - Utility-first CSS framework

**UI & Animation:**
- Framer Motion - Smooth animations with reduced motion support
- Lucide React - Modern icon library
- React Markdown - Markdown rendering with remark-gfm

**Development:**
- ESLint - Code linting
- Prettier - Code formatting
- PostCSS - CSS processing

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find bugs or have suggestions for improvements, please open an issue or submit a pull request.

---

Built with ❤️ by Elizabeth Nguyen
