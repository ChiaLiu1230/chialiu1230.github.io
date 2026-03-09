// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation (exclude project-cards inside carousel)
document.querySelectorAll('.skill-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Animate the projects carousel as a whole
const pjOuter = document.querySelector('.projects-carousel-outer');
if (pjOuter) {
    pjOuter.style.opacity = '0';
    pjOuter.style.transform = 'translateY(20px)';
    pjOuter.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(pjOuter);
}

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Projects Section Carousel (peek effect) =====
(function () {
    const outer = document.querySelector('.projects-carousel-outer');
    if (!outer) return;

    const track = outer.querySelector('.pj-track');
    const slides = Array.from(outer.querySelectorAll('.pj-slide'));
    const prevBtn = outer.querySelector('.pj-nav-prev');
    const nextBtn = outer.querySelector('.pj-nav-next');
    const dotsContainer = outer.querySelector('.pj-dots');

    if (!track || slides.length === 0) return;

    let current = 0;
    const total = slides.length;
    const GAP = 24;

    // How much of adjacent cards to show (px)
    function getPeek() {
        const w = window.innerWidth;
        if (w < 480) return 28;
        if (w < 768) return 48;
        return 80;
    }

    // Set slide widths and reposition
    function setup() {
        const peek = getPeek();
        const outerW = outer.offsetWidth;
        const slideW = outerW - peek * 2;
        slides.forEach(s => {
            s.style.width = slideW + 'px';
            s.style.flexBasis = slideW + 'px';
        });
        updatePosition(false);
    }

    function updatePosition(animate) {
        if (!animate) track.style.transition = 'none';
        const peek = getPeek();
        const slideW = slides[0].offsetWidth;
        const offset = peek - current * (slideW + GAP);
        track.style.transform = `translateX(${offset}px)`;
        // Restore transition after instant jump
        if (!animate) requestAnimationFrame(() => {
            track.style.transition = '';
        });
    }

    function updateActive() {
        slides.forEach((s, i) => {
            s.classList.toggle('pj-active', i === current);
        });
        dotsContainer.querySelectorAll('.pj-dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
    }

    function goTo(index) {
        current = Math.max(0, Math.min(total - 1, index));
        updatePosition(true);
        updateActive();
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === total - 1;
    }

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'pj-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `第 ${i + 1} 個作品`);
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    slides[0].classList.add('pj-active');
    setup();
    prevBtn.disabled = true;

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    // Touch swipe (whole outer, but exclude image area)
    let touchStartX = 0;
    let touchStartY = 0;
    outer.addEventListener('touchstart', e => {
        if (e.target.closest('.project-image')) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    outer.addEventListener('touchend', e => {
        if (e.target.closest('.project-image')) return;
        const dx = touchStartX - e.changedTouches[0].clientX;
        const dy = Math.abs(touchStartY - e.changedTouches[0].clientY);
        if (Math.abs(dx) > 40 && Math.abs(dx) > dy) {
            goTo(current + (dx > 0 ? 1 : -1));
        }
    }, { passive: true });

    // Mouse drag (exclude image area)
    const viewport = outer.querySelector('.pj-viewport');
    let mouseStartX = 0;
    let mouseActive = false;

    viewport.addEventListener('mousedown', e => {
        if (e.target.closest('.project-image')) return;
        mouseActive = true;
        mouseStartX = e.clientX;
        viewport.style.cursor = 'grabbing';
    });

    document.addEventListener('mouseup', e => {
        if (!mouseActive) return;
        mouseActive = false;
        viewport.style.cursor = '';
        const dx = mouseStartX - e.clientX;
        if (Math.abs(dx) > 40) {
            goTo(current + (dx > 0 ? 1 : -1));
        }
    });

    viewport.addEventListener('mouseleave', () => {
        if (mouseActive) viewport.style.cursor = '';
    });

    // Click on peek cards to navigate
    slides.forEach((slide, i) => {
        slide.addEventListener('click', () => {
            if (i !== current) goTo(i);
        });
    });

    // Resize handler
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(setup, 100);
    });
})();

// ===== Image Carousel =====
document.querySelectorAll('.carousel').forEach(carousel => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-btn-prev');
    const nextBtn = carousel.querySelector('.carousel-btn-next');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    let currentIndex = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (index === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', `跳到第 ${index + 1} 張`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = carousel.querySelectorAll('.carousel-dot');

    function goToSlide(index) {
        slides[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        currentIndex = (index + slides.length) % slides.length;
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
});
