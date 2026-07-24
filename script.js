let selectedQty = 1;
let cartQty = Number(localStorage.getItem("ardenteStoreCart") || 0);

const qtyDisplay = document.getElementById("qtyDisplay");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const emptyCart = document.getElementById("emptyCart");
const cartContents = document.getElementById("cartContents");
const cartQtyDisplay = document.getElementById("cartQty");
const cartTotal = document.getElementById("cartTotal");

function renderSelected(){ qtyDisplay.textContent = selectedQty; }
function renderCart(){
  cartCount.textContent = cartQty;
  cartQtyDisplay.textContent = Math.max(cartQty, 1);
  cartTotal.textContent = `$${(cartQty * 20).toFixed(2)}`;
  emptyCart.hidden = cartQty > 0;
  cartContents.hidden = cartQty === 0;
  localStorage.setItem("ardenteStoreCart", String(cartQty));
}
function openCart(){ cartDrawer.classList.add("open"); cartDrawer.setAttribute("aria-hidden","false"); }
function closeCart(){ cartDrawer.classList.remove("open"); cartDrawer.setAttribute("aria-hidden","true"); }

document.getElementById("qtyMinus").addEventListener("click",()=>{ selectedQty=Math.max(1,selectedQty-1); renderSelected(); });
document.getElementById("qtyPlus").addEventListener("click",()=>{ selectedQty++; renderSelected(); });
document.getElementById("addToCart").addEventListener("click",()=>{ cartQty+=selectedQty; renderCart(); openCart(); });
document.getElementById("cartMinus").addEventListener("click",()=>{ cartQty=Math.max(0,cartQty-1); renderCart(); });
document.getElementById("cartPlus").addEventListener("click",()=>{ cartQty++; renderCart(); });
document.getElementById("clearCart").addEventListener("click",()=>{ cartQty=0; renderCart(); });
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);

const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("nav");
menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

renderSelected();
renderCart();
