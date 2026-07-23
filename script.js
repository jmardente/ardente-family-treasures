
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.icon-nav');
if(menu&&nav){menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))})}
document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
