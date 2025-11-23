document.addEventListener('DOMContentLoaded', () => {
    createSnowflakes();
    startCountdown();
    loadWishlist();
    setupSortControls();
    setupThemeToggle();
});

let currentCategory = 'all';
let currentSort = null;

function createSnowflakes() {
    const snowContainer = document.getElementById('snow-container');
    const snowflakeCount = 40; // Fewer flakes for a cleaner look

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Random positioning and sizing
        const left = Math.random() * 100;
        const size = Math.random() * 3 + 2; // 2px to 5px
        const duration = Math.random() * 10 + 10; // 10s to 20s (slow)
        const delay = Math.random() * 10; // Random start delay

        snowflake.style.left = `${left}%`;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `-${delay}s`; // Negative delay to start immediately

        snowContainer.appendChild(snowflake);
    }
}

function setupSortControls() {
    const ascBtn = document.getElementById('sort-asc');
    const descBtn = document.getElementById('sort-desc');

    ascBtn.addEventListener('click', () => sortWishlist('asc'));
    descBtn.addEventListener('click', () => sortWishlist('desc'));
}

function setupThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

function renderFilters(items) {
    const filtersContainer = document.getElementById('filters');
    const categories = ['all', ...new Set(items.map(item => item.category))];

    filtersContainer.innerHTML = categories.map(cat => `
        <button class="filter-btn ${cat === currentCategory ? 'active' : ''}" 
                onclick="filterWishlist('${cat}')">
            ${cat === 'all' ? 'Tout' : cat}
        </button>
    `).join('');
}

// Make filterWishlist global so it can be called from HTML
window.filterWishlist = function (category) {
    currentCategory = category;
    applyFiltersAndSort();
}

function sortWishlist(direction) {
    currentSort = direction;

    // Toggle active class
    document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
    if (direction) {
        document.getElementById(`sort-${direction}`).classList.add('active');
    }

    applyFiltersAndSort();
}

function applyFiltersAndSort() {
    if (typeof wishlistData === 'undefined') return;

    let filteredItems = [...wishlistData];

    // Filter
    if (currentCategory !== 'all') {
        filteredItems = filteredItems.filter(item => item.category === currentCategory);
    }

    // Sort
    if (currentSort) {
        filteredItems.sort((a, b) => {
            return currentSort === 'asc' ? a.price - b.price : b.price - a.price;
        });
    }

    renderWishlist(filteredItems);
    renderFilters(wishlistData); // Re-render filters to update active state
}

function startCountdown() {
    const countdownEl = document.getElementById('countdown');
    const christmas = new Date(new Date().getFullYear(), 11, 25); // Month is 0-indexed

    // If Christmas has passed this year, target next year
    if (new Date() > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }

    function update() {
        const now = new Date();
        const diff = christmas - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        countdownEl.textContent = `${days} Jours, ${hours} Heures, ${minutes} Minutes avant Noël`;
    }

    update();
    setInterval(update, 60000);
}

async function loadWishlist() {
    // Use global variable from data.js to avoid CORS issues with file:// protocol
    if (typeof wishlistData !== 'undefined') {
        renderFilters(wishlistData);
        renderWishlist(wishlistData);
    } else {
        console.error('Wishlist data not found.');
        document.getElementById('wishlist-grid').innerHTML = '<p>Impossible de charger la liste.</p>';
    }
}

function renderWishlist(items) {
    const grid = document.getElementById('wishlist-grid');
    grid.innerHTML = items.map(item => `
        <article class="card">
            <a href="${item.link}" target="_blank" class="card-link-wrapper">
                <div class="card-image-container">
                    <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy">
                    <div class="card-link-overlay">
                        <span class="view-btn">Voir le lien</span>
                    </div>
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <span class="card-category">${item.category}</span>
                        <h2 class="card-title">${item.title}</h2>
                        ${item.size ? `<div class="card-size">Taille : ${item.size}</div>` : ''}
                        <div class="card-price">${item.price.toFixed(2)} €</div>
                    </div>
                </div>
            </a>
        </article>
    `).join('');
}
