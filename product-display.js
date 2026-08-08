const productGrid = document.getElementById("productGrid");
const categoryFilters = document.getElementById("categoryFilters");
const shopHeading = document.getElementById("shopHeading");
const shopDescription = document.getElementById("shopDescription");
const emptyCategory = document.getElementById("emptyCategory");

const CATEGORY_COPY = {
  all: {
    heading: "Featured Products",
    description: "Browse our books and family treasures, or choose a category to explore more."
  },
  books: {
    heading: "Books",
    description: "Stories and signed books from Ardente Family Treasures."
  },
  "cora-diy": {
    heading: "🐚 Cora's DIY",
    description: "Ocean-inspired crafts and creative projects from Cora's Ocean Adventures."
  },
  crafts: {
    heading: "DIY & Crafts",
    description: "Creative projects and paint-your-own treasures for family fun."
  },
  "halloween-diy": {
    heading: "🎃 Halloween DIY",
    description: "Spooky, cute, and creative Halloween projects to make your own."
  }
};

let activeCategory = "all";

function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`;
}

function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "store-card";
  article.dataset.category = product.category || "uncategorized";

  const isAvailable = product.status === "available";

  article.innerHTML = `
    <div class="product-image-wrap">
      <img
        src="${product.image}"
        alt="${product.alt || product.name}"
        class="product-image"
        loading="lazy"
      />
    </div>

    <div class="product-details">
      ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">${formatPrice(product.price)}</p>

      <div class="product-actions">
        ${
          isAvailable
            ? `
              <button
                class="button gold"
                type="button"
                data-add-to-cart="${product.id}"
              >
                Add to Cart
              </button>
            `
            : `
              <span class="coming">
                ${product.status === "sold-out" ? "Sold Out" : "Coming Soon"}
              </span>
            `
        }
      </div>

      ${isAvailable ? `<small class="secure-note">Secure checkout handled by Stripe.</small>` : ""}
    </div>
  `;

  return article;
}

function displayProducts(category = activeCategory) {
  if (!productGrid || !Array.isArray(window.PRODUCTS)) return;

  activeCategory = category;
  const products = category === "all"
    ? window.PRODUCTS.filter((product) => !["halloween-diy", "cora-diy"].includes(product.category))
    : window.PRODUCTS.filter((product) => product.category === category);

  productGrid.innerHTML = "";
  products.forEach((product) => {
    productGrid.appendChild(createProductCard(product));
  });

  if (emptyCategory) {
    emptyCategory.hidden = products.length > 0;
  }

  const copy = CATEGORY_COPY[category] || CATEGORY_COPY.all;
  if (shopHeading) shopHeading.textContent = copy.heading;
  if (shopDescription) shopDescription.textContent = copy.description;

  document.querySelectorAll("[data-category]").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === category);
  });
}

categoryFilters?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  displayProducts(button.dataset.category);
});

document.querySelectorAll("[data-category-link]").forEach((link) => {
  link.addEventListener("click", () => {
    displayProducts(link.dataset.categoryLink);
  });
});

displayProducts();
