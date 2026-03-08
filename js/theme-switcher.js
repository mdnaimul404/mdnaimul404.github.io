/*
=========================================================
Theme Switcher
Purpose:
- Support dark, light, and system theme
- Save user preference in localStorage
- Keep active UI button in sync
=========================================================
*/

(function () {
    "use strict";

    const STORAGE_KEY = "portfolio-theme";
    const rootElement = document.documentElement;
    const themeButtons = document.querySelectorAll("[data-theme-value]");

    /**
     * Returns the system preferred theme.
     * @returns {"dark" | "light"}
     */
    function getSystemTheme() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    /**
     * Returns the saved theme mode.
     * Possible values: dark, light, system
     * Defaults to system if nothing exists.
     * @returns {"dark" | "light" | "system"}
     */
    function getSavedThemeMode() {
        const savedValue = localStorage.getItem(STORAGE_KEY);

        if (savedValue === "dark" || savedValue === "light" || savedValue === "system") {
            return savedValue;
        }

        return "system";
    }

    /**
     * Applies the real theme to the document root.
     * If mode is "system", we resolve to the current OS preference.
     * @param {"dark" | "light" | "system"} mode
     */
    function applyTheme(mode) {
        const resolvedTheme = mode === "system" ? getSystemTheme() : mode;
        rootElement.setAttribute("data-theme", resolvedTheme);
        updateActiveThemeButton(mode);
    }

    /**
     * Stores user preference and applies it immediately.
     * @param {"dark" | "light" | "system"} mode
     */
    function setTheme(mode) {
        localStorage.setItem(STORAGE_KEY, mode);
        applyTheme(mode);
    }

    /**
     * Updates button active state to reflect selected mode.
     * @param {"dark" | "light" | "system"} activeMode
     */
    function updateActiveThemeButton(activeMode) {
        themeButtons.forEach((button) => {
            const buttonMode = button.getAttribute("data-theme-value");
            button.classList.toggle("active", buttonMode === activeMode);
        });
    }

    /**
     * Bind click listeners to each theme button.
     */
    function bindThemeButtons() {
        themeButtons.forEach((button) => {
            button.addEventListener("click", function () {
                const selectedMode = this.getAttribute("data-theme-value");

                if (selectedMode === "dark" || selectedMode === "light" || selectedMode === "system") {
                    setTheme(selectedMode);
                }
            });
        });
    }

    /**
     * Listen to operating system theme changes.
     * Only react when user's selected mode is "system".
     */
    function bindSystemThemeListener() {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        mediaQuery.addEventListener("change", function () {
            const currentMode = getSavedThemeMode();

            if (currentMode === "system") {
                applyTheme("system");
            }
        });
    }

    /**
     * App bootstrap
     */
    function initThemeSystem() {
        const initialMode = getSavedThemeMode();
        applyTheme(initialMode);
        bindThemeButtons();
        bindSystemThemeListener();
    }

    initThemeSystem();
})();