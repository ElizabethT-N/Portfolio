---
title: How I set up Vite + React + Tailwind from scratch
date: 2025-09-01
tags: [vite, react, tailwind]
summary: Steps I use to scaffold a fast React project with Tailwind.
---

# How I set up Vite + React + Tailwind from scratch

Setting up a modern React development environment with Vite and Tailwind CSS has become my go-to approach for new projects. Here's my step-by-step process:

## 1. Create the Vite Project

```bash
npm create vite@latest my-project -- --template react
cd my-project
npm install
```

## 2. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## 3. Configure Tailwind

Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 4. Add Tailwind Directives

Replace the contents of `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 5. Start Development

```bash
npm run dev
```

## Why This Stack?

- **Vite**: Lightning-fast HMR and build times
- **React**: Component-based architecture I'm comfortable with
- **Tailwind**: Utility-first CSS that speeds up styling

This setup gives me a solid foundation for any React project with excellent developer experience.
