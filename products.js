const PRODUCTS = [
  {
    id: "cora-coral-reef",
    name: "Cora and the Coral Reef",
    price: 20.0,
    image: "assets/cora-coral-reef-book.png",
    alt: "Cora and the Coral Reef signed children's book",
    description:
      "A heartwarming ocean adventure about courage, friendship, teamwork, and believing in yourself.",
    category: "books",
    badge: "Signed Copy",
    status: "available",
    stripePriceEnv: "STRIPE_PRICE_CORA_BOOK"
  },
  {
    id: "coral-reef-paint-set",
    name: "Coral Reef Ceramic Paint Set",
    price: 9.99,
    image: "assets/coral-reef-paint-set.png",
    alt: "Small ceramic coral reef paint set with paints and brush",
    description:
      "Paint your own ocean-inspired coral reef! Includes three small ceramic coral reefs, six paint colors, and one paint brush. Coral pieces are smaller than they appear.",
    category: "crafts",
    badge: "New",
    status: "available",
    stripePriceEnv: "STRIPE_PRICE_CORAL_PAINT_SET"
  }
];

if (typeof window !== "undefined") {
  window.PRODUCTS = PRODUCTS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = PRODUCTS;
}
