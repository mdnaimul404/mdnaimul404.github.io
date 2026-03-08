/*
=========================================================
Typing Effect
Purpose:
- Animate hero subtitle text
- Loop through multiple engineering-focused phrases
- Keep implementation lightweight and dependency-free
=========================================================
*/

(function () {
    "use strict";

    const typingTarget = document.getElementById("typingText");

    if (!typingTarget) {
        return;
    }

    const phrases = [
        "Python | FastAPI | Clean Architecture",
        "Backend Engineer | API Designer | Problem Solver",
        "Scalable Systems | Maintainable Code | Production Thinking"
    ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;

    const typingSpeed = 85;
    const deletingSpeed = 45;
    const pauseAfterTyping = 1500;
    const pauseBeforeTyping = 350;

    function typeLoop() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            characterIndex--;
        } else {
            characterIndex++;
        }

        typingTarget.textContent = currentPhrase.substring(0, characterIndex);

        let timeout = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && characterIndex === currentPhrase.length) {
            timeout = pauseAfterTyping;
            isDeleting = true;
        } else if (isDeleting && characterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            timeout = pauseBeforeTyping;
        }

        window.setTimeout(typeLoop, timeout);
    }

    typeLoop();
})();