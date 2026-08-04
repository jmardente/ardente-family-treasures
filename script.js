const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

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
    siteNav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

const checkoutStatus = new URLSearchParams(window.location.search).get("checkout");
if (checkoutStatus === "success") {
  localStorage.removeItem("ardente-family-treasures-cart-v2");
  window.StoreCart?.renderCart();
}
