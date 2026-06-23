/* ============================================================
   PersonaPage — sticky sidebar + scrollable content.
   persona     = structural data from personas.js
   personaText = translated text from i18n via lang.persona()
   ============================================================ */
import { BackButton, SectionNav } from './Navigation.js';

export function PersonaPage(persona, personaText) {
  const { icon, accent, glow, sections, imageSrc = null } = persona;
  const { label, tagline, description, sectionTitles = {} } = personaText;

  const page = document.createElement('div');
  page.className = 'persona-page page-enter';
  page.style.cssText = `--page-accent: ${accent}; --page-glow: ${glow};`;

  // ── Sidebar ──────────────────────────────────────────────
  const sidebar = document.createElement('aside');
  sidebar.className = 'persona-sidebar';

  const avatarEl = document.createElement('div');
  avatarEl.className = 'persona-sidebar__avatar';
  avatarEl.innerHTML = imageSrc
    ? `<img src="${imageSrc}" alt="${label} photo" />`
    : `<span aria-hidden="true">${icon}</span>`;

  const sidebarHeader = document.createElement('div');
  sidebarHeader.className = 'persona-sidebar__header';
  sidebarHeader.innerHTML = `
    <h1 class="persona-sidebar__name">${label}</h1>
    <p class="persona-sidebar__tagline">${tagline}</p>
    <p class="persona-sidebar__desc">${description ?? ''}</p>
  `;

  const sidebarNav = SectionNav(sections);
  sidebarNav._renderWithTitles(sectionTitles);

  const backBtn = BackButton();
  backBtn.classList.add('persona-sidebar__back');

  sidebar.appendChild(backBtn);
  sidebar.appendChild(avatarEl);
  sidebar.appendChild(sidebarHeader);
  sidebar.appendChild(sidebarNav);

  // ── Main content ─────────────────────────────────────────
  const main = document.createElement('main');
  main.className = 'persona-main';

  sections.forEach((sectionData) => {
    const { id, number } = sectionData;
    const title = sectionTitles[id] ?? id;

    const section = document.createElement('section');
    section.className = 'persona-section';
    section.id = `section-${id}`;

    const heading = document.createElement('h2');
    heading.className = 'persona-section__title';
    heading.innerHTML = `<span class="persona-section__number">${number}.</span>${title}`;
    section.appendChild(heading);

    // Text-only sections
    if (id === 'about' && personaText.about) {
      section.appendChild(_renderAbout(personaText.about));
    }

    // Structural + translated text merge sections
    if (sectionData.experience) {
      const textItems = personaText.experience ?? personaText.otherexperience ?? [];
      const merged = sectionData.experience.map((s, i) => ({ ...s, ...(textItems[i] ?? {}) }));
      section.appendChild(_renderExperience(merged));
    }
    if (sectionData.education) {
      const textItems = personaText.education ?? [];
      const merged = sectionData.education.map((s, i) => ({ ...s, ...(textItems[i] ?? {}) }));
      section.appendChild(_renderExperience(merged));
    }
    if (sectionData.tools) {
      const textItems = personaText.tools ?? [];
      const merged = sectionData.tools.map((s, i) => ({ ...s, ...(textItems[i] ?? {}) }));
      section.appendChild(_renderTools(merged));
    }
    if (sectionData.certifications) {
      const textItems = personaText.certifications ?? [];
      const merged = sectionData.certifications.map((s, i) => ({ ...s, ...(textItems[i] ?? {}) }));
      section.appendChild(_renderCertifications(merged));
    }
    if (sectionData.languages) {
      const textItems = personaText.languages ?? [];
      const merged = sectionData.languages.map((s, i) => ({ ...s, ...(textItems[i] ?? {}) }));
      section.appendChild(_renderLanguages(merged));
    }
    if (sectionData.interests) {
      const textItems = personaText.interests ?? [];
      const merged = sectionData.interests.map((s, i) => ({ ...s, ...(textItems[i] ?? {}) }));
      section.appendChild(_renderInterests(merged));
    }

    main.appendChild(section);
  });

  page.appendChild(sidebar);
  page.appendChild(main);

  _bindScrollSpy(sections, sidebar);

  return page;
}

// ── Content renderers ─────────────────────────────────────

function _renderExperience(items) {
  const list = document.createElement('div');
  list.className = 'exp-list';
  items.forEach(({ role = '', company = '', logo, period = '', description = '', tags = [] }) => {
    const tagsHTML = tags.map(t => `<span class="tag">${t}</span>`).join('');
    const logoHTML = logo
      ? `<img class="exp-item__logo" src="${logo}" alt="${company} logo" />`
      : `<div class="exp-item__logo exp-item__logo--fallback">${company.charAt(0)}</div>`;
    const item = document.createElement('div');
    item.className = 'exp-item';
    item.innerHTML = `
      <div class="exp-item__banner">
        ${logoHTML}
        <div class="exp-item__banner-info">
          <span class="exp-item__company">${company}</span>
          <div class="exp-item__meta">
            <span class="exp-item__role">${role}</span>
            <span class="exp-item__separator" aria-hidden="true">·</span>
            <span class="exp-item__period">${period}</span>
          </div>
        </div>
      </div>
      <div class="exp-item__body">
        <p class="exp-item__desc">${description}</p>
        <div class="exp-item__tags">${tagsHTML}</div>
      </div>
    `;
    list.appendChild(item);
  });
  return list;
}

function _renderTools(categories) {
  const grid = document.createElement('div');
  grid.className = 'tools-grid';
  categories.forEach(({ category = '', items = [] }) => {
    const tagsHTML = items.map(t => `<span class="tag">${t}</span>`).join('');
    const cat = document.createElement('div');
    cat.className = 'tools-category';
    cat.innerHTML = `
      <h4 class="tools-category__name">${category}</h4>
      <div class="tools-category__items">${tagsHTML}</div>
    `;
    grid.appendChild(cat);
  });
  return grid;
}

function _renderCertifications(items) {
  const list = document.createElement('div');
  list.className = 'cert-list';
  items.forEach(({ name = '', issuer = '', logo, tags = [], date = '' }) => {
    const logoHTML = logo
      ? `<img class="cert-item__logo" src="${logo}" alt="${name} logo" />`
      : `<div class="cert-item__logo cert-item__logo--fallback">${name.charAt(0)}</div>`;
    const tagsHTML = tags.map(t => `<span class="tag">${t}</span>`).join('');
    const cert = document.createElement('div');
    cert.className = 'cert-item';
    cert.innerHTML = `
      <div class="cert-item__header">
        ${logoHTML}
        <div class="cert-item__info">
          <h3 class="cert-item__name">${name}</h3>
          <div class="cert-item__meta">
            <span class="cert-item__issuer">${issuer}</span>
            <span class="cert-item__separator" aria-hidden="true">·</span>
            <span class="cert-item__date">${date}</span>
          </div>
        </div>
      </div>
      <div class="cert-item__tags">${tagsHTML}</div>
    `;
    list.appendChild(cert);
  });
  return list;
}

function _renderAbout(paragraphs) {
  const div = document.createElement('div');
  div.className = 'about-text';
  paragraphs.forEach(text => {
    const p = document.createElement('p');
    p.className = 'about-text__p';
    p.textContent = text;
    div.appendChild(p);
  });
  return div;
}

function _renderLanguages(items) {
  const list = document.createElement('div');
  list.className = 'lang-list';
  items.forEach(({ logo, language = '', level = '' }) => {
    const logoHTML = logo
      ? `<img class="lang-item__flag" src="${logo}" alt="${language} flag" />`
      : `<div class="lang-item__flag lang-item__flag--placeholder">?</div>`;
    const item = document.createElement('div');
    item.className = 'lang-item';
    item.innerHTML = `
      ${logoHTML}
      <div class="lang-item__info">
        <span class="lang-item__name">${language}</span>
        <span class="lang-item__level">${level}</span>
      </div>
    `;
    list.appendChild(item);
  });
  return list;
}

function _renderInterests(items) {
  const grid = document.createElement('div');
  grid.className = 'interests-grid';
  items.forEach(({ imageSrc, icon = '✦', title = '', description = '' }) => {
    const imgHTML = imageSrc
      ? `<img class="interest-card__img" src="${imageSrc}" alt="${title}" />`
      : `<div class="interest-card__img interest-card__img--placeholder">
           <span aria-hidden="true">${icon}</span>
         </div>`;
    const card = document.createElement('div');
    card.className = 'interest-card';
    card.innerHTML = `
      ${imgHTML}
      <div class="interest-card__body">
        <h3 class="interest-card__title">${title}</h3>
        <p class="interest-card__desc">${description}</p>
      </div>
    `;
    grid.appendChild(card);
  });
  return grid;
}

function _bindScrollSpy(sections, sidebar) {
  const links = sidebar.querySelectorAll('.sidebar-nav__link');
  if (!links.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id.replace('section-', '');
        links.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#section-${id}`);
        });
      });
    },
    { rootMargin: '-20% 0px -60% 0px' }
  );

  sections.forEach(({ id }) => {
    const el = document.getElementById(`section-${id}`);
    if (el) observer.observe(el);
  });
}
