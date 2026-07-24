const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

const cart = [];
const drawer = document.getElementById('cart-drawer');
const backdrop = document.getElementById('cart-backdrop');
const itemsEl = document.getElementById('cart-items');
const emptyEl = document.getElementById('cart-empty');
const totalEl = document.getElementById('cart-total');
const countEl = document.getElementById('cart-count');
const checkoutButton = document.getElementById('checkout-button');

function openCart() {
  drawer?.classList.add('open');
  drawer?.setAttribute('aria-hidden', 'false');
  if (backdrop) backdrop.hidden = false;
  document.body.classList.add('body-cart-open');
}
function closeCart() {
  drawer?.classList.remove('open');
  drawer?.setAttribute('aria-hidden', 'true');
  if (backdrop) backdrop.hidden = true;
  document.body.classList.remove('body-cart-open');
}
function renderCart() {
  if (!itemsEl) return;
  itemsEl.innerHTML = '';
  cart.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `<img src="${item.image}" alt=""><div><h3>${item.name}</h3><p>$${item.price.toFixed(2)}</p></div><button class="cart-remove" type="button" aria-label="Remove ${item.name}">Remove</button>`;
    row.querySelector('.cart-remove').addEventListener('click', () => {
      cart.splice(index, 1);
      renderCart();
    });
    itemsEl.appendChild(row);
  });
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  if (countEl) countEl.textContent = String(cart.length);
  if (emptyEl) emptyEl.hidden = cart.length > 0;
  if (checkoutButton) checkoutButton.disabled = cart.length === 0;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    cart.push({
      id: button.dataset.id,
      name: button.dataset.name,
      price: Number(button.dataset.price),
      image: button.dataset.image,
      stripe: button.dataset.stripe
    });
    renderCart();
    openCart();
  });
});

document.querySelectorAll('.quick-buy').forEach(button => {
  button.addEventListener('click', () => window.location.href = button.dataset.stripe);
});

document.getElementById('open-cart')?.addEventListener('click', openCart);
document.getElementById('close-cart')?.addEventListener('click', closeCart);
backdrop?.addEventListener('click', closeCart);
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeCart(); });

checkoutButton?.addEventListener('click', () => {
  if (!cart.length) return;
  const uniqueLinks = [...new Set(cart.map(item => item.stripe))];
  if (uniqueLinks.length === 1) {
    window.location.href = uniqueLinks[0];
  } else {
    alert('Each additional product needs to be connected to the same Stripe Checkout cart before mixed-item checkout can be enabled.');
  }
});

renderCart();
