document.addEventListener("DOMContentLoaded", function () {
    // About Modal
    const aboutBtn = document.getElementById("aboutBtn");
    const aboutModal = document.getElementById("aboutModal");
    const closeButtons = document.querySelectorAll(".close");

    aboutBtn.addEventListener("click", function () {
        aboutModal.style.display = "flex";
    });

    // Work Experience Modal
    const workBtn = document.getElementById("Workbutton");
    const workModal = document.getElementById("Workexpmodal");

    workBtn.addEventListener("click", function () {
        workModal.style.display = "flex";
    });

    // Close modals when clicking the close button
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".modal").style.display = "none";
        });
    });

    // Close modals when clicking outside the modal content
    window.addEventListener("click", function (event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });
});
