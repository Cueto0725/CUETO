document.addEventListener("DOMContentLoaded", function () {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    const educationSection = document.getElementById('education');
    const skillsSection = document.getElementById('skills');
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
                projectReveal.classList.remove("active"); // Remove when scrolling up
            }
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Call it once to check initial visibility

    // Smooth scroll for Home link
    const homeLink = document.querySelector('nav a[href="#Home"]');
    if (homeLink) {
        homeLink.addEventListener('click', function(event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Smooth scroll for Skills section
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

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("emailModal");
    const emailIcon = document.querySelector(".email-icon");
    const closeBtn = document.querySelector(".close-btn");
    const emailForm = document.getElementById("emailForm");

    // Open Modal when Email Icon is Clicked
    emailIcon.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Close Modal when Close Button is Clicked
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close Modal when Clicking Outside of It
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle Form Submission
    emailForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        // Send Email using "mailto"
        window.location.href = `mailto:jeanclaudeleonard.cueto@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
        
        modal.style.display = "none"; // Close Modal
        emailForm.reset(); // Clear Form Fields
    });
});
