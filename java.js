
const navbarBurger = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

navbarBurger.addEventListener('click', () => {
  // This opens/closes the dropdown menu
    navbarMenu.classList.toggle('is-active');
    navbarBurger.classList.toggle('is-active');
});