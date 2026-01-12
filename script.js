/* ===================== SMOOTH SCROLL ===================== */
function scrollToFlavors() {
    const flavorsSection = document.getElementById("flavors");
    if (!flavorsSection) return;

    flavorsSection.scrollIntoView({ behavior: "smooth" });
}

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
    document.body.style.overflow = "auto";
}
