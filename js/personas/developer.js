export const developer = {
  id:       'developer',
  icon:     '💻',
  accent:   'var(--color-developer)',
  imageSrc: 'assets/images/PortraitAI.png',

  en: {
    label:       'Developer',
    tagline:     'I build reliable & scalable code.',
    description: 'Focused on generating reusable solutions with solid architectures.',
    lines:       ['Code architecture and design', 'Software development', 'Technical documentation'],
  },
  es: {
    label:       'Desarrollador',
    tagline:     'Hago código fiable y escalable.',
    description: 'Enfocado en generar soluciones reutilizables con arquitecturas sólidas.',
    lines:       ['Arquitectura y diseño de código', 'Desarrollo de software', 'Documentación técnica'],
  },

  sections: [
    {
      id:     'experience',
      number: '01',
      title:  { en: 'Experience', es: 'Experiencia' },
      items:  [
        {
          company: 'NTT DATA',
          logo:    'assets/images/logos/NTT DATA.png',
          period:  '2023 — 2024',
          tags:    ['Next.js (React)', 'Node.js', 'TypeScript', 'FastAPI', 'Docker', 'Postman', 'Jira'],
          en: { role: 'Software Engineer', description: 'Full-stack development of an internal tool designed as a deployment accelerator, including the design of internal APIs, development of web portals, external API integration, and project documentation.' },
          es: { role: 'Ingeniero de Software', description: 'Desarrollo full-stack de una herramienta interna diseñada como acelerador de despliegues, incluyendo el diseño de APIs internas, desarrollo de portales web, integración de APIs externas y documentación del proyecto.' },
        },
      ],
    },
    {
      id:     'projects',
      number: '02',
      title:  { en: 'Projects', es: 'Proyectos' },
    },
    {
      id:     'education',
      number: '03',
      title:  { en: 'Education', es: 'Formación' },
      items: [
        {
          company: 'Danish Technical University',
          logo:    'assets/images/logos/DTU2.png',
          period:  '2026 — Now',
          tags:    ['AI & Algorithms', 'Software Engineering'],
          en: { role: 'MSc in Computer Science and Engineering', description: 'Specialization in Artificial Intelligence, Algorithms, and Software Engineering. Focus on machine learning, optimization, software architecture, distributed systems, cloud technologies, and large-scale software development. Strong emphasis on innovation, technology entrepreneurship, and transforming research into real-world solutions.' },
          es: { role: 'Máster en Ingeniería Informática', description: 'Especialización en Inteligencia Artificial, Algoritmos e Ingeniería del Software. Enfoque en aprendizaje automático, optimización, arquitectura de software, sistemas distribuidos, tecnologías cloud y desarrollo de software a gran escala. Fuerte énfasis en innovación, emprendimiento tecnológico y la transformación de la investigación en soluciones reales.' },
        },
        {
          company: 'Universidad San Jorge',
          logo:    'assets/images/logos/USJ2.png',
          period:  '2019 — 2023',
          tags:    ['Object-Oriented Programming', 'Databases', 'Web Development', 'Algorithms'],
          en: { role: 'B.Sc. Computer Science',          description: 'Four-year degree covering software engineering fundamentals, algorithms, data structures, web development, databases, and software architecture. Final thesis focused on observability systems (SIEM) implementation integrated with Slack for real-time alerting and monitoring.' },
          es: { role: 'Grado en Ingeniería Informática', description: 'Grado de cuatro años que cubre fundamentos de ingeniería del software, algoritmos, estructuras de datos, desarrollo web, bases de datos y arquitectura de software. Trabajo de fin de grado centrado en sistemas de observabilidad, con implementación de un SIEM integrado con Slack para monitorización y alertas en tiempo real.' },
        },
        {
          company: 'University of Central Florida',
          logo:    'assets/images/logos/UCF2.png',
          period:  'Fall 2021',
          tags:    [],
          en: { role: 'Exchange Semester',       description: 'Semester abroad at UCF as part of an international exchange program. Studied advanced topics in computer science, distributed systems, and human-computer interaction alongside students from all over the world.' },
          es: { role: 'Semestre de Intercambio', description: 'Semestre en el extranjero en la UCF dentro de un programa de intercambio internacional. Estudié temas avanzados de informática, sistemas distribuidos e interacción persona-ordenador junto a estudiantes de todo el mundo.' },
        },
      ],
    },
    {
      id:     'certifications',
      number: '04',
      title:  { en: 'Certifications', es: 'Certificaciones' },
      items: [
        
        {
          logo: 'assets/images/logos/Element_AI_logo.png', date: '2025', tags: ['Artificial Intelligence', 'AI Concepts & Ethics', 'Machine Learning Fundamentals'],
          en: { name: 'Elements of AI', issuer: 'University of Helsinki' },
          es: { name: 'Elements of AI', issuer: 'Universidad de Helsinki' },
        },
        {
          logo: 'assets/images/logos/Azure AI Fundamentals.png', date: '2022', tags: ['Artificial Intelligence', 'Azure AI Services', 'Machine Learning Fundamentals'],
          en: { name: 'AI-900 · Azure AI Fundamentals', issuer: 'Microsoft' },
          es: { name: 'AI-900 · Azure AI Fundamentals', issuer: 'Microsoft' },
        },
        {
          logo: 'assets/images/logos/IT Fundamentals Pro.png', date: '2021', tags: ['IT Fundamentals', 'Computer Hardware & Software', 'Networking & Security'],
          en: { name: 'IT Fundamentals Pro', issuer: 'TestOut' },
          es: { name: 'IT Fundamentals Pro', issuer: 'TestOut' },
        },
      ],
    },
  ],
};
