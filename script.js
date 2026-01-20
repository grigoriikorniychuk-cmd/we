// ===========================
// Mobile Menu Toggle
// ===========================
// Hamburger Menu Toggle (Combined)
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');

if (menuToggle && menuOverlay) {
    console.log('Burger menu elements found. Initializing toggle.');
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent any default button behavior
        console.log('Burger menu clicked via event listener');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Overlay classes:', menuOverlay.classList.toString());
    });
} else {
    console.error('Burger menu elements NOT found', { menuToggle, menuOverlay });
}

if (menuClose && menuOverlay) {
    menuClose.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Burger menu tabs
const menuTabs = document.querySelectorAll('.menu-tab');
menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        menuTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const catalogTab = document.getElementById('catalogTab');
        const infoTab = document.getElementById('infoTab');

        if (tab.dataset.tab === 'catalog') {
            catalogTab.style.display = 'flex';
            infoTab.style.display = 'none';
        } else {
            catalogTab.style.display = 'none';
            infoTab.style.display = 'flex';
        }
    });
});

// ===========================
// Hero Slider
// ===========================
const sliderImages = [
    'https://images.unsplash.com/photo-1523690136294-878f9b46f631?q=80&w=2000&auto=format&fit=crop', // Luxury pink peonies
    'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=2000&auto=format&fit=crop', // Soft white roses
    'https://images.unsplash.com/photo-1519225495810-758416ca209c?q=80&w=2000&auto=format&fit=crop'  // Lifestyle gifting
];

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');

function initSliderImages() {
    slides.forEach((slide, index) => {
        const slideImage = slide.querySelector('.slide-image');
        if (slideImage && sliderImages[index]) {
            slideImage.style.backgroundImage = `url('${sliderImages[index]}')`;
        }
    });
}


function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

// Auto-play slider
let sliderInterval = setInterval(nextSlide, 5000);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, 5000);
    });
});

// ===========================
// Category Tabs
// ===========================
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.category;
        filterProducts(category);
    });
});

function filterProducts(category) {
    // In a real application, this would filter products
    console.log('Filtering by category:', category);
}

// ===========================
// Product Data
// ===========================
const products = [
    {
        id: 1,
        title: 'Букет "Розовое Облако"',
        price: 5490,
        oldPrice: 6200,
        badge: '+274₽',
        category: 'popular',
        image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Белые Тюльпаны (25 шт)',
        price: 3990,
        oldPrice: null,
        badge: '+200₽',
        category: 'flowers',
        image: 'https://images.unsplash.com/photo-1596438459194-f275f413d6ff?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Авторский Букет "Элеганс"',
        price: 7490,
        oldPrice: 8500,
        badge: '+375₽',
        category: 'popular',
        image: 'https://images.unsplash.com/photo-1459156491755-9155551ae215?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Королевские Пионы',
        price: 6990,
        oldPrice: null,
        badge: '+350₽',
        category: 'popular',
        image: 'https://images.unsplash.com/photo-1525310238806-e13d33290296?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 5,
        title: 'Корзина "Пастель"',
        price: 6990,
        oldPrice: 7900,
        badge: '+349₽',
        category: 'flowers',
        image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 6,
        title: 'Букет невесты "Шарм"',
        price: 8990,
        oldPrice: null,
        badge: '+449₽',
        category: 'flowers',
        image: 'https://images.unsplash.com/photo-1595168037326-f78a78370956?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 7,
        title: 'Микс "Лучистое Солнце"',
        price: 3590,
        oldPrice: null,
        badge: '+180₽',
        category: 'flowers',
        image: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 8,
        title: 'Красные Розы Эквадор',
        price: 5990,
        oldPrice: 7200,
        badge: '+300₽',
        category: 'bouquets',
        image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 9,
        title: 'Авторская Композиция #1',
        price: 7490,
        oldPrice: null,
        badge: '+374₽',
        category: 'bouquets',
        image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 10,
        title: 'Нежный Микс в Коробке',
        price: 5490,
        oldPrice: 6200,
        badge: '+274₽',
        category: 'bouquets',
        image: 'https://images.unsplash.com/photo-1595168037326-f78a78370956?q=80&w=800&auto=format&fit=crop'
    }
];

// ===========================
// Render Products
// ===========================
function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="price-current">${product.price.toLocaleString('ru-RU')}₽</span>
                    ${product.oldPrice ? `<span class="price-old">${product.oldPrice.toLocaleString('ru-RU')}₽</span>` : ''}
                </div>
                <button class="product-btn" onclick="addToCart(${product.id})">В корзину</button>
            </div>
        </div>
    `;
}

function renderProducts() {
    const popularGrid = document.getElementById('popularProducts');
    const flowersGrid = document.getElementById('flowersProducts');
    const bouquetsGrid = document.getElementById('bouquetsProducts');

    if (popularGrid) {
        const popularProducts = products.filter(p => p.category === 'popular').slice(0, 8);
        popularGrid.innerHTML = popularProducts.map(createProductCard).join('');
    }

    if (flowersGrid) {
        const flowersProducts = products.filter(p => p.category === 'flowers').slice(0, 8);
        flowersGrid.innerHTML = flowersProducts.map(createProductCard).join('');
    }

    if (bouquetsGrid) {
        const bouquetsProducts = products.filter(p => p.category === 'bouquets').slice(0, 4);
        bouquetsGrid.innerHTML = bouquetsProducts.map(createProductCard).join('');
    }
}

// ===========================
// Cart Functionality
// ===========================
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartUI();
        showNotification('Товар добавлен в корзину');
    }
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartPrice = document.querySelector('.cart-price');

    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    if (cartPrice) {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartPrice.textContent = total > 0 ? `${total.toLocaleString('ru-RU')} ₽` : '₽';
    }
}

function showNotification(message) {
    // Simple notification (in production, use a proper toast library)
    alert(message);
}

// ===========================
// FAQ Accordion
// ===========================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ===========================
// Smooth Scroll
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===========================
// Initialize on Load
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    initSliderImages();
    renderProducts();
    updateCartUI();

    // Add banner backgrounds
    addBannerBackgrounds();
});

// ===========================
// Banner Backgrounds
// ===========================
function addBannerBackgrounds() {
    // Feature tiles images
    const tiles = [
        { id: 'tile1', url: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop' },
        { id: 'tile2', url: 'https://images.unsplash.com/photo-1494333102638-75e347477d33?q=80&w=600&auto=format&fit=crop' },
        { id: 'tile3', url: 'https://images.unsplash.com/photo-1507290439931-a861b5a38200?q=80&w=600&auto=format&fit=crop' },
        { id: 'tile4', url: 'https://images.unsplash.com/photo-1487070183335-b882f05df7fd?q=80&w=600&auto=format&fit=crop' }
    ];

    tiles.forEach(tile => {
        const el = document.getElementById(tile.id);
        if (el) {
            console.log(`Setting background for ${tile.id}: ${tile.url}`);
            el.style.backgroundImage = `url('${tile.url}')`;
            el.style.backgroundSize = 'cover';
            el.style.backgroundPosition = 'center';
            // Force it in case of specificity issues
            el.setAttribute('style', `background-image: url('${tile.url}'); background-size: cover; background-position: center;`);
        } else {
            console.error(`Tile element not found: ${tile.id}`);
        }
    });

    // Promo banners
    const promoBanner1 = document.getElementById('promoBanner1');
    const promoBanner2 = document.getElementById('promoBanner2');
    const promoBanner3 = document.getElementById('promoBanner3');

    if (promoBanner1) {
        promoBanner1.style.backgroundImage = "url('https://images.unsplash.com/photo-1519225495810-758416ca209c?q=80&w=1200&auto=format&fit=crop')";
        promoBanner1.style.backgroundSize = 'cover';
    }

    if (promoBanner2) {
        promoBanner2.style.backgroundImage = "url('https://images.unsplash.com/photo-1464305795204-6f5bdf7af81b?q=80&w=800&auto=format&fit=crop')";
        promoBanner2.style.backgroundSize = 'cover';
    }

    if (promoBanner3) {
        promoBanner3.style.backgroundImage = "url('https://images.unsplash.com/photo-1523690136294-878f9b46f631?q=80&w=800&auto=format&fit=crop')";
        promoBanner3.style.backgroundSize = 'cover';
    }

    // Bottom info section images
    const loyaltyImage = document.getElementById('loyaltyImage');
    if (loyaltyImage) {
        loyaltyImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1519225495810-758416ca209c?q=80&w=800&auto=format&fit=crop')";
        loyaltyImage.style.backgroundSize = 'cover';
    }

    // Social media images
    const socialImages = [
        { id: 'socialImg1', url: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600&auto=format&fit=crop' },
        { id: 'socialImg2', url: 'https://images.unsplash.com/photo-1494333102638-75e347477d33?q=80&w=600&auto=format&fit=crop' },
        { id: 'socialImg3', url: 'https://images.unsplash.com/photo-1507290439931-a861b5a38200?q=80&w=600&auto=format&fit=crop' },
        { id: 'socialImg4', url: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=600&auto=format&fit=crop' }
    ];

    socialImages.forEach(img => {
        const el = document.getElementById(img.id);
        if (el) {
            el.style.backgroundImage = `url('${img.url}')`;
            el.style.backgroundSize = 'cover';
        }
    });

    // Footer circle image
    const footerCircle = document.querySelector('.footer-image-circle');
    if (footerCircle) {
        footerCircle.style.backgroundImage = "url('https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=800&auto=format&fit=crop')";
        footerCircle.style.backgroundSize = 'cover';
    }
}

// ===========================
// Lazy Loading (Basic)
// ===========================
// Lazy loading handled via native loading="lazy" attribute

// ===========================
// Lazy Loading (Basic)
// ===========================
