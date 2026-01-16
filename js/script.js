document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Initialize AOS (Animate On Scroll)
    // Provides professional entry animations for your education and project cards
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000, 
            once: true,     
            offset: 100,    
            easing: 'ease-in-out',
        });
    }

    // 2. Typing Animation (Typed.js)
    // Targets the #typed element (ensure your HTML span ID is 'typed')
    const typedElement = document.getElementById('typed');
    if (typedElement && typeof Typed !== 'undefined') {
        new Typed('#typed', {
            strings: [
                'Computer Engineering Student', 
                'Machine Learning & AI Enthusiast', 
                'Full-Stack Developer'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            delaySpeed: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // 3. Navbar Aesthetic & ScrollSpy
    // Adds shadow on scroll and highlights the active section in the menu
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Visual toggle for navbar transparency/shadow
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.padding = '10px 0'; 
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.padding = '15px 0';
        }

        // Active Link Tracking (ScrollSpy)
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // 4. Mobile Navigation Auto-Close
    // Automatically hides the mobile hamburger menu after clicking a link
    const menuToggle = document.getElementById('navbarNav');
    if (menuToggle && typeof bootstrap !== 'undefined') {
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                const toggler = document.querySelector('.navbar-toggler');
                // Only collapse if the toggler is visible (mobile view)
                if (window.getComputedStyle(toggler).display !== 'none') {
                    bsCollapse.hide();
                }
            });
        });
    }

    // 5. Smooth Scroll Precision
    // Offsets the scroll position by 75px so headers aren't hidden by the fixed navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === "") return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerOffset = 75; 
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});