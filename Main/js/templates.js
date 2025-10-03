// Templates Page JavaScript Functions

// Initialize templates page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('templates.html')) {
        initTemplatesPage();
    }
});

function initTemplatesPage() {
    loadCategories();
    loadAllTemplates();
    lucide.createIcons();
}

// Load category filters
function loadCategories() {
    const categoryFilters = document.getElementById('categoryFilters');
    if (!categoryFilters) return;

    categoryFilters.innerHTML = '';

    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = `category-btn ${category === 'All' ? 'active' : ''}`;
        button.textContent = category;
        button.onclick = () => filterByCategory(category);
        categoryFilters.appendChild(button);
    });
}

// Load all templates
function loadAllTemplates() {
    displayTemplates(mockTemplates);
    updateTemplateCount(mockTemplates.length);
}

// Filter templates by category
function filterByCategory(category) {
    currentCategory = category;
    
    // Update active button
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === category) {
            btn.classList.add('active');
        }
    });

    filterTemplates();
}

// Filter templates based on search and category
function filterTemplates() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    
    filteredTemplates = mockTemplates.filter(template => {
        const matchesSearch = template.name.toLowerCase().includes(searchQuery) ||
                             template.description.toLowerCase().includes(searchQuery) ||
                             template.tags.some(tag => tag.toLowerCase().includes(searchQuery));
        
        const matchesCategory = currentCategory === 'All' || template.category === currentCategory;
        
        return matchesSearch && matchesCategory;
    });

    displayTemplates(filteredTemplates);
    updateTemplateCount(filteredTemplates.length);
}

// Display templates in grid or list view
function displayTemplates(templates) {
    const grid = document.getElementById('templatesGrid');
    const noResults = document.getElementById('noResults');
    
    if (!grid || !noResults) return;

    if (templates.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');
    grid.innerHTML = '';

    templates.forEach(template => {
        const templateElement = currentViewMode === 'grid' 
            ? createTemplateCardGrid(template) 
            : createTemplateCardList(template);
        grid.appendChild(templateElement);
    });

    // Re-initialize Lucide icons
    lucide.createIcons();
}

// Create template card for grid view
function createTemplateCardGrid(template) {
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

// Create template card for list view
function createTemplateCardList(template) {
    const card = document.createElement('div');
    card.className = 'template-card-list';
    
    const difficultyClass = getDifficultyClass(template.difficulty);
    const formattedDate = new Date(template.updatedAt).toLocaleDateString();
    
    card.innerHTML = `
        <div class="template-list-content">
            <div class="template-list-image">
                <img src="${template.image}" alt="${template.name}" loading="lazy">
                <span class="difficulty-badge ${difficultyClass}">${template.difficulty}</span>
            </div>
            <div class="template-list-info">
                <div class="template-list-header">
                    <div class="template-list-main">
                        <h3 class="template-title">${template.name}</h3>
                        <p class="template-description">${template.description}</p>
                    </div>
                    <div class="rating-badge">
                        <i data-lucide="star"></i>
                        <span>${template.rating}</span>
                    </div>
                </div>
                <div class="template-list-meta">
                    <div class="template-author">
                        <img src="${template.authorAvatar}" alt="${template.author}" class="author-avatar">
                        <span class="author-name">${template.author}</span>
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
                    <div class="template-actions">
                        <button class="btn btn-outline btn-sm" onclick="viewTemplate(${template.id})">
                            <i data-lucide="eye"></i>
                            View
                        </button>
                        <button class="btn btn-primary btn-sm" onclick="viewCode(${template.id})">
                            <i data-lucide="code"></i>
                            Code
                        </button>
                    </div>
                </div>
                <div class="template-tags">
                    ${template.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Set view mode (grid or list)
function setViewMode(mode) {
    currentViewMode = mode;
    
    // Update active view button
    const viewButtons = document.querySelectorAll('.view-btn');
    viewButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === mode) {
            btn.classList.add('active');
        }
    });

    // Update grid class
    const grid = document.getElementById('templatesGrid');
    if (grid) {
        grid.className = `templates-grid ${mode}-view`;
    }

    // Re-display templates with new view
    displayTemplates(filteredTemplates);
}

// Update template count
function updateTemplateCount(count) {
    const countElement = document.getElementById('templatesCount');
    if (countElement) {
        countElement.textContent = `${count} Templates Found`;
    }
}