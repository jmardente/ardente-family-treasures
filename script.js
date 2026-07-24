const stripePaymentLink = "https://buy.stripe.com/bJeeV50JO9qnbxfbXJcAo00";
const cart = JSON.parse(localStorage.getItem("ardenteCart") || "{}");

const drawer = document.getElementById("cart-drawer");
const backdrop = document.querySelector(".cart-backdrop");
const cartItems = document.getElementById("cart-items");
const cartEmpty = document.getElementById("cart-empty");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout-button");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

function saveCart() {
  localStorage.setItem("ardenteCart", JSON.stringify(cart));
}

function openCart() {
  drawer.classList.add("open");
  backdrop.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  drawer.classList.remove("open");
  backdrop.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

function renderCart() {
  const items = Object.values(cart).filter(item => item.quantity > 0);
  const quantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = quantity;
  cartTotal.textContent = `$${total.toFixed(2)}`;
  cartEmpty.hidden = items.length > 0;
  checkoutButton.classList.toggle("disabled", items.length === 0);
  checkoutButton.setAttribute("aria-disabled", String(items.length === 0));
  checkoutButton.href = stripePaymentLink;

  cartItems.innerHTML = items.map(item => `
    <div class="cart-line" data-cart-id="${item.id}">
      <div>
        <h3>${item.name}</h3>
        <div class="qty-controls">
          <button type="button" data-action="decrease" aria-label="Decrease quantity">−</button>
          <strong>${item.quantity}</strong>
          <button type="button" data-action="increase" aria-label="Increase quantity">+</button>
        </div>
        <button type="button" class="remove-item" data-action="remove">Remove</button>
      </div>
      <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
    </div>
  `).join("");

  saveCart();
}

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest("[data-product-id]");
    const id = card.dataset.productId;
    cart[id] = cart[id] || {
      id,
      name: card.dataset.name,
      price: Number(card.dataset.price),
      quantity: 0
    };
    cart[id].quantity += 1;
    renderCart();
    openCart();
  });
});

document.querySelectorAll("[data-open-cart]").forEach(button => button.addEventListener("click", openCart));
document.querySelectorAll("[data-close-cart]").forEach(button => button.addEventListener("click", closeCart));

cartItems.addEventListener("click", event => {
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const line = actionButton.closest("[data-cart-id]");
  const id = line.dataset.cartId;
  const action = actionButton.dataset.action;

  if (action === "increase") cart[id].quantity += 1;
  if (action === "decrease") cart[id].quantity -= 1;
  if (action === "remove" || cart[id].quantity <= 0) delete cart[id];
  renderCart();
});

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

renderCart();
