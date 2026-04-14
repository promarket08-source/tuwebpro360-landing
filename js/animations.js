/* ============================================
   TuWebPro360 | EP360 JavaScript
   Landing Page Completa - 2026
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
// PARTICLES.JS - BACKGROUND ANIMATION
// ============================================
particlesJS('particlesCanvas', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: ['#6366F1', '#EC4899', '#06B6D4', '#8B5CF6'] },
        shape: { type: 'circle' },
        opacity: {
            value: 0.6,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 4,
            random: true,
            anim: { enable: true, speed: 2, size_min: 1, sync: false }
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
            out_mode: 'out'
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// ============================================
// TYPEWRITER EFFECT
// ============================================
const typewriterPhrases = [
    'convierta visitantes en clientes',
    'genere más ventas',
    'posicione tu marca',
    'crezca tu negocio',
    'impacte a tus clientes'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');

function typeWriter() {
    const currentPhrase = typewriterPhrases[phraseIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 30 : 70;
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typewriterPhrases.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeWriter, typeSpeed);
}

if (typewriterElement) {
    typeWriter();
}

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

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

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
// COUNTDOWN TIMER
// ============================================
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 7);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const pad = (num) => String(num).padStart(2, '0');
    
    const daysEl = document.getElementById('days1');
    const hoursEl = document.getElementById('hours1');
    const minutesEl = document.getElementById('minutes1');
    const secondsEl = document.getElementById('seconds1');
    
    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minutesEl) minutesEl.textContent = pad(minutes);
    if (secondsEl) secondsEl.textContent = pad(seconds);
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
const heroSearch = document.getElementById('heroSearch');
const construccionSearch = document.getElementById('construccionSearch');

function performSearch() {
    const searchTerm = heroSearch ? heroSearch.value.toLowerCase() : '';
    const sectorTags = document.querySelectorAll('.tag');
    
    sectorTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const sector = tag.dataset.sector;
            highlightSector(sector);
        });
    });
    
    if (searchTerm.length > 2) {
        filterTemplates(searchTerm);
    }
}

function searchConstruccion() {
    const searchTerm = construccionSearch ? construccionSearch.value.toLowerCase() : '';
    if (searchTerm.length > 0) {
        const categories = document.querySelectorAll('.category-card');
        categories.forEach(cat => {
            const title = cat.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                cat.style.display = 'block';
            } else {
                cat.style.display = 'none';
            }
        });
    }
}

function highlightSector(sector) {
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
            const filterSector = document.getElementById('filterSector');
            if (filterSector) {
                filterSector.value = sector;
                filterSector.dispatchEvent(new Event('change'));
            }
        }, 500);
    }
}

if (heroSearch) {
    heroSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// ============================================
// CATALOG FILTER
// ============================================
const filterTipo = document.getElementById('filterTipo');
const filterPrecio = document.getElementById('filterPrecio');
const filterSector = document.getElementById('filterSector');
const catalogoGrid = document.getElementById('catalogoGrid');

function filterTemplates(searchTerm = '') {
    const cards = document.querySelectorAll('.template-card');
    
    cards.forEach(card => {
        let show = true;
        
        const tipo = filterTipo ? filterTipo.value : '';
        const precio = filterPrecio ? filterPrecio.value : '';
        const sector = filterSector ? filterSector.value : '';
        const cardSector = card.dataset.sector;
        const cardTipo = card.dataset.tipo;
        const cardPrecio = card.dataset.precio;
        
        if (searchTerm) {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const category = card.querySelector('.card-category').textContent.toLowerCase();
            show = title.includes(searchTerm) || category.includes(searchTerm);
        }
        
        if (tipo && cardTipo !== tipo) show = false;
        if (precio && cardPrecio !== precio) show = false;
        if (sector && cardSector !== sector) show = false;
        
        card.style.display = show ? 'block' : 'none';
    });
}

function resetFilters() {
    if (filterTipo) filterTipo.value = '';
    if (filterPrecio) filterPrecio.value = '';
    if (filterSector) filterSector.value = '';
    
    const cards = document.querySelectorAll('.template-card');
    cards.forEach(card => card.style.display = 'block');
}

if (filterTipo) filterTipo.addEventListener('change', () => filterTemplates());
if (filterPrecio) filterPrecio.addEventListener('change', () => filterTemplates());
if (filterSector) filterSector.addEventListener('change', () => filterTemplates());

// ============================================
// MODAL PREVIEW
// ============================================
const previewModal = document.getElementById('previewModal');
const previewImage = document.getElementById('previewImage');

function previewTemplate(button) {
    const card = button.closest('.template-card');
    const img = card.querySelector('.card-image img');
    const title = card.querySelector('.card-title').textContent;
    
    if (previewImage) {
        previewImage.src = img.src;
        previewImage.alt = title;
    }
    
    if (previewModal) {
        previewModal.classList.add('active');
    }
}

function closePreview() {
    if (previewModal) {
        previewModal.classList.remove('active');
    }
}

if (previewModal) {
    previewModal.addEventListener('click', (e) => {
        if (e.target === previewModal) {
            closePreview();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePreview();
    }
});

// ============================================
// FORM SUBMISSION
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            nombre: formData.get('name'),
            whatsapp: formData.get('whatsapp'),
            email: formData.get('email'),
            negocio: formData.get('business'),
            mensaje: formData.get('message'),
            fecha: new Date().toISOString(),
            source: 'TuWebPro360 Landing'
        };
        
        try {
            const webhookUrl = 'http://localhost:5678/webhook/ep360-lead';
            
            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            
            alert('¡Mensaje enviado! Te contactaremos pronto.');
            contactForm.reset();
            
        } catch (error) {
            console.log('Form data:', data);
            alert('¡Mensaje enviado! Te contactaremos pronto.');
            contactForm.reset();
        }
    });
}

// ============================================
// SMOOTH SCROLL
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
// SCROLL ANIMATIONS
// ============================================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.template-card, .category-card, .testimonial-card, .pricing-card');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ============================================
// SECTOR TAGS INTERACTION
// ============================================
const sectorTags = document.querySelectorAll('.tag, .subsector-tag');

sectorTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const sector = tag.dataset.sector || tag.textContent.toLowerCase();
        
        const catalogSection = document.getElementById('catalogo');
        if (catalogSection) {
            catalogSection.scrollIntoView({ behavior: 'smooth' });
            
            setTimeout(() => {
                if (filterSector) {
                    const options = filterSector.options;
                    for (let i = 0; i < options.length; i++) {
                        if (options[i].value.toLowerCase() === sector) {
                            filterSector.selectedIndex = i;
                            filterSector.dispatchEvent(new Event('change'));
                            break;
                        }
                    }
                }
            }, 800);
        }
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
// KEYBOARD ACCESSIBILITY
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
        closePreview();
    }
});

// ============================================
// PARALLAX FOR HERO ORBS
// ============================================
const heroOrbs = document.querySelectorAll('.hero-gradient-orb');

window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    
    heroOrbs.forEach((orb, index) => {
        const factor = (index + 1) * 0.5;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

// ============================================
// INITIALIZE CARD ANIMATIONS
// ============================================
const cards = document.querySelectorAll('.template-card, .category-card, .testimonial-card, .pricing-card');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// ============================================
// CONSOLE LOG
// ============================================
console.log('%c🎨 TuWebPro360 - Landing Premium Cargada', 'color: #6366F1; font-size: 20px; font-weight: bold;');
console.log('%c✨ Impulsado por Emprende Online', 'color: #EC4899; font-size: 14px;');
console.log('%c📱 WhatsApp: +56 9 6468 1874', 'color: #10B981; font-size: 12px;');
