const i18Obj = {
  en: {
    "call-us": "Call Us: +375447670421",
    "e-mail": "E-mail: v.rukus15@gmail.com",
    catalog: "Catalog",
    delivery: "Delivery",
    about: "About",
    contacts: "Contacts",
    "say-hello": "Say Hello to ToyStore!",
    "free-ecom": "Free Ecommerce Template for Webflow",
    "open-catalog": "Open Catalog",
    "stuffed-animals": "Stuffed Animals",
    "wooden-toys": "Wooden Toys",
    "shop-now": "Shop Now",
    "stuffed-animals-3": "Stuffed Animals",
    "see-all": "See All Toys",
    "teddy-bear": "Teddy Bear",
    "plush-toy": "Mega Plush Toy",
    "cute-dog": "Cute Dog",
    "little-friend": "Little Friend",
    "wooden-toys-4th": "Wooden Toys",
    "happy-flower": "Happy Flower",
    "lift-machine": "Lift Machine",
    "wooden-camera": "Wooden Camera",
    "little-rabit": "Little Rabbit",
    "about-the-shop": "About The Shop",
    "watch-our-story": "Watch Our Story",
    description:
      "There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.",
    "made-for-webflow": "Made for Webflow",
    "simple-ecommerce":
      "Simple & Colorful Ecommerce Template for Your Business",
    "available-for-free": "Available for FREE!",
    paragraph:
      "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy",
    "get-it-now": "GET IT NOW!",
    subscribe: "Subscribe to our news letter& get 10% discount!",
    "we-on-inst": "We're on Instagram!",
    "see-more-photos": "See More Photos",
    home: "Home",
    phone: "Phone: +375447670421",
    location: "Location: Mogilev, Belarus",
    "created-with-love": "Created with love by Elastic Themes",
    "powered-by": "Powered by",
    "style-guide": "Style Guide",
    licensing: "Licensing",
  },

  ru: {
    "call-us": "Позвоните нам: +375447670421",
    "e-mail": "Эл.почта: v.rukus15@gmail.com",
    catalog: "Каталог",
    delivery: "Доставка",
    about: "О нас",
    contacts: "Контакты",
    "say-hello": "Познакомьтесь с ToyStore!",
    "free-ecom": "Бесплатный шаблон электронной коммерции для Webflow",
    "open-catalog": "Открыть каталог",
    "stuffed-animals": "Мягкие игрушки",
    "wooden-toys": "Деревянные игрушки",
    "shop-now": "Купить сейчас",
    "stuffed-animals-3": "Мягкие игрушки",
    "see-all": "Показать все игрушки",
    "teddy-bear": "Плюшевый мишка",
    "plush-toy": "Мега плюшевая игрушка",
    "cute-dog": "Милый пес",
    "little-friend": "Маленький друг",
    "wooden-toys-4th": "Деревянные игрушки",
    "happy-flower": "Счастливый цветок",
    "lift-machine": "Подъемный механизм",
    "wooden-camera": "Деревянная камера",
    "little-rabit": "Маленький кролик",
    "about-the-shop": "О магазине",
    "watch-our-story": "Посмотрите нашу историю",
    description:
      "Не существует магической формулы для написания идеального рекламного текста. Это зависит от ряда факторов, включая размещение рекламы, целевую аудиторию, даже настроение потребителя.",
    "made-for-webflow": "Создано для Webflow",
    "simple-ecommerce":
      "Простой и яркий шаблон электронной коммерции для вашего бизнеса",
    "available-for-free": "Доступно БЕСПЛАТНО!",
    paragraph:
      "Успешный маркетинговый план в значительной степени зависит от привлекательности рекламного текста. Написание результативного рекламного текста сложно, так как он должен привлекать, убеждать и подталкивать потребителей к действию. Не существует магической формулы для написания идеального рекламного текста.",
    "get-it-now": "ПОЛУЧИТЬ СЕЙЧАС!",
    subscribe: "Подпишитесь на нашу рассылку и получите скидку 10%!",
    "we-on-inst": "Мы в Instagram!",
    "see-more-photos": "Смотреть больше фотографий",
    home: "Главная",
    phone: "Телефон: +375447670421",
    location: "Локация: Могилев, Беларусь",
    "created-with": "Создано с любовью Elastic Themes",
    "powered-by": "Работает на",
    "style-guide": "Руководство по стилю",
    licensing: "Лицензирование",
  },
};

function changeLanguage() {
  var languageSelector = document.getElementById("lang-switcher");
  var selectedLanguage = languageSelector.value;
  var i18nElements = document.querySelectorAll("[data-i18n]");

  i18nElements.forEach(function (element) {
    var translationKey = element.getAttribute("data-i18n");
    var translation = getTranslation(selectedLanguage, translationKey);
    element.textContent = translation;
  });

  // Сохранение выбранного языка в localStorage для случая перезагрузки страницы
  localStorage.setItem("selectedLanguage", selectedLanguage);
}

function getTranslation(language, key) {
  if (language in i18Obj && key in i18Obj[language]) {
    return i18Obj[language][key];
  }

  return "";
}

//обработка перезагрузки страницы
window.onload = function () {
  var selectedLanguage = localStorage.getItem("selectedLanguage");
  if (selectedLanguage) {
    var languageSelector = document.getElementById("lang-switcher");
    languageSelector.value = selectedLanguage;
    changeLanguage();
  }
};
