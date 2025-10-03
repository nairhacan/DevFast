// DevHub Website JavaScript Functions

// Global variables
let currentViewMode = 'grid';
let currentCategory = 'All';
let filteredTemplates = mockTemplates;

// Initialize Lucide icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    loadHomepageContent();
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    if (mobileMenu && menuIcon && closeIcon) {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    }
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Load homepage content
function loadHomepageContent() {
    loadFeaturedTemplates();
    loadCommunityStats();
    loadLearningPaths();
    loadPopularProjects();
}

// Load featured templates (first 6)
function loadFeaturedTemplates() {
    const grid = document.getElementById('featuredTemplatesGrid');
    if (!grid) return;

    const featuredTemplates = mockTemplates.slice(0, 6);
    grid.innerHTML = '';

    featuredTemplates.forEach(template => {
        const templateCard = createTemplateCard(template);
        grid.appendChild(templateCard);
    });
    
    // Re-initialize Lucide icons
    lucide.createIcons();
}

// Create template card element
function createTemplateCard(template) {
    const card = document.createElement('div');
    card.className = 'template-card';
    
    const difficultyClass = getDifficultyClass(template.difficulty);
    const formattedDate = new Date(template.updatedAt).toLocaleDateString();
    
    card.innerHTML = `
        <div class="template-image">
            <img src="${template.image}" alt="${template.name}" loading="lazy">
            <div class="template-badges">
                <span class="difficulty-badge ${difficultyClass}">${template.difficulty}</span>
                <div class="rating-badge">
                    <i data-lucide="star"></i>
                    <span>${template.rating}</span>
                </div>
            </div>
        </div>
        <div class="template-content">
            <div class="template-info">
                <h3 class="template-title">${template.name}</h3>
                <p class="template-description">${template.description}</p>
            </div>
            <div class="template-author">
                <img src="${template.authorAvatar}" alt="${template.author}" class="author-avatar">
                <span class="author-name">${template.author}</span>
            </div>
            <div class="template-tags">
                ${template.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="template-stats">
                <div class="stat">
                    <i data-lucide="download"></i>
                    <span>${template.downloads.toLocaleString()}</span>
                </div>
                <div class="stat">
                    <i data-lucide="clock"></i>
                    <span>Updated ${formattedDate}</span>
                </div>
            </div>
        </div>
        <div class="template-actions">
            <button class="btn btn-outline" onclick="viewTemplate(${template.id})">
                <i data-lucide="eye"></i>
                View
            </button>
            <button class="btn btn-primary" onclick="viewCode(${template.id})">
                <i data-lucide="code"></i>
                Code  
            </button>
        </div>
    `;
    
    return card;
}

// Get difficulty class for styling
function getDifficultyClass(difficulty) {
    switch (difficulty) {
        case 'Beginner':
            return 'difficulty-beginner';
        case 'Intermediate':
            return 'difficulty-intermediate';
        case 'Advanced':
            return 'difficulty-advanced';
        default:
            return '';
    }
}

// Load community stats
function loadCommunityStats() {
    const grid = document.getElementById('communityStatsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    communityStats.forEach(stat => {
        const statCard = document.createElement('div');
        statCard.className = 'stat-card';
        
        statCard.innerHTML = `
            <div class="stat-icon ${stat.color}">
                <i data-lucide="${stat.icon}"></i>
            </div>
            <div class="stat-content">
                <div class="stat-number">${stat.value}</div>
                <div class="stat-label">${stat.label}</div>
                <div class="stat-description">${stat.description}</div>
            </div>
        `;
        
        grid.appendChild(statCard);
    });
    
    // Re-initialize Lucide icons
    lucide.createIcons();
}

// Load learning paths
function loadLearningPaths() {
    const grid = document.getElementById('learningPathsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    mockLearningPaths.forEach(path => {
        const pathCard = document.createElement('div');
        pathCard.className = 'learning-card';
        
        const difficultyClass = getDifficultyClass(path.difficulty);
        
        pathCard.innerHTML = `
            <div class="learning-image">
                <img src="${path.image}" alt="${path.title}" loading="lazy">
                <div class="learning-overlay">
                    <span class="difficulty-badge ${difficultyClass}">${path.difficulty}</span>
                </div>
            </div>
            <div class="learning-content">
                <h3 class="learning-title">${path.title}</h3>
                <p class="learning-description">${path.description}</p>
                <div class="learning-stats">
                    <div class="learning-stat">
                        <i data-lucide="book-open"></i>
                        <span>${path.modules} modules</span>
                    </div>
                    <div class="learning-stat">
                        <i data-lucide="clock"></i>
                        <span>${path.duration}</span>
                    </div>
                    <div class="learning-stat">
                        <i data-lucide="users"></i>
                        <span>${path.enrolled.toLocaleString()} enrolled</span>
                    </div>
                </div>
                <div class="learning-features">
                    <div class="feature-item">
                        <i data-lucide="check-circle"></i>
                        <span>Fundamentals and best practices</span>
                    </div>
                    <div class="feature-item">
                        <i data-lucide="check-circle"></i>
                        <span>Hands-on projects and exercises</span>
                    </div>
                    <div class="feature-item">
                        <i data-lucide="check-circle"></i>
                        <span>Industry-ready skills</span>
                    </div>
                </div>
            </div>
            <div class="learning-actions">
                <button class="btn btn-primary btn-full" onclick="startLearning(${path.id})">
                    <i data-lucide="play-circle"></i>
                    Start Learning
                    <i data-lucide="arrow-right"></i>
                </button>
            </div>
        `;
        
        grid.appendChild(pathCard);
    });
    
    // Re-initialize Lucide icons
    lucide.createIcons();
}

// Load popular projects
function loadPopularProjects() {
    const grid = document.getElementById('popularProjectsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    mockProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <div class="project-likes">
                        <i data-lucide="heart"></i>
                        <span>${project.likes}</span>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-author">
                    <img src="${project.authorAvatar}" alt="${project.author}" class="author-avatar">
                    <span class="author-name">${project.author}</span>
                    <div class="project-views">
                        <i data-lucide="eye"></i>
                        <span>${project.views}</span>
                    </div>
                </div>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            <div class="project-actions">
                <button class="btn btn-outline" onclick="viewProject(${project.id})">
                    <i data-lucide="external-link"></i>
                    View Project
                </button>
                <button class="btn btn-primary" onclick="viewProjectCode(${project.id})">
                    <i data-lucide="code-2"></i>
                    Source
                </button>
            </div>
        `;
        
        grid.appendChild(projectCard);
    });
    
    // Re-initialize Lucide icons
    lucide.createIcons();
}

// Template action functions
function viewTemplate(id) {
    console.log('Viewing template:', id);
    // Implementasi untuk melihat template
    alert(`Viewing template with ID: ${id}`);
}

function viewCode(id) {
    console.log('Viewing code for template:', id);
    // Implementasi untuk melihat code
    alert(`Viewing code for template with ID: ${id}`);
}

// Learning path action
function startLearning(id) {
    console.log('Starting learning path:', id);
    // Implementasi untuk memulai learning path
    alert(`Starting learning path with ID: ${id}`);
}

// Project action functions
function viewProject(id) {
    console.log('Viewing project:', id);
    // Implementasi untuk melihat project
    alert(`Viewing project with ID: ${id}`);
}

function viewProjectCode(id) {
    console.log('Viewing project code:', id);
    // Implementasi untuk melihat source code project
    alert(`Viewing source code for project with ID: ${id}`);
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Newsletter subscription
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('newsletter-btn')) {
        const emailInput = e.target.parentElement.querySelector('.newsletter-input');
        if (emailInput && emailInput.value) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    }
});