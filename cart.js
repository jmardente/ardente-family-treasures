const CART_STORAGE_KEY = "ardente-family-treasures-cart-v2";

const openCartButton = document.getElementById("openCart");
const closeCartButton = document.getElementById("closeCart");
const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");
const checkoutMessage = document.getElementById("checkoutMessage");

let cart = loadCart();

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function getProduct(productId) {
  return window.PRODUCTS.find((product) => product.id === productId);
}

function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`;
}

function sanitizeCart() {
  cart = cart
    .filter((item) => getProduct(item.id))
    .map((item) => ({
      id: item.id,
      quantity: Math.max(1, Math.min(20, Number(item.quantity) || 1))
    }));
  saveCart();
}

function addToCart(productId, quantity = 1) {
  const product = getProduct(productId);
  if (!product || product.status !== "available") return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity = Math.min(20, existing.quantity + quantity);
  } else {
    cart.push({ id: productId, quantity: Math.max(1, quantity) });
  }

  saveCart();
  renderCart();
  showCart();
}

function changeQuantity(productId, amount) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;

  item.quantity += amount;
  if (item.quantity <= 0) {
    cart = cart.filter((entry) => entry.id !== productId);
  } else {
    item.quantity = Math.min(20, item.quantity);
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}

function renderCart() {
  sanitizeCart();

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => {
    const product = getProduct(item.id);
    return sum + product.price * item.quantity;
  }, 0);

  cartCount.textContent = itemCount;
  cartTotal.textContent = formatPrice(total);
  checkoutButton.disabled = cart.length === 0;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    return;
  }

  cartItems.innerHTML = cart
    .map((item) => {
      const product = getProduct(item.id);
      return `
        <article class="cart-item" data-cart-id="${product.id}">
          <img src="${product.image}" alt="" class="cart-item-image" />
          <div class="cart-item-details">
            <strong>${product.name}</strong>
            <span>${formatPrice(product.price)} each</span>
            <div class="cart-item-controls">
              <button type="button" data-cart-action="decrease" aria-label="Decrease quantity">−</button>
              <span aria-label="Quantity">${item.quantity}</span>
              <button type="button" data-cart-action="increase" aria-label="Increase quantity">+</button>
              <button type="button" class="remove-item" data-cart-action="remove">Remove</button>
            </div>
          </div>
          <strong>${formatPrice(product.price * item.quantity)}</strong>
        </article>
      `;
    })
    .join("");
}

function showCart() {
  cartPanel.classList.add("open");
  cartOverlay.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
}

function hideCart() {
  cartPanel.classList.remove("open");
  cartOverlay.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
}

async function checkout() {
  if (cart.length === 0) return;

  checkoutButton.disabled = true;
  checkoutButton.textContent = "Opening secure checkout…";
  checkoutMessage.textContent = "";

  try {
    const response = await fetch("/.netlify/functions/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart })
    });

    const data = await response.json();
    if (!response.ok || !data.url) {
      throw new Error(data.error || "Checkout could not be started.");
    }

    window.location.href = data.url;
  } catch (error) {
    checkoutMessage.textContent = error.message;
    checkoutButton.disabled = false;
    checkoutButton.textContent = "Checkout with Stripe";
  }
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-to-cart]");
  if (addButton) {
    addToCart(addButton.dataset.addToCart);
    return;
  }

  const cartItem = event.target.closest("[data-cart-id]");
  const actionButton = event.target.closest("[data-cart-action]");
  if (!cartItem || !actionButton) return;

  const productId = cartItem.dataset.cartId;
  const action = actionButton.dataset.cartAction;

  if (action === "increase") changeQuantity(productId, 1);
  if (action === "decrease") changeQuantity(productId, -1);
  if (action === "remove") removeFromCart(productId);
});

openCartButton?.addEventListener("click", showCart);
closeCartButton?.addEventListener("click", hideCart);
cartOverlay?.addEventListener("click", hideCart);
checkoutButton?.addEventListener("click", checkout);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideCart();
});

window.StoreCart = { addToCart, clearCart, renderCart, showCart };
renderCart();
