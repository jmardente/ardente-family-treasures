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
    category: "everyday-diy",
    badge: "Everyday DIY",
    status: "available",
    weightOz: 11
  },
  {
    id: "diy-cauldron",
    name: "DIY Paint-Your-Own Cauldron",
    price: 12.99,
    image: "assets/Cauldron.png",
    alt: "DIY paint-your-own cauldron kit with paints and brush",
    description: "A fun paint-your-own cauldron project for any time of year. Includes paints and a brush.",
    category: "halloween-diy",
    badge: "Halloween DIY",
    status: "available",
    weightOz: 8
  },
  {
    id: "diy-critter-snake",
    name: "DIY Critters — Snake",
    price: 7.99,
    image: "assets/diy-critters-snake.webp",
    alt: "DIY paint-your-own magnetic snake with paints and brush",
    description: "Paint your own magnetic snake and make it completely yours. Includes paints and a brush — perfect for a fridge, locker or other magnetic surface.",
    detailDescription: "A creative paint-your-own magnetic snake for all ages. The $7.99 kit includes paints and a brush. Approximate product weight is 6.5 oz before packaging; shipping is added separately.",
    category: "everyday-diy",
    badge: "DIY Critters",
    status: "available",
    weightOz: 6.5
  },
  {
    id: "diy-critter-scorpion",
    name: "DIY Critters — Scorpion",
    price: 4.99,
    image: "assets/diy-critters-scorpion.webp",
    alt: "DIY paint-your-own magnetic scorpion with paints and brush",
    description: "Paint your own magnetic scorpion and give it your own style. Includes paints and a brush — perfect for a fridge, locker or other magnetic surface.",
    detailDescription: "A creative paint-your-own magnetic scorpion for all ages. The $4.99 kit includes paints and a brush. Approximate product weight is 2.5 oz before packaging; shipping is added separately.",
    category: "everyday-diy",
    badge: "DIY Critters",
    status: "available",
    weightOz: 2.5
  },
  {
    id: "diy-critter-snake-scorpion-set",
    name: "DIY Critters — Snake & Scorpion Set",
    price: 9.99,
    image: "assets/diy-critters-snake-scorpion-set.webp",
    alt: "DIY paint-your-own magnetic snake and scorpion set with paints and brush",
    description: "Get both DIY Critters together! Paint your own magnetic snake and scorpion. Includes paints and a brush.",
    detailDescription: "The DIY Critters Snake & Scorpion Set includes both magnetic pieces, paints and a brush for $9.99. Total product weight is approximately 9 oz before packaging; shipping is added separately.",
    category: "everyday-diy",
    badge: "DIY Critters",
    status: "available",
    weightOz: 9
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
    id: "mummy-pumpkin-diy",
    name: "Mummy Pumpkin DIY Paint Kit",
    price: 9.99,
    image: "assets/file_000000004ca48230bc423319ec06a9ff.png",
    alt: "Mummy pumpkin Halloween DIY paint kit with paints and brush",
    description: "A spooky-cute mummy pumpkin ready to paint and make your own. Includes paints and a brush.",
    category: "halloween-diy",
    badge: "Halloween DIY",
    status: "available",
    weightOz: 5.5
  },
  {
    id: "halloween-potion-cauldron",
    name: "Halloween Potion Cauldron DIY Paint Kit",
    price: 9.99,
    image: "assets/Halloween-potion-cauldron.webp",
    alt: "Halloween potion cauldron DIY paint kit with acrylic paints and brush",
    description: "Paint your own spooky potion cauldron. Includes one ready-to-paint cauldron, 6 acrylic paints, and a brush.",
    detailDescription: "A fun Halloween paint-your-own potion cauldron kit for all ages. The $9.99 kit includes one ready-to-paint cauldron, 6 acrylic paints, and a paint brush. Product weight is approximately 10.5 oz before packaging; shipping is added separately.",
    category: "halloween-diy",
    badge: "Halloween DIY",
    status: "available",
    weightOz: 10.5
  },
  {
    id: "halloween-salt-pepper-set",
    name: "Halloween Salt & Pepper DIY Paint Kit",
    price: 17.99,
    image: "assets/Salt-pepper.png",
    alt: "Halloween salt and pepper DIY paint kit with paints and brush",
    description: "Paint your own matching Halloween salt and pepper set. Includes paints and a brush.",
    category: "halloween-diy",
    badge: "Halloween DIY",
    status: "available",
    weightOz: 19
  },
  {
    id: "halloween-gnome-tree-set",
    name: "Halloween Gnome & Tree Set DIY Paint Kit",
    price: 18.99,
    image: "assets/halloween-gnome-tree-set.jpg",
    alt: "Halloween gnome and spooky tree DIY paint kit with paints and brush",
    description: "Paint your own spooky Halloween gnome and haunted tree set. Includes paints and a brush.",
    detailDescription: "A spooky pair for your Halloween decor! The $18.99 set includes a 3 oz gnome, a 6.5 oz tree, paints and a brush. Total set weight is approximately 10 oz before packaging; shipping is added separately.",
    category: "halloween-diy",
    badge: "Halloween DIY",
    status: "available",
    weightOz: 10
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
  }
];

if (typeof window !== "undefined") window.PRODUCTS = PRODUCTS;
if (typeof module !== "undefined" && module.exports) module.exports = PRODUCTS;
