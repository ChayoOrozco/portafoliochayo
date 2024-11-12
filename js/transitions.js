
    // Fade-in effect on page load
    document.addEventListener("DOMContentLoaded", function() {
        document.body.classList.add("fade-in");
    });

    // Apply fade-out effect on link clicks
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply the effect to internal links (not external)
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                e.preventDefault();
                document.body.classList.remove("fade-in");
                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = href;
                }, 500); // Duration should match the CSS transition time
            }
        });
    });