export const experience = [
  {
    id: 'le-reserve-motorworks',
    company: 'Le Reserve Motorworks, Lawrenceville, GA',
    position: 'Owner & Operator',
    period: 'Aug 2025 – Present',
    type: 'experience',
    description: 'Launched and manage a service business requiring project management, client communication, and attention to detail. Apply agile workflows, documentation practices, and problem-solving skills that parallel software development and front-end project delivery.'
  },
  {
    id: 'ferrari-atlanta',
    company: 'Ferrari of Atlanta, Roswell, GA',
    position: 'Master Certified Technician',
    period: 'Jul 2022 – Aug 2025',
    type: 'experience',
    description: 'Performed diagnostics and system troubleshooting using technical diagrams and specialized software - skills directly transferable to debugging JavaScript, React components, and responsive front-end applications. Collaborated with cross-functional teams, maintained quality standards, and communicated solutions clearly to clients.'
  },
  {
    id: 'rbm-atlanta',
    company: 'RBM of Atlanta, Atlanta, GA',
    position: 'Technician',
    period: 'Jan 2018 – Jul 2022',
    type: 'experience',
    description: 'Delivered precision diagnostics and repair services while mentoring junior staff. Built leadership, adaptability, and continuous learning skills - mirroring the need to stay current with evolving web technologies and frameworks.'
  }
];

export const education = [
  {
    id: 'nucamp-bootcamp',
    institution: 'Nucamp Bootcamp (Online)',
    degree: 'Full-Stack Web & Mobile Development Certificate',
    period: 'Dec 2024 – Jun 2025',
    type: 'education',
    description: 'Completed training in JavaScript, React, React Native, HTML, CSS, Node.js, and responsive design. Earned certificates in Full-Stack Web & Mobile Development and Web Development Fundamentals. Gained hands-on experience building projects, using REST APIs, and collaborating with Git/GitHub workflows.'
  },
  {
    id: 'gwinnett-tech',
    institution: 'Gwinnett Technical College, Lawrenceville, GA',
    degree: 'Associate Degree – Mercedes-Benz Automotive Program',
    period: 'Aug 2017 – May 2019',
    type: 'education',
    description: 'Specialized in diagnostics, system integration, and precision troubleshooting. Program emphasized disciplined workflows, documentation, and problem-solving under strict quality standards - skills directly transferable to debugging and maintaining software applications.'
  }
];

export const timeline = [...experience, ...education].sort((a, b) => {
  // Sort by start year (descending - most recent first)
  const yearA = parseInt(a.period.split('–')[0]);
  const yearB = parseInt(b.period.split('–')[0]);
  return yearB - yearA;
});
