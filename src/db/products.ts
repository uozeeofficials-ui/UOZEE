import type { Product } from "./types";

// Only a handful of real product photos exist for now, so they are reused
// across the catalog until each fragrance gets its own dedicated shoot.
const m1 = "/m1.png";
const m2 = "/m2.png";
const m3 = "/m3.png";
const m3_1 = "/m3.1.png";
const m3_2 = "/m3.2.png";
const m_1 = "/m.1.PNG";
const m_2 = "/m.2.png";
const m_3 = "/m.3.png";
const m_4 = "/m.4.png";
const w1 = "/w1.png";
const w1_1 = "/w1.1.jpeg";
const w1_2 = "/w1.2.jpeg";
const w2 = "/w2.jpeg";
const w3 = "/w3.jpeg";
const w_3 = "/w.3.png";
const w_4 = "/w.4.png";
const n1 = "/n1.PNG";
const n2 = "/n2.PNG";
const generic =
  "https://res.cloudinary.com/so8vztrp/image/upload/v1783270278/Gemini_Generated_Image_jgnykojgnykojgny_yepbsm.png";
const men3in2 = "/3in2.png";
const women3in1 = "/3in1.png";

export const products: Product[] = [
  {
    slug: "royal-oud-intense",
    title: "MIDNIGHT STORM",
    brand: "UOZEE",
    gender: "men",
    categorySlug: "men",
    price: 2199,
    compareAtPrice: 2999,
    currency: "PKR",
    sizeMl: 50,
    images: [m3, m3_1, m3_2],
    tagline: "A rich, full-bodied oud fragrance for confident men.",
    description:
      "Ultra premium high-concentration oud blend with rich oud and warm spices for a strong masculine trail.",
    notes: { top: "Oud & Saffron", heart: "Spices & Rare Wood", base: "Amber" },
    rating: 4.8,
    reviewCount: 132,
    isBestSeller: true,
  },
  {
    slug: "oceanic-breeze-marine",
    title: "BLUE PRESTIGE",
    brand: "UOZEE",
    gender: "men",
    categorySlug: "men",
    price: 2199,
    compareAtPrice: 2999,
    currency: "PKR",
    sizeMl: 50,
    images: [m2, m_3, m_4],
    tagline: "Fresh and invigorating for active men.",
    description:
      "Crisp sea breeze with bergamot and marine accords for an invigorating everyday fragrance.",
    notes: { top: "Bergamot & Lemon", heart: "Marine Accords", base: "Driftwood" },
    rating: 4.6,
    reviewCount: 84,
    isNew: true,
  },
  {
    slug: "noir-leather-legend",
    title: "ROYAL CROWN",
    brand: "UOZEE",
    gender: "men",
    categorySlug: "men",
    price: 2199,
    compareAtPrice: 2999,
    currency: "PKR",
    sizeMl: 50,
    images: [m1, m_1, m_2],
    tagline: "Bold and sophisticated for evening wear.",
    description:
      "Rich leather accord with smoked spices and dark woods for a bold evening scent.",
    notes: { top: "Spices & Cognac", heart: "Leather Accord", base: "Dark Woods" },
    rating: 4.9,
    reviewCount: 201,
    isBestSeller: true,
  },
  {
    slug: "onyx-tobacco-reserve",
    title: "MIDNIGHT STORM, BLUE PRETIGE, ROYAL CROWN",
    brand: "UOZEE",
    gender: "men",
    categorySlug: "men",
    price: 6399,
    compareAtPrice: 8999,
    currency: "PKR",
    sizeMl: 50,
    images: [men3in2, m1, m3, m2],
    tagline: "A smoky, velvety signature for the night.",
    description:
      "Sweet tobacco leaf wrapped in dark spice and vanilla for a warm, magnetic presence.",
    notes: { top: "Dark Spice", heart: "Tobacco Leaf", base: "Vanilla & Musk" },
    rating: 4.7,
    reviewCount: 58,
    isNew: true,
  },
  {
    slug: "velvet-rose-luxury",
    title: "PINK AURA",
    brand: "UOZEE",
    gender: "women",
    categorySlug: "women",
    price: 2199,
    compareAtPrice: 2999,
    currency: "PKR",
    sizeMl: 50,
    images: [w2, w_4, w_3],
    tagline: "Perfect for graceful, confident women.",
    description:
      "Delicate Damask rose with subtle vanilla petals for a graceful and feminine signature.",
    notes: { top: "Rose & Peony", heart: "Vanilla Petals", base: "Musk" },
    rating: 4.8,
    reviewCount: 176,
    isBestSeller: true,
  },
  {
    slug: "golden-amber-silk",
    title: "BLOOM ESSENCE",
    brand: "UOZEE",
    gender: "women",
    categorySlug: "women",
    price: 2199,
    compareAtPrice: 2999,
    currency: "PKR",
    sizeMl: 50,
    images: [w1, w1_1, w1_2],
    tagline: "Luxurious and sensual for special moments.",
    description:
      "Warm amber and silk musk layered with vanilla blossom for a luxurious feminine signature.",
    notes: { top: "Amber & Saffron", heart: "Silk Musk", base: "Vanilla Blossom" },
    rating: 4.9,
    reviewCount: 143,
    isBestSeller: true,
  },
  {
    slug: "lotus-petal-whisper",
    title: "VELVET VANILLA",
    brand: "UOZEE",
    gender: "women",
    categorySlug: "women",
    price: 2199,
    compareAtPrice: 2999,
    currency: "PKR",
    sizeMl: 50,
    images: [w3, n1, n2],
    tagline: "Airy and fresh for everyday elegance.",
    description:
      "A fresh floral blend of lotus, peony, and white musk for an airy feminine allure.",
    notes: { top: "Lotus & Peony", heart: "White Musk", base: "Soft Woods" },
    rating: 4.5,
    reviewCount: 67,
    isNew: true,
  },
  {
    slug: "blush-jasmine-bloom",
    title: "PINK AURA, BLOOM ESSENCE, VELVET VANILLA",
    brand: "UOZEE",
    gender: "women",
    categorySlug: "women",
    price: 6399,
    compareAtPrice: 8999,
    currency: "PKR",
    sizeMl: 50,
    images: [women3in1, w2, w3, w1],
    tagline: "A soft floral trail with a modern edge.",
    description:
      "Jasmine sambac and juicy peach settle into warm sandalwood for a romantic, modern bloom.",
    notes: { top: "Peach & Bergamot", heart: "Jasmine Sambac", base: "Sandalwood" },
    rating: 4.6,
    reviewCount: 41,
    isNew: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.slug !== product.slug && p.gender === product.gender)
    .slice(0, limit);
}

export function getBestSellers(limit = 4): Product[] {
  return products.filter((p) => p.isBestSeller).slice(0, limit);
}
