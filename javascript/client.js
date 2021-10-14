const hamburgerMenu = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.close-menu')


const openMenu = function() {
  const nav = document.querySelector('.mobile-nav');
  nav.style.display = "block";
  nav.style.textAlign = "center";
  hamburgerMenu.classList.toggle('mobile-nav');
  const barIcon = document.querySelector('.bar');
  barIcon.style.display = "none";
  const crossIcon = document.querySelector('.cross');
  crossIcon.style.display = "flex";
}

hamburgerMenu.addEventListener('click', openMenu)

const closeMenu = function() {
  const nav = document.querySelector('.mobile-nav');
  nav.style.width = "0";
  nav.style.display = "none";
  hamburgerClose.classList.toggle('close-menu');
  const barIcon = document.querySelector('.bar');
  barIcon.style.display = "flex";
  const crossIcon = document.querySelector('.cross');
  crossIcon.style.display = "none";
}

hamburgerClose.addEventListener('click', closeMenu)