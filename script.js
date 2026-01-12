/* ===================== MOBILE MENU ===================== */
function openMenu() {
    const menu = document.getElementById("mobileMenu");
    const backdrop = document.querySelector(".menu-backdrop");

    if (!menu || !backdrop) return;

    menu.classList.add("active");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    const menu = document.getElementById("mobileMenu");
    const backdrop = document.querySelector(".menu-backdrop");

    if (!menu || !backdrop) return;

    menu.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
}


/* ===================== SMOOTH SCROLL ===================== */
function scrollToFlavors() {
    const flavors = document.getElementById("flavors");
    if (!flavors) return;

    flavors.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ===================== SAFETY INIT ===================== */
document.addEventListener("DOMContentLoaded", () => {
    // Ensure menu is closed on load
    closeMenu();
});

