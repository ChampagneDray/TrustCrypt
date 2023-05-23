const swiper = new Swiper(".swiper", {
  effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
});
// window.onscroll = () => {
//   let header = document.querySelector('header');
//   header.classList.toggle('sticky', window.scrollY > 100);
// }