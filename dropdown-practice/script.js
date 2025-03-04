document.addEventListener("DOMContentLoaded", () => {
    const servicesBtn = document.getElementById("services-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // Toggle dropdown on click
    servicesBtn.addEventListener("click", (event) => {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!servicesBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});
