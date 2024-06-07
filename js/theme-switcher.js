// const themeSwitcher = document.getElementById('theme-switcher');
// const root = document.documentElement;

// themeSwitcher.addEventListener('click', function() {
//   root.classList.toggle('darkmode');
  
// });
const themeSwitcher = document.getElementById('theme-switcher');
const root = document.documentElement;

// Функция для установки темы
function setTheme(theme) {
  root.classList.add(theme);
  localStorage.setItem('theme', theme);
}

// Функция для удаления темы
function removeTheme(theme) {
  root.classList.remove(theme);
  localStorage.removeItem('theme');
}

// Проверяем, есть ли сохраненная тема в localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
}

// Обновляем состояние переключателя темы в соответствии с текущей темой
if (savedTheme === 'darkmode') {
  themeSwitcher.classList.add('active');
}

// Слушатель события для переключателя темы
themeSwitcher.addEventListener('click', function() {
  if (root.classList.contains('darkmode')) {
    removeTheme('darkmode');
    themeSwitcher.classList.remove('active');
  } else {
    setTheme('darkmode');
    themeSwitcher.classList.add('active');
  }
});