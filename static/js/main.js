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

document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll('.navbar-link');
    const projectContent = document.getElementById('project-content');
    const projectImage = document.getElementById('project-image'); // ✅ Add this line

    // Define the content for each project
    const projectData = {
        'thesis': {
            title: "A Portable Tracking and Safety Device for the Students of Lucsuhin Integrated School",
            description: "My thesis project involves developing a portable tracking and safety device integrated with a microcontroller. Along with the device, I created three applications tailored for parents, teachers, and police, allowing them to monitor children's location and camera in real-time. The device also includes an emergency button that, when triggered, sends an alert to the parent. From there, the parent can contact the police for assistance, who can then track the child's location using the integrated location tracker. This system is designed to ensure the safety of students, providing quick responses in emergency situations.",
            image: "../static/images/Picture2.jpg",
            alt: "Thesis Project Image"
        },
        'cash-invoice': {
            title: "Cash Invoice System",
            description: "During my internship, I served as a Full Stack Developer in the development of a Cash Invoice System. This system was designed to streamline the invoicing processes of three different companies, eliminating the need for manual copying and pasting. As a result, employees were able to work more efficiently and with fewer errors. I utilized JavaScript, Python, HTML, and CSS for the frontend and backend, and used MySQL to manage the system’s database.",
            image: "../static/images/cashinvoice.jpeg",
            alt: "Cash Invoice Image"
        },
        'purchasing-system': {
            title: "Purchasing System",
            description: "Together with my co-workers during my internship, we developed a Purchasing System for the company, designed to manage data for various clients and integrate seamlessly with a Web App. I contributed to both the front-end and back-end of the project—designing the user interface and implementing functional components for smooth user interaction. On the back end, I worked with Python and MySQL, integrating the system through APIs and AJAX using JavaScript. Through this project, I gained valuable hands-on experience in full stack development and improved my skills in building dynamic, database-driven web applications.",
            image: "../static/images/purchasing.jpg",
            alt: "Purchasing System Image"
        },
        'taps': {
            title: "TAPS",
            description: "The name of our web app is TAPS this is where the magic begins. It serves as the central hub for all the systems we built for the company, from the smallest details to the most complex features. We ensured that all the necessary data they need is stored here.",
            image: "../static/images/bg.jpg",
            alt: "Taisei"
        }
    };

    // Loop through all links and add event listener
    projectLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default link behavior

            const targetId = e.target.getAttribute('data-target');

            if (projectData[targetId]) {
                // Update the content of the project section
                projectContent.querySelector('.project-title').textContent = projectData[targetId].title;
                projectContent.querySelector('.project-description').textContent = projectData[targetId].description;

                // ✅ Update the image and alt text
                if (projectImage) {
                    projectImage.src = projectData[targetId].image;
                    if (['purchasing-system', 'cash-invoice','taps'].includes(targetId)) {
                        projectImage.classList.add('custom-project-image');
                    } else {
                        projectImage.classList.remove('custom-project-image');
                    }
                    
                }
            }
        });
    });
});
