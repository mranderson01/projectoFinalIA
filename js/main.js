// Header scroll effect
function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Mobile menu functionality
function setupMobileMenu() {
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <div class="mobile-menu-content">
            <div class="mobile-menu-header">
                <a href="/" class="logo">LittleSteps</a>
                <button class="close-menu">×</button>
            </div>
            <nav class="mobile-nav">
                <a href="#" class="mobile-nav-link">Girls</a>
                <a href="#" class="mobile-nav-link">Boys</a>
                <a href="#" class="mobile-nav-link">Toddlers (2-5)</a>
                <a href="#" class="mobile-nav-link">Kids (6-10)</a>
                <a href="#" class="mobile-nav-link">Collections</a>
                <a href="#" class="mobile-nav-link">Sale</a>
            </nav>
        </div>
    `;

    document.body.appendChild(mobileMenu);

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    const closeButton = mobileMenu.querySelector('.close-menu');
    closeButton.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Product card template
function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.imageUrl}" alt="${product.name}">
                ${product.onSale ? '<span class="sale-badge">SALE</span>' : ''}
                ${product.isNew ? '<span class="new-badge">NEW</span>' : ''}
            </div>
            <div class="product-info">
                <div class="product-header">
                    <h3>${product.name}</h3>
                    <div class="rating">
                        <span class="stars">★★★★★</span>
                        <span class="rating-number">${product.rating}</span>
                    </div>
                </div>
                <p class="age-range">${product.ageRange}</p>
                <div class="product-price">
                    ${product.onSale 
                        ? `<span class="sale-price">$${product.salePrice}</span>
                           <span class="original-price">$${product.price}</span>`
                        : `<span class="price">$${product.price}</span>`
                    }
                    <button class="add-to-cart">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Category card template
function createCategoryCard(category) {
    return `
        <a href="#" class="category-card ${category.color}">
            <div class="category-image">
                <img src="${category.imageUrl}" alt="${category.name}">
            </div>
            <h3>${category.name}</h3>
        </a>
    `;
}

// Collection card template
function createCollectionCard(collection) {
    return `
        <div class="collection-car
d ${collection.bgColor}">
            <div class="collection-image">
                <img src="${collection.imageUrl}" alt="${collection.title}">
            </div>
            <div class="collection-info">
                <h3>${collection.title}</h3>
                <p>${collection.description}</p>
                <button class="btn btn-outline">${collection.buttonText}</button>
            </div>
        </div>
    `;
}

// Initialize the page
function initializePage() {
    // Set up scroll listener
    window.addEventListener('scroll', handleScroll);

    // Set up mobile menu
    setupMobileMenu();

    // Render featured products
    const featuredProductsSection = document.getElementById('featuredProducts');
    if (featuredProductsSection) {
        featuredProductsSection.innerHTML = `
            <div class="container">
                <div class="section-title">
                    <h2>Featured Shoes</h2>
                    <p>Discover our collection of colorful, comfortable shoes designed especially for growing feet.</p>
                </div>
                <div class="products-grid">
                    ${products.filter(p => p.isPopular).map(createProductCard).join('')}
                </div>
            </div>
        `;
    }

    // Render categories
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
        categoriesSection.innerHTML = `
            <div class="container">
                <div class="section-title">
                    <h2>Shop By Category</h2>
                    <p>Find the perfect shoes for every occasion, from playground adventures to special events.</p>
                </div>
                <div class="categories-grid">
                    ${categories.map(createCategoryCard).join('')}
                </div>
            </div>
        `;
    }

    // Render collections
    const collectionsSection = document.getElementById('specialCollections');
    if (collectionsSection) {
        collectionsSection.innerHTML = `
            <div class="container">
                <div class="section-title">
                    <h2>Special Collections</h2>
                    <p>Explore our specially curated shoe collections for every season and occasion.</p>
                </div>
                <div class="collections-grid">
                    ${collections.map(createCollectionCard).join('')}
                </div>
            </div>
        `;
    }

    // Set current year in footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);