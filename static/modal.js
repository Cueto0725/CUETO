document.addEventListener('DOMContentLoaded', function() {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    const educationSection = document.getElementById('education');
    const skillsSection = document.getElementById('skills');

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

        if (educationSection) {
            const educationTop = educationSection.getBoundingClientRect().top;

            if (educationTop < window.innerHeight - 100) {
                educationSection.classList.add('active');
            } else {
                educationSection.classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    const homeLink = document.querySelector('nav a[href="#Home"]');
    if (homeLink) {
        homeLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const skillsLink = document.querySelector('nav a[href="#skills"]');
    if (skillsLink) {
        skillsLink.addEventListener('click', function(event) {
            event.preventDefault();
            if (skillsSection) {
                const skillsTop = skillsSection.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                const scrollToPosition = skillsTop + window.scrollY - (windowHeight / 2) + (skillsSection.offsetHeight / 2) + 70;
                window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
            }
        });
    }

    function resetToHome() {
        setTimeout(() => {
            history.replaceState(null, null, ' ');
            window.scrollTo({ top: 0, behavior: 'instant' });
        }, 10);
    }

    // Ensure redirection to Home section on load
    window.addEventListener('load', function() {
        resetToHome();
    });

    function toggleHorizontalScrollbar() {
        if (window.matchMedia("(orientation: landscape)").matches) {
            document.body.style.overflowX = 'hidden';
        } else {
            document.body.style.overflowX = 'auto';
        }
    }

    toggleHorizontalScrollbar();
    window.addEventListener('orientationchange', toggleHorizontalScrollbar);

    // Ensure pressing Enter reloads and redirects to Home
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            resetToHome();
            location.reload();
        }
    });

    // Force Home section on refresh
    window.addEventListener('beforeunload', function() {
        resetToHome();
    });
});
