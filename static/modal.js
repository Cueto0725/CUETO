document.addEventListener('DOMContentLoaded', function() {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    const educationSection = document.getElementById('education');

    function revealOnScroll() {
        scrollRevealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });

        const educationTop = educationSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (educationTop < windowHeight - 100) {
            educationSection.classList.add('active');
        } else {
            educationSection.classList.remove('active');
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Home link click handler
    const homeLink = document.querySelector('nav a[href="#Home"]');
    if (homeLink) {
        homeLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
        });
    }

    // Clear anchor from URL after initial scroll
    if (window.location.hash) {
        setTimeout(function() {
            window.history.replaceState({}, document.title, window.location.pathname);
        }, 100); // Small delay to allow initial scroll
    }
});

// FOR HORIZONTAL SCROLLBAR 
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing scrollReveal, home link click handler, and clear anchor code ...

    // Function to toggle horizontal scrollbar based on orientation
    function toggleHorizontalScrollbar() {
        if (window.matchMedia("(orientation: landscape)").matches) {
            document.body.style.overflowX = 'hidden';
        } else {
            document.body.style.overflowX = 'auto'; // Or 'visible'
        }
    }

    // Initial check on page load
    toggleHorizontalScrollbar();

    // Listen for orientation changes
    window.addEventListener('orientationchange', toggleHorizontalScrollbar);
});