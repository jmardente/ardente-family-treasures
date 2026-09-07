const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const products = Array.isArray(window.PRODUCTS) ? window.PRODUCTS : [];
const product = products.find((item) => item.id === productId);

const nameEl = document.getElementById("diyName");
const crumbEl = document.getElementById("crumbName");
const imageEl = document.getElementById("diyMainImage");
const descriptionEl = document.getElementById("diyDescription");
const priceEl = document.getElementById("diyPrice");
const badgeEl = document.getElementById("diyBadge");
const actionEl = document.getElementById("diyMainAction");
const inspirationWrap = document.getElementById("inspirationImageWrap");
const inspirationImage = document.getElementById("inspirationImage");
const inspirationPlaceholder = document.getElementById("inspirationPlaceholder");

if (!product) {
  nameEl.textContent = "DIY Project Coming Soon";
  crumbEl.textContent = "Coming Soon";
  descriptionEl.textContent = "This DIY project is being updated with new photos, painting inspiration and kit information.";
  priceEl.textContent = "";
  imageEl.style.display = "none";
  badgeEl.textContent = "Ardente DIY";
  actionEl.innerHTML = `<a class="button purple" href="index.html#shop">Back to DIY Paint Kits</a>`;
} else {
  document.title = `${product.name} | Ardente Family Treasures`;
  nameEl.textContent = product.name;
  crumbEl.textContent = product.name;
  imageEl.src = product.detailImage || product.image;
  imageEl.alt = product.alt || product.name;
  descriptionEl.textContent = product.detailDescription || product.description || "Paint it your way and make it completely your own.";
  badgeEl.textContent = product.badge || "DIY Paint Kit";

  if (product.price !== null && product.price !== undefined && product.status !== "coming-soon") {
    priceEl.textContent = `$${Number(product.price).toFixed(2)}`;
  } else {
    priceEl.textContent = "Coming Soon";
  }

  if (product.status === "available") {
    actionEl.innerHTML = `<button class="button gold full-width" type="button" data-add-to-cart="${product.id}">Add Kit to Cart</button>`;
  } else {
    actionEl.innerHTML = `<span class="coming">${product.status === "sold-out" ? "Sold Out" : "Coming Soon"}</span>`;
  }

  if (product.inspirationImage) {
    inspirationImage.src = product.inspirationImage;
    inspirationImage.alt = `${product.name} painting inspiration guide`;
    inspirationWrap.hidden = false;
    inspirationPlaceholder.hidden = true;
  }
}