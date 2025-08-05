// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initLoader();
    initNavigation();
    initScrollEffects();
    initTypingAnimation();
    initContactForm();
    initParticles();
    initScrollAnimations();
    initMatrixRain();
});

// Loading Screen
function initLoader() {
    const loader = document.getElementById('loading');
    
    // Hide loader after 2 seconds
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
}

// Navigation
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });
    
    // Header background on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.9)';
        }
    });
}

// Scroll Effects
function initScrollEffects() {
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Typing Animation
function initTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    const texts = [
        'Full Stack Developer | UI/UX Designer | Problem Solver',
        'Creating Digital Experiences | Building the Future',
        'Code Enthusiast | Innovation Driver | Tech Explorer'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before next text
        }
        
        setTimeout(typeText, typingSpeed);
    }
    
    // Start typing animation after loader
    setTimeout(typeText, 2500);
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const downloadBtn = document.getElementById('download-resume');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>SENDING...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>MESSAGE SENT!';
            submitBtn.style.background = '#00ff00';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 3000);
            
            // Show success message
            showNotification('Message sent successfully!', 'success');
        }, 2000);
    });
    
    // Resume download tracking
    downloadBtn.addEventListener('click', (e) => {
        // Since we don't have an actual resume file, prevent default and show message
        e.preventDefault();
        showNotification('Resume download would start here. Please add your actual resume.pdf file.', 'info');
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 p-4 rounded border-l-4 z-50 transition-all duration-300 transform translate-x-full`;
    
    switch(type) {
        case 'success':
            notification.classList.add('bg-green-900', 'border-green-500', 'text-green-100');
            break;
        case 'error':
            notification.classList.add('bg-red-900', 'border-red-500', 'text-red-100');
            break;
        default:
            notification.classList.add('bg-blue-900', 'border-blue-500', 'text-blue-100');
    }
    
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-info-circle mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Particle System
function initParticles() {
    const homeSection = document.getElementById('home');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    homeSection.appendChild(particlesContainer);
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 6000);
    }
    
    // Create particles periodically
    setInterval(createParticle, 300);
}

// Scroll Animations
function initScrollAnimations() {
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
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .project-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Matrix Rain Effect
function initMatrixRain() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-rain';
    document.body.appendChild(matrixContainer);
    
    const chars = '01';
    const columns = Math.floor(window.innerWidth / 20);
    
    function createMatrixColumn() {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = Math.random() * 100 + '%';
        column.style.animationDelay = Math.random() * 10 + 's';
        
        let text = '';
        for (let i = 0; i < Math.floor(Math.random() * 20) + 10; i++) {
            text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
        }
        column.innerHTML = text;
        
        matrixContainer.appendChild(column);
        
        // Remove after animation
        setTimeout(() => {
            column.remove();
        }, 10000);
    }
    
    // Create matrix columns periodically
    setInterval(createMatrixColumn, 500);
}

// Skills Animation
function initSkillsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((skill, index) => {
        skill.addEventListener('mouseenter', () => {
            skill.style.animationDelay = index * 0.1 + 's';
            skill.classList.add('animate-pulse');
        });
        
        skill.addEventListener('mouseleave', () => {
            skill.classList.remove('animate-pulse');
        });
    });
}

// Project Cards Interaction
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add glow effect
            card.style.boxShadow = '0 10px 30px rgba(255, 0, 64, 0.4)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '';
        });
    });
}

// Glitch Effect for Main Title
function initGlitchEffect() {
    const mainTitle = document.querySelector('h1');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.setAttribute('data-text', text);
        mainTitle.classList.add('glitch');
        
        // Trigger glitch effect randomly
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% chance
                mainTitle.style.animation = 'none';
                setTimeout(() => {
                    mainTitle.style.animation = '';
                }, 100);
            }
        }, 2000);
    }
}

// Performance Optimization
function optimizePerformance() {
    // Lazy loading for images
    const images = document.querySelectorAll('img');
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
    
    images.forEach(img => {
        if (img.src.includes('placeholder')) {
            imageObserver.observe(img);
        }
    });
    
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) originalScrollHandler();
        }, 10);
    };
}

// Keyboard Navigation
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Press 'H' to go to home
        if (e.key.toLowerCase() === 'h' && !e.ctrlKey && !e.altKey) {
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Press 'C' to go to contact
        if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.altKey) {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Press 'P' to go to projects
        if (e.key.toLowerCase() === 'p' && !e.ctrlKey && !e.altKey) {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Press Escape to close mobile menu
        if (e.key === 'Escape') {
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
}

// Initialize additional features after DOM load
document.addEventListener('DOMContentLoaded', function() {
    initSkillsAnimation();
    initProjectCards();
    initGlitchEffect();
    optimizePerformance();
    initKeyboardNavigation();
});

// Resize handler
window.addEventListener('resize', () => {
    // Recalculate matrix columns on resize
    const matrixContainer = document.querySelector('.matrix-rain');
    if (matrixContainer) {
        matrixContainer.innerHTML = '';
    }
});

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        'https://via.placeholder.com/400x400/ff0040/ffffff?text=YOUR+PHOTO',
        'https://via.placeholder.com/400x250/ff0040/ffffff?text=PROJECT+1',
        'https://via.placeholder.com/400x250/ff0040/ffffff?text=PROJECT+2',
        'https://via.placeholder.com/400x250/ff0040/ffffff?text=PROJECT+3'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadResources();

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}