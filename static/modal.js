document.addEventListener("DOMContentLoaded", function () {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    const educationSection = document.getElementById('education');
    const skillsSection = document.getElementById('skills');
    const programmingSection = document.getElementById('skill-PL1'); // Added for Programming Languages
    const projectReveal = document.querySelector(".timeline-project-reveal");

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

        if (projectReveal) {
            const revealTop = projectReveal.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < window.innerHeight - revealPoint) {
                projectReveal.classList.add("active");
            } else {
                projectReveal.classList.remove("active");
            }
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // Smooth Scroll to Skills Section + Programming Languages
    const skillsLink = document.querySelector('nav a[href="#skills"]');
    if (skillsLink) {
        skillsLink.addEventListener('click', function (event) {
            event.preventDefault();
            if (skillsSection) {
                // Adjust scroll position for better visibility
                const scrollToPosition = skillsSection.offsetTop - 80;
                window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });

                // Also reveal Programming Languages section
                if (programmingSection) {
                    setTimeout(() => {
                        const progScrollPosition = programmingSection.offsetTop - 80;
                        window.scrollTo({ top: progScrollPosition, behavior: 'smooth' });
                    }, 600); // Delay to ensure both sections are revealed
                }
            }
        });
    }

    // Home link smooth scroll
    const homeLink = document.querySelector('nav a[href="#Home"]');
    if (homeLink) {
        homeLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function resetToHome() {
        setTimeout(() => {
            history.replaceState(null, null, ' ');
            window.scrollTo({ top: 0, behavior: 'instant' });
        }, 10);
    }

    window.addEventListener('load', function () {
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

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            resetToHome();
            location.reload();
        }
    });

    window.addEventListener('beforeunload', function () {
        resetToHome();
    });
});


window.onload = function () {
    setTimeout(function () {
        // Step 1: Change logo from Group 4 (2).png to Group 5.png
        const loadingImage = document.getElementById("loading-image");
        loadingImage.src = "static/images/Group 5.png";

        // Step 2: Fade out the loading screen after 1 more second
        setTimeout(function () {
            const loadingScreen = document.getElementById("loading-screen");
            const mainContent = document.getElementById("main-content");

            // Fade out the loading screen
            loadingScreen.classList.add("fade-out");

            // Step 3: Show the main content after a delay for the transition
            setTimeout(function () {
                loadingScreen.style.display = "none"; // Hide loading screen after fade-out
                mainContent.style.display = "block";  // Show main content
                mainContent.classList.add("visible"); // Apply the visible class for fade-in effect
            }, 1000); // Match this with your fade-out duration
        }, 1000); // Wait for 2 seconds before showing the next steps
    }, 2000); // Initial delay for 2 seconds
};
