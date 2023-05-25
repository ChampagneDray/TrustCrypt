let menuIcon = document.querySelector('#menu-icon');
let navInner = document.querySelector('.nav__inner');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navInner.classList.toggle('active');
}

menuIcon.classList.remove('bx-x')
navInner.classList.remove('active')
// window.onscroll = () => {
//   let header = document.querySelector('header');
//   header.classList.toggle('sticky', window.scrollY > 100);
// }