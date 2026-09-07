const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const diyDropdown = document.querySelector(".nav-dropdown");
const diyDropdownToggle = document.querySelector(".nav-dropdown-toggle");

menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

diyDropdownToggle?.addEventListener("click", () => {
  const isOpen = diyDropdown?.classList.toggle("open");
  diyDropdownToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    diyDropdown?.classList.remove("open");
    diyDropdownToggle?.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    siteNav?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    diyDropdown?.classList.remove("open");
    diyDropdownToggle?.setAttribute("aria-expanded", "false");
  }
});

const checkoutStatus = new URLSearchParams(window.location.search).get("checkout");
if (checkoutStatus === "success") {
  window.StoreCart?.clearCart();
}
