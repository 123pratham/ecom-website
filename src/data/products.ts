export type Category = "men" | "women";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  type: string;
  price: number;
  originalPrice?: number;
  description: string;
  fabric: string;
  colors: string[];
  sizes: string[];
  image: string;
  gallery: string[];
  featured?: boolean;
  isNew?: boolean;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const products: Product[] = [
  {
    id: "w1",
    slug: "silk-column-dress",
    name: "Silk Column Dress",
    category: "women",
    type: "Dresses",
    price: 189,
    originalPrice: 240,
    description:
      "A fluid silk column with a scooped neckline and invisible side zip. Cut to skim the body and move with an easy evening ease.",
    fabric: "100% silk twill",
    colors: ["Ivory", "Noir", "Wine"],
    sizes: ["XS", "S", "M", "L"],
    image: img("photo-1515372039744-b8f02a3ae446"),
    gallery: [
      img("photo-1515372039744-b8f02a3ae446"),
      img("photo-1496747611176-843222e1e57c"),
    ],
    featured: true,
    isNew: true,
  },
  {
    id: "w2",
    slug: "linen-wrap-blouse",
    name: "Linen Wrap Blouse",
    category: "women",
    type: "Tops",
    price: 78,
    description:
      "A softly structured wrap blouse in washed linen. Ties at the waist and layers cleanly under tailoring.",
    fabric: "Washed European linen",
    colors: ["Sand", "White", "Sage"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: img("photo-1485968579580-b6d095142e6e"),
    gallery: [img("photo-1485968579580-b6d095142e6e")],
    featured: true,
  },
  {
    id: "w3",
    slug: "camel-wool-coat",
    name: "Camel Wool Coat",
    category: "women",
    type: "Outerwear",
    price: 320,
    description:
      "Double-faced wool with a belted waist and notched lapels. A seasonless coat meant to be worn for years.",
    fabric: "Italian double-faced wool",
    colors: ["Camel", "Charcoal"],
    sizes: ["S", "M", "L"],
    image: img("photo-1539533018447-63fcce2678e3"),
    gallery: [img("photo-1539533018447-63fcce2678e3")],
    featured: true,
  },
  {
    id: "w4",
    slug: "high-rise-tailored-trouser",
    name: "High-Rise Tailored Trouser",
    category: "women",
    type: "Bottoms",
    price: 128,
    description:
      "A high-rise straight leg with a pressed crease and hidden hook closure. Office-ready, evening-easy.",
    fabric: "Stretch wool blend",
    colors: ["Black", "Ivory", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: img("photo-1509631179647-0177331693ae"),
    gallery: [img("photo-1509631179647-0177331693ae")],
  },
  {
    id: "w5",
    slug: "cashmere-crew-knit",
    name: "Cashmere Crew Knit",
    category: "women",
    type: "Knitwear",
    price: 165,
    description:
      "A relaxed crew in two-ply cashmere. Ribbed cuffs, a slightly dropped shoulder, and an easy drape.",
    fabric: "2-ply cashmere",
    colors: ["Oat", "Blush", "Forest"],
    sizes: ["S", "M", "L"],
    image: img("photo-1434389677669-e08b4cac3105"),
    gallery: [img("photo-1434389677669-e08b4cac3105")],
    isNew: true,
  },
  {
    id: "w6",
    slug: "pleated-midi-skirt",
    name: "Pleated Midi Skirt",
    category: "women",
    type: "Bottoms",
    price: 98,
    description:
      "Knife-pleated midi with an elasticated back waist. Swings from desk to dinner without trying.",
    fabric: "Recycled polyester crepe",
    colors: ["Black", "Champagne"],
    sizes: ["XS", "S", "M", "L"],
    image: img("photo-1583496661160-fb5886a0aaaa"),
    gallery: [img("photo-1583496661160-fb5886a0aaaa")],
  },
  {
    id: "w7",
    slug: "structured-blazer",
    name: "Structured Blazer",
    category: "women",
    type: "Tailoring",
    price: 210,
    description:
      "Sharp shoulders, a nipped waist, and flap pockets. Tailored to feel like armor, look like ease.",
    fabric: "Wool-silk blend",
    colors: ["Ivory", "Black"],
    sizes: ["XS", "S", "M", "L"],
    image: img("photo-1591369822096-ffd140ec948f"),
    gallery: [img("photo-1591369822096-ffd140ec948f")],
    featured: true,
  },
  {
    id: "w8",
    slug: "satin-slip-set",
    name: "Satin Slip Set",
    category: "women",
    type: "Dresses",
    price: 142,
    description:
      "Bias-cut slip with a matching wrap. Wear together or split the pieces across the week.",
    fabric: "Acetate satin",
    colors: ["Champagne", "Midnight"],
    sizes: ["XS", "S", "M", "L"],
    image: img("photo-1469334031218-e382a71b716b"),
    gallery: [img("photo-1469334031218-e382a71b716b")],
  },
  {
    id: "m1",
    slug: "oxford-poplin-shirt",
    name: "Oxford Poplin Shirt",
    category: "men",
    type: "Shirts",
    price: 88,
    description:
      "A precise oxford with a slightly spread collar and mother-of-pearl buttons. The everyday shirt, refined.",
    fabric: "Egyptian cotton poplin",
    colors: ["White", "Sky", "Stripe"],
    sizes: ["S", "M", "L", "XL"],
    image: img("photo-1602810318383-e386cc2a3ccf"),
    gallery: [img("photo-1602810318383-e386cc2a3ccf")],
    featured: true,
  },
  {
    id: "m2",
    slug: "italian-wool-overcoat",
    name: "Italian Wool Overcoat",
    category: "men",
    type: "Outerwear",
    price: 365,
    description:
      "A single-breasted overcoat with a hidden placket and throat latch. Cut long, worn often.",
    fabric: "Italian wool cashmere blend",
    colors: ["Camel", "Navy", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    image: img("photo-1617127365659-c47fa864d8bc"),
    gallery: [img("photo-1617127365659-c47fa864d8bc")],
    featured: true,
    isNew: true,
  },
  {
    id: "m3",
    slug: "tapered-wool-trouser",
    name: "Tapered Wool Trouser",
    category: "men",
    type: "Bottoms",
    price: 135,
    description:
      "A tapered wool trouser with a comfortable stretch and unfinished hem so you can set the break.",
    fabric: "Super 120s wool",
    colors: ["Charcoal", "Stone", "Navy"],
    sizes: ["S", "M", "L", "XL"],
    image: img("photo-1473966968600-fa801b869a1a"),
    gallery: [img("photo-1473966968600-fa801b869a1a")],
  },
  {
    id: "m4",
    slug: "merino-rollneck",
    name: "Merino Rollneck",
    category: "men",
    type: "Knitwear",
    price: 118,
    description:
      "Fine-gauge merino with a clean rollneck. Layers under a coat or stands alone with tailored trousers.",
    fabric: "Extra-fine merino wool",
    colors: ["Navy", "Oat", "Black"],
    sizes: ["S", "M", "L", "XL"],
    image: img("photo-1617137968427-85924c800a22"),
    gallery: [img("photo-1617137968427-85924c800a22")],
    featured: true,
  },
  {
    id: "m5",
    slug: "suede-bomber",
    name: "Suede Bomber",
    category: "men",
    type: "Outerwear",
    price: 290,
    originalPrice: 340,
    description:
      "Soft suede with a ribbed collar and two-way zip. Lightweight enough for city evenings.",
    fabric: "Goat suede, viscose lining",
    colors: ["Tan", "Olive"],
    sizes: ["S", "M", "L", "XL"],
    image: img("photo-1591047139829-d91aecb6caea"),
    gallery: [img("photo-1591047139829-d91aecb6caea")],
    isNew: true,
  },
  {
    id: "m6",
    slug: "relaxed-linen-shirt",
    name: "Relaxed Linen Shirt",
    category: "men",
    type: "Shirts",
    price: 92,
    description:
      "A camp-collar linen shirt with a slightly oversized fit. Made for warm days and unbuttoned evenings.",
    fabric: "French linen",
    colors: ["White", "Sage", "Sand"],
    sizes: ["S", "M", "L", "XL"],
    image: img("photo-1603252109360-909baaf261c7"),
    gallery: [img("photo-1603252109360-909baaf261c7")],
  },
  {
    id: "m7",
    slug: "tailored-navy-blazer",
    name: "Tailored Navy Blazer",
    category: "men",
    type: "Tailoring",
    price: 275,
    description:
      "Unstructured navy blazer with patch pockets and a half-canvas chest. The one jacket that does everything.",
    fabric: "Wool hopsack",
    colors: ["Navy"],
    sizes: ["S", "M", "L", "XL"],
    image: img("photo-1593030761757-71fae45fa0e7"),
    gallery: [img("photo-1593030761757-71fae45fa0e7")],
    featured: true,
  },
  {
    id: "m8",
    slug: "selvedge-denim",
    name: "Selvedge Straight Denim",
    category: "men",
    type: "Bottoms",
    price: 148,
    description:
      "Straight-leg selvedge denim with a mid rise and clean finish. Rinsed once so it feels lived-in from day one.",
    fabric: "13oz Japanese selvedge denim",
    colors: ["Indigo"],
    sizes: ["S", "M", "L", "XL"],
    image: img("photo-1542272604-787c3835535d"),
    gallery: [img("photo-1542272604-787c3835535d")],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category?: Category | "all") {
  if (!category || category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeatured() {
  return products.filter((p) => p.featured);
}

export function getRelated(product: Product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
