// JavaScript for custom cursor movement and hover effect
document.addEventListener('DOMContentLoaded', () => {
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
});
