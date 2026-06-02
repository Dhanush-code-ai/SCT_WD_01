/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   PAGE LOAD ANIMATION
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/* =========================
   BUTTON HOVER EFFECT
========================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});


/* =========================
   PROJECT CARD EFFECT
========================= */

const cards = document.querySelectorAll(
    ".project-card, .service-card, .about-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "0.3s";

        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";
    });

});


/* =========================
   ACTIVE PAGE DETECTION
========================= */

const currentPage =
    window.location.pathname.split("/").pop();

const navLinks =
    document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        navLinks.forEach(item =>
            item.classList.remove("active")
        );

        link.classList.add("active");
    }

});


/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "Portfolio Website Loaded Successfully 🚀"
);