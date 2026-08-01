// nunorc.github.io — nav drawer + theme toggle.
// The stored theme is applied by a small inline script in <head> to avoid a
// flash of the wrong theme; this file only handles interaction.

document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('.nav-toggle');
  var navList = document.getElementById('nav-list');

  navToggle.addEventListener('click', function () {
    var open = navList.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  // Close the drawer once a section has been picked.
  navList.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      navList.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.getElementById('year').textContent = String(new Date().getFullYear());

  var themeToggle = document.querySelector('.theme-toggle');

  themeToggle.addEventListener('click', function () {
    var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var current = document.documentElement.dataset.theme || (systemDark ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';

    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // Private browsing with storage denied: the choice just won't persist.
    }
  });
});
