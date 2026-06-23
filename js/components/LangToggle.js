/* ============================================================
   LangToggle — fixed flag icon button, always visible.
   ============================================================ */
import { lang } from '../state/lang.js';

const FLAGS = {
  en: { src: 'assets/images/flags/English.png', label: 'Switch to English' },
  es: { src: 'assets/images/flags/Spanish.png',   label: 'Cambiar a español'  },
};

export function LangToggle() {
  const wrapper = document.createElement('div');
  wrapper.className = 'lang-toggle';
  wrapper.setAttribute('role', 'group');
  wrapper.setAttribute('aria-label', 'Language selector');

  function render() {
    const curr = lang.current;
    wrapper.innerHTML = '';

    Object.entries(FLAGS).forEach(([code, { src, label }]) => {
      const btn = document.createElement('button');
      btn.className = `lang-toggle__flag ${curr === code ? 'is-active' : ''}`;
      btn.setAttribute('aria-label', label);
      btn.setAttribute('aria-pressed', String(curr === code));
      btn.innerHTML = `<img src="${src}" alt="${code.toUpperCase()} flag" draggable="false" />`;

      btn.addEventListener('click', () => {
        if (lang.current !== code) lang.toggle();
      });

      wrapper.appendChild(btn);
    });
  }

  render();
  lang.onChange(render);

  return wrapper;
}
