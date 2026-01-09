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

function openMenu() {
    document.getElementById("mobileMenu").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("active");
    document.body.style.overflow = "auto";
}
