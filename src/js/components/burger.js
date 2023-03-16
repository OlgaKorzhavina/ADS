let burger = document.querySelector(".burger");
let burgerClose =document.querySelector(".burger-close");
let menu = document.querySelector(".header-list");
let menuLinks = document.querySelectorAll(".header-list__item");

burger.addEventListener("click", function () {
  burgerClose.classList.toggle("burger-close--active");
  menu.classList.toggle("header-list--active");
  document.body.classList.toggle("stop-scroll");
});

burgerClose.addEventListener("click", function () {
  burgerClose.classList.toggle("burger-close--active");
  menu.classList.toggle("header-list--active");
  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burgerClose.classList.remove("burger-close--active");
    menu.classList.remove("header-list--active");
    document.body.classList.remove("stop-scroll");
  });
});

let searchImg = document.querySelector(".header__search__img");
let searchInput = document.querySelector(".search-form__input");
let closeBtn = document.querySelector(".search-form__close");
searchImg.addEventListener("click", function (e) {
  e.preventDefault();
  searchInput.classList.add("search-form__input--active");
  closeBtn.classList.add("search-form__close--active");
  searchImg.classList.add("header__search__img--active");
});
closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchInput.classList.remove("search-form__input--active");
  closeBtn.classList.remove("search-form__close--active");
  searchImg.classList.remove("header__search__img--active");
});
