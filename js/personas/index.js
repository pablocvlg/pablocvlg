/* ============================================================
   Personas index — single source of truth.
   Imports the unified per-persona definitions and derives:
     • personas[]       — structural data for PersonaPage / app
     • getPersonaText() — translated text block for lang.persona()
   ============================================================ */
import { developer  } from './developer.js';
import { devops     } from './devops.js';
import { beyondtech } from './beyondtech.js';

const ALL = [developer, devops, beyondtech];

// PersonaPage renders via sectionData[key]; most keys match the section id,
// except 'otherexperience' which shares the 'experience' renderer.
const RENDER_KEY = { otherexperience: 'experience' };
const renderKey = (id) => RENDER_KEY[id] ?? id;

function stripTranslations({ en, es, ...structural }) {
  return structural;
}

// ── personas[] ────────────────────────────────────────────────
// Same shape as the old personas.js — consumed by app.js and PersonaPage.
export const personas = ALL.map(p => ({
  id:       p.id,
  icon:     p.icon,
  accent:   p.accent,
  glow:     p.glow,
  imageSrc: p.imageSrc,
  sections: p.sections.map(s => {
    const section = { id: s.id, number: s.number };
    if (s.items && s.items.length > 0) {
      section[renderKey(s.id)] = s.items.map(stripTranslations);
    }
    return section;
  }),
}));

// ── getPersonaText(id, locale) ────────────────────────────────
// Same shape as the old i18n[locale].personas[id] — consumed by lang.persona().
export function getPersonaText(id, locale) {
  const p = ALL.find(x => x.id === id);
  if (!p) return {};

  const meta = p[locale] ?? p.en;
  const result = { ...meta, sectionTitles: {} };

  p.sections.forEach(s => {
    result.sectionTitles[s.id] = s.title?.[locale] ?? s.title?.en ?? s.id;

    if (s.content) {
      // 'about' section — plain translatable text, no structural items
      result.about = s.content[locale] ?? s.content.en ?? [];
    } else if (s.items) {
      result[s.id] = s.items.map(item => item[locale] ?? item.en ?? {});
    }
  });

  return result;
}
