// Mobile Menu Toggle Logic

document.addEventListener('DOMContentLoaded', () => {
    // Grab the button and the menu from the HTML
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a');

    // Listen for a click on the button
    mobileMenuBtn.addEventListener('click', () => {
        // Toggle the 'hidden' class to show or hide the menu
        mobileMenu.classList.toggle('hidden');
    });

    // Close the menu automatically when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
});
