/* ============================================================
   Navigation components
   ============================================================ */
import { lang } from '../state/lang.js';
import { navigate } from '../router.js';

export function BackButton() {
  const btn = document.createElement('button');
  btn.className = 'btn-back';
  btn.setAttribute('aria-label', 'Back to home');

  function render() {
    btn.innerHTML = `
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"
           viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      ${lang.t('ui.back')}
    `;
  }

  render();
  lang.onChange(render);

  btn.addEventListener('click', () => {
    navigate('/');
  });
  return btn;
}

export function SectionNav(sections) {
  const nav = document.createElement('nav');
  nav.className = 'sidebar-nav';
  nav.setAttribute('aria-label', 'Page sections');

  const list = document.createElement('ol');
  list.className = 'sidebar-nav__list';
  nav.appendChild(list);

  function render() {
    list.innerHTML = '';
    sections.forEach(({ id, number }) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a class="sidebar-nav__link" href="#section-${id}">
          <span class="sidebar-nav__number">${number}.</span>
          <span class="sidebar-nav__label">${lang.t(`ui.sectionNav.${id}`) !== `ui.sectionNav.${id}` ? lang.t(`ui.sectionNav.${id}`) : id}</span>
          <span class="sidebar-nav__line" aria-hidden="true"></span>
        </a>
      `;
      list.appendChild(li);
    });
  }

  // The section titles are persona-specific so they come from outside.
  // Use a data attribute to allow PersonaPage to set them after mount.
  nav._renderWithTitles = (titlesMap) => {
    list.innerHTML = '';
    sections.forEach(({ id, number }) => {
      const title = titlesMap[id] ?? id;
      const li = document.createElement('li');
      li.innerHTML = `
        <a class="sidebar-nav__link" href="#section-${id}">
          <span class="sidebar-nav__number">${number}.</span>
          <span class="sidebar-nav__label">${title}</span>
          <span class="sidebar-nav__line" aria-hidden="true"></span>
        </a>
      `;
      list.appendChild(li);
    });
  };

  return nav;
}
