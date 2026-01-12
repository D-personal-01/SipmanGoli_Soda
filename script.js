/* ===================== GLOBAL SELECTORS ===================== */
const body = document.body;
const mobileMenu = document.getElementById("mobileMenu");
const backdrop = document.querySelector(".menu-backdrop");

/* ===================== MOBILE MENU ===================== */
function openMenu() {
    if (!mobileMenu || !backdrop) return;

    mobileMenu.classList.add("active");
    backdrop.classList.add("active");

    // Lock background scroll
    body.style.overflow = "hidden";
}

function closeMenu() {
    if (!mobileMenu || !backdrop) return;

    mobileMenu.classList.remove("active");
    backdrop.classList.remove("active");

    // Restore scroll
    body.style.overflow = "auto";
}

/* ===================== CLOSE MENU ON LINK CLICK ===================== */
document.querySelectorAll(".mobile-menu-links a").forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

/* ===================== SMOOTH SCROLL ===================== */
function scrollToFlavors() {
    const flavorsSection = document.getElementById("flavors");
    if (!flavorsSection) return;

    flavorsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

/* ===================== ESC KEY CLOSE MENU ===================== */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
        closeMenu();
    }
});

/* ===================== SAFETY ON LOAD ===================== */
document.addEventListener("DOMContentLoaded", () => {
    // Ensure menu is always closed on refresh
    closeMenu();
});
