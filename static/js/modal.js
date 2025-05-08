document.addEventListener("DOMContentLoaded", function () {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    const educationSection = document.getElementById('education');
    const skillsSection = document.getElementById('skills');
    const programmingSection = document.querySelector("#skill-PL1");
    const projectReveal = document.querySelector(".timeline-project-reveal");
    const workSection = document.getElementById('work');
    const projectSection = document.getElementById('project');
    const aboutSection = document.getElementById('about');
    const offset = 80; // You can change this default offset

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

    // Initial scroll reveal trigger
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // Smooth scroll logic for navigation links
    const homeLink = document.querySelector('nav a[href="#Home"]');
    if (homeLink) {
        homeLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const educationLink = document.querySelector('nav a[href="#education"]');
    if (educationLink && educationSection) {
        educationLink.addEventListener('click', function (event) {
            event.preventDefault();
            const scrollToPosition = educationSection.offsetTop - offset;
            window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
        });
    }

    const skillsLink = document.querySelector('nav a[href="#skills"]');
    if (skillsLink && skillsSection) {
        skillsLink.addEventListener('click', function (event) {
            event.preventDefault();
            const scrollToPosition = skillsSection.offsetTop - offset;
            window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
        });
    }

    const workLink = document.querySelector('nav a[href="#work"]');
    if (workLink && workSection) {
        workLink.addEventListener('click', function (event) {
            event.preventDefault();
            const scrollToPosition = workSection.offsetTop - offset;
            window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
        });
    }

    const projectLink = document.querySelector('nav a[href="#project"]');
    if (projectLink && projectSection) {
        projectLink.addEventListener('click', function (event) {
            event.preventDefault();
            const scrollToPosition = projectSection.offsetTop - offset;
            window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
        });
    }

    const aboutLink = document.querySelector('nav a[href="#about"]');
    if (aboutLink && aboutSection) {
        aboutLink.addEventListener('click', function (event) {
            event.preventDefault();
            const scrollToPosition = aboutSection.offsetTop - offset;
            window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
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