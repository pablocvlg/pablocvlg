export const devops = {
  id:       'devops',
  icon:     '⚙️',
  accent:   'var(--color-devops)',
  imageSrc: 'assets/images/Portrait.jpg',

  en: {
    label:       'DevOps',
    tagline:     'I automate, ship & scale.',
    description: 'CI/CD pipelines, infrastructure as code, and cloud automation.',
    lines:       ['CI/CD & Deployment Automation', 'Infrastructure & IaC', 'Environment Provisioning', 'Observability'],
  },
  es: {
    label:       'DevOps',
    tagline:     'Automatizo, despliego y escalo.',
    description: 'Pipelines CI/CD, infraestructura como código y automatización en la nube.',
    lines:       ['Automatización de despliegues', 'CI/CD, infraestructura e IaC', 'Aprovisionamiento de entornos', 'Observabilidad'],
  },

  sections: [
    {
      id:     'experience',
      number: '01',
      title:  { en: 'Experience', es: 'Experiencia' },
      items: [
        {
          company: 'Inycom',
          logo:    'assets/images/logos/Inycom.webp',
          period:  '2025 — 2026',
          tags:    ['Microsoft Azure', 'Terraform', 'Azure DevOps'],
          en: { role: 'DevOps Engineer', description: 'Collaborated in the EU LDT Toolbox project, mostly creating and modifying deployment pipelines in Azure DevOps while communicating with international team members. Designed and developed an Azure Container Apps (ACA) Landing Zone using Terraform, adhering to client-defined architectural guidelines, enabling scalable adoption across multiple AKS environments.' },
          es: { role: 'Ingeniero DevOps', description: 'Colaboré en el proyecto EU LDT Toolbox, principalmente creando y modificando pipelines de despliegue en Azure DevOps, comunicándome con miembros del equipo internacionales. Diseñé y desarrollé una Landing Zone de Azure Container Apps (ACA) con Terraform, siguiendo las directrices arquitectónicas del cliente y habilitando una adopción escalable en múltiples entornos AKS.' },
        },
        {
          company: 'NTT DATA',
          logo:    'assets/images/logos/NTT DATA.png',
          period:  '2024 — 2025',
          tags:    ['Docker', 'Ansible', 'GitLab', 'Jenkins', 'Helm', 'ArgoCD', 'Tekton', 'Nexus', 'Azure RedHat OpenShift'],
          en: { role: 'DevOps Engineer', description: 'Created and maintained ARO clusters synchronized with ArgoCD, automated the deployment of microservices, migrated pipelines from Tekton to Jenkins, and followed proper GitOps practices. Worked extensively with Kubernetes clusters, Docker images, documentation, and meetings with clients.' },
          es: { role: 'Ingeniero DevOps', description: 'Creé y mantuve clústeres ARO sincronizados con ArgoCD, automaticé el despliegue de microservicios, migré pipelines de Tekton a Jenkins y seguí buenas prácticas de GitOps. Trabajé extensivamente con clústeres Kubernetes, imágenes Docker, documentación y reuniones con clientes.' },
        },
      ],
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
          es: { role: 'Máster en Ingeniería Informática',        description: 'Especialización en Inteligencia Artificial, Algoritmos e Ingeniería del Software. Enfoque en aprendizaje automático, optimización, arquitectura de software, sistemas distribuidos, tecnologías cloud y desarrollo de software a gran escala. Fuerte énfasis en innovación, emprendimiento tecnológico y la transformación de la investigación en soluciones reales.' },
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
      id:     'tools',
      number: '02',
      title:  { en: 'Knowledge', es: 'Conocimientos' },
      items: [
        { items: ['AWS', 'Azure', 'GCP'],                       en: { category: 'Cloud' },        es: { category: 'Nube' }           },
        { items: ['Docker', 'Kubernetes', 'Helm'],               en: { category: 'Containers' },   es: { category: 'Contenedores' }   },
        { items: ['Terraform', 'Ansible', 'Pulumi'],             en: { category: 'IaC' },          es: { category: 'IaC' }            },
        { items: ['GitHub Actions', 'Jenkins', 'GitLab CI'],     en: { category: 'CI/CD' },        es: { category: 'CI/CD' }          },
        { items: ['Prometheus', 'Grafana', 'Datadog'],           en: { category: 'Monitoring' },   es: { category: 'Monitorización' } },
        { items: ['Bash', 'Python', 'PowerShell'],               en: { category: 'Scripting' },    es: { category: 'Scripting' }      },
      ],
    },
    {
      id:     'certifications',
      number: '04',
      title:  { en: 'Certifications', es: 'Certificaciones' },
      items: [
        {
          logo: 'assets/images/logos/Azure AZ Fundamentals.png', date: '2022', tags: ['Azure Architecture & Services', 'Cloud Concepts', 'Management & Governance'],
          en: { name: 'AZ-900 · Azure Fundamentals', issuer: 'Microsoft' },
          es: { name: 'AZ-900 · Azure Fundamentals', issuer: 'Microsoft' },
        },
      ],
    },
  ],
};
