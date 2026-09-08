const PRODUCTS = [
  {
    id: "cora-coral-reef",
    name: "Cora and the Coral Reef",
    price: 20.0,
    image: "assets/cora-coral-reef-book.png",
    alt: "Cora and the Coral Reef signed children's book",
    description: "A heartwarming ocean adventure about courage, friendship, teamwork, and believing in yourself.",
    category: "books",
    badge: "Signed Copy",
    status: "available",
    stripePriceEnv: "STRIPE_PRICE_CORA_BOOK"
  },
  {
    id: "cora-coloring-book",
    name: "Cora's Ocean Adventures Coloring Book",
    price: 7.99,
    image: "assets/cora-ocean-adventures-coloring-book.png",
    alt: "Cora's Ocean Adventures Meet the Ardente Ocean Family coloring book",
    description: "Meet Cora and the entire Ardente ocean family! Dive beneath the waves and get to know Seymour, Octavia, Pinch, Sophie, Quinn, Jackie, and many more lovable friends. Every page is filled with fun characters, ocean adventures, and creative coloring that brings the magical world of Cora's Ocean Adventures to life.",
    category: "books",
    badge: "Meet the Family",
    status: "available",
    stripePriceEnv: "STRIPE_PRICE_CORA_COLORING_BOOK"
  },
  {
    id: "cora-magical-necklace",
    name: "Cora and the Magical Necklace",
    price: null,
    image: "assets/Cora and the Magical Necklace Book Cover.png",
    alt: "Cora and the Magical Necklace children's book cover by JM Ardente",
    description: "Where the adventure began. Before Cora explored the coral reef, she discovered a mysterious pink seashell necklace that would change everything. Follow Cora as she uncovers its magic, meets new ocean friends, and begins the adventure that started it all. Sometimes the smallest treasures lead to the greatest adventures...",
    category: "books",
    badge: "Coming Soon",
    status: "coming-soon"
  },
  {
    id: "glitter-dual-tip-markers-12-pack",
    name: "Glitter Dual Tip Markers — 12 Pack / 24 Colors",
    price: 9.99,
    image: "assets/file_000000008f3081fda0f0260ad995a98d.png",
    alt: "Glitter dual tip markers, 12 pack with 24 colors",
    description: "Add sparkle to rocks, wood, crafts, cards and DIY projects with 12 dual-tip glitter markers in 24 vibrant colors.",
    category: "diy-goodies",
    badge: "DIY Goodies",
    status: "available",
    weightOz: 6.5
  }
];

if (typeof window !== "undefined") {
  window.PRODUCTS = PRODUCTS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = PRODUCTS;
}
