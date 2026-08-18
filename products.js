const PRODUCTS = [
  {
    id: "cora-coral-reef",
    name: "Cora and the Coral Reef",
    price: 20.0,
    image: "assets/cora-coral-reef-book.png",
    alt: "Cora and the Coral Reef signed children's book",
    description: "A heartwarming ocean adventure about courage, friendship, teamwork, and believing in yourself.",
    category: "books", badge: "Signed Copy", status: "available", stripePriceEnv: "STRIPE_PRICE_CORA_BOOK"
  },
  {
    id: "cora-coloring-book", name: "Cora's Ocean Adventures Coloring Book", price: 7.99,
    image: "assets/cora-ocean-adventures-coloring-book.png", alt: "Cora's Ocean Adventures Meet the Ardente Ocean Family coloring book",
    description: "Meet Cora and the entire Ardente ocean family! Dive beneath the waves and get to know Seymour, Octavia, Pinch, Sophie, Quinn, Jackie, and many more lovable friends. Every page is filled with fun characters, ocean adventures, and creative coloring that brings the magical world of Cora's Ocean Adventures to life.",
    category: "books", badge: "Meet the Family", status: "available", stripePriceEnv: "STRIPE_PRICE_CORA_COLORING_BOOK"
  },
  {
    id: "cora-magical-necklace", name: "Cora and the Magical Necklace", price: null,
    image: "assets/Cora and the Magical Necklace Book Cover.png", alt: "Cora and the Magical Necklace children's book cover by JM Ardente",
    description: "Where the adventure began. Before Cora explored the coral reef, she discovered a mysterious pink seashell necklace that would change everything. Follow Cora as she uncovers its magic, meets new ocean friends, and begins the adventure that started it all. Sometimes the smallest treasures lead to the greatest adventures...",
    category: "books", badge: "Coming Soon", status: "coming-soon"
  },
  {
    id: "coral-reef-diy-paint-set", name: "Coral Reef DIY Paint Set", price: 19.99,
    image: "assets/coral-reef-set.png", alt: "Coral Reef DIY ceramic paint set with six paints and brush",
    description: "Create your own colorful coral reef! This ocean-inspired DIY ceramic paint set includes the unfinished ceramic pieces shown, six paint colors, and one brush. Free U.S. shipping included. Add the 12-piece glitter marker set for $6.99.",
    category: "cora-diy", badge: "Cora's DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_CORAL_REEF_SET"
  },
  {
    id: "large-shell-craft-set", name: "Large Shell Craft Set", price: 24.99,
    image: "assets/large-shell-set.png", alt: "Large Shell Craft Set with 12 unfinished ceramic shell pieces, six paints, brush, and optional glitter marker upgrade",
    description: "Create your own ocean treasures with 12 unfinished ceramic shell pieces, including two functional holders, plus six paints and one brush. Free U.S. shipping included. Upgrade with the 12-piece glitter marker set for $6.99.",
    category: "cora-diy", badge: "Cora's DIY", status: "available"
  },
  {
    id: "conch-shell-jewelry-holder", name: "Conch Shell Jewelry Holder", price: 14.99,
    image: "assets/conch-shell.png", alt: "Unfinished ceramic conch shell jewelry holder with six paints and brush",
    description: "Paint and personalize your own ceramic conch shell jewelry holder, perfect for jewelry, treasures, and keepsakes. Includes six paint colors and one brush, with free U.S. shipping. Upgrade with the 12-piece glitter marker set for $6.99.",
    category: "cora-diy", badge: "Cora's DIY", status: "available"
  },
  {
    id: "mini-haunted-house-paint-set", name: "Mini Haunted House Halloween Paint Set", price: 29.99, image: "assets/mini-haunted-house-halloween-paint-set.png", alt: "Mini haunted house Halloween ceramic paint set with spooky figures", description: "Create your own spooky Halloween display! This DIY ceramic paint set includes the mini Halloween pieces shown, six paint colors, and one paint brush. A fun seasonal craft for families and Halloween decorating. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_HAUNTED_HOUSE_SET"
  },
  { id: "3d-bat", name: "3D Bat Halloween DIY", price: 19.99, image: "assets/3D-bat.png", alt: "3D bat Halloween DIY craft", description: "Create your own spooky 3D bat! A fun Halloween DIY craft from Ardente Family Treasures.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_3D_BAT" },
  { id: "boo-halloween-diy", name: "BOO Halloween DIY", price: 17.99, image: "assets/boo.png", alt: "BOO Halloween DIY craft", description: "Create your own BOO-themed Halloween decoration! A fun seasonal DIY craft from Ardente Family Treasures.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_BOO" },
  { id: "large-haunted-house-set", name: "Large Haunted House Halloween Paint Set", price: 39.99, image: "assets/large-haunted- house.png", alt: "Large haunted house Halloween ceramic paint set with spooky figures", description: "Create a full spooky Halloween scene! This large DIY ceramic paint set includes the Halloween pieces shown, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_LARGE_HAUNTED_HOUSE_SET" },
  { id: "zombie-hand-rose", name: "Zombie Hand & Rose Ceramic Paint Kit", price: 19.99, image: "assets/zombie-hand-rose.png", alt: "Zombie hand holding a rose Halloween ceramic paint kit", description: "Paint your own creepy-cute zombie hand holding a rose! This Halloween DIY ceramic kit includes the ceramic piece, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_ZOMBIE_HAND_ROSE" },
  { id: "skull-in-claws", name: "Skull in Claws Ceramic Paint Kit", price: 19.99, image: "assets/skull-in-claws.png", alt: "Skull in claws Halloween ceramic paint kit", description: "Paint your own spooky skull-in-claws Halloween decoration! This DIY ceramic kit includes the ceramic piece, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_SKULL_IN_CLAWS" },
  { id: "spooky-tree", name: "Spooky Tree Ceramic Paint Kit", price: 15.99, image: "assets/spooky-tree.png", alt: "Spooky tree Halloween ceramic paint kit", description: "Paint your own spooky Halloween tree! This DIY ceramic kit includes the ceramic piece, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_SPOOKY_TREE" },
  { id: "halloween-pumpkin-truck", name: "Halloween Pumpkin Truck Ceramic Paint Kit", price: 24.99, image: "assets/halloween truck.png", alt: "Halloween pumpkin truck ceramic paint kit with ghosts and pumpkins", description: "Paint your own Halloween pumpkin truck packed with spooky seasonal details! This DIY ceramic kit includes the ceramic piece, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_HALLOWEEN_TRUCK" },
  { id: "ghost-pumpkin-cauldron", name: "Ghost & Pumpkin Cauldron Ceramic Paint Kit", price: 19.99, image: "assets/ghost-with-cauldron.png", alt: "Ghost and pumpkin cauldron Halloween ceramic paint kit", description: "Paint your own ghost and pumpkin cauldron Halloween decoration! This DIY ceramic kit includes the ceramic piece, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_GHOST_CAULDRON" },
  { id: "scary-clown-head", name: "Scary Clown Head Ceramic Paint Kit", price: 19.99, image: "assets/scary-clown-head.png", alt: "Scary clown head Halloween ceramic paint kit", description: "Paint your own creepy scary clown head Halloween decoration! This DIY ceramic kit includes the ceramic piece, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_SCARY_CLOWN_HEAD" },
  { id: "ghost-boo", name: "Ghost & BOO Ceramic Paint Set", price: 24.99, image: "assets/ghost-boo.png", alt: "Ghost and BOO two-piece Halloween ceramic paint set", description: "Paint your own ghost and BOO Halloween decorations! This two-piece DIY ceramic set includes both ceramic pieces, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_GHOST_BOO" },
  { id: "gnome-boo", name: "Gnome & BOO Ceramic Paint Set", price: 24.99, image: "assets/gnome-boo.png", alt: "Halloween gnome and BOO two-piece ceramic paint set", description: "Paint your own Halloween gnome and BOO decorations! This two-piece DIY ceramic set includes both ceramic pieces, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_GNOME_BOO" },
  { id: "frankenstein-planter", name: "Frankenstein Planter Ceramic Paint Kit", price: 24.99, image: "assets/frankenstein-planter.png", alt: "Frankenstein-style Halloween ceramic planter paint kit", description: "Paint your own spooky Frankenstein-style ceramic planter! This DIY Halloween kit includes the ceramic planter, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_FRANKENSTEIN_PLANTER" },
  { id: "heart-brain", name: "Heart & Brain Ceramic Paint Set", price: 15.99, image: "assets/heart-brain.png", alt: "Anatomical heart and brain two-piece Halloween ceramic paint set", description: "Paint your own anatomical heart and brain Halloween decorations! This two-piece DIY ceramic set includes both ceramic pieces, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_HEART_BRAIN" },
  { id: "cat-on-pumpkin", name: "Cat on Pumpkin Ceramic Paint Kit", price: 12.99, image: "assets/cat-on-pumkin.png", alt: "Flat cat sitting on a pumpkin Halloween ceramic paint kit", description: "Paint your own flat cat-on-pumpkin Halloween decoration! This DIY ceramic kit includes the ceramic piece, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_CAT_ON_PUMPKIN" },
  { id: "spider-web-cauldron-lid", name: "Spider Web Cauldron with Lid Ceramic Paint Kit", price: 19.99, image: "assets/spider-web-cauldron-lid.png", alt: "Spider web cauldron with removable decorated lid Halloween ceramic paint kit", description: "Paint your own spooky 3D spider-web cauldron with removable decorated lid! This Halloween DIY ceramic kit includes the ceramic piece, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_SPIDER_WEB_CAULDRON_LID" },
  { id: "spooky-tree-with-ghosts", name: "Spooky Tree with Ghosts Ceramic Paint Kit", price: 24.99, image: "assets/spooky-tree-with ghost.png", alt: "Spooky tree filled with friendly ghosts Halloween ceramic paint kit", description: "Paint your own spooky tree filled with friendly ghosts! This Halloween DIY ceramic kit includes the ceramic piece, six paint colors, and one paint brush. Free shipping included.", category: "halloween-diy", badge: "Halloween DIY", status: "available", stripePriceEnv: "STRIPE_PRICE_SPOOKY_TREE_WITH_GHOSTS" }
];
if (typeof window !== "undefined") window.PRODUCTS = PRODUCTS;
if (typeof module !== "undefined" && module.exports) module.exports = PRODUCTS;
