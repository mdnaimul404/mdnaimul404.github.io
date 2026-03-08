/*
=========================================================
Main JavaScript Entry
Purpose:
- Initialize portfolio-wide interactions
=========================================================
*/
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio initialized successfully.");
});