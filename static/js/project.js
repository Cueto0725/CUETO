document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll('.navbar-link');
    const projectContent = document.getElementById('project-content');

    // Define the content for each project
    const projectData = {
            'thesis': {
            title: "A Portable Tracking and Safety Device for the Students of Lucsuhin Integrated School",
            description: "My thesis project involves developing a portable tracking and safety device integrated with a microcontroller. Along with the device, I created three applications tailored for parents, teachers, and police, allowing them to monitor children's location and camera in real-time. The device also includes an emergency button that, when triggered, sends an alert to the parent. From there, the parent can contact the police for assistance, who can then track the child's location using the integrated location tracker. This system is designed to ensure the safety of students, providing quick responses in emergency situations."
        },
        'cash-invoice': {
            title: "Cash Invoice System",
            description: "During my internship, I developed a Cash Invoice System for the company that will handle three different clients with a database, backend, and frontend that can interact with the user."
        },
        'purchasing-system': {
            title: "Purchasing System",
            description: "Description for the Purchasing System goes here."
        },
        'taps': {
            title: "TAPS",
            description: "Description for the TAPS project goes here."
        },
        'more-info': {
            title: "For More Info",
            description: "Detailed information about all projects can be found here."
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
            }
        });
    });
});
