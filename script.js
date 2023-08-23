const humberger = document.querySelector('.hamberger');
const navLink = document.querySelector('.nav-link');

humberger.addEventListener('click', () => {
  // Yang kita toggle bukan humberger, tapi navLink
  // Karena navLink yang kita hide dan show
  navLink.classList.toggle('active');
});