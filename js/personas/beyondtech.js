export const beyondtech = {
  id:       'beyondtech',
  icon:     '🎨',
  accent:   'var(--color-beyondtech)',
  imageSrc: 'assets/images/PortraitCasual.jpeg',

  en: {
    label:       'Beyond Tech',
    tagline:     'More than just code.',
    description: 'Presentation, languages, jobs beyond IT, and personal interests.',
    lines:       ['About Me', 'Languages', 'Personal Interests', 'Other Experience'],
  },
  es: {
    label:       'No solo código',
    tagline:     'Más allá de la tecnología.',
    description: 'Presentación, idiomas, trabajos aparte de IT, e intereses personales.',
    lines:       ['Sobre mí', 'Idiomas', 'Intereses Personales', 'Otra Experiencia'],
  },

  sections: [
    {
      id:      'about',
      number:  '01',
      title:   { en: 'About Me', es: 'Sobre mí' },
      content: {
        en: [
          "Born and raised in Spain, I'm a tech enthusiast who's always eager to keep learning and exploring new thopics. I recently moved to Copenhagen to pursue a Master's degree in Computer Science and Engineering at DTU.",
          "Outside of work I enjoy staying active, exploring new cultures, and spending time on hobbies that bring me joy. This is the side of me that doesn't fit in a tech resume.",
        ],
        es: [
          "Nacido y criado en España, soy un apasionado de la tecnología con muchas ganas de seguir aprendiendo y explorando nuevos temas. Recientemente me mudé a Copenhague para cursar un Máster en Informática e Ingeniería Informática en DTU.",
          "Fuera del trabajo, disfruto llevando una vida activa, explorando nuevas culturas y dedicando tiempo a mis aficiones favoritas. Esta es la parte de mí que no encaja en un currículum tecnológico.",
        ],
      },
    },
    {
      id:     'languages',
      number: '02',
      title:  { en: 'Languages', es: 'Idiomas' },
      items: [
        { logo: 'assets/images/flags/Spanish.png', en: { language: 'Spanish', level: 'Native'                    }, es: { language: 'Español', level: 'Nativo'                     } },
        { logo: 'assets/images/flags/English.png', en: { language: 'English', level: 'C2 Cambridge · Near native' }, es: { language: 'Inglés',  level: 'C2 Cambridge · Casi nativo'  } },
        { logo: 'assets/images/flags/German.png',  en: { language: 'German',  level: 'A2 TELC · Elementary'      }, es: { language: 'Alemán',  level: 'A2 TELC · Elemental'         } },
        { logo: 'assets/images/flags/Danish.jpeg', en: { language: 'Danish',  level: 'A1 · Currently learning'   }, es: { language: 'Danés',   level: 'A1 · Aprendiendo actualmente'} },
      ],
    },
    {
      id:     'interests',
      number: '03',
      title:  { en: 'Personal Interests', es: 'Intereses Personales' },
      items: [
        {
          imageSrc: 'assets/images/Sports.jpg',
          en: { title: 'Sports',      description: 'I love all sports, both individual and as a team. This is a picture of the obstacles Spartan Race I completed in Mallorca.' },
          es: { title: 'Deportes',    description: 'Me gustan los deportes tanto individuales como de equipo. Esta foto es de la carrera de obstáculos que corrí en Mallorca.' },
        },
        {
          imageSrc: 'assets/images/BoardGames.jpeg',
          en: { title: 'Board games',   description: 'Board games are amongst my favourite hobbies, whether it is a simple and casual one, or a more complex one.' },
          es: { title: 'Juegos de mesa', description: 'Los juegos de mesa son de mi hobbies favoritos, ya sea uno simple y casual o uno más complejo.' },
        },
        {
          imageSrc: 'assets/images/Gaming.jpeg',
          en: { title: 'Gaming', description: 'I always have an amazing time when playing video-games with my friends or attending big events.' },
          es: { title: 'Gaming', description: 'Siempre disfruto de un buen rato jugando a videojuegos con amigos, o asistiendo a eventos importantes.' },
        },
        {
          imageSrc: 'assets/images/Music.jpeg',
          en: { title: 'Music', description: 'I like listening to different music genres, creating playlists, discovering new artists, and going to concerts.' },
          es: { title: 'Música', description: 'Me gusta escuchar distintos géneros de música, crear playlists, descubrir nuevos artistas e ir a conciertos.' },
        },
      ],
    },
    {
      id:     'otherexperience',
      number: '04',
      title:  { en: 'Other Experience', es: 'Otra Experiencia' },
      items: [
        {
          company: 'Self-Employed', logo: null, period: '2019 — 2021', tags: ['Teaching', 'Communication', 'Curriculum Design'],
          en: { role: 'English Teacher', description: 'Taught conversational English to adults and students, adapting materials to different learning styles and proficiency levels. Prepared customised lesson plans and tracked individual progress over time.' },
          es: { role: 'Profesor de Inglés', description: 'Impartí clases de inglés conversacional a adultos y estudiantes, adaptando los materiales a distintos estilos de aprendizaje y niveles. Preparé planes de clase personalizados y realicé un seguimiento del progreso individual.' },
        },
        {
          company: 'Various', logo: null, period: '2018 — 2020', tags: ['Coordination', 'Teamwork', 'Customer Service'],
          en: { role: 'Event Staff', description: 'Worked at concerts, sports events, and corporate gatherings as part of the logistics and coordination team. Managed access control, guided attendees, and collaborated with large crews under pressure.' },
          es: { role: 'Personal de Eventos', description: 'Trabajé en conciertos, eventos deportivos y corporativos como parte del equipo de logística y coordinación. Gestioné el control de acceso, orienté al público y colaboré con equipos grandes bajo presión.' },
        },
      ],
    },
  ],
};
