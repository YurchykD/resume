//Burger menu
const hamburger = document.querySelector('.navPhone__hamburger');
const burgerMenu = document.querySelector('.menu');
const burgerLink = document.querySelectorAll('.menu__link');
const socialLink = document.querySelectorAll('.menu__social-link');
const closer = document.querySelectorAll('.menu__hamburger');

hamburger.addEventListener('click', () => {
  burgerMenu.classList.toggle('menu--active');
});

for (const value of burgerLink) {
  value.addEventListener('click', () => {
    burgerMenu.classList.toggle('menu--active');
  });
}

for (const value of closer) {
  value.addEventListener('click', () => {
    burgerMenu.classList.toggle('menu--active');
  });
}

for (const value of socialLink) {
  value.addEventListener('click', () => {
    burgerMenu.classList.toggle('menu--active');
    menuHamburger.classList.toggle('menu__hamburger--active');
  });
}
