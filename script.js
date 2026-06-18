document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE NAVBAR CONTROLS ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if(mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- 2. INTERACTIVE MAP WIDGET SETUP ---
    // Coordinates mapping to central downtown / North Gay St sector Knoxville TN
    const popWeaselCoords = [35.9723, -83.9195]; 
    
    const map = L.map('map', {
        scrollWheelZoom: false // prevents erratic zooming when user scrolls down page
    }).setView(popWeaselCoords, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Adds a visual pin directly labeling Pop Weasel Emporium
    L.marker(popWeaselCoords).addTo(map)
        .bindPopup('<b>Pop Weasel Emporium</b><br>611 N Gay St.')
        .openPopup();


    // --- 3. DYNAMIC INVENTORY GALLERY FILTERS ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active style from all buttons, add to clicked button
            filterButtons.forEach(b => b.classList.remove('bg-purple-700', 'text-white'));
            filterButtons.forEach(b => b.classList.add('bg-white', 'text-stone-700'));
            btn.classList.add('bg-purple-700', 'text-white');
            btn.classList.remove('bg-white', 'text-stone-700');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hidden-item');
                } else {
                    item.classList.add('hidden-item');
                }
            });
        });
    });


    // --- 4. INTERACTIVE FAQ ACCORDION ---
    const faqToggles = document.querySelectorAll('.faq-toggle');

    faqToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('i');
            
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });
});
