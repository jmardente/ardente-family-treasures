const productGrid = document.getElementById("productGrid");
const categoryFilters = document.getElementById("categoryFilters");
const shopHeading = document.getElementById("shopHeading");
const shopDescription = document.getElementById("shopDescription");
const emptyCategory = document.getElementById("emptyCategory");

const CORAL_REEF_CRITTERS = { id: "coral-reef-critters", name: "Coral Reef Critters DIY Paint Set", price: 12.99, image: "assets/coral-reef-critters.png", alt: "Coral Reef Critters ceramic DIY paint set with dolphin, octopus, stingray, turtle, paints and brush", description: "Create your own colorful ocean friends! This DIY ceramic set includes the four sea-creature pieces shown, six paint colors, one paint brush, and free U.S. shipping.", category: "cora-diy", badge: "Cora's DIY", status: "available" };
if (Array.isArray(window.PRODUCTS) && !window.PRODUCTS.some((product) => product.id === CORAL_REEF_CRITTERS.id)) window.PRODUCTS.push(CORAL_REEF_CRITTERS);

const FALL_DIY_COMING_SOON = { id: "fall-diy-coming-soon", name: "Fall DIY Collection", price: null, image: "assets/file_000000006ef881fdb50b3d5e16e6c35d.png", alt: "Fall DIY ceramic painting collection from Ardente Family Treasures", description: "Cozy fall DIY projects are coming soon! Paint and create seasonal favorites for autumn and Thanksgiving.", category: "fall-diy", badge: "Fall DIY", status: "coming-soon" };
if (Array.isArray(window.PRODUCTS) && !window.PRODUCTS.some((product) => product.id === FALL_DIY_COMING_SOON.id)) window.PRODUCTS.push(FALL_DIY_COMING_SOON);

// Halloween DIY listings are intentionally hidden while the collection is being rebuilt.
if (Array.isArray(window.PRODUCTS)) window.PRODUCTS = window.PRODUCTS.filter((product) => product.category !== "halloween-diy");

const DIY_CATEGORIES = ["cora-diy", "fall-diy", "halloween-diy", "crafts"];
const CATEGORY_COPY = {
  all: { heading: "Featured Products", description: "Browse our books and family treasures, or choose a category to explore more." },
  books: { heading: "Books", description: "Stories and signed books from Ardente Family Treasures." },
  "kids-gifts": { heading: "Kids' Gifts", description: "Fun, affordable gifts and little treasures chosen especially for kids." },
  "diy-all": { heading: "DIY Paint Kits", description: "Choose a creative paint-your-own project, then open it for inspiration, kit details, add-ons and pricing." },
  "cora-diy": { heading: "Cora's Ocean DIY", description: "Ocean-inspired crafts and creative projects from Cora's Ocean Adventures." },
  "diy-extras": { heading: "DIY Extras", description: "Add a little extra magic to your DIY creations with fun paints, markers, tools and creative goodies." },
  "handmade-gifts": { heading: "Handmade Gifts", description: "One-of-a-kind handcrafted and hand-painted treasures made with care." },
  crafts: { heading: "DIY & Crafts", description: "Creative projects and paint-your-own treasures for family fun." },
  "seasonal-halloween": { heading: "Seasonal Gifts", description: "Handmade and seasonal treasures for celebrating throughout the year." },
  "fall-diy": { heading: "Fall & Thanksgiving DIY", description: "Cozy autumn and Thanksgiving crafts to paint, create and make your own." },
  "halloween-diy": { heading: "Halloween DIY", description: "We are rebuilding this collection with new photos and painting inspiration. New kits are coming soon." }
};

let activeCategory = "all";
function formatPrice(price) { return `$${Number(price).toFixed(2)}`; }
function isDIY(product) { return DIY_CATEGORIES.includes(product.category); }

function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "store-card";
  article.dataset.category = product.category || "uncategorized";
  const isAvailable = product.status === "available";
  const diyProduct = isDIY(product);
  const showPrice = !diyProduct && product.price !== null && product.price !== undefined && product.status !== "coming-soon";
  const imageMarkup = diyProduct
    ? `<a class="product-image-wrap product-link" href="diy-product.html?id=${encodeURIComponent(product.id)}" aria-label="See ${product.name}"><img src="${product.image}" alt="${product.alt || product.name}" class="product-image" loading="lazy" /></a>`
    : `<div class="product-image-wrap"><img src="${product.image}" alt="${product.alt || product.name}" class="product-image" loading="lazy" /></div>`;
  const actions = diyProduct
    ? `<a class="button gold" href="diy-product.html?id=${encodeURIComponent(product.id)}">See This DIY</a>`
    : (isAvailable ? `<button class="button gold" type="button" data-add-to-cart="${product.id}">Add to Cart</button>` : `<span class="coming">${product.status === "sold-out" ? "Sold Out" : "Coming Soon"}</span>`);

  article.innerHTML = `${imageMarkup}<div class="product-details">${product.badge ? `<span class="badge">${product.badge}</span>` : ""}<h3>${product.name}</h3><p>${diyProduct ? "See the project, painting inspiration, what’s included and available add-ons." : product.description}</p>${showPrice ? `<p class="price">${formatPrice(product.price)}</p>` : ""}<div class="product-actions">${actions}</div>${!diyProduct && isAvailable ? `<small class="secure-note">Secure checkout handled by Stripe.</small>` : ""}</div>`;
  return article;
}

function displayProducts(category = activeCategory) {
  if (!productGrid || !Array.isArray(window.PRODUCTS)) return;
  activeCategory = category;
  let products;
  if (category === "all") {
    products = window.PRODUCTS.filter((product) => !["seasonal-halloween", "cora-diy", "fall-diy", "halloween-diy"].includes(product.category));
  } else if (category === "diy-all") {
    products = window.PRODUCTS.filter((product) => DIY_CATEGORIES.includes(product.category));
  } else {
    products = window.PRODUCTS.filter((product) => product.category === category);
  }
  productGrid.innerHTML = "";
  products.forEach((product) => productGrid.appendChild(createProductCard(product)));
  if (emptyCategory) emptyCategory.hidden = products.length > 0;
  const copy = CATEGORY_COPY[category] || CATEGORY_COPY.all;
  if (shopHeading) shopHeading.textContent = copy.heading;
  if (shopDescription) shopDescription.innerHTML = copy.description;
  document.querySelectorAll("[data-category]").forEach((button) => button.classList.toggle("active", button.dataset.category === category));
}

categoryFilters?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) displayProducts(button.dataset.category);
});
document.querySelectorAll("[data-category-link]").forEach((link) => link.addEventListener("click", () => displayProducts(link.dataset.categoryLink)));
displayProducts();