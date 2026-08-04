# Ardente Family Treasures Store Setup

## What this rebuild adds

- Add to Cart buttons for every available product
- One cart for books, paint kits, and future products
- Quantity controls and remove buttons
- Cart saved in the customer's browser
- One Stripe Checkout session for all cart items
- Responsive product grid

## Stripe environment variables required in Netlify

Add these under **Netlify → Site configuration → Environment variables**:

- `STRIPE_SECRET_KEY` — your Stripe secret key
- `STRIPE_PRICE_CORA_BOOK` — the Stripe Price ID for the signed book
- `STRIPE_PRICE_CORAL_PAINT_SET` — the Stripe Price ID for the coral paint set

Stripe Price IDs begin with `price_`. They are not Payment Link URLs.

After adding or changing the variables, create a fresh Deploy Preview so the Netlify Function receives the latest values.

## Adding another product later

1. Upload the product image to the `assets` folder.
2. Create the product and price in Stripe.
3. Add the Stripe Price ID to Netlify as a new environment variable.
4. Add one object to `products.js`:

```javascript
{
  id: "unique-product-id",
  name: "Product Name",
  price: 12.99,
  image: "assets/product-image.png",
  alt: "Clear description of the product image",
  description: "Customer-friendly product description.",
  category: "crafts",
  badge: "New",
  status: "available",
  stripePriceEnv: "STRIPE_PRICE_UNIQUE_PRODUCT"
}
```

No cart, display, or checkout code needs to be changed.

## Product status values

- `available` — displays Add to Cart
- `sold-out` — displays Sold Out
- any other value, such as `coming-soon` — displays Coming Soon
