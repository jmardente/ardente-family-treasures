const CORA_PRODUCTS = [
  {
    "id": "cora-coral-reef-scene-diy",
    "name": "Cora Coral Reef Scene DIY Paint Kit",
    "price": 9.99,
    "image": "assets/cora-coral-reef-scene-diy.png",
    "alt": "Coral Reef Scene DIY kit before and after painting with six paints and a brush",
    "description": "Paint your own colorful coral reef scene with the ocean creatures and coral pieces shown. Includes 6 paints and a brush.",
    "detailDescription": "Bring the ocean to life with the Coral Reef Scene DIY Paint Kit for $9.99 plus shipping. Includes the same ready-to-paint pieces shown, 6 paints, and 1 paint brush. Product weight is 6 oz before packaging. The painted scene shows decorating inspiration.",
    "category": "cora-diy",
    "badge": "Cora's Ocean DIY",
    "status": "available",
    "weightOz": 6
  },
  {
    "id": "cora-shell-set-diy",
    "name": "Cora DIY Shell Set",
    "price": 19.99,
    "image": "assets/cora-diy-shell-set.png",
    "alt": "Cora DIY Shell Set before and after painting, with six paint pots and one brush",
    "description": "Paint, create, and decorate your own ocean shell set. Includes the shell set pictured, 6 paint pots, and 1 paint brush.",
    "detailDescription": "Create your own colorful Cora DIY Shell Set for $19.99 plus shipping. Includes the same ready-to-paint shell set pictured, 6 paint pots, and 1 paint brush. Product weight is 12.5 oz before packaging. The painted shells show decorating inspiration.",
    "category": "cora-diy",
    "badge": "Cora's Ocean DIY",
    "status": "available",
    "weightOz": 12.5
  },
  {
    "id": "cora-turtle-container-diy",
    "name": "Cora's Ocean Friends — Turtle Container DIY Paint Kit",
    "price": 9.99,
    "image": "assets/file_00000000d54c81fda52360ffa1a8107f.png",
    "alt": "Paint-your-own turtle container DIY kit before and after with six paints and a brush",
    "description": "Paint your own adorable turtle container. Includes one ready-to-paint turtle container, 6 acrylic paints, and a brush.",
    "detailDescription": "Create your own colorful turtle container for $9.99 plus shipping. The kit includes 1 ready-to-paint turtle container, 6 acrylic paints, and 1 paint brush. The painted turtle in the photo shows an example of how you can decorate your own.",
    "category": "cora-diy",
    "badge": "Cora's Ocean DIY",
    "status": "available"
  },
  {
    id: "cora-puffer-fish-diy",
    name: "Cora's Ocean Friends — Puffer Fish DIY",
    price: 5.99,
    image: "assets/Seacreature-large.png",
    alt: "Cora's Ocean Adventures puffer fish DIY paint kit",
    description: "Paint your own adorable puffer fish from Cora's ocean world. Includes 6 paints and a brush.",
    detailDescription: "A fun Cora's Ocean Adventures paint-your-own puffer fish for $5.99. The kit includes one ready-to-paint puffer fish, 6 paints, and a paint brush. Product weight is approximately 0.5 oz before packaging; shipping is added separately.",
    category: "cora-diy",
    badge: "Cora's Ocean DIY",
    status: "available",
    weightOz: 0.5
  },
  {
    id: "cora-shark-diy",
    name: "Cora's Ocean Friends — Shark DIY",
    price: 9.99,
    image: "assets/Seacreature-large.png",
    alt: "Cora's Ocean Adventures shark DIY paint kit",
    description: "Paint your own friendly shark from Cora's ocean world. Includes 6 paints and a brush.",
    detailDescription: "A fun Cora's Ocean Adventures paint-your-own shark for $9.99. The kit includes one ready-to-paint shark, 6 paints, and a paint brush. Product weight is approximately 2 oz before packaging; shipping is added separately.",
    category: "cora-diy",
    badge: "Cora's Ocean DIY",
    status: "available",
    weightOz: 2
  },
  {
    id: "cora-sea-lion-diy",
    name: "Cora's Ocean Friends — Sea Lion DIY",
    price: 9.99,
    image: "assets/Seacreature-large.png",
    alt: "Cora's Ocean Adventures sea lion DIY paint kit",
    description: "Paint your own sweet sea lion from Cora's ocean world. Includes 6 paints and a brush.",
    detailDescription: "A fun Cora's Ocean Adventures paint-your-own sea lion for $9.99. The kit includes one ready-to-paint sea lion, 6 paints, and a paint brush. Product weight is approximately 2 oz before packaging; shipping is added separately.",
    category: "cora-diy",
    badge: "Cora's Ocean DIY",
    status: "available",
    weightOz: 2
  },
  {
    id: "cora-ocean-friends-3-piece-set",
    name: "Cora's Ocean Friends — 3-Piece DIY Set",
    price: 22.99,
    image: "assets/Seacreature-large.png",
    alt: "Cora's Ocean Adventures puffer fish shark and sea lion three-piece DIY paint set",
    description: "Get all three ocean friends together — puffer fish, shark, and sea lion. Includes 6 paints and a brush for each character.",
    detailDescription: "The Cora's Ocean Friends 3-Piece DIY Set includes the puffer fish, shark, and sea lion for $22.99, plus 18 paints and 3 brushes total. Combined product weight is approximately 4.5 oz before packaging; shipping is added separately.",
    category: "cora-diy",
    badge: "Cora's Ocean DIY Set",
    status: "available",
    weightOz: 4.5
  }
];

if (typeof window !== "undefined") {
  window.CORA_PRODUCTS = CORA_PRODUCTS;
  window.PRODUCTS = [...(window.PRODUCTS || []), ...CORA_PRODUCTS];
}
if (typeof module !== "undefined" && module.exports) module.exports = CORA_PRODUCTS;
