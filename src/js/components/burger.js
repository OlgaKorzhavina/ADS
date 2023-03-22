let burger = document.querySelector(".burger");
let menu = document.querySelector(".header-list");
let menuLinks = document.querySelectorAll(".header-list__item");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header-list--active");
  document.body.classList.toggle("stop-scroll");
 
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.toggle("burger--active");
    menu.classList.remove("header-list--active");
    document.body.classList.remove("stop-scroll");
  });
});

