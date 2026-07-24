const stripeLink = "https://buy.stripe.com/bJeeV50JO9qnbxfbXJcAo00";
const productName = "Signed Cora and the Coral Reef";
const unitPrice = 20;

let selectedQuantity = 1;
let cartQuantity = 0;

const qtyMinus = document.getElementById("qtyMinus");
const qtyPlus = document.getElementById("qtyPlus");
const qtyDisplay = document.getElementById("qtyDisplay");
const addToCart = document.getElementById("addToCart");

const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");
const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

function updateQuantityDisplay() {
  qtyDisplay.textContent = selectedQuantity;
}

function updateCart() {
  cartCount.textContent = cartQuantity;
  cartTotal.textContent = `$${(cartQuantity * unitPrice).toFixed(2)}`;

  if (cartQuantity === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
  } else {
    cartItems.innerHTML = `
      <div class="cart-item">
        <strong>${productName}</strong>
        <span>Quantity: ${cartQuantity}</span>
        <span>$${(cartQuantity * unitPrice).toFixed(2)}</span>
      </div>
    `;
  }

  checkoutButton.href = stripeLink;
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

qtyMinus?.addEventListener("click", () => {
  selectedQuantity = Math.max(1, selectedQuantity - 1);
  updateQuantityDisplay();
});

qtyPlus?.addEventListener("click", () => {
  selectedQuantity += 1;
  updateQuantityDisplay();
});

addToCart?.addEventListener("click", () => {
  cartQuantity += selectedQuantity;
  updateCart();
  showCart();
});

openCart?.addEventListener("click", showCart);
closeCart?.addEventListener("click", hideCart);
cartOverlay?.addEventListener("click", hideCart);

menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideCart();
    siteNav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

updateQuantityDisplay();
updateCart();
