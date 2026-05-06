// Hamburger menu toggle
function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    if (!menu || !icon) return;
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

// Scroll-to-top button visibility
function ScrollToTop() {
    const mybutton = document.getElementById('scroll-up-btn');
    if (!mybutton) return;
    mybutton.style.display = window.scrollY > 400 ? 'block' : 'none';
}

window.addEventListener('scroll', ScrollToTop);

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const projectSwiper = new Swiper('.project-swiper', {
       loop:true,
       spaceBetween: 24,
       grabCursor: true,

       autoplay: {
         delay: 3000,          // milliseconds between slides (3s)
         disableOnInteraction: false,  // keeps autoplay going after user swipes
      }, 

       pagination: {
         el: '.swiper-pagination',
         clickable: true,
       },
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
       breakpoints: {
         0: {
           slidesPerView: 1,
           spaceBetween: 16,
         },
         769: {
           slidesPerView: 3,
           spaceBetween: 24,
         },
       },
     });
  
