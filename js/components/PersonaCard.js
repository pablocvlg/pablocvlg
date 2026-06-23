/* ============================================================
   PersonaCard — selectable card on the home landing page.
   Props: { id, label, lines, icon, accent, glow, imageSrc? }
   ============================================================ */
export function PersonaCard(persona, index = 0) {
  const { id, label, lines = [], icon, accent, glow, imageSrc = null } = persona;

  const card = document.createElement('button');
  card.className = 'persona-card';
  card.setAttribute('role', 'link');
  card.setAttribute('aria-label', `View ${label} persona`);
  card.style.cssText = `
    --card-accent: ${accent};
    --card-glow:   ${glow};
    --delay:       ${index * 80}ms;
  `;

  const avatarInner = imageSrc
    ? `<img src="${imageSrc}" alt="${label} photo" />`
    : `<div class="persona-card__placeholder">
         <span class="icon" aria-hidden="true">${icon}</span>
         <span>Add photo</span>
       </div>`;

  const linesHTML = lines
    .map(line => `<span class="persona-card__line">${line}</span>`)
    .join('');

  card.innerHTML = `
    <div class="persona-card__avatar" aria-hidden="true">${avatarInner}</div>
    <span class="persona-card__label">${label}</span>
    <span class="persona-card__desc">${linesHTML}</span>
  `;

  function navigate() {
    window.location.hash = `/${id}`;
  }

  card.addEventListener('click', navigate);
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate();
    }
  });

  return card;
}
