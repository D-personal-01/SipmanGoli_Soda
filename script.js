// Smooth scroll to Flavors section from Hero button
function scrollToFlavors() {
    const flavorsSection = document.getElementById("flavors");
    if (flavorsSection) {
        flavorsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// Optional: future use placeholder
document.addEventListener("DOMContentLoaded", () => {
    console.log("SIPMAN Goli Soda website loaded successfully");
});
