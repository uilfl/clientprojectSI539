// Keep copyright dates consistent across all pages.
document.querySelectorAll('[data-current-year]').forEach((year) => {
    year.textContent = new Date().getFullYear();
});
