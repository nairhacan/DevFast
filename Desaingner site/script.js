// Creative Studio - Main JavaScript

// Global variables
let currentTestimonial = 0;
let filteredProjects = [...portfolioProjects];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    setupNavigation();
    renderServices();
    renderPortfolio();
    setupPortfolioFilters();
    renderStats();
    renderTeamMembers();
    renderTestimonials();
    renderBlogPosts();
    setupContactForm();
    setupNewsletterForm();
    setupScrollToTop();
    setupSmoothScrolling();
    addScrollAnimations();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Navigation Functions
function setupNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    mobileNav.classList.toggle('active');
    
    // Change icon
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileNav.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    
    // Reinitialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    mobileNav.classList.remove('active');
    
    // Reset icon
    const icon = mobileMenuBtn.querySelector('i');
    icon.setAttribute('data-lucide', 'menu');
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Services Functions
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;
    
    const servicesHTML = services.map((service, index) => `
        <div class="service-item ${service.color} stagger-item" style="animation-delay: ${index * 0.1}s">
            <div class="service-icon ${service.textColor === 'white' ? 'bg-white/20' : 'bg-black/10'}">
                <i data-lucide="${getServiceIcon(service.title)}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="service-button ${service.textColor === 'white' ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}">
                Pelajari Lebih Lanjut
            </button>
        </div>
    `).join('');
    
    servicesGrid.innerHTML = servicesHTML;
    
    // Reinitialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function getServiceIcon(title) {
    const iconMap = {
        'Brand Identity': 'palette',
        'Web Design & Development': 'monitor',
        'UI/UX Design': 'smartphone',
        'Graphic Design': 'pencil',
        'Marketing Materials': 'megaphone',
        'Print Design': 'package'
    };
    return iconMap[title] || 'palette';
}

// Portfolio Functions
function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;
    
    const portfolioHTML = filteredProjects.map((project, index) => `
        <div class="portfolio-item stagger-item" data-category="${project.category}" style="animation-delay: ${index * 0.1}s">
            <div class="portfolio-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="portfolio-overlay">
                    <button class="overlay-btn">
                        <i data-lucide="eye"></i>
                    </button>
                    <button class="overlay-btn">
                        <i data-lucide="external-link"></i>
                    </button>
                </div>
            </div>
            <div class="portfolio-content">
                <div class="portfolio-category">${project.category}</div>
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-description">${project.description}</p>
                <div class="portfolio-tags">
                    ${project.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                </div>
                <div class="portfolio-meta">
                    <div>
                        <div class="portfolio-client">${project.client}</div>
                        <div class="portfolio-year">${project.year}</div>
                    </div>
                    <button class="service-button">View Details</button>
                </div>
            </div>
        </div>
    `).join('');
    
    portfolioGrid.innerHTML = portfolioHTML;
    
    // Reinitialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function setupPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            filterPortfolio(filter);
        });
    });
}

function filterPortfolio(category) {
    if (category === 'All') {
        filteredProjects = [...portfolioProjects];
    } else {
        filteredProjects = portfolioProjects.filter(project => project.category === category);
    }
    
    // Animate out
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.classList.add('hidden');
    });
    
    // Render filtered results after animation
    setTimeout(() => {
        renderPortfolio();
    }, 300);
}

// Stats Functions
function renderStats() {
    const statsGrid = document.getElementById('statsGrid');
    if (!statsGrid) return;
    
    const statsHTML = stats.map((stat, index) => `
        <div class="stat-card stagger-item" style="animation-delay: ${index * 0.1}s">
            <div class="stat-number">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
            <div class="stat-description">${stat.description}</div>
        </div>
    `).join('');
    
    statsGrid.innerHTML = statsHTML;
}

// Team Functions
function renderTeamMembers() {
    const teamGrid = document.getElementById('teamGrid');
    if (!teamGrid) return;
    
    const teamHTML = teamMembers.map((member, index) => `
        <div class="team-card stagger-item" style="animation-delay: ${index * 0.1}s">
            <img src="${member.avatar}" alt="${member.name}" class="team-avatar">
            <h4 class="team-name">${member.name}</h4>
            <p class="team-position">${member.position}</p>
            <p class="team-bio">${member.bio}</p>
            <div class="team-skills">
                ${member.skills.map(skill => `<span class="team-skill">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
    
    teamGrid.innerHTML = teamHTML;
}

// Testimonials Functions
function renderTestimonials() {
    const testimonialMain = document.getElementById('testimonialMain');
    const testimonialIndicators = document.getElementById('testimonialIndicators');
    
    if (!testimonialMain || !testimonialIndicators) return;
    
    renderMainTestimonial();
    renderTestimonialIndicators();
    setupTestimonialNavigation();
}

function renderMainTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    const testimonialMain = document.getElementById('testimonialMain');
    
    const testimonialHTML = `
        <div class="testimonial-card">
            <div class="testimonial-quote">
                <i data-lucide="quote"></i>
            </div>
            <div class="testimonial-stars">
                ${Array(testimonial.rating).fill().map(() => `
                    <i data-lucide="star" class="star"></i>
                `).join('')}
            </div>
            <blockquote class="testimonial-content">
                "${testimonial.content}"
            </blockquote>
            <div class="testimonial-author">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="author-avatar">
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p class="position">${testimonial.position}</p>
                    <p class="company">${testimonial.company}</p>
                </div>
            </div>
            <div class="testimonial-project">${testimonial.project}</div>
            <button class="testimonial-nav prev" onclick="previousTestimonial()">
                <i data-lucide="chevron-left"></i>
            </button>
            <button class="testimonial-nav next" onclick="nextTestimonial()">
                <i data-lucide="chevron-right"></i>
            </button>
        </div>
    `;
    
    testimonialMain.innerHTML = testimonialHTML;
    
    // Reinitialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function renderTestimonialIndicators() {
    const testimonialIndicators = document.getElementById('testimonialIndicators');
    
    const indicatorsHTML = testimonials.map((_, index) => `
        <button class="indicator ${index === currentTestimonial ? 'active' : ''}" onclick="setTestimonial(${index})"></button>
    `).join('');
    
    testimonialIndicators.innerHTML = indicatorsHTML;
}

function setupTestimonialNavigation() {
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        nextTestimonial();
    }, 5000);
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderMainTestimonial();
    renderTestimonialIndicators();
}

function previousTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    renderMainTestimonial();
    renderTestimonialIndicators();
}

function setTestimonial(index) {
    currentTestimonial = index;
    renderMainTestimonial();
    renderTestimonialIndicators();
}

// Blog Functions
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    
    const blogHTML = blogPosts.map((post, index) => `
        <article class="blog-card stagger-item" style="animation-delay: ${index * 0.1}s">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}" loading="lazy">
            </div>
            <div class="blog-content">
                <span class="blog-category">${post.category}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <div class="blog-author">
                        <i data-lucide="user"></i>
                        <span>${post.author}</span>
                    </div>
                    <div class="blog-date">
                        <div style="display: flex; align-items: center; gap: 0.25rem;">
                            <i data-lucide="calendar"></i>
                            <span>${post.date}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 0.25rem;">
                            <i data-lucide="clock"></i>
                            <span>${post.readTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    `).join('');
    
    blogGrid.innerHTML = blogHTML;
    
    // Reinitialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Form Functions
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleContactSubmit(this);
    });
}

function handleContactSubmit(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    console.log('Contact form submitted:', data);
    
    // Show success message
    alert('Terima kasih! Pesan Anda telah dikirim. Tim kami akan menghubungi Anda segera.');
    
    // Reset form
    form.reset();
}

function setupNewsletterForm() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        const button = form.querySelector('button');
        if (button) {
            button.addEventListener('click', handleNewsletterSubmit);
        }
    });
    
    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            const email = document.getElementById('newsletterEmail').value;
            handleNewsletterEmail(email);
        });
    }
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const form = e.target.closest('.newsletter-form');
    const emailInput = form.querySelector('input[type="email"]');
    
    if (emailInput) {
        handleNewsletterEmail(emailInput.value);
        emailInput.value = '';
    }
}

function handleNewsletterEmail(email) {
    if (!email) {
        alert('Silakan masukkan alamat email yang valid.');
        return;
    }
    
    console.log('Newsletter subscription:', email);
    alert('Terima kasih! Anda telah berlangganan newsletter kami.');
}

// Utility Functions
function setupScrollToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
}

function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all stagger items
    const animateElements = document.querySelectorAll('.stagger-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Utility function to debounce events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on resize
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav && mobileNav.classList.contains('active')) {
        closeMobileMenu();
    }
}, 250));

// Global functions for onclick handlers
window.nextTestimonial = nextTestimonial;
window.previousTestimonial = previousTestimonial;
window.setTestimonial = setTestimonial;