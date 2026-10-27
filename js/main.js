(() => {
  const root = document.documentElement;
  const buttons = [...document.querySelectorAll('[data-set-lang]')];
  const saved = localStorage.getItem('kelly-portfolio-language');
  const preferred = saved || (navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es');

  function setLanguage(lang) {
    root.dataset.language = lang;
    root.lang = lang;
    document.title = lang === 'es'
      ? 'Kelly Vizcaíno | Maquetadora Web Junior'
      : 'Kelly Vizcaíno | Junior Web Layout Developer';
    buttons.forEach(button => {
      const active = button.dataset.setLang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    localStorage.setItem('kelly-portfolio-language', lang);
  }

  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.setLang)));
  setLanguage(preferred);
})();
