// Initial Variables
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

// Open/Close funtion on Navigation
const openNav = function () {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open'); // Selects the CSS 'open' selector and toggles it on/off
}

hamburger.addEventListener('click', openNav); // Runs the function upon click