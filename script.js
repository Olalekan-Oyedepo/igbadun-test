// Shared behaviour for every Ìgbà-Dún page: the phone menu and the footer year.
document.addEventListener('DOMContentLoaded', () => {
    const topBar = document.querySelector('.top-bar');
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('site-nav');

    if (topBar && toggle && nav) {
        const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

        const setOpen = (open) => {
            topBar.classList.toggle('menu-open', open);
            toggle.setAttribute('aria-expanded', String(open));
            toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        };

        toggle.addEventListener('click', () => setOpen(!isOpen()));

        // Close the menu after choosing a page
        nav.addEventListener('click', (event) => {
            if (event.target.closest('a')) {
                setOpen(false);
            }
        });

        // Close with the Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && isOpen()) {
                setOpen(false);
                toggle.focus();
            }
        });

        // Close if the window is widened back to the desktop layout
        const desktop = window.matchMedia('(min-width: 901px)');
        desktop.addEventListener('change', (event) => {
            if (event.matches) {
                setOpen(false);
            }
        });
    }

    // Keep the copyright year current
    document.querySelectorAll('[data-year]').forEach((element) => {
        element.textContent = new Date().getFullYear();
    });
});
