import type { HeroSlide } from "./types";

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-oud",
    eyebrow: "Signature Oud",
    heading: "MIDNIGHT STORM",
    subheading:
      "Rich oud and warm spices for a strong, unmistakable trail. Crafted for the confident man.",
    image: {
      desktop: "/bn2.png",
      tablet: "/m3.png",
      mobile: "/mb1.png",
    },
    ctaLabel: "Shop Men Session",
    ctaHref: "/shop?gender=men",
  },
  {
    id: "slide-rose",
    eyebrow: "Elegant Femininity",
    heading: "Velvet Rose Luxury",
    subheading:
      "Soft Damask rose, vanilla petals, and musky warmth create an unforgettable feminine trail.",
    image: {
      desktop: "/bn1.png",
      tablet: "/w2.jpeg",
      mobile: "/mb2.png",
    },
    ctaLabel: "Shop Women Session",
    ctaHref: "/shop?gender=women",
  },
  {
    id: "slide-marine",
    eyebrow: "Fresh Marine Aura",
    heading: "Oceanic Breeze Marine",
    subheading:
      "Crisp bergamot and marine accords bring a refreshing, active fragrance for everyday confidence.",
    image: {
      desktop: "/bn3.png",
      tablet: "/m2.png",
      mobile: "/mb3.PNG",
    },
    ctaLabel: "Explore Marine Notes",
    ctaHref: "/product/oceanic-breeze-marine",
  },
  {
    id: "slide-amber",
    eyebrow: "Warm Amber Glow",
    heading: "Golden Amber Silk",
    subheading:
      "Silk musk and vanilla blossom define a luxurious daytime fragrance with glowing amber warmth.",
    image: {
      desktop: "/bn4.png",
      tablet: "/w1.png",
      mobile: "/mb4.png",
    },
    ctaLabel: "Discover Amber Elegance",
    ctaHref: "/product/golden-amber-silk",
  },
];
