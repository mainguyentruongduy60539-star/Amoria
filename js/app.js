// ── State ──
const state = {
  currentPage: 'home',
  cart: [],
  selectedProduct: null,
  orderRef: ''
};

// ── Page Navigation ──
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(pageId);
  if (page) {
    page.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    state.currentPage = pageId;
  }
}

// ── Navbar scroll effect ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Cart badge ──
function updateCartBadge() {
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    badge.textContent = state.cart.length;
    badge.classList.toggle('show', state.cart.length > 0);
  }
}

// ── Add to Cart ──
function addToCart(product) {
  state.selectedProduct = product;
  state.cart.push(product);
  updateCartBadge();
  // Populate order summary
  renderOrderSummary();
  showPage('checkout');
}

// ── Render Order Summary ──
function renderOrderSummary() {
  const container = document.getElementById('order-items');
  if (!container || !state.selectedProduct) return;
  const p = state.selectedProduct;
  container.innerHTML = `
    <div class="order-item">
      <img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1573408301185-9519f94815b3?w=200&q=80'">
      <div class="order-item-info">
        <h5>${p.name}</h5>
        <span>${p.sub}</span>
      </div>
      <div class="order-item-price">${p.price}</div>
    </div>
  `;
  document.getElementById('order-total-price').textContent = p.price;
}

// ── Order confirmation ──
function confirmOrder(e) {
  e.preventDefault();
  const name = document.getElementById('inp-name').value.trim();
  const email = document.getElementById('inp-email').value.trim();
  const phone = document.getElementById('inp-phone').value.trim();
  const address = document.getElementById('inp-address').value.trim();

  if (!name || !email || !phone || !address) {
    alert('Vui lòng điền đầy đủ thông tin bắt buộc.');
    return;
  }

  // Generate order ref
  state.orderRef = 'MRV-' + Date.now().toString().slice(-6);
  document.getElementById('ty-order-ref').textContent = state.orderRef;
  document.getElementById('ty-name').textContent = name;

  // Clear cart
  state.cart = [];
  updateCartBadge();

  showPage('thankyou');
}

// ── DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
  updateCartBadge();

  // Navbar links
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', () => showPage(el.dataset.page));
  });

  // Checkout form
  const form = document.getElementById('checkout-form');
  if (form) form.addEventListener('submit', confirmOrder);
});
