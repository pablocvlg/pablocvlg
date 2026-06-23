/* ============================================================
   Hash-based router.
   Usage:
     const router = new Router({
       '/':          () => renderHome(),
       '/developer': () => renderPersona('developer'),
       '*':          () => renderHome(),   // fallback
     });
     router.start();
   ============================================================ */
export class Router {
  constructor(routes) {
    this._routes = routes;
    window.addEventListener('hashchange', () => this._resolve());
  }

  _resolve() {
    const raw = window.location.hash.slice(1);
    // Ignore anchor/fragment links (e.g. #section-experience) — only handle SPA routes starting with /
    if (raw && !raw.startsWith('/')) return;
    const hash = raw || '/';
    const handler = this._routes[hash] ?? this._routes['*'];
    if (handler) handler(hash);
  }

  start() {
    this._resolve();
  }
}
