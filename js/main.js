(function () {
  var themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }

  themeToggle.addEventListener('click', function () {
    var current = getTheme();
    var next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });

  var saved = null;
  try {
    saved = localStorage.getItem('theme');
  } catch (e) {}
  if (saved === 'dark' || saved === 'light') {
    setTheme(saved);
  }
})();
