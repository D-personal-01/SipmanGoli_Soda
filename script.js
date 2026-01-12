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

/* ===================== FLAVOR POPUP (PREMIUM DELAY) ===================== */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".flavor-card").forEach(card => {
        let timer;

        card.addEventListener("mouseenter", () => {
            timer = setTimeout(() => {
                const popup = card.querySelector(".flavor-popup");
                if (!popup) return;

                popup.style.opacity = "1";
                popup.style.transform = "translateX(-50%) translateY(-6px)";
            }, 600); // premium delay
        });

        card.addEventListener("mouseleave", () => {
            clearTimeout(timer);
            const popup = card.querySelector(".flavor-popup");
            if (!popup) return;

            popup.style.opacity = "0";
            popup.style.transform = "translateX(-50%) translateY(10px)";
        });
    });
});
