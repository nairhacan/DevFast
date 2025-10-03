// Cart Management
let cart = JSON.parse(localStorage.getItem('burgerBangorCart')) || [];

// Update cart count in header
function updateCartCount() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartBadge = document.querySelector('.cart-badge');
  if (cartBadge) {
    cartBadge.textContent = cartCount;
    cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
  }
}

// Add item to cart
function addToCart(productId) {
  const product = menuItems.find(item => item.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  localStorage.setItem('burgerBangorCart', JSON.stringify(cart));
  updateCartCount();
  showToast('Ditambahkan ke keranjang!', `${product.name} berhasil ditambahkan`);
  renderCart();
}

// Update quantity
function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    localStorage.setItem('burgerBangorCart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
  }
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('burgerBangorCart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

// Format currency
function formatCurrency(amount) {
  return `Rp ${amount.toLocaleString('id-ID')}`;
}

// Render cart
function renderCart() {
  const cartBody = document.querySelector('.cart-body');
  if (!cartBody) return;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">Keranjang Kosong</h3>
        <p style="color: #6b7280; margin-bottom: 1rem;">Belum ada item di keranjang Anda</p>
        <a href="menu.html" class="btn btn-primary">Lihat Menu</a>
      </div>
    `;
    
    // Hide footer when cart is empty
    const cartFooter = document.querySelector('.cart-footer');
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  // Show footer when cart has items
  const cartFooter = document.querySelector('.cart-footer');
  if (cartFooter) cartFooter.style.display = 'block';

  cartBody.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatCurrency(item.price)}</div>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <span class="quantity">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
      <button class="remove-item" onclick="removeFromCart(${item.id})">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `).join('');

  // Update total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalAmount = document.querySelector('.cart-total-amount');
  if (totalAmount) {
    totalAmount.textContent = formatCurrency(total);
  }
}

// Toggle cart
function toggleCart() {
  const cartModal = document.querySelector('.cart-modal');
  const cartOverlay = document.querySelector('.cart-overlay');
  
  if (cartModal && cartOverlay) {
    cartModal.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    
    if (cartModal.classList.contains('active')) {
      renderCart();
    }
  }
}

// Close cart
function closeCart() {
  const cartModal = document.querySelector('.cart-modal');
  const cartOverlay = document.querySelector('.cart-overlay');
  
  if (cartModal && cartOverlay) {
    cartModal.classList.remove('active');
    cartOverlay.classList.remove('active');
  }
}

// Show toast notification
function showToast(title, message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const toastTitle = toast.querySelector('.toast-title');
  const toastMessage = toast.querySelector('.toast-message');
  
  if (toastTitle) toastTitle.textContent = title;
  if (toastMessage) toastMessage.textContent = message;
  
  toast.classList.add('active');
  
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
}

// Set active navigation
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  setActiveNav();
  
  // Close cart when clicking overlay
  const cartOverlay = document.querySelector('.cart-overlay');
  if (cartOverlay) {
    cartOverlay.addEventListener('click', closeCart);
  }
  
  // Checkout button (placeholder)
  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      alert('Fitur checkout akan tersedia setelah integrasi backend');
    });
  }
});
