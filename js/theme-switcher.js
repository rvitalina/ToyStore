const themeSwitcher = document.getElementById('theme-switcher');
const root = document.documentElement;

themeSwitcher.addEventListener('click', function() {
  root.classList.toggle('darkmode');
});