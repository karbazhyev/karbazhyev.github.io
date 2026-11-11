(() => {
  const root = document.documentElement;
  root.classList.add('js');
  try {
    const saved = localStorage.getItem('kia-site-theme');
    if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;
  } catch { /* The site also works when browser storage is unavailable. */ }
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.theme-toggle');
    const themeColor = document.querySelector('meta[name="theme-color"]');
    const update = () => {
      const dark = root.dataset.theme === 'dark';
      if (toggle) {
        toggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
        toggle.title = `Switch to ${dark ? 'light' : 'dark'} mode`;
      }
      if (themeColor) themeColor.content = dark ? '#1c1c1d' : '#ffffff';
    };
    update();
    toggle?.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('kia-site-theme', root.dataset.theme); } catch { /* Optional preference only. */ }
      update();
    });
  });
})();
