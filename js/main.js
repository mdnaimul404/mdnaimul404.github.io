/*
=========================================================
Main JavaScript Entry
Purpose:
- Initialize portfolio-wide interactions
=========================================================
*/

document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio initialized successfully.");

    const backToTopBtn = document.getElementById("backToTopBtn");

    if (!backToTopBtn) {
        console.log("Back to top button not found.");
        return;
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});