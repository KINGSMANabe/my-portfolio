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
            const navHeight = document.getElementById('navbar')?.offsetHeight 
                   || document.getElementById('hamburger-nav')?.offsetHeight 
                   || 80;
            const sectionTop = section.offsetTop - navHeight - 20;
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


// ─── Typing animation ────────────────────────────────────────────────────────
const typedText = document.getElementById('typed-text');
const phrases   = [
    'an IT Professional..',
    'a VA Aspirant..',
    'a Cyclist..',
];

let phraseIndex = 0;
let charIndex   = 0;
let isDeleting  = false;

const TYPING_SPEED   = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER    = 1800;

function type() {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
        // Type forward
        charIndex++;
        typedText.textContent = currentPhrase.slice(0, charIndex);

        if (charIndex === currentPhrase.length) {
            // Phrase complete — pause then start deleting
            setTimeout(() => {
                isDeleting = true;
                type();
            }, PAUSE_AFTER);
            return;
        }
        setTimeout(type, TYPING_SPEED);

    } else {
        // Delete backward
        charIndex--;
        typedText.textContent = currentPhrase.slice(0, charIndex);

        if (charIndex === 0) {
            // Fully deleted — move to next phrase
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 400);
            return;
        }
        setTimeout(type, DELETING_SPEED);
    }
}

// Kick off after a short delay
setTimeout(type, 500);


// ─── Dropdown: tap/click to open, tap outside to close ───────────────────────
const dropdownTriggers = document.querySelectorAll('.cv-dropdown > .btn1, .cv-dropdown > .btn2');

dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.stopPropagation(); // stop this click from also triggering the "outside click" closer below

        const dropdown = trigger.closest('.cv-dropdown');
        const isOpen   = dropdown.classList.contains('open');

        // Close any other open dropdown first
        document.querySelectorAll('.cv-dropdown.open').forEach(d => {
            if (d !== dropdown) d.classList.remove('open');
        });

        dropdown.classList.toggle('open', !isOpen);
    });
});

// Tap/click anywhere outside any dropdown — close all
document.addEventListener('click', (e) => {
    if (!e.target.closest('.cv-dropdown')) {
        document.querySelectorAll('.cv-dropdown.open').forEach(d => d.classList.remove('open'));
    }
});

// Close dropdown automatically once a CV link is tapped
document.querySelectorAll('.cv-dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const dropdown = link.closest('.cv-dropdown');
        dropdown?.classList.remove('open');
        dropdown?.classList.add('force-reset');

        // Remove the temporary class after the transition finishes
        setTimeout(() => {
            dropdown?.classList.remove('force-reset');
        }, 350);
    });
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
         el: '.swiper-project-pagination',
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
