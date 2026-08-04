export type Gender = "men" | "women" | "unisex";

export type FragranceNotes = {
  top: string;
  heart: string;
  base: string;
};

export type Product = {
  slug: string;
  title: string;
  brand: string;
  gender: Gender;
  categorySlug: string;
  price: number;
  compareAtPrice?: number;
  currency: "PKR";
  sizeMl: number;
  images: string[];
  tagline: string;
  description: string;
  notes: FragranceNotes;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
};

export type Category = {
  slug: string;
  title: string;
  description: string;
  gender: Gender | "all";
  image: string;
};

export type ResponsiveImage = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type HeroSlide = {
  id: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  image: ResponsiveImage;
  ctaLabel: string;
  ctaHref: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
};

export type Reel = {
  id: string;
  videoSrc: string;
  caption: string;
  handle: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};
