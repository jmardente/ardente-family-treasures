
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(menu&&nav){
  menu.addEventListener('click',()=>{
    nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',nav.classList.contains('open'));
  });
}
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.main-nav a').forEach(a=>{
  if(a.getAttribute('href')===current)a.classList.add('active');
});
const getCart=()=>JSON.parse(localStorage.getItem('aftFamilyStoreCart')||'[]');
const saveCart=cart=>{
  localStorage.setItem('aftFamilyStoreCart',JSON.stringify(cart));
  updateCount();
};
function updateCount(){
  const count=getCart().reduce((sum,item)=>sum+item.qty,0);
  document.querySelectorAll('#cartCount').forEach(el=>el.textContent=count);
}
document.querySelectorAll('.add-cart').forEach(button=>{
  button.addEventListener('click',()=>{
    const cart=getCart();
    const existing=cart.find(item=>item.id===button.dataset.id);
    if(existing){existing.qty+=1}else{
      cart.push({
        id:button.dataset.id,
        name:button.dataset.name,
        price:Number(button.dataset.price),
        qty:1
      });
    }
    saveCart(cart);
    const old=button.textContent;
    button.textContent='Added!';
    setTimeout(()=>button.textContent=old,1100);
  });
});
function renderCart(){
  const box=document.getElementById('cartItems');
  const total=document.getElementById('cartTotal');
  if(!box||!total)return;
  const cart=getCart();
  if(!cart.length){
    box.innerHTML='<div class="educator-box"><h2>Your cart is empty</h2><p>Visit the shop to add a family treasure.</p><a class="button aqua" href="shop.html">Go to Shop</a></div>';
    total.textContent='$0.00';
    return;
  }
  box.innerHTML=cart.map(item=>`
    <div class="cart-row">
      <div><strong>${item.name}</strong><br><small>Quantity: ${item.qty}</small></div>
      <strong>$${(item.price*item.qty).toFixed(2)}</strong>
      <button class="remove-item" data-id="${item.id}">Remove</button>
    </div>`).join('');
  total.textContent='$'+cart.reduce((sum,item)=>sum+item.price*item.qty,0).toFixed(2);
  box.querySelectorAll('.remove-item').forEach(btn=>{
    btn.addEventListener('click',()=>{
      saveCart(getCart().filter(item=>item.id!==btn.dataset.id));
      renderCart();
    });
  });
}
updateCount();
renderCart();
document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
