// ===========================
// Mobile Menu Toggle
// ===========================
// Hamburger Menu Toggle (Combined)
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');

if (menuToggle && menuOverlay) {
    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (menuClose && menuOverlay) {
    menuClose.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close on overlay click
    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===========================
// Hero Slider
// ===========================
const sliderImages = [
    'https://images.unsplash.com/photo-1490750967868-58cb75069ed6?q=80&w=2000&auto=format&fit=crop', // Spring flowers
    'https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=2000&auto=format&fit=crop', // Red roses
    'https://images.unsplash.com/photo-1586548773950-8b6ce862788e?q=80&w=2000&auto=format&fit=crop'  // Delivery/Service
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
        title: 'Букет "Романтика"',
        price: 4990,
        oldPrice: null,
        badge: '+249₽',
        category: 'popular',
        image: 'https://images.unsplash.com/photo-1587570473215-62ced910787e?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Композиция "Весна"',
        price: 3490,
        oldPrice: 4200,
        badge: '+174₽',
        category: 'popular',
        image: 'https://images.unsplash.com/photo-1563241527-300c2783e102?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Монобукет пионов',
        price: 5990,
        oldPrice: null,
        badge: '+299₽',
        category: 'popular',
        image: 'https://images.unsplash.com/photo-1566808943960-ab736fe52402?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Букет "Солнечный"',
        price: 2990,
        oldPrice: null,
        badge: '+149₽',
        category: 'popular',
        image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 5,
        title: 'Корзина роз',
        price: 6990,
        oldPrice: 7900,
        badge: '+349₽',
        category: 'flowers',
        image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 6,
        title: 'Букет невесты',
        price: 8990,
        oldPrice: null,
        badge: '+449₽',
        category: 'flowers',
        image: 'https://images.unsplash.com/photo-1550920443-42eb4dc79e19?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 7,
        title: 'Композиция "Элегия"',
        price: 4490,
        oldPrice: null,
        badge: '+224₽',
        category: 'flowers',
        image: 'https://images.unsplash.com/photo-1525418833959-130ab63f738f?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 8,
        title: 'Букет тюльпанов',
        price: 3290,
        oldPrice: null,
        badge: '+164₽',
        category: 'flowers',
        image: 'https://images.unsplash.com/photo-1520692751336-d70659637c30?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 9,
        title: 'Авторский букет #1',
        price: 7490,
        oldPrice: null,
        badge: '+374₽',
        category: 'bouquets',
        image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 10,
        title: 'Авторский букет #2',
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
        { id: 'tile1', url: 'https://images.unsplash.com/photo-1596627684347-1913192087d3?q=80&w=600&auto=format&fit=crop' },
        { id: 'tile2', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop' },
        { id: 'tile3', url: 'https://images.unsplash.com/photo-1563241527-300c2783e102?q=80&w=600&auto=format&fit=crop' },
        { id: 'tile4', url: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=600&auto=format&fit=crop' }
    ];

    tiles.forEach(tile => {
        const el = document.getElementById(tile.id);
        if (el) {
            el.style.backgroundImage = `url('${tile.url}')`;
            el.style.backgroundSize = 'cover';
        }
    });

    // Promo banners
    const promoBanner1 = document.getElementById('promoBanner1');
    const promoBanner2 = document.getElementById('promoBanner2');
    const promoBanner3 = document.getElementById('promoBanner3');

    if (promoBanner1) {
        promoBanner1.style.backgroundImage = "url('https://images.unsplash.com/photo-1523694576729-dc99e9c0f3b4?q=80&w=1200&auto=format&fit=crop')";
        promoBanner1.style.backgroundSize = 'cover';
    }

    if (promoBanner2) {
        promoBanner2.style.backgroundImage = "url('https://images.unsplash.com/photo-1593345173772-5b0c798d1a0e?q=80&w=800&auto=format&fit=crop')";
        promoBanner2.style.backgroundSize = 'cover';
    }

    if (promoBanner3) {
        promoBanner3.style.backgroundImage = "url('https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=800&auto=format&fit=crop')";
        promoBanner3.style.backgroundSize = 'cover';
    }

    // Bottom info section images
    const loyaltyImage = document.getElementById('loyaltyImage');
    if (loyaltyImage) {
        loyaltyImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop')";
        loyaltyImage.style.backgroundSize = 'cover';
    }

    // Social media images - all flower themed
    const socialImages = [
        { id: 'socialImg1', url: 'https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=600&auto=format&fit=crop' },
        { id: 'socialImg2', url: 'https://images.unsplash.com/photo-1455659817273-f96807779a8f?q=80&w=600&auto=format&fit=crop' },
        { id: 'socialImg3', url: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?q=80&w=600&auto=format&fit=crop' },
        { id: 'socialImg4', url: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=600&auto=format&fit=crop' }
    ];

    socialImages.forEach(img => {
        const el = document.getElementById(img.id);
        if (el) {
            el.style.backgroundImage = `url('${img.url}')`;
            el.style.backgroundSize = 'cover';
        }
    });

    // Footer circle image - flower bouquet
    const footerCircle = document.querySelector('.footer-image-circle');
    if (footerCircle) {
        footerCircle.style.backgroundImage = "url('https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=800&auto=format&fit=crop')";
        footerCircle.style.backgroundSize = 'cover';
    }
}

// ===========================
// Lazy Loading (Basic)
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Load images when they come into view
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('.product-image').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Lazy Loading (Basic)
// ===========================
