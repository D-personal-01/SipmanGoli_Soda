/* ===================== SMOOTH SCROLL ===================== */
function scrollToFlavors() {
    const flavorsSection = document.getElementById("flavors");
    if (flavorsSection) {
        flavorsSection.scrollIntoView({ behavior: "smooth" });
    }
}

/* ===================== MOBILE MENU ===================== */
function openMenu() {
    const menu = document.getElementById("mobileMenu");
    const backdrop = document.querySelector(".menu-backdrop");

    menu.classList.add("active");
    backdrop.classList.add("active");

    // Disable background scroll
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    const menu = document.getElementById("mobileMenu");
    const backdrop = document.querySelector(".menu-backdrop");

    menu.classList.remove("active");
    backdrop.classList.remove("active");

    // Enable background scroll
    document.body.style.overflow = "auto";
}

/* ===================== PAGE LOAD ===================== */
document.addEventListener("DOMContentLoaded", () => {
    console.log("SIPMAN Goli Soda website loaded successfully");
});
