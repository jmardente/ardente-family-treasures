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
    description: "Meet Cora and the entire Ardente ocean family! Dive beneath the waves and get to know Seymour, Octavia, Pinch, Sophie, Quinn, Jackie, and many more lovable friends.",
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
    description: "Where the adventure began.",
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
  },
  {
    id: "bigfoot-adventure-set",
    name: "DIY Bigfoot Adventure — Set of 4",
    price: 14.99,
    image: "assets/file_00000000fe7081fdb9173b8455fa6180.png",
    alt: "DIY Bigfoot Adventure paint-your-own set of four with paints and brush",
    description: "A set of four Bigfoot adventure paint-your-own pieces with four unique outdoor designs. Paints and brush are included.",
    detailDescription: "Create your own Bigfoot adventure with four different paint-your-own designs featuring forests, mountains, UFOs and outdoor scenes. The $14.99 set includes paints and a brush. Product weight is 11 oz before packaging; shipping is added separately.",
    category: "paint-your-own",
    badge: "Paint Your Own",
    status: "available",
    weightOz: 11
  },
  {
    id: "maple-leaf-diy",
    name: "DIY Maple Leaf Dish",
    price: 9.99,
    image: "assets/Maple-leaf.png",
    category: "fall-diy",
    status: "available",
    stripePriceId: "price_1UDa0l0fa9ricc7XZrl6WUhD"
  },
  {
    id: "fall-harvest-magnet-kit",
    name: "Fall Harvest Magnet Kit",
    price: 14.99,
    image: "assets/Fall-harvest-magnet-set.png",
    category: "fall-diy",
    status: "available",
    stripePriceId: "price_1UDa2V0fa9ricc7XnhXWprnS"
  },
  {
    id: "fall-diy-collection",
    name: "Fall DIY Collection — 4 Piece Set",
    price: 34.99,
    image: "assets/Fall-set.png",
    category: "fall-diy",
    status: "available",
    stripePriceId: "price_1UDa2c0fa9ricc7X93eRrGf8"
  },
  {
    id: "diy-turkey",
    name: "DIY Turkey Paint Kit",
    price: 12.99,
    image: "assets/Turkey .png",
    category: "fall-diy",
    status: "available",
    stripePriceId: "price_1UDa2h0fa9ricc7Xov12XhS9"
  },
  {
    id: "farmhouse-owl",
    name: "Farmhouse Friends — Owl",
    price: 8.99,
    image: "assets/Owl-rooster.png",
    category: "fall-diy",
    status: "available",
    stripePriceId: "price_1UDa2m0fa9ricc7Xyhu2AkqX"
  },
  {
    id: "farmhouse-rooster",
    name: "Farmhouse Friends — Rooster",
    price: 8.99,
    image: "assets/Owl-rooster.png",
    category: "fall-diy",
    status: "available",
    stripePriceId: "price_1UDa2r0fa9ricc7Xv1RcDVA9"
  },
  {
    id: "farmhouse-owl-rooster-set",
    name: "Farmhouse Friends — Owl & Rooster Set",
    price: 15.99,
    image: "assets/Owl-rooster.png",
    category: "fall-diy",
    status: "available",
    stripePriceId: "price_1UDa2v0fa9ricc7XNt195Y5I"
  },
  {
    id: "witchy-cat-container-set",
    name: "Witchy Cat DIY Container Set",
    price: 14.99,
    image: "assets/Cats.png",
    category: "halloween-diy",
    status: "available",
    stripePriceId: "price_1UDa2z0fa9ricc7XUOz4CrOR"
  },
  {
    id: "halloween-large-ghost",
    name: "Halloween Boo Set — Large Ghost",
    price: 14.99,
    image: "assets/Ghost-boo.png",
    category: "halloween-diy",
    status: "available",
    stripePriceId: "price_1UDa5j0fa9ricc7XUj8VfstG"
  },
  {
    id: "halloween-small-boo",
    name: "Halloween Boo Set — Small Boo",
    price: 7.99,
    image: "assets/Ghost-boo.png",
    category: "halloween-diy",
    status: "available",
    stripePriceId: "price_1UDa5o0fa9ricc7X5dvmrbHt"
  },
  {
    id: "halloween-ghost-boo-set",
    name: "Halloween Boo Set — Ghost & Boo",
    price: 21.99,
    image: "assets/Ghost-boo.png",
    category: "halloween-diy",
    status: "available",
    stripePriceId: "price_1UDa5x0fa9ricc7X0ppQHdW5"
  },
  {
    id: "3d-bat-halloween",
    name: "3D Bat Halloween DIY",
    price: 12.99,
    image: "assets/3D-bat.png",
    category: "halloween-diy",
    status: "available",
    stripePriceId: "price_1U203D0fa9ricc7XDsT7DnVP"
  },
  {
    id: "boo-halloween-diy",
    name: "BOO Halloween DIY",
    price: 12.99,
    image: "assets/boo.png",
    category: "halloween-diy",
    status: "available",
    stripePriceId: "price_1U204j0fa9ricc7XyKeoGelv"
  }
];

if (typeof window !== "undefined") window.PRODUCTS = PRODUCTS;
if (typeof module !== "undefined" && module.exports) module.exports = PRODUCTS;
