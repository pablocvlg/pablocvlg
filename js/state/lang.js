/* ============================================================
   Language state — single source of truth for the active locale.
   Usage:
     import { lang } from '../state/lang.js';
     lang.current          // 'en' | 'es'
     lang.toggle()         // switches and persists
     lang.t('ui.back')     // looks up a dot-path in i18n
     lang.persona('devops')// returns translated persona text
     lang.onChange(fn)     // subscribe; returns unsubscribe fn
   ============================================================ */
import { i18n }           from '../config/i18n.js';
import { getPersonaText } from '../personas/index.js';

let _current = localStorage.getItem('pcvlg-lang') || 'en';
const _listeners = new Set();

function _get(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj);
}

export const lang = {
  get current() { return _current; },

  toggle() {
    _current = _current === 'en' ? 'es' : 'en';
    localStorage.setItem('pcvlg-lang', _current);
    _listeners.forEach(fn => fn(_current));
  },

  onChange(fn) {
    _listeners.add(fn);
    return () => _listeners.delete(fn);
  },

  // Dot-path lookup with English fallback
  t(path) {
    return _get(i18n[_current], path) ?? _get(i18n.en, path) ?? path;
  },

  // Returns the full translated text block for a persona
  persona(id) {
    return getPersonaText(id, _current);
  },
};
