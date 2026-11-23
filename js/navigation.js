// Keep the desktop navigation expanded and the mobile menu collapsible.
const desktopNavigation = window.matchMedia('(min-width: 768px)');
const navigationMenus = document.querySelectorAll('.nav-menu');

function updateNavigationLayout() {
    navigationMenus.forEach((menu) => {
        menu.open = desktopNavigation.matches;
    });
}

updateNavigationLayout();
desktopNavigation.addEventListener('change', updateNavigationLayout);
