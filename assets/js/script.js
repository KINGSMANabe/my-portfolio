// ─── Single scroll listener (performance) ───────────────────────────────────
window.addEventListener('scroll', () => {
   
    // 1. Scrollspy — active nav link
    const sections = document.querySelectorAll('section');
    const navLinks  = document.querySelectorAll('.nav-links li a, .menu-links .menu a');
    let current     = '';

    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

    if (isAtBottom) {
        current = 'contact';
    } else {
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // 2. Scroll-to-top button visibility
    const mybutton = document.getElementById('scroll-up-btn');
    if (mybutton) {
        mybutton.style.display = window.scrollY > 400 ? 'block' : 'none';
    }
});

// ─── Hamburger menu toggle ───────────────────────────────────────────────────
function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    if (!menu || !icon) return;
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

// ─── Scroll to top ───────────────────────────────────────────────────────────
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Swiper initialization ───────────────────────────────────────────────────
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