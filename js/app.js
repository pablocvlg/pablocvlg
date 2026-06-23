/* ============================================================
   App entry — router, view renderers, language toggle.
   To add a persona: create js/personas/<id>.js and add it
   to the ALL array in js/personas/index.js.
   ============================================================ */
import { Router, navigate } from './router.js';
import { PersonaCard } from './components/PersonaCard.js';
import { PersonaPage } from './components/PersonaPage.js';
import { LangToggle }  from './components/LangToggle.js';
import { personas }    from './personas/index.js';
import { lang }        from './state/lang.js';

const app = document.getElementById('app');

// Cursor spotlight
const spotlight = document.createElement('div');
spotlight.className = 'cursor-spotlight';
document.body.insertAdjacentElement('afterbegin', spotlight);

let _mouseX = -9999, _mouseY = -9999, _rafPending = false;
document.addEventListener('mousemove', (e) => {
  _mouseX = e.clientX;
  _mouseY = e.clientY;
  if (!_rafPending) {
    _rafPending = true;
    requestAnimationFrame(() => {
      spotlight.style.setProperty('--mouse-x', `${_mouseX}px`);
      spotlight.style.setProperty('--mouse-y', `${_mouseY}px`);
      _rafPending = false;
    });
  }
});

// Language toggle — fixed, outside #app so it persists across renders
document.body.appendChild(LangToggle());

// Persona lookup map
const personaMap = Object.fromEntries(personas.map(p => [p.id, p]));

// Track current renderer so language changes can re-render
let _currentRender = () => renderHome();

function renderHome() {
  _currentRender = renderHome;
  app.innerHTML = '';

  const home = document.createElement('main');
  home.className = 'home';

  const header = document.createElement('header');
  header.className = 'home__header';
  header.innerHTML = `
    <p class="home__greeting">${lang.t('ui.greeting')}</p>
    <h1 class="home__name">${lang.t('ui.name')}</h1>
    <p class="home__prompt">${lang.t('ui.prompt')}</p>
  `;

  const grid = document.createElement('div');
  grid.className = 'home__personas';

  personas.forEach((persona, i) => {
    const personaText = lang.persona(persona.id);
    grid.appendChild(PersonaCard({ ...persona, ...personaText }, i));
  });

  home.appendChild(header);
  home.appendChild(grid);
  app.appendChild(home);
}

function renderPersona(id) {
  const persona = personaMap[id];
  if (!persona) { navigate('/'); return; }

  _currentRender = () => renderPersona(id);
  app.innerHTML = '';
  app.appendChild(PersonaPage(persona, lang.persona(id)));
}

// Re-render current view when language changes
lang.onChange(() => _currentRender());

// Routes
const personaRoutes = Object.fromEntries(
  personas.map(p => [`/${p.id}`, () => renderPersona(p.id)])
);

const router = new Router({
  '/': () => renderHome(),
  ...personaRoutes,
  '*': () => renderHome(),
});

router.start();
