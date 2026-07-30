const productGrid = document.getElementById("productGrid");

function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`;
}

function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "store-card featured-product";

  const isAvailable = product.status === "available";

  article.innerHTML = `
    <div class="product-image-wrap">
      <img
        src="${product.image}"
        alt="${product.alt || product.name}"
        class="product-image"
      />
    </div>

    <div class="product-details">
      ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}

      <h3>${product.name}</h3>

      <p class="rating" aria-label="Five stars">★★★★★</p>

      <p>${product.description}</p>

      <p class="price">${formatPrice(product.price)}</p>

      <div class="product-actions">
        ${
          isAvailable
            ? `
              <a
                class="button gold"
                href="${product.stripeLink}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Purchase
              </a>

              <a
                class="button purple"
                href="${product.stripeLink}"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now — ${formatPrice(product.price)}
              </a>
            `
            : `
              <span class="coming">
                ${product.status === "sold-out" ? "Sold Out" : "Coming Soon"}
              </span>
            `
        }
      </div>

      ${
        isAvailable
          ? `<small class="secure-note">Secure payment handled by Stripe.</small>`
          : ""
      }
    </div>
  `;

  return article;
}

function displayProducts() {
  if (!productGrid || !Array.isArray(window.PRODUCTS)) {
    return;
  }

  productGrid.innerHTML = "";

  window.PRODUCTS.forEach((product) => {
    productGrid.appendChild(createProductCard(product));
  });
}

displayProducts();
