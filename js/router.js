/* ============================================================
   History API router.
   Usage:
     const router = new Router({
       '/':          () => renderHome(),
       '/developer': () => renderPersona('developer'),
       '*':          () => renderHome(),   // fallback
     });
     router.start();
   ============================================================ */

export function navigate(path) {
  history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export class Router {
  constructor(routes) {
    this._routes = routes;
    window.addEventListener('popstate', () => this._resolve());
  }

  _resolve() {
    const path = window.location.pathname || '/';
    const handler = this._routes[path] ?? this._routes['*'];
    if (handler) handler(path);
  }

  start() {
    this._resolve();
  }
}
