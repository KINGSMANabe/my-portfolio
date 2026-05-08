// Active link highlighting on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links li a, .menu-links .menu a');

window.addEventListener('scroll', () => {
    let current = '';

    // Check if user is at the very bottom of the page
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

    if (isAtBottom) {
        // Force highlight the last nav link (Contact)
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
});
// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const hamburgerNav = document.getElementById('hamburger-nav');
    const navHeight = (navbar || hamburgerNav).offsetHeight;

    if (window.scrollY > 0) {
        navbar?.classList.add('sticky');
        hamburgerNav?.classList.add('sticky');
        // Add padding to body equal to nav height to prevent jump
        document.body.style.paddingTop = navHeight + 'px';
    } else {
        navbar?.classList.remove('sticky');
        hamburgerNav?.classList.remove('sticky');
        // Remove padding when back at top
        document.body.style.paddingTop = '0px';
    }
});

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
  
