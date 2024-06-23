document.addEventListener("DOMContentLoaded", function() {
    const mainContentDiv = document.querySelector(".main-content");
    const productLinks = document.querySelectorAll(".content-link");
    const wrapper = document.querySelector(".wrapper")
    // Initially hide the main content
    mainContentDiv.style.display = "none";
    wrapper.style.display = "block";

    productLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Show the main content
            mainContentDiv.style.display = "block";
            wrapper.style.display = "none";

            // Get the target section from the link's href attribute
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
