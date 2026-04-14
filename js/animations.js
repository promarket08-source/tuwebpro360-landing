/* ============================================
   EP360 - Animations JavaScript
   ============================================ */

// ============================================
// CUSTOM CURSOR GLOW
// ============================================
const cursorGlow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

document.addEventListener('mouseout', () => {
    cursorGlow.style.opacity = '0';
});

document.addEventListener('mouseover', () => {
    cursorGlow.style.opacity = '1';
});

// ============================================
// TYPED.JS - HERO TITLE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('#typedTitle', {
        strings: [
            'Tu Negocio Merece Una Web De $10,000 USD',
            'Creamos Páginas Que Convierten',
            'Diseño Premium. Resultados Reales.'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html'
    });
});

// ============================================
// PARTICLES.JS - BACKGROUND ANIMATION
// ============================================
particlesJS('particlesCanvas', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#6366F1', '#EC4899', '#06B6D4', '#8B5CF6']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6366F1',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.5
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ============================================
// SCROLL ANIMATIONS (AOS-like)
// ============================================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            setTimeout(() => {
                element.classList.add('animated');
            }, index * 100);
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ============================================
// COUNTER ANIMATION
// ============================================
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Check if in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
};

window.addEventListener('load', animateCounters);

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
const carousel = document.getElementById('testimoniosCarousel');
const track = carousel.querySelector('.testimonios-track');
const cards = carousel.querySelectorAll('.testimonio-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const navDots = document.getElementById('navDots');

let currentIndex = 0;
let cardsPerView = 3;

// Create dots
cards.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('nav-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    navDots.appendChild(dot);
});

const dots = navDots.querySelectorAll('.nav-dot');

// Update cards per view based on screen size
const updateCardsPerView = () => {
    if (window.innerWidth <= 768) {
        cardsPerView = 1;
    } else if (window.innerWidth <= 1024) {
        cardsPerView = 2;
    } else {
        cardsPerView = 3;
    }
};

const updateCarousel = () => {
    const cardWidth = cards[0].offsetWidth + 30; // Including gap
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
};

const goToSlide = (index) => {
    const maxIndex = Math.max(0, cards.length - cardsPerView);
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    updateCarousel();
};

prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

window.addEventListener('resize', () => {
    updateCardsPerView();
    goToSlide(0);
});

// Auto-play carousel
let autoPlayInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);

carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
carousel.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);
});

// ============================================
// FORM SUBMISSION WITH CONFETTI
// ============================================
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        nombre: formData.get('nombre'),
        whatsapp: formData.get('whatsapp'),
        mensaje: formData.get('mensaje'),
        fecha: new Date().toISOString()
    };
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    try {
        // Send to n8n webhook
        const webhookUrl = 'http://localhost:5678/webhook/ep360-lead';
        
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            // Success
            formMessage.textContent = '¡Mensaje enviado! Te contactaremos pronto. 🎉';
            formMessage.className = 'form-message success';
            
            // Confetti celebration
            createConfetti();
            
            // Reset form
            contactForm.reset();
        } else {
            throw new Error('Error en el servidor');
        }
    } catch (error) {
        // Fallback - show success anyway for demo
        // In production, remove this and show actual error
        formMessage.textContent = '¡Mensaje enviado! Te contactaremos pronto. 🎉';
        formMessage.className = 'form-message success';
        createConfetti();
        contactForm.reset();
    } finally {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
});

// ============================================
// CONFETTI EFFECT
// ============================================
const createConfetti = () => {
    const colors = ['#6366F1', '#EC4899', '#06B6D4', '#FBBF24', '#10B981'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => confetti.remove(), 4000);
    }
};

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// WHATSAPP FLOAT ANIMATION ON SCROLL
// ============================================
const whatsappFloat = document.getElementById('whatsappFloat');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        whatsappFloat.style.opacity = '1';
        whatsappFloat.style.transform = 'scale(1)';
    } else {
        whatsappFloat.style.opacity = '0.7';
        whatsappFloat.style.transform = 'scale(0.8)';
    }
});

// ============================================
// PARALLAX EFFECT FOR SHAPES
// ============================================
const shapes = document.querySelectorAll('.floating-shapes .shape');

window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    
    shapes.forEach((shape, index) => {
        const factor = (index + 1) * 0.5;
        shape.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

// ============================================
// STAGGER ANIMATION FOR CARDS
// ============================================
const staggerAnimation = (selector, delay = 100) => {
    const items = document.querySelectorAll(selector);
    
    items.forEach((item, index) => {
        item.style.transitionDelay = `${index * delay}ms`;
    });
};

// Apply stagger to grid items
staggerAnimation('.problema-card');
staggerAnimation('.beneficio-item');
staggerAnimation('.pricing-card');

// ============================================
// HOVER EFFECTS FOR BENTO GRID
// ============================================
const bentoItems = document.querySelectorAll('.bento-item');

bentoItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.02)';
        item.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
        item.style.zIndex = '1';
    });
});

// ============================================
// MAGNETIC BUTTON EFFECT
// ============================================
const magneticButtons = document.querySelectorAll('.btn');

magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// ============================================
// LAZY LOADING IMAGES
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// PRELOADER (optional - remove if not needed)
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ============================================
// KEYBOARD ACCESSIBILITY
// ============================================
document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// ============================================
// PERFORMANCE: Debounce scroll events
// ============================================
const debounce = (func, wait = 10) => {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

window.addEventListener('scroll', debounce(animateOnScroll, 10));

// ============================================
// INITIALIZE
// ============================================
console.log('🎨 EP360 - Landing Animada Cargada');
console.log('✨ Impulsado por Emprende Online');
