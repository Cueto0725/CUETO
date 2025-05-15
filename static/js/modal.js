document.addEventListener("DOMContentLoaded", function () {
  const scrollRevealElements = document.querySelectorAll(".scroll-reveal");
  const educationSection = document.getElementById("education");
  const skillsSection = document.getElementById("skills");
  const programmingSection = document.querySelector("#skill-PL1");
  const projectReveal = document.querySelector(".timeline-project-reveal");
  const workSection = document.getElementById("work");
  const projectSection = document.getElementById("project");
  const aboutSection = document.getElementById("about");
  const homeSection = document.getElementById("Home");
  const navLinks = document.querySelectorAll("nav a");
  const offset = 80;

  function revealOnScroll() {
    scrollRevealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });

    if (educationSection) {
      const educationTop = educationSection.getBoundingClientRect().top;
      if (educationTop < window.innerHeight - 100) {
        educationSection.classList.add("active");
      } else {
        educationSection.classList.remove("active");
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

  // Smooth scroll logic for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        let scrollToPosition = targetElement.offsetTop;
        if (targetId === "#Home") {
          scrollToPosition = 0;
        } else {
          scrollToPosition -= offset;
        }
        window.scrollTo({ top: scrollToPosition, behavior: "smooth" });

        this.blur();
      }
    });
  });

  function resetToHome() {
    setTimeout(() => {
      history.replaceState(null, null, " ");
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 10);
  }

  window.addEventListener("load", function () {
    resetToHome();
  });

  function toggleHorizontalScrollbar() {
    if (window.matchMedia("(orientation: landscape)").matches) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }
  }

  toggleHorizontalScrollbar();
  window.addEventListener("orientationchange", toggleHorizontalScrollbar);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      resetToHome();
      location.reload();
    }
  });

  window.addEventListener("beforeunload", function () {
    resetToHome();
  });
});
