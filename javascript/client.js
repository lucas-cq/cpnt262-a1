// Initial Variables
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

// Open/Close funtion on Navigation
const openNav = function () {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
}

hamburger.addEventListener('click', openNav);