// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const cursor = document.querySelector('.custom-cursor');

// Update cursor position on mouse move
document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

// Add the line effect when hovering over menu links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('menu-hover');
    });
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('menu-hover');
    });
});

// Check if we're on the index page and hide the Home link if we are
document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    
    // Check if the current URL ends with 'index.html' or '/'
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        homeLink.style.display = 'none';
    }
});