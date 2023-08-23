const humberger = document.querySelector('.hamberger');
const navLink = document.querySelector('.nav-link');

humberger.addEventListener('click', () => {
  navLink.classList.toggle('active');
});