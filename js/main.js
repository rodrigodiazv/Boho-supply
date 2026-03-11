/**
 * EL BOHO - Landing Page JavaScript
 * Mobile-first interactions for Instagram audience
 */

// ============================================
// Smooth Scroll Enhancement
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Scroll Animations (Intersection Observer)
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe Instagram posts
document.querySelectorAll('.instagram-post').forEach(post => {
    post.style.opacity = '0';
    post.style.transform = 'scale(0.9)';
    post.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(post);
});

// ============================================
// Product Quick View (Modal)
// ============================================
document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productImage = productCard.querySelector('.product-image img').src;
        
        // Create simple alert for now (can be enhanced to modal)
        alert(`Vista rápida: ${productName}\n\n¿Te interesa? Escríbenos por WhatsApp!`);
        
        // Optional: Auto-redirect to WhatsApp with product info
        const whatsappMsg = encodeURIComponent(`Hola! Me interesa el producto: ${productName}`);
        window.open(`https://wa.me/34634134466?text=${whatsappMsg}`, '_blank');
    });
});

// ============================================
// Add to Cart Button
// ============================================
document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        
        // Visual feedback
        this.innerHTML = '✓';
        this.style.background = '#6BCF7F';
        
        setTimeout(() => {
            this.innerHTML = '🛒';
            this.style.background = '';
        }, 1500);
        
        // WhatsApp redirect with product
        setTimeout(() => {
            const whatsappMsg = encodeURIComponent(`Hola! Me gustaría pedir: ${productName}`);
            window.open(`https://wa.me/34634134466?text=${whatsappMsg}`, '_blank');
        }, 1000);
    });
});

// ============================================
// Load More Products
// ============================================
const loadMoreBtn = document.querySelector('.load-more-btn');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
        // Simulated loading (would be actual AJAX in production)
        this.textContent = 'Cargando...';
        this.disabled = true;
        
        setTimeout(() => {
            alert('Próximamente más productos disponibles!\n\nSíguenos en Instagram @elboho.artesania para ver novedades');
            this.textContent = 'Cargar más productos';
            this.disabled = false;
        }, 800);
    });
}

// ============================================
// Instagram Post Click Analytics
// ============================================
document.querySelectorAll('.instagram-post').forEach(post => {
    post.addEventListener('click', function() {
        // Track click (for analytics)
        console.log('Instagram post clicked');
        
        // Redirect to Instagram profile
        window.open('https://instagram.com/elboho.artesania', '_blank');
    });
});

// ============================================
// Parallax Effect on Hero
// ============================================
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const hero = document.querySelector('.hero');
    
    if (hero && scrollTop < window.innerHeight) {
        hero.style.transform = `translateY(${scrollTop * 0.5}px)`;
        hero.style.opacity = 1 - (scrollTop / window.innerHeight);
    }
    
    lastScrollTop = scrollTop;
}, { passive: true });

// ============================================
// Mobile Menu Enhancement (if needed later)
// ============================================
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    // Add mobile-specific optimizations
    document.body.classList.add('mobile-device');
    
    // Disable hover effects on mobile (prevent sticky hover)
    const style = document.createElement('style');
    style.textContent = `
        @media (hover: none) {
            .product-card:hover,
            .instagram-post:hover {
                transform: none;
            }
            .product-overlay,
            .instagram-overlay {
                opacity: 0 !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// Performance: Lazy Load Images
// ============================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    document.querySelectorAll('img').forEach(img => {
        img.loading = 'lazy';
    });
} else {
    // Fallback to Intersection Observer
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imgObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        imgObserver.observe(img);
    });
}

// ============================================
// Share Button (for social sharing)
// ============================================
function shareOnSocial(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Mira esta joyería artesanal increíble! 💎✨');
    
    const shareUrls = {
        whatsapp: `https://wa.me/?text=${text}%20${url}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Make share function globally available
window.shareOnSocial = shareOnSocial;

// ============================================
// Analytics Tracking (placeholder)
// ============================================
function trackEvent(category, action, label) {
    // Placeholder for Google Analytics or similar
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
    
    // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
}

// Track CTA clicks
document.querySelectorAll('.cta-button, .whatsapp-button').forEach(button => {
    button.addEventListener('click', () => {
        trackEvent('CTA', 'click', button.textContent);
    });
});

// ============================================
// Loading Animation
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
});

// ============================================
// Console Easter Egg
// ============================================
console.log('%c🌿 El Boho ✨', 'font-size: 20px; font-weight: bold; color: #2D9596;');
console.log('%c¿Te gusta el código? Escríbenos, también hacemos webs personalizadas 😉', 'font-size: 12px; color: #666;');
console.log('%cWhatsApp: +34 634 13 44 66', 'font-size: 12px; color: #25D366; font-weight: bold;');
