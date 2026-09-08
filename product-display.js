const productGrid = document.getElementById("productGrid");
const categoryFilters = document.getElementById("categoryFilters");
const shopHeading = document.getElementById("shopHeading");
const shopDescription = document.getElementById("shopDescription");
const emptyCategory = document.getElementById("emptyCategory");

let activeCategory = "books";

function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`;
}

function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "store-card";
  article.dataset.category = product.category || "books";
  const isAvailable = product.status === "available";
  const showPrice = product.price !== null && product.price !== undefined && product.status !== "coming-soon";

  article.innerHTML = `
    <div class="product-image-wrap">
      <img src="${product.image}" alt="${product.alt || product.name}" class="product-image" loading="lazy" />
    </div>
    <div class="product-details">
      ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
      <h3>${product.name}</h3>
      <p>${product.description || ""}</p>
      ${showPrice ? `<p class="price">${formatPrice(product.price)}</p>` : ""}
      <div class="product-actions">
        ${isAvailable ? `<button class="button gold" type="button" data-add-to-cart="${product.id}">Add to Cart</button>` : `<span class="coming">Coming Soon</span>`}
      </div>
      ${isAvailable ? `<small class="secure-note">Secure checkout handled by Stripe.</small>` : ""}
    </div>`;
  return article;
}

function displayProducts(category = "books") {
  if (!productGrid || !Array.isArray(window.PRODUCTS)) return;
  activeCategory = category;
  const products = window.PRODUCTS.filter((product) => product.category === "books");
  productGrid.innerHTML = "";
  products.forEach((product) => productGrid.appendChild(createProductCard(product)));
  if (emptyCategory) emptyCategory.hidden = products.length > 0;
  if (shopHeading) shopHeading.textContent = "Books & Coloring Adventures";
  if (shopDescription) shopDescription.textContent = "Discover Cora's Ocean Adventures books and coloring books.";
  document.querySelectorAll("[data-category]").forEach((button) => button.classList.toggle("active", button.dataset.category === "books"));
}

categoryFilters?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) displayProducts(button.dataset.category);
});

document.querySelectorAll("[data-category-link]").forEach((link) => link.addEventListener("click", () => displayProducts("books")));
displayProducts();
