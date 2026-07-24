const PRODUCTS = window.PRODUCTS || {};
let cart = JSON.parse(localStorage.getItem("aftCartV2") || "{}");

const cartDrawer = document.getElementById("cartDrawer");
const pageOverlay = document.getElementById("pageOverlay");
const cartItems = document.getElementById("cartItems");
const cartSummary = document.getElementById("cartSummary");
const cartEmpty = document.getElementById("cartEmpty");
const cartCount = document.getElementById("cartCount");
const cartSubtotal = document.getElementById("cartSubtotal");
const toast = document.getElementById("toast");

function saveCart(){ localStorage.setItem("aftCartV2", JSON.stringify(cart)); }
function money(value){ return `$${value.toFixed(2)}`; }

function showToast(message){
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(()=>toast.classList.remove("show"), 2200);
}

function renderCart(){
  const entries = Object.entries(cart).filter(([,qty]) => qty > 0);
  const totalCount = entries.reduce((sum,[,qty]) => sum + qty, 0);
  const subtotal = entries.reduce((sum,[id,qty]) => sum + PRODUCTS[id].price * qty, 0);

  cartCount.textContent = totalCount;
  cartSubtotal.textContent = money(subtotal);
  cartEmpty.hidden = entries.length > 0;
  cartSummary.hidden = entries.length === 0;

  cartItems.innerHTML = entries.map(([id,qty]) => {
    const product = PRODUCTS[id];
    return `<div class="cart-line">
      <img src="${product.image}" alt="">
      <div><strong>${product.name}</strong><small>${money(product.price)} each</small></div>
      <div class="cart-controls">
        <button data-action="decrease" data-id="${id}" aria-label="Decrease quantity">−</button>
        <span>${qty}</span>
        <button data-action="increase" data-id="${id}" aria-label="Increase quantity">+</button>
      </div>
    </div>`;
  }).join("");

  saveCart();
}

function openCart(){
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden","false");
  pageOverlay.hidden = false;
}
function closeCart(){
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden","true");
  pageOverlay.hidden = true;
}
function addProduct(id, qty=1){
  if(!PRODUCTS[id]) return;
  cart[id] = (cart[id] || 0) + qty;
  renderCart();
  openCart();
  showToast("Added to your Treasure Cart");
}

document.querySelectorAll(".add-product").forEach(button => {
  button.addEventListener("click", () => addProduct(button.dataset.productId));
});

cartItems.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if(!button) return;
  const id = button.dataset.id;
  if(button.dataset.action === "increase") cart[id] += 1;
  if(button.dataset.action === "decrease") cart[id] = Math.max(0, cart[id] - 1);
  if(cart[id] === 0) delete cart[id];
  renderCart();
});

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
pageOverlay.addEventListener("click", closeCart);
document.getElementById("clearCart").addEventListener("click", () => { cart = {}; renderCart(); });

document.getElementById("checkoutButton").addEventListener("click", async () => {
  const entries = Object.entries(cart).filter(([,qty]) => qty > 0);
  if(!entries.length) return;

  // With the currently available single product, use the approved Stripe Payment Link.
  // The customer can confirm quantity in Stripe if adjustable quantity is enabled there.
  if(entries.length === 1 && entries[0][0] === "coral-reef"){
    window.location.href = PRODUCTS["coral-reef"].stripePaymentLink;
    return;
  }

  // Ready for Netlify + Stripe Checkout when future products receive Stripe Price IDs.
  try{
    const response = await fetch("/.netlify/functions/create-checkout-session",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({items:entries.map(([id,quantity])=>({id,quantity}))})
    });
    const data = await response.json();
    if(!response.ok) throw new Error(data.error || "Checkout could not be started.");
    window.location.href = data.url;
  }catch(error){
    showToast(error.message);
  }
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      const categories = card.dataset.category.split(" ");
      card.hidden = filter !== "all" && !categories.includes(filter);
    });
  });
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mainNav.classList.remove("open")));

const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add("visible"); });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const bubbleLayer = document.querySelector(".bubble-layer");
for(let i=0;i<18;i++){
  const bubble=document.createElement("span");
  bubble.className="bubble";
  const size=8+Math.random()*28;
  bubble.style.width=`${size}px`;
  bubble.style.height=`${size}px`;
  bubble.style.left=`${Math.random()*100}%`;
  bubble.style.animationDuration=`${10+Math.random()*14}s`;
  bubble.style.animationDelay=`${-Math.random()*20}s`;
  bubble.style.opacity=.15+Math.random()*.35;
  bubbleLayer.appendChild(bubble);
}

renderCart();
