document.addEventListener('DOMContentLoaded', function() {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    const educationSection = document.getElementById('education');

    function revealOnScroll() {
        scrollRevealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });

        const educationTop = educationSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (educationTop < windowHeight - 100) {
            educationSection.classList.add('active');
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});